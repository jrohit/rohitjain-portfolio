"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};
const getSnapshot = () => (document.documentElement.classList.contains("dark") ? "dark" : "light");
/** Light is the default everywhere — this page is meant to feel like print. */
const getServerSnapshot = () => "light" as const;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked — the toggle still works for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      data-cursor="link"
      className="group relative grid h-9 w-9 place-items-center rounded-full border border-rule text-ink-faint transition-colors hover:border-accent hover:text-accent"
    >
      {/* Both icons are mounted and cross-faded, so the button never reflows. */}
      <SunIcon className="absolute h-[1.05rem] w-[1.05rem] rotate-0 scale-100 opacity-100 transition-all duration-300 dark:-rotate-90 dark:scale-50 dark:opacity-0" />
      <MoonIcon className="absolute h-[1.05rem] w-[1.05rem] rotate-90 scale-50 opacity-0 transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100" />
    </button>
  );
}
