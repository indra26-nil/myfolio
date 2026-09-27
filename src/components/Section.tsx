import type { ReactNode } from "react";

/**
 * Shared section frame: index number, title, hairline rule, content.
 */
export default function Section({
  id,
  index,
  title,
  meta,
  children,
}: {
  id: string;
  index: string;
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 border-t border-line/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="mb-12 sm:mb-16">
          <div className="flex items-baseline gap-3 font-mono text-xs tracking-widest text-faint">
            <span className="text-accent">{index}</span>
            <span>/</span>
            <h2>{title.toUpperCase()}</h2>
            {meta ? <span className="ml-auto hidden text-faint sm:block">{meta}</span> : null}
          </div>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-accent/60 via-line to-transparent" />
        </header>

        {children}
      </div>
    </section>
  );
}
