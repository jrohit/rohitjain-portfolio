import { tracks } from "@/lib/content";

/**
 * Two columns, deliberately equal weight. Most EM portfolios pick one and end
 * up reading as either non-technical or non-managerial.
 */
export default function Tracks() {
  const columns = [tracks.led, tracks.built];

  return (
    <section id="work" className="scroll-mt-20">
      <h2 className="label border-b border-rule pb-3">Two tracks</h2>

      <div className="mt-7 grid gap-10 md:grid-cols-2 md:gap-12">
        {columns.map((col) => (
          <div key={col.label}>
            <div className="flex items-baseline gap-4">
              <h3 className="font-display text-[2rem] leading-none text-accent">{col.label}</h3>
              <p className="text-[0.92rem] leading-snug text-ink-faint">{col.blurb}</p>
            </div>

            <ul className="mt-6 space-y-6">
              {col.items.map((item) => (
                <li key={item.title} className="border-t border-rule-soft pt-4">
                  <h4 className="text-[1.02rem] font-semibold leading-snug">{item.title}</h4>
                  <p className="mt-1.5 text-pretty text-[0.95rem] leading-[1.65] text-ink-soft">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
