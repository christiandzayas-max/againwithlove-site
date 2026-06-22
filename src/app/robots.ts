import type { MetadataRoute } from "next";
import { SITE_URL as siteUrl } from "@/lib/site";

// Generates /robots.txt. Everything on the site is meant to be discoverable,
// so we allow general crawling and point crawlers at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
