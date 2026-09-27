import Reveal from "./Reveal";
import Section from "./Section";
import { site } from "@/data/site";

export default function About() {
  return (
    <Section id="about" index="01" title="About" meta="~/about.md">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-fg sm:text-xl">{site.summary}</p>

          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              Most of my work sits where the backend meets the person using the product. I design
              APIs that stay stable under load, keep the front end fast on a bad connection, and
              write the tests that let everyone else sleep at night.
            </p>
            <p>
              When I am not shipping, I am usually reading a systems paper, contributing to an
              open-source project, or explaining distributed consensus badly to anyone who will
              listen.
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={100}>
          <div className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
            {[
              { label: "focus", value: "backend · infra · DX" },
              { label: "currently", value: "building agent tooling" },
              { label: "reading", value: "Designing Data-Intensive Applications" },
              { label: "asking", value: "how do you test time?" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 bg-surface px-5 py-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="font-mono text-xs text-accent sm:w-24 sm:shrink-0">
                  {row.label}
                </span>
                <span className="font-mono text-sm text-muted">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-line p-5">
            <p className="font-mono text-xs text-faint">$ whoami</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.name} — engineer based in {site.location}. Currently{" "}
              <span className="text-fg">{site.availability.toLowerCase()}</span>, and open to
              collaborations, contract work, and interesting problems.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
