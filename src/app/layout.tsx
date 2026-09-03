import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Newsreader, JetBrains_Mono } from "next/font/google";
import Ambient from "@/components/Ambient";
import Cursor from "@/components/Cursor";
import ScrollFX from "@/components/ScrollFX";
import { site, headline } from "@/lib/content";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const description = `${site.role} and ${site.subrole}. ${headline.context}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role}`,
  description,
  keywords: [
    "Rohit Jain",
    "Engineering Manager",
    "Frontend Architect",
    "React",
    "TypeScript",
    "Next.js",
    "AI engineering",
    "Pune",
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description,
    images: [{ url: site.photo, width: 600, height: 800, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
    images: [site.photo],
  },
  robots: { index: true, follow: true },
};

// Light is the default regardless of system preference, so the browser chrome
// is pinned to paper rather than following prefers-color-scheme into dark.
export const viewport: Viewport = {
  themeColor: "#f4f3ee",
};

/**
 * Runs before first paint. Light is the default and the system preference is
 * deliberately NOT consulted — this page is meant to read like print, and dark
 * is an opt-in the visitor makes with the toggle. Only an explicit stored
 * 'dark' flips it. Also marks <html class="js">, which arms the load and
 * reveal animations; without it everything renders at rest, fully visible.
 */
const bootScript = `(function(){var d=document.documentElement;try{if(localStorage.getItem('theme')==='dark'){d.classList.add('dark')}}catch(e){}d.classList.add('js')})()`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  image: `${site.url}${site.photo}`,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${newsreader.variable} ${jetbrains.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Ambient />
        <ScrollFX />
        <Cursor />
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
