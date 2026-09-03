import { education, experience, skills, site, socials } from "@/lib/content";
import { DownloadIcon, socialIcons } from "./Icons";

export default function Career() {
  return (
    <>
      <section id="experience" className="scroll-mt-20">
        <h2 className="label border-b border-rule pb-3">Experience</h2>

        <ol className="mt-2">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-1 border-b border-rule-soft py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
            >
              <span className="label pt-1 tabular-nums">{job.period}</span>
              <div>
                <h3 className="text-[1.02rem] font-semibold leading-snug">{job.role}</h3>
                <p className="mt-1 text-[0.93rem] text-ink-soft">
                  {job.company}
                  <span className="text-ink-faint"> · {job.context} · {job.place}</span>
                </p>
              </div>
            </li>
          ))}
          <li className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
            <span className="label pt-1 tabular-nums">{education.period}</span>
            <div>
              <h3 className="text-[1.02rem] font-semibold leading-snug">{education.degree}</h3>
              <p className="mt-1 text-[0.93rem] text-ink-soft">{education.school}</p>
            </div>
          </li>
        </ol>
      </section>

      <section id="skills" className="scroll-mt-20">
        <h2 className="label border-b border-rule pb-3">Skills</h2>

        <dl className="mt-2">
          {skills.map((s) => (
            <div
              key={s.group}
              className="grid gap-1 border-b border-rule-soft py-4 last:border-b-0 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
            >
              <dt className="label pt-1">{s.group}</dt>
              <dd className="text-[0.95rem] leading-[1.7] text-ink-soft">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer id="contact" className="scroll-mt-20 border-t-2 border-ink pt-10">
        <h2 className="max-w-[20ch] text-balance font-display text-[2.6rem] leading-[1.05] sm:text-[3.4rem]">
          Let&rsquo;s talk about the team you&rsquo;re building.
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block font-display text-[1.5rem] text-accent underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-70"
        >
          {site.email}
        </a>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          {socials
            .filter((s) => s.icon !== "mail")
            .map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2 text-[0.85rem] text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                  {s.label}
                </a>
              );
            })}
          <a
            href={site.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2 text-[0.85rem] text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            <DownloadIcon className="h-4 w-4" />
            Résumé
          </a>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-rule pt-5">
          <span className="label">© {new Date().getFullYear()} {site.name}</span>
          <span className="label">Built with Next.js · deployed on Vercel</span>
        </div>
      </footer>
    </>
  );
}
