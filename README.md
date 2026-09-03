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

The page links email, GitHub and LinkedIn only. There is deliberately no résumé PDF in
`public/` — the source document carries a phone number, and anything in `public/` is
world-readable. If you add one later, export a version with the phone number stripped.
