import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

/** Crawlers get everything; the sitemap points them at the two real routes. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
