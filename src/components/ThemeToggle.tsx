"use client";

import { useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};
const getSnapshot = () => (document.documentElement.classList.contains("dark") ? "dark" : "light");
const getServerSnapshot = () => "light" as const;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
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
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="label transition-colors hover:text-ink"
    >
      <span className="hidden dark:inline">Light</span>
      <span className="inline dark:hidden">Dark</span>
    </button>
  );
}
