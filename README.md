# rohitjain-portfolio

Personal portfolio for Rohit Jain — Engineering Manager / Principal Frontend Engineer.

Next.js (App Router) + TypeScript + Tailwind v4. No database, no CMS, no API routes:
the whole page is statically prerendered.

## Editing content

Everything you'd normally change lives in **`src/lib/content.ts`** — bios, the two-track
section, case studies, experience, skills. The components read from it and shouldn't need
touching for a copy change.

The bio has two versions, `bio.short` and `bio.long`, switched by the toggle in
`src/components/Bio.tsx`. Keep both current — the short one is what recruiters read.

## The résumé

`src/app/resume/page.tsx` renders the résumé from the `resume` export in
`src/lib/content.ts`, and `npm run resume` prints that route to
`public/RohitJain-Resume.pdf` with headless Chrome. One source, so the page and
the PDF can't drift apart — after a copy change, re-run it and commit the PDF.

```bash
npm run resume              # -> public/RohitJain-Resume.pdf
CHROME_BIN=/path/to/chrome npm run resume   # if Chrome isn't auto-detected
```

The same PDF is copied into `mylocalcloud/public/` on the home-lab site, which
links it from the hero and the footer.

## Motion and theme

- **Light is the default** and the system preference is deliberately ignored —
  dark is an opt-in via the toggle, stored in `localStorage`.
- `ScrollFX.tsx` publishes `--sy` / `--sp` on `<html>`; CSS does the parallax
  from there, so scrolling never triggers a React render.
- `Ambient.tsx` is the drifting background: six blurred shapes, each with its
  own `--depth`, over a parallaxed grid.
- `Cursor.tsx` draws the dot-and-ring pointer. It only arms on fine pointers.
- Everything above stands down under `prefers-reduced-motion` and in print.

## Local development

```bash
npm install
npm run dev     # http://localhost:3007
```

```bash
npm run build   # production build
npm start       # serve the build on :3007
```

## Deployment

Deployed on Vercel from the `main` branch — every push triggers a build, and pull requests
get preview URLs.

## Contact details

The page links email, GitHub, LinkedIn and the home lab. **No phone number appears
anywhere in `src/`, and none goes in the résumé** — `public/` is world-readable, so
the number stays off the web and email is the contact path. Keep it that way when
editing `content.ts`.
