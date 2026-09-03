"use client";

import { useState } from "react";
import { bio } from "@/lib/content";

/**
 * Two bios behind one toggle. Recruiters skim `default`; a hiring panel reads
 * `long`. Serving both from one block of copy is what makes most portfolio
 * writing mushy, so this serves neither compromise.
 */
export default function Bio() {
  const [mode, setMode] = useState<"short" | "long">("short");
  const paragraphs = mode === "short" ? bio.short : bio.long;

  return (
    <section id="about" className="scroll-mt-20">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-3">
        <h2 className="label">About</h2>
        <div
          className="flex items-baseline gap-1"
          role="group"
          aria-label="Bio length"
        >
          {(["short", "long"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
              className={`label px-2 py-1 transition-colors ${
                mode === m
                  ? "text-ink underline decoration-accent decoration-2 underline-offset-4"
                  : "hover:text-ink-soft"
              }`}
            >
              {m === "short" ? "Short" : "Long"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 space-y-5 text-[1.06rem] leading-[1.72] text-ink-soft">
        {paragraphs.map((p, i) => (
          <p key={`${mode}-${i}`} className="text-pretty">
            {/* First line of the short bio carries the weight of a standfirst. */}
            {mode === "short" && i === 0 ? (
              <span className="text-ink">{p}</span>
            ) : (
              p
            )}
          </p>
        ))}
      </div>
    </section>
  );
}
