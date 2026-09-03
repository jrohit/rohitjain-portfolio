import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Newsreader, JetBrains_Mono } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#101210" },
  ],
};

/**
 * Runs before first paint: applies the stored theme (light by default here —
 * this is a print-feeling page), and marks <html class="js">, which is what
 * arms the load animation. Without it the page renders fully at rest.
 */
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}}catch(e){}d.classList.add('js')})()`;

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
      <body>{children}</body>
    </html>
  );
}
