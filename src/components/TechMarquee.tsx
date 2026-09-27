import { marqueeTech } from "@/data/site";

export default function TechMarquee() {
  const row = [...marqueeTech, ...marqueeTech];

  return (
    <div
      aria-hidden
      className="relative border-y border-line/70 bg-bg-soft/60 py-5"
    >
      <div className="edge-fade overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8">
          {row.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex shrink-0 items-center gap-8 font-mono text-sm text-faint"
            >
              <span className="flex items-center gap-2">
                <span className="text-accent/60">◆</span>
                {tech}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
