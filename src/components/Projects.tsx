import Reveal from "./Reveal";
import Section from "./Section";
import { projects } from "@/data/site";

export default function Projects() {
  if (projects.length === 0) {
    return (
      <Section id="projects" index="03" title="Projects" meta="0 repositories">
        <div className="rounded-xl border border-dashed border-line px-6 py-16 text-center">
          <p className="font-mono text-sm text-faint">$ ls ./projects</p>
          <p className="mt-3 text-base text-muted">Nothing here yet — check back soon.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="projects" index="03" title="Projects" meta={`${projects.length} repositories`}>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => {
          const wide = project.featured;
          return (
            <Reveal
              key={project.slug}
              delay={index * 60}
              className={wide ? "lg:col-span-2" : undefined}
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface/50 p-6 transition-colors hover:border-accent/50 sm:p-7">
                {/* corner glow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="mb-4 flex items-center justify-between gap-4 font-mono text-xs">
                  <span className="text-faint">
                    <span className="text-accent">~/</span>
                    {project.slug}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-faint">{project.year}</span>
                    <span className="rounded border border-green/30 px-1.5 py-0.5 text-green">
                      {project.status}
                    </span>
                  </span>
                </div>

                <h3 className="font-mono text-xl text-fg transition-colors group-hover:text-accent sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 leading-relaxed text-muted">{project.blurb}</p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-line bg-bg-soft px-2 py-0.5 font-mono text-[11px] text-faint"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="ml-auto flex items-center gap-4 font-mono text-xs">
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-muted transition-colors hover:text-accent"
                      >
                        source ↗
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-muted transition-colors hover:text-accent"
                      >
                        live ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
