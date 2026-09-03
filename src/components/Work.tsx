import { work } from "@/lib/content";

/** Case studies. Each one carries what it taught, not just what it is. */
export default function Work() {
  return (
    <section id="selected" className="scroll-mt-20">
      <h2 className="label border-b border-rule pb-3">Selected work</h2>

      <div className="mt-7 space-y-10">
        {work.map((item) => (
          <article key={item.name} className="border-t border-rule-soft pt-6 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-[1.7rem] leading-tight">
                <a href={item.href} target="_blank" rel="noreferrer noopener" className="link">
                  {item.name}
                </a>
              </h3>
              <span className="label">{item.kind}</span>
            </div>

            <p className="mt-3 max-w-[62ch] text-pretty text-[1rem] leading-[1.7] text-ink-soft">
              {item.summary}
            </p>

            {/* The lesson is the part a hiring panel actually cares about. */}
            <p className="mt-4 max-w-[62ch] border-l-2 border-accent pl-4 text-pretty text-[0.95rem] italic leading-[1.68] text-ink-soft">
              {item.lesson}
            </p>

            <p className="mt-4 font-mono text-[0.7rem] tracking-wide text-ink-faint">
              {item.stack.join("  ·  ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
