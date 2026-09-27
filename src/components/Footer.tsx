import { navLinks, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-faint">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-faint">
          © {year} {site.name} · built with next.js &amp; tailwind ·{" "}
          <span className="text-green">no trackers</span>
        </p>
      </div>
    </footer>
  );
}
