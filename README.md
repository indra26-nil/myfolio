# Portfolio

A dark, terminal-inspired developer portfolio. Single page, fully static, no CMS —
every word on the site lives in one editable file.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Editing your content](#editing-your-content)
  - [The content file](#the-content-file)
  - [Adding a project](#adding-a-project)
  - [Adding social links](#adding-social-links)
  - [Adding education](#adding-education)
- [Customising the design](#customising-the-design)
  - [Colours](#colours)
  - [Fonts](#fonts)
  - [Animations](#animations)
  - [Sections and order](#sections-and-order)
- [Before you deploy](#before-you-deploy)
- [Deploying](#deploying)
- [Scripts](#scripts)
- [Accessibility and SEO](#accessibility-and-seo)
- [Troubleshooting](#troubleshooting)

---

## Features

- **Single-page layout** — hero, about, skills, projects, experience, contact
- **Typewriter hero** — the role line types and deletes itself in a loop
- **Terminal panel** — a fake `whoami` readout styled like a real shell
- **Scrolling tech marquee** — seamless CSS-only loop, fades at both edges
- **Scroll-spy navigation** — highlights the section you're currently in
- **Scroll-reveal animations** — content fades up as it enters the viewport
- **Experience timeline** — vertical rail with dated entries
- **Copy-to-clipboard** email button in the contact section
- **Responsive** — dedicated mobile nav with a slide-down menu
- **Generated OG image** — link previews are built from your data at build time
- **SEO built in** — metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`
- **Accessible** — skip link, semantic landmarks, real headings, visible focus rings
- **Respects `prefers-reduced-motion`** — animation is disabled, content stays visible
- **Zero runtime dependencies beyond React** — no UI kit, no icon pack, no analytics

## Tech stack

| Tool            | Version | Why                                                        |
| --------------- | ------- | ---------------------------------------------------------- |
| Next.js         | 16.3.6  | App Router, static prerendering, image/metadata APIs        |
| React           | 19.2.8  | Server Components by default                                |
| TypeScript      | ^5      | Types for the content file, so typos surface immediately   |
| Tailwind CSS    | ^4      | CSS-first config via `@theme`, no `tailwind.config.js`      |
| ESLint          | ^9      | `eslint-config-next` flat config, core-web-vitals rules     |

Fonts are `next/font` (Geist Sans + Geist Mono), self-hosted and preloaded — no
external font request, so no layout shift and works offline.

## Requirements

- **Node.js 20.9 or newer** (enforced via `engines` in `package.json`)
- npm 10+ (ships with Node 20)

Check your version:

```bash
node -v
```

## Getting started

```bash
# 1. install dependencies
npm install

# 2. start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit.

To verify everything is healthy before you deploy:

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run build       # production build
```

## Project structure

```
portfolio/
├── public/                    # static files served as-is
│   └── resume.pdf             # ← add your résumé here
├── src/
│   ├── app/
│   │   ├── layout.tsx         # <html>, fonts, metadata, skip link
│   │   ├── page.tsx           # composes the sections in order
│   │   ├── globals.css        # design tokens + custom utilities
│   │   ├── icon.svg           # favicon
│   │   ├── opengraph-image.tsx# OG image, generated at build time
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Nav.tsx            # client — scroll spy, mobile menu
│   │   ├── Hero.tsx           # server
│   │   ├── Typewriter.tsx     # client — typing effect
│   │   ├── TechMarquee.tsx    # server
│   │   ├── About.tsx          # server
│   │   ├── Skills.tsx         # server
│   │   ├── Projects.tsx       # server
│   │   ├── Experience.tsx     # server
│   │   ├── Contact.tsx        # server
│   │   ├── CopyButton.tsx     # client — clipboard
│   │   ├── Footer.tsx         # server
│   │   ├── Reveal.tsx         # client — scroll-in animation
│   │   └── Section.tsx        # shared section frame
│   └── data/
│       └── site.ts            # ← ALL CONTENT LIVES HERE
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

Only four components ship `'use client'`. Everything else renders as a Server
Component, which is why the page is fully static.

## Editing your content

### The content file

**`src/data/site.ts` is the only file you need to touch for content changes.**
Every export maps to a visible part of the page:

| Export            | Controls                                                |
| ----------------- | ------------------------------------------------------- |
| `site`            | Name, roles, tagline, summary, email, location, status  |
| `socials`         | Links in the contact section and the hero               |
| `navLinks`        | Nav items and the scroll-spy order                      |
| `terminalLines`   | The `whoami` output in the hero terminal                |
| `stats`           | The four numbers under the hero                         |
| `marqueeTech`     | The scrolling tech strip                                |
| `skills`          | The skill groups                                        |
| `projects`        | Project cards (`featured: true` spans the full width)   |
| `experience`      | Timeline entries                                        |
| `education`       | Education cards                                         |

Types (`Social`, `Project`) are declared at the top of the same file, so
TypeScript will flag a misspelled field the moment you save.

### Adding a project

Append an object to the `projects` array in `src/data/site.ts`:

```ts
export const projects: Project[] = [
  {
    slug: "my-project",              // shown as ~/my-project, must be unique
    title: "My Project",
    blurb: "One or two sentences on what it does and why it exists.",
    stack: ["Next.js", "PostgreSQL"], // rendered as tags
    year: "2026",
    status: "Live",                  // Live / Open source / In progress
    repo: "https://github.com/you/my-project",   // optional
    demo: "https://my-project.dev",              // optional
    featured: true,                  // true = card spans the full width
  },
];
```

Set `featured: true` on at most one or two projects — every featured card takes a
full row, so marking all of them just makes a long single column.

If the array is empty, the section renders a small "nothing here yet" placeholder
rather than an empty box, so the page never looks broken.

### Adding social links

```ts
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/you" },
  { label: "LinkedIn", href: "https://linkedin.com/in/you" },
  // `handle` is optional and shown on larger screens:
  { label: "X", handle: "@you", href: "https://x.com/you" },
];
```

`label` is required; `handle` is optional. The first entry is used for the
"github ↗" link in the hero, so keep GitHub first.

### Adding education

```ts
export const education = [
  {
    degree: "B.Tech, Electronics and Communication Engineering",
    school: "Hooghly Engineering & Technology College",
    period: "2024 — 2028",
    note: "Currently studying — coursework in signals and embedded systems.",
  },
];
```

## Customising the design

### Colours

All colours are CSS custom properties in the `@theme` block at the top of
`src/app/globals.css`. Change them there and the whole site re-themes.

```css
@theme {
  --color-bg: #08090b;         /* page background */
  --color-bg-soft: #0a0c0f;   /* subtle raised background */
  --color-surface: #0e1014;   /* card background */
  --color-elevated: #14171d;  /* card headers, hover states */
  --color-line: #1d2129;      /* borders, grid lines */
  --color-line-bright: #2b313c;
  --color-fg: #e7eaf0;        /* primary text */
  --color-muted: #8b93a1;     /* secondary text */
  --color-faint: #5c6472;     /* labels, meta */
  --color-accent: #22d3ee;    /* primary accent — links, highlights */
  --color-green: #4ade80;     /* status dots, "live" badges */
  --color-amber: #fbbf24;
  --color-violet: #a78bfa;
}
```

Because they are real theme tokens, Tailwind generates every matching utility
automatically — `--color-accent` gives you `text-accent`, `bg-accent`,
`border-accent`, and opacity variants like `bg-accent/10`.

### Fonts

Fonts load in `src/app/layout.tsx`:

```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
```

To use a different family, import it the same way and point the `--font-sans` /
`--font-mono` tokens in `globals.css` at the new variable.

### Animations

Four keyframes are declared in the `@theme` block of `globals.css`:

| Token                | Used by                    | What it does                     |
| -------------------- | -------------------------- | -------------------------------- |
| `--animate-marquee`  | `TechMarquee`              | horizontal scroll loop           |
| `--animate-caret`    | `Hero`, `Typewriter`       | blinking block cursor            |
| `--animate-beacon`   | `Hero`                     | pulsing green status dot         |
| `--animate-rise`     | `Hero`                     | fade-and-slide in                |

To disable one, remove the class or override the token with
`--animate-<name>: none`.

### Sections and order

Reorder the page in `src/app/page.tsx`:

```tsx
<main id="main">
  <Hero />
  <TechMarquee />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
</main>
```

To rename a section, change its `id` in the component **and** the matching entry
in `navLinks` — the nav links and scroll spy key off those ids.

> **Note:** `Projects` and `Experience` currently ship commented out in
> `page.tsx`, so the live page is Hero → Marquee → About → Skills → Contact.
> Until you re-enable them, two things look slightly off:
>
> - The nav still lists `#projects` and `#experience`, so those two links scroll
>   nowhere. Remove them from `navLinks` in `site.ts` while they're hidden.
> - Section numbers are hardcoded per component (`03`, `04`, `05`), so the
>   numbering jumps from `02` to `05`. Re-enable the sections, or renumber them in
>   each component's `<Section index="…">` prop.
>
> `projects` is an empty array, so re-enabling `<Projects />` shows a small
> "nothing here yet" placeholder rather than an empty box.

## Before you deploy

A short checklist. The first three are the ones that are easy to miss.

- [ ] **Domain.** Replace `https://example.com` in `src/app/layout.tsx`,
      `src/app/sitemap.ts`, and `src/app/robots.ts`.
- [ ] **Résumé.** Add `public/resume.pdf`, or point `site.resumeHref` elsewhere.
      Until then the résumé links 404.
- [ ] **Links.** Replace the placeholder GitHub/LinkedIn/X URLs and any
      `https://example.com` entries in `projects`.
- [ ] **Content.** Give `site.summary` and `experience` a read-through — if you're
      early in your career, the default "Senior Engineer" framing and the
      "Years shipping" stat may not be the story you want to tell.
- [ ] **Favicon.** `src/app/icon.svg` ships a `>` prompt glyph; edit it or delete
      it to fall back to the browser default.

## Deploying

Any host that runs Next.js works. With Vercel there is nothing to configure:

```bash
npx vercel deploy
```

Netlify and Cloudflare Pages also work — use `npm run build`, then publish `.next`
with the Next.js adapter.

The whole site prerenders to static HTML at build time, so it will run on any
static host, a CDN, or a Raspberry Pi.

## Scripts

| Command              | What it does                                     |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Dev server with hot reload on port 3000          |
| `npm run build`      | Production build (also generates the OG image)   |
| `npm start`          | Serve the production build                       |
| `npm run lint`       | ESLint                                           |
| `npm run typecheck`  | `tsc --noEmit` — types only, no output files     |

## Accessibility and SEO

Built in, no plugin needed:

- **Skip-to-content link**, first thing in the tab order
- **Semantic landmarks** — one `<main>`, `<header>`, `<footer>`, `<nav>`,
  `<section>` per area
- **Real headings** — one `<h1>`, an `<h2>` per section
- **Visible focus rings** via `:focus-visible`
- **`prefers-reduced-motion`** — the typewriter renders static, the marquee stops,
  and scroll-reveals are skipped
- **No hidden content** — reveal animations are applied by JavaScript, so if
  scripting fails everything is still readable
- **Metadata** — title template, description, keywords, Open Graph, Twitter card,
  and a build-time-generated OG image

## Troubleshooting

**The page is blank or unstyled.**
Check that `src/app/globals.css` still starts with `@import "tailwindcss";` — the
whole design system depends on it.

**My content changes don't show up.**
Confirm you edited `src/data/site.ts` and that the export isn't commented out.
`npm run typecheck` will point at any export that doesn't exist.

**The résumé link 404s.**
Add `public/resume.pdf`, or change `site.resumeHref`.

**Favicon or OG image look wrong in a preview.**
Both are generated at build time. Run `npm run build` and open the production
build — some social scrapers cache aggressively, so re-share the link to bust it.

**A build fails on a machine with no network.**
`next/font/google` downloads fonts at build time. Either build with network
access, or swap the imports in `src/app/layout.tsx` for a system font stack.
