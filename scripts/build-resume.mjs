/**
 * Prints the /resume route to public/RohitJain-Resume.pdf with headless Chrome.
 *
 *   npm run resume
 *
 * The route is the only source, so the PDF and the web page can't drift apart.
 * Neither carries a phone number — public/ is world-readable, so the number is
 * kept off the site on purpose; email is the contact path.
 *
 * Chrome is located in this order: $CHROME_BIN, the puppeteer cache, then
 * chromium on PATH.
 */
import { spawn } from "node:child_process";
import { access, mkdtemp, readdir, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "public", "RohitJain-Resume.pdf");
const PORT = process.env.RESUME_PORT ?? "3021";
const PAGE = `http://127.0.0.1:${PORT}/resume`;

const exists = (p) => access(p).then(() => true, () => false);

async function findChrome() {
  if (process.env.CHROME_BIN && (await exists(process.env.CHROME_BIN))) return process.env.CHROME_BIN;

  // puppeteer's cache holds chrome-headless-shell builds; take the newest.
  const cache = join(process.env.HOME ?? "", ".cache", "puppeteer", "chrome-headless-shell");
  if (await exists(cache)) {
    for (const build of (await readdir(cache)).sort().reverse()) {
      const bin = join(cache, build, "chrome-headless-shell-linux64", "chrome-headless-shell");
      if (await exists(bin)) return bin;
    }
  }

  for (const bin of ["/usr/bin/chromium-browser", "/usr/bin/chromium", "/usr/bin/google-chrome"]) {
    if (await exists(bin)) return bin;
  }
  throw new Error("No Chrome found. Set CHROME_BIN to a Chrome/Chromium binary.");
}

const run = (cmd, args, opts = {}) =>
  new Promise((res, rej) => {
    const child = spawn(cmd, args, { stdio: "inherit", ...opts });
    child.on("error", rej);
    child.on("exit", (code) => (code === 0 ? res() : rej(new Error(`${cmd} exited ${code}`))));
  });

async function waitForServer(timeoutMs = 90000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const r = await fetch(PAGE, { signal: AbortSignal.timeout(2000) });
      if (r.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server never became ready at ${PAGE}`);
}

const chrome = await findChrome();
console.log(`> chrome:  ${chrome}`);

if (!(await exists(join(root, ".next", "BUILD_ID")))) {
  console.log("> no build found - running `next build` first");
  await run("npx", ["next", "build"], { cwd: root });
}

console.log(`> serving on :${PORT}`);
const server = spawn("npx", ["next", "start", "-p", PORT], {
  cwd: root,
  stdio: "ignore",
  detached: true,
});

const profile = await mkdtemp(join(tmpdir(), "resume-chrome-"));
try {
  await waitForServer();
  console.log("> printing to PDF");
  await run(chrome, [
    "--headless",
    "--no-sandbox",
    "--disable-gpu",
    `--user-data-dir=${profile}`,
    "--no-pdf-header-footer",
    "--virtual-time-budget=8000",
    `--print-to-pdf=${OUT}`,
    PAGE,
  ]);
  const { size } = await stat(OUT);
  console.log(`OK ${OUT} (${(size / 1024).toFixed(0)} KB)`);
} finally {
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {
    /* already gone */
  }
  await rm(profile, { recursive: true, force: true });
}
