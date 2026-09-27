"use client";

import { useState } from "react";

export default function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("error");
    }
    setTimeout(() => setState("idle"), 1800);
  }

  const text =
    state === "copied" ? "copied ✓" : state === "error" ? "press ⌘C" : label;

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
        state === "copied"
          ? "border-green/50 text-green"
          : state === "error"
            ? "border-amber/50 text-amber"
            : "border-line-bright text-muted hover:border-accent hover:text-accent"
      }`}
    >
      {text}
    </button>
  );
}
