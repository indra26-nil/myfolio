/* ==================================================================
 *  START HERE — this file holds 100% of the site's content.
 *  Swap the placeholder values for your own details and the whole
 *  site updates. No other file needs to be touched.
 * ================================================================== */

export type Social = {
  label: string;
  handle?: string;
  href: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/indra26-nil" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/indranil-laha/" },
  { label: "Twitter", href: "https://x.com/nil_0_7" },
];

export const site = {
  name: "Indranil Laha",
  handle: "nil09",
  roles: [
    "Full-Stack Engineer",
    "Backend Developer",
    "API & Systems Design",
    "Open-Source Contributor",
  ],
  tagline: "I build fast, reliable software that holds up in production.",
  summary:
    "Engineer focused on backend systems and developer tooling. I like boring technology, sharp interfaces, and shipping things that stay up. Currently turning coffee into distributed systems.",
  location: "India · GMT+5:30",
  email: "indranillaha4@gmail.com",
  availability: "Available for work",
  resumeHref: "/resume.pdf",

  socials,
};

/** Anchors used by the nav and the scroll spy. */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

/** Hero terminal panel. `$` lines are prompts, the rest is output. */
export const terminalLines = [
  { kind: "prompt" as const, text: "whoami --verbose" },
  { kind: "out" as const, text: "name    Indranil Laha" },
  { kind: "out" as const, text: "role    Full-Stack Engineer" },
  { kind: "out" as const, text: "stack   TypeScript · Node · Python" },
  { kind: "out" as const, text: "focus   distributed systems" },
  { kind: "out" as const, text: "status  open to work" },
];

export const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "24", label: "Projects built" },
  { value: "40k+", label: "Users served" },
  { value: "99.9%", label: "Uptime target" },
];

/** Duplicated by the marquee so the loop is seamless. */
export const marqueeTech = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  // "Go",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "Docker",
  "AWS",
  // "Terraform",
  // "Prisma",
  "Tailwind",
  // "Kafka",
  "GitHub Actions",
  // "gRPC",
];

export const skills = [
  {
    group: "Languages",
    items: ["C","C++","Java","JavaScript", "Python"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand", "Vite"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Django", "GraphQL", "gRPC"],
  },
  {
    group: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    group:"Others",
    items:["MatLab","Git & Github","Docker","CI/CD","Kubernetes","AWS"]
  }
];

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  stack: string[];
  year: string;
  status: string;
  repo?: string;
  demo?: string;
  featured?: boolean;
};

/* Projects you list here are rendered as cards. Keep the commented-out
   examples below as a reference for the shape, then add your own. */
export const projects: Project[] = [];

// export const projects = [
//   {
//     slug: "ledgerly",
//     title: "Ledgerly",
//     blurb:
//       "Personal-finance dashboard that imports transactions from any bank via Plaid and turns them into readable, actionable charts.",
//     stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
//     year: "2025",
//     status: "Live",
//     repo: "https://github.com",
//     demo: "https://example.com",
//     featured: true,
//   },
//   {
//     slug: "promptlab",
//     title: "PromptLab",
//     blurb:
//       "Open-source playground for comparing LLM prompts side by side. Scores every run on latency, cost, and output quality.",
//     stack: ["Python", "FastAPI", "React", "Redis", "Docker"],
//     year: "2025",
//     status: "Live",
//     repo: "https://github.com",
//     demo: "https://example.com",
//     featured: true,
//   },
//   {
//     slug: "traffic-lens",
//     title: "traffic-lens",
//     blurb:
//       "Real-time analytics pipeline ingesting clickstream events and serving sub-second dashboards for 2M+ monthly users.",
//     stack: ["Go", "Kafka", "ClickHouse", "React", "Grafana"],
//     year: "2024",
//     status: "Live",
//     repo: "https://github.com",
//     demo: "https://example.com",
//     featured: false,
//   },
//   {
//     slug: "shortlink",
//     title: "shortlink",
//     blurb:
//       "Tiny URL shortener with edge redirects, per-link analytics, and QR codes. Self-hosted in under 100 lines of Go.",
//     stack: ["Go", "SQLite", "Cloudflare Workers"],
//     year: "2024",
//     status: "Open source",
//     repo: "https://github.com",
//     demo: "https://example.com",
//     featured: false,
//   },
//   {
//     slug: "ml-notes",
//     title: "ML Notes",
//     blurb:
//       "Hands-on notes from a machine-learning series: papers summarised, code reproduced, and the maths written out properly.",
//     stack: ["Python", "Jupyter", "PyTorch", "scikit-learn"],
//     year: "2024",
//     status: "In progress",
//     repo: "https://github.com",
//     demo: "https://example.com",
//     featured: false,
//   },
//   {
//     slug: "dsa-workbench",
//     title: "DSA Workbench",
//     blurb:
//       "Interactive visualiser for data-structure algorithms. Every operation is animated step by step with a complexity readout.",
//     stack: ["TypeScript", "React", "Canvas", "Vite"],
//     year: "2023",
//     status: "Open source",
//     repo: "https://github.com",
//     demo: "https://example.com",
//     featured: false,
//   },
// ];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Company · Product Engineering",
    period: "2024 — Present",
    location: "Remote",
    points: [
      "Rebuilt the core API layer, cutting p95 response time from 840ms to 120ms.",
      "Designed the event pipeline now handling 12M messages a day.",
      "Mentored three junior engineers and introduced the on-call runbook.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Company · Backend",
    period: "2022 — 2024",
    location: "Bengaluru, IN",
    points: [
      "Shipped the payments reconciliation service used by 200+ merchants.",
      "Migrated a monolith to services with zero customer-visible downtime.",
      "Raised unit-test coverage from 34% to 87%.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Company · Full-stack",
    period: "2021 — 2022",
    location: "Remote",
    points: [
      "Built internal tooling that saved roughly 10 hours a week of manual work.",
      "Introduced CI previews on every pull request.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech, Electronics and Communication Engineering",
    school: "Hooghly Engineering & Technology College",
    period: "2024 — 2028",
    note: "Currently studying — coursework in signals, embedded systems, and data structures.",
  },
];
