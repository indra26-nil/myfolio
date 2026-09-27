import CopyButton from "./CopyButton";
import Reveal from "./Reveal";
import Section from "./Section";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact" meta="~/say-hello">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/50 p-8 sm:p-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative text-center">
            <p className="font-mono text-sm text-faint">
              <span className="text-green">$</span> ./say-hello --now
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-mono text-2xl leading-tight text-fg sm:text-4xl">
              Have something that needs building?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              I am open to full-time roles, contract work, and interesting open-source
              collaborations. The fastest way to reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-3 rounded-md border border-line-bright bg-bg-soft px-5 py-3 font-mono text-sm text-fg transition-colors hover:border-accent"
              >
                {site.email}
                <span className="text-faint transition-colors group-hover:text-accent">↗</span>
              </a>
              <CopyButton value={site.email} />
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line pt-8 font-mono text-sm">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted transition-colors hover:text-accent"
                  >
                    <span className="text-faint">{social.label}</span>{" "}
                    <span className="hidden sm:inline">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
