/**
 * The drifting background. Six soft shapes on a fixed layer, each floating on
 * its own loop and shifted by scroll (`--sy`) at its own rate — near shapes
 * move most, far ones barely at all, which is what reads as depth.
 *
 * Pure CSS and a server component: no JS beyond ScrollFX publishing `--sy`,
 * and the whole layer is hidden under prefers-reduced-motion and in print.
 */
const shapes = [
  { cls: "left-[6%] top-[12%] h-64 w-64", depth: 0.32, delay: "0s", dur: "19s", tint: "var(--accent)" },
  { cls: "right-[4%] top-[6%] h-80 w-80", depth: 0.18, delay: "-4s", dur: "24s", tint: "var(--accent)" },
  { cls: "left-[38%] top-[46%] h-72 w-72", depth: 0.24, delay: "-9s", dur: "27s", tint: "var(--glow-warm)" },
  { cls: "right-[12%] top-[62%] h-56 w-56", depth: 0.42, delay: "-2s", dur: "21s", tint: "var(--accent)" },
  { cls: "left-[10%] top-[78%] h-64 w-64", depth: 0.12, delay: "-14s", dur: "30s", tint: "var(--glow-warm)" },
  { cls: "right-[30%] top-[92%] h-72 w-72", depth: 0.28, delay: "-7s", dur: "23s", tint: "var(--accent)" },
];

export default function Ambient() {
  return (
    <div className="ambient" aria-hidden>
      {/* Faint paper grid, itself on a slow parallax — gives the drift something
          to move against, otherwise the shapes read as floating in nothing. */}
      <div className="ambient-grid" />

      {shapes.map((s, i) => (
        <span
          key={i}
          className={`ambient-blob ${s.cls}`}
          style={
            {
              "--depth": s.depth,
              "--tint": s.tint,
              animationDelay: s.delay,
              animationDuration: s.dur,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
