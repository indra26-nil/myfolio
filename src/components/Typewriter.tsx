"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

/**
 * Cycles through a list of phrases, typing and deleting like a shell.
 * Users who prefer reduced motion get the first phrase, rendered statically.
 */
export default function Typewriter({
  words,
  className,
}: {
  words: readonly string[];
  className?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const word = words[index % words.length] ?? "";
    const holding = !deleting && text === word;
    const switching = deleting && text === "";

    // Every state change happens inside the timer, never in the effect body.
    const timer = setTimeout(
      () => {
        if (holding) {
          setDeleting(true);
        } else if (switching) {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
        } else {
          setText(deleting ? word.slice(0, -1) : word.slice(0, text.length + 1));
        }
      },
      holding ? 1700 : switching ? 120 : deleting ? 40 : 85,
    );

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, reducedMotion]);

  const visible = reducedMotion ? (words[0] ?? "") : text;

  return (
    <span className={className}>
      {visible}
      <span
        aria-hidden
        className="ml-0.5 inline-block w-[0.55em] translate-y-[0.1em] animate-caret text-accent"
      >
        ▊
      </span>
    </span>
  );
}
