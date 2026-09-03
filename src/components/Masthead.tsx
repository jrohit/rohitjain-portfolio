import Image from "next/image";
import Link from "next/link";
import { site, headline, socials } from "@/lib/content";
import { DownloadIcon, socialIcons } from "./Icons";
import ThemeToggle from "./ThemeToggle";

/** The nameplate. Set like a print masthead: rules above and below, name huge. */
export default function Masthead() {
  return (
    <header className="pt-8 sm:pt-12">
      {/* running head */}
      <div className="flex items-center justify-between gap-4 border-b border-rule pb-3">
        <span className="label">{site.location}</span>

        <div className="flex items-center gap-1.5">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon];
            const external = s.href.startsWith("http");
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                title={`${s.label} — ${s.handle}`}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="grid h-9 w-9 place-items-center rounded-full border border-transparent text-ink-faint transition-colors hover:border-rule hover:text-accent"
              >
                <Icon className="h-[1.05rem] w-[1.05rem]" />
              </a>
            );
          })}
          <span className="mx-1 h-5 w-px bg-rule" aria-hidden />
          <ThemeToggle />
        </div>
      </div>

      {/* nameplate */}
      <div className="rise border-b border-rule py-10 sm:py-14">
        <h1
          className="parallax font-display text-[3.4rem] leading-[0.9] tracking-[-0.015em] sm:text-[5.5rem] lg:text-[6.75rem]"
          style={{ "--depth": 0.04 } as React.CSSProperties}
        >
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
      <div className="reveal grid gap-8 border-b border-rule py-10 sm:grid-cols-[160px_1fr] sm:gap-12">
        <Image
          src={site.photo}
          alt={site.name}
          width={600}
          height={800}
          priority
          sizes="160px"
          className="parallax h-52 w-40 object-cover object-top"
          style={{ "--depth": 0.09 } as React.CSSProperties}
        />

        <div className="self-center">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 sm:max-w-lg">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              const external = s.href.startsWith("http");
              return (
                <div key={s.label}>
                  <dt className="label flex items-center gap-1.5">
                    <Icon className="h-3 w-3" />
                    {s.label}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem]">
                    <a
                      href={s.href}
                      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                      className="link break-all"
                    >
                      {s.handle}
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>

          {/* Résumé: read it in the browser, or take the PDF. */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 border border-ink px-4 py-2 text-[0.85rem] transition-colors hover:bg-ink hover:text-paper"
            >
              Read the résumé
            </Link>
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 border border-rule px-4 py-2 text-[0.85rem] text-ink-soft transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              PDF
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
