import Image from "next/image";
import { site, headline } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

/** The nameplate. Set like a print masthead: rules above and below, name huge. */
export default function Masthead() {
  return (
    <header className="pt-8 sm:pt-12">
      {/* running head */}
      <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
        <span className="label">{site.location}</span>
        <ThemeToggle />
      </div>

      {/* nameplate */}
      <div className="rise border-b border-rule py-10 sm:py-14">
        <h1 className="font-display text-[3.4rem] leading-[0.9] tracking-[-0.015em] sm:text-[5.5rem] lg:text-[6.75rem]">
          {site.name}
        </h1>
        <p
          className="rise mt-6 max-w-[34ch] text-pretty font-display text-[1.45rem] italic leading-[1.3] text-ink-soft sm:text-[1.85rem]"
          style={{ "--rise-delay": "120ms" } as React.CSSProperties}
        >
          {site.thesis}
        </p>
        <p
          className="rise mt-6 label"
          style={{ "--rise-delay": "220ms" } as React.CSSProperties}
        >
          {site.role} · {site.subrole}
        </p>
      </div>

      {/* the headline result — the strongest thing on the page, so it goes first */}
      <div
        className="rise grid gap-8 border-b border-rule py-10 sm:grid-cols-[auto_1fr] sm:gap-12 sm:py-12"
        style={{ "--rise-delay": "300ms" } as React.CSSProperties}
      >
        <div className="flex items-baseline gap-3 sm:flex-col sm:gap-1">
          <span className="font-display text-[4.5rem] leading-[0.8] text-accent sm:text-[6rem]">
            {headline.metric}
          </span>
          <span className="label sm:mt-3">{headline.claim}</span>
        </div>
        <p className="max-w-[52ch] self-center text-pretty text-[1.06rem] leading-[1.7] text-ink-soft">
          {headline.context}
        </p>
      </div>

      {/* portrait + contact rail */}
      <div className="grid gap-8 border-b border-rule py-10 sm:grid-cols-[160px_1fr] sm:gap-12">
        <Image
          src={site.photo}
          alt={site.name}
          width={600}
          height={800}
          priority
          sizes="160px"
          className="h-52 w-40 object-cover object-top"
        />
        <dl className="grid grid-cols-2 gap-x-8 gap-y-5 self-center sm:max-w-lg">
          <div>
            <dt className="label">Email</dt>
            <dd className="mt-1.5 text-[0.95rem]">
              <a href={`mailto:${site.email}`} className="link break-all">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="label">GitHub</dt>
            <dd className="mt-1.5 text-[0.95rem]">
              <a href={site.github} target="_blank" rel="noreferrer noopener" className="link">
                @jrohit
              </a>
            </dd>
          </div>
          <div>
            <dt className="label">LinkedIn</dt>
            <dd className="mt-1.5 text-[0.95rem]">
              <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className="link">
                connectwithrohit
              </a>
            </dd>
          </div>
          <div>
            <dt className="label">Home lab</dt>
            <dd className="mt-1.5 text-[0.95rem]">
              <a href={site.lab} target="_blank" rel="noreferrer noopener" className="link">
                mylocalcloud.in
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
