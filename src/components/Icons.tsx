import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/** Shared geometry for the stroked icons — keeps the set visually consistent. */
const stroked = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function GitHubIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.17 4.17 0 0 1 17.6 8.7c4 0 4.74 2.6 4.74 5.98V21h-4v-5.5c0-1.31-.02-3-1.85-3-1.86 0-2.14 1.44-2.14 2.91V21h-4V9Z" />
    </svg>
  );
}

export function MailIcon(p: P) {
  return (
    <svg {...stroked} {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.2 5.6a1.5 1.5 0 0 0 1.6 0L21 7" />
    </svg>
  );
}

/** Home lab — a small stack of racked boxes. */
export function ServerIcon(p: P) {
  return (
    <svg {...stroked} {...p}>
      <rect x="3" y="3.5" width="18" height="7" rx="2" />
      <rect x="3" y="13.5" width="18" height="7" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}

export function SunIcon(p: P) {
  return (
    <svg {...stroked} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(p: P) {
  return (
    <svg {...stroked} {...p}>
      <path d="M21 13.2A8.6 8.6 0 0 1 10.8 3a8.6 8.6 0 1 0 10.2 10.2Z" />
    </svg>
  );
}

export function DownloadIcon(p: P) {
  return (
    <svg {...stroked} {...p}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16" />
    </svg>
  );
}

export function ArrowUpRightIcon(p: P) {
  return (
    <svg {...stroked} {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function PrinterIcon(p: P) {
  return (
    <svg {...stroked} {...p}>
      <path d="M7 9V3.5h10V9" />
      <rect x="3" y="9" width="18" height="8" rx="2" />
      <path d="M7 14h10v6.5H7z" />
    </svg>
  );
}

/** Looked up by the `icon` key on each entry in `socials`. */
export const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
  server: ServerIcon,
};
