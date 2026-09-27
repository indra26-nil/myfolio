"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent transition-colors group-hover:text-green">$</span>
          <span className="text-fg">{site.handle}</span>
          <span className="text-faint transition-colors group-hover:text-accent">.dev</span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  active === link.id
                    ? "bg-accent/10 text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {active === link.id ? <span className="mr-1 text-accent">/</span> : null}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.resumeHref}
            className="hidden rounded-md border border-line-bright px-3 py-1.5 font-mono text-[13px] text-fg transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            résumé ↗
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-200 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[5px] h-px bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[10px] h-px bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile */}
      {open ? (
        <div className="border-t border-line bg-bg/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 border-b border-line/60 py-3 transition-colors ${
                    active === link.id ? "text-accent" : "text-muted"
                  }`}
                >
                  <span className="text-faint">/</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeHref}
                className="flex items-center gap-2 py-3 text-accent"
                onClick={() => setOpen(false)}
              >
                <span className="text-faint">/</span>
                résumé ↗
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
