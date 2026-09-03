import type { Metadata } from "next";
import Link from "next/link";
import { DownloadIcon, socialIcons } from "@/components/Icons";
import { education, resume, site, skills, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — Résumé`,
  description: `Résumé of ${site.name}, ${site.role} and ${site.subrole}.`,
  alternates: { canonical: "/resume" },
  robots: { index: true, follow: true },
};

/**
 * The résumé, on the web and in print from one source.
 *
 * `npm run resume` prints this route to public/RohitJain-Resume.pdf with
 * headless Chrome, so what a recruiter downloads is exactly what they read
 * here — there is no second document to keep in sync, and no phone number in
 * either, because public/ is world-readable.
 *
 * The `resume-sheet` sizing below is what makes the PDF come out as clean A4.
 */
export default function ResumePage() {
  return (
    <div className="resume-sheet mx-auto max-w-[52rem] px-5 py-10 sm:px-10 sm:py-14">
      {/* Screen-only controls — stripped from the printed sheet. */}
      <div className="no-print mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-4">
        <Link href="/" className="label transition-colors hover:text-ink">
          ← Back to the portfolio
        </Link>
        <a
          href={site.resume}
          download
          className="inline-flex items-center gap-2 border border-ink px-4 py-2 text-[0.85rem] transition-colors hover:bg-ink hover:text-paper"
        >
          <DownloadIcon className="h-3.5 w-3.5" />
          Download PDF
        </a>
      </div>

      {/* ---- header ---- */}
      <header className="border-b-2 border-ink pb-5">
        <h1 className="font-display text-[2.8rem] leading-none sm:text-[3.4rem]">{site.name}</h1>
        <p className="mt-2 text-[1.05rem] text-ink-soft">
          {site.role} · {site.subrole}
        </p>

        <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.85rem] text-ink-soft">
          <li>{site.location}</li>
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            return (
              <li key={s.label}>
                <a href={s.href} className="inline-flex items-center gap-1.5 hover:text-accent">
                  <Icon className="h-3.5 w-3.5" />
                  {s.handle}
                </a>
              </li>
            );
          })}
        </ul>
      </header>

      {/* ---- summary ---- */}
      <Block title="Summary">
        <p className="text-pretty text-[0.95rem] leading-[1.65] text-ink-soft">{resume.summary}</p>
      </Block>

      {/* ---- experience ---- */}
      <Block title="Experience">
        <ol className="space-y-6">
          {resume.roles.map((job) => (
            <li key={`${job.company}-${job.period}`} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
                <h3 className="text-[1.02rem] font-semibold leading-snug">
                  {job.role} <span className="font-normal text-ink-soft">— {job.company}</span>
                </h3>
                <span className="label tabular-nums">{job.period}</span>
              </div>
              <p className="mt-0.5 text-[0.82rem] text-ink-faint">
                {job.context} · {job.place}
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-pretty text-[0.9rem] leading-[1.6] text-ink-soft before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Block>

      {/* ---- skills ---- */}
      <Block title="Skills">
        <dl className="space-y-2.5">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-0.5 sm:grid-cols-[7rem_1fr] sm:gap-5">
              <dt className="label pt-0.5">{s.group}</dt>
              <dd className="text-[0.88rem] leading-[1.6] text-ink-soft">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Block>

      {/* ---- selected projects ---- */}
      <Block title="Selected projects">
        <ul className="space-y-4">
          {resume.projects.map((proj) => (
            <li key={proj.name} className="break-inside-avoid">
              <h3 className="text-[0.98rem] font-semibold">
                <a href={proj.href} className="hover:text-accent">
                  {proj.name}
                </a>{" "}
                <span className="font-normal text-ink-faint">
                  {proj.href.replace(/^https?:\/\//, "")}
                </span>
              </h3>
              <p className="mt-1 text-pretty text-[0.88rem] leading-[1.6] text-ink-soft">
                {proj.detail}
              </p>
            </li>
          ))}
        </ul>
      </Block>

      {/* ---- education ---- */}
      <Block title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6">
          <div>
            <h3 className="text-[0.98rem] font-semibold">{education.degree}</h3>
            <p className="mt-0.5 text-[0.88rem] text-ink-soft">{education.school}</p>
          </div>
          <span className="label tabular-nums">{education.period}</span>
        </div>
      </Block>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 break-inside-avoid">
      <h2 className="label border-b border-rule pb-2">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
