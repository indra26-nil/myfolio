import Typewriter from "./Typewriter";
import { site, stats, terminalLines } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 grid-field opacity-70" />
        <div className="absolute inset-0 bloom" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* availability */}
        <div className="mb-8 inline-flex animate-rise items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-green animate-beacon" />
          {site.availability}
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* left */}
          <div className="lg:col-span-7">
            <p className="mb-3 font-mono text-sm text-faint">
              <span className="text-accent">~</span>/{site.handle}
            </p>

            <h1 className="font-mono text-4xl font-medium leading-[1.05] tracking-tight text-fg sm:text-6xl">
              {site.name}
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-5 font-mono text-lg text-accent sm:text-xl">
              <span className="mr-2 text-faint">&gt;</span>
              <Typewriter words={site.roles} />
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {site.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-bg transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_-6px] hover:shadow-accent/50"
              >
                view projects
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-line-bright px-5 py-2.5 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent"
              >
                get in touch
              </a>
              <a
                href={site.resumeHref}
                className="inline-flex items-center gap-2 px-2 py-2.5 font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                résumé ↗
              </a>
            </div>

            <p className="mt-5 font-mono text-xs text-faint">
              {site.location} ·{" "}
              <a
                href={site.socials[0].href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-accent"
              >
                github ↗
              </a>{" "}
              · {site.email}
            </p>
          </div>

          {/* terminal */}
          <div className="animate-rise lg:col-span-5" style={{ animationDelay: "120ms" }}>
            <div className="overflow-hidden rounded-xl border border-line bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
              {/* title bar */}
              <div className="flex items-center gap-2 border-b border-line bg-elevated/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green/60" />
                <span className="ml-2 truncate font-mono text-xs text-faint">
                  {site.handle} — zsh
                </span>
              </div>

              {/* body */}
              <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
                {terminalLines.map((line, i) => (
                  <p key={i} className="flex gap-2">
                    {line.kind === "prompt" ? (
                      <>
                        <span className="select-none text-green">$</span>
                        <span className="text-fg">{line.text}</span>
                      </>
                    ) : (
                      <>
                        <span className="select-none text-transparent">$</span>
                        <span className="text-muted">{line.text}</span>
                      </>
                    )}
                  </p>
                ))}
                <p className="flex gap-2 pt-1">
                  <span className="select-none text-green">$</span>
                  <span className="inline-block h-4 w-1.5 animate-caret bg-accent" />
                </p>
              </div>

              {/* footer */}
              <div className="flex items-center justify-between border-t border-line bg-elevated/40 px-4 py-2.5 font-mono text-[11px] text-faint">
                <span>utf-8</span>
                <span>main</span>
              </div>
            </div>
          </div>
        </div>

        {/* stats */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse bg-bg-soft px-5 py-6 text-center"
            >
              <dt className="mt-1 font-mono text-xs text-faint">{stat.label}</dt>
              <dd className="font-mono text-2xl font-medium text-fg sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
