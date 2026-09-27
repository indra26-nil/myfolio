import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/** TODO: replace with your real domain before deploying. */
const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.roles[0]}`,
    template: `%s — ${site.name}`,
  },
  description: site.summary,
  keywords: [
    site.name,
    "software engineer",
    "backend developer",
    "full-stack developer",
    "portfolio",
    "TypeScript",
    "Node.js",
    "Python",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${site.name} — ${site.roles[0]}`,
    description: site.summary,
    siteName: `${site.handle}.dev`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.roles[0]}`,
    description: site.summary,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
