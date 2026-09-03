"use client";

import { useEffect, useRef } from "react";

/**
 * A two-part pointer: a small ink dot that tracks the mouse exactly, and a ring
 * that eases in behind it. Over anything interactive the ring grows and fills,
 * so the "pointer" state is visible without the OS cursor doing the work.
 *
 * Bails out entirely for coarse pointers (touch) and reduced-motion users, in
 * which case the native cursor is left alone.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let frame = 0;

    const move = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      root.classList.add("cursor-on"); // first real move — until then, stay hidden
    };

    const tick = () => {
      // Ease the ring toward the dot; the lag is the whole effect.
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    // Interactive state, delegated — no per-element listeners to clean up.
    const interactive = "a, button, [role='button'], input, select, textarea, summary, [data-cursor='link']";
    const over = (e: PointerEvent) => {
      const hit = (e.target as Element | null)?.closest?.(interactive);
      root.classList.toggle("cursor-hot", Boolean(hit));
    };
    const leave = () => root.classList.remove("cursor-on");
    const down = () => root.classList.add("cursor-down");
    const up = () => root.classList.remove("cursor-down");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    document.addEventListener("pointerleave", leave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("pointerleave", leave);
      root.classList.remove("has-cursor", "cursor-on", "cursor-hot", "cursor-down");
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
