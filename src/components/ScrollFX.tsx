"use client";

import { useEffect } from "react";

/**
 * One client component for every scroll-driven effect on the page:
 *
 *  - publishes `--sy` (scroll offset in px) and `--sp` (0→1 page progress) on
 *    <html>, so CSS can drive parallax without a React render per frame;
 *  - reveals anything with class `reveal` as it scrolls into view.
 *
 * Everything else on the page stays a server component.
 */
export default function ScrollFX() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- parallax ---------------------------------------------------------
    let frame = 0;
    const publish = () => {
      frame = 0;
      const max = document.body.scrollHeight - window.innerHeight;
      root.style.setProperty("--sy", `${window.scrollY}px`);
      root.style.setProperty("--sp", `${max > 0 ? window.scrollY / max : 0}`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(publish);
    };

    if (!reduced) {
      publish();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    }

    // ---- scroll reveal ----------------------------------------------------
    const revealables = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let observer: IntersectionObserver | undefined;

    if (reduced) {
      revealables.forEach((el) => el.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // reveal once, then stop watching
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
      );
      revealables.forEach((el) => observer!.observe(el));

      // Safety net: anything already on screen shows even if it never fires an
      // intersection — a blank page is a far worse failure than no animation.
      requestAnimationFrame(() => {
        for (const el of revealables) {
          const box = el.getBoundingClientRect();
          if (box.top < window.innerHeight && box.bottom > 0) {
            el.classList.add("is-visible");
            observer!.unobserve(el);
          }
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return null;
}
