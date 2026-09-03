import Bio from "@/components/Bio";
import Career from "@/components/Career";
import Masthead from "@/components/Masthead";
import Tracks from "@/components/Tracks";
import Work from "@/components/Work";

/**
 * Each block is wrapped in `.reveal` and given a staggered delay — ScrollFX
 * adds `.is-visible` as it scrolls in. Without JS the class does nothing and
 * the whole page renders at rest.
 */
const blocks = [Bio, Tracks, Work, Career];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
      <Masthead />
      <main className="flex flex-col gap-16 pt-14 sm:gap-20 sm:pt-16">
        {blocks.map((Block, i) => (
          <div
            key={i}
            className="reveal"
            style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
          >
            <Block />
          </div>
        ))}
      </main>
    </div>
  );
}
