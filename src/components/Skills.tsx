import Reveal from "./Reveal";
import Section from "./Section";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills" meta="stack">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={index * 70}>
            <div className="group h-full rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:border-line-bright">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-sm uppercase tracking-widest text-fg">
                  {group.group}
                </h3>
                <span className="h-px flex-1 bg-line" />
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-bg-soft px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
