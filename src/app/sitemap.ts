import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

/** Two indexable routes. The PDF is deliberately left out — it is a download,
 *  not a page, and /resume carries the same content in crawlable HTML. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
