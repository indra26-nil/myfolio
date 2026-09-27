"use client";

import { useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger, in milliseconds. */
  delay?: number;
  /** Element to render — pick the right one so lists stay valid HTML. */
  as?: "div" | "li" | "article";
};

/**
 * Fades content up the first time it scrolls into view.
 *
 * The hidden state is applied from JS (not from SSR), so the page is
 * never blank if scripting fails — it just appears without animation.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");
    if (delay) el.style.transitionDelay = `${delay}ms`;

    // Anything already on screen should not wait for the observer.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      el.dataset.shown = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.shown = "true";
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Tag = as as ElementType;

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
