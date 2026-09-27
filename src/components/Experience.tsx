import Reveal from "./Reveal";
import Section from "./Section";
import { education, experience } from "@/data/site";

export default function Experience() {
  return (
    <Section id="experience" index="04" title="Experience" meta="~/history.log">
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((job, index) => (
          <Reveal as="li" key={job.period} delay={index * 80} className="relative">
            <span className="absolute -left-[calc(1.5rem+3px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[calc(2rem+3px)]" />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-mono text-base text-fg sm:text-lg">{job.role}</h3>
              <span className="font-mono text-xs text-accent">{job.company}</span>
              <span className="ml-auto font-mono text-xs text-faint">{job.period}</span>
            </div>

            <p className="mt-1 font-mono text-xs text-faint">{job.location}</p>

            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>

      <div className="mt-14 space-y-5">
        {education.map((item) => (
          <Reveal key={item.degree}>
            <div className="grid gap-4 rounded-xl border border-line bg-surface/50 p-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-faint">
                  Education
                </p>
                <h3 className="mt-3 font-mono text-base text-fg">{item.degree}</h3>
              </div>
              <div className="font-mono text-xs">
                <p className="text-accent">{item.school}</p>
                <p className="mt-1 text-faint">{item.period}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
