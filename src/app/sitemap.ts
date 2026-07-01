import type { MetadataRoute } from "next";
import { SITE_URL as siteUrl } from "@/lib/site";
import { getAllArticles } from "@/lib/articles";

// Generates /sitemap.xml with the indexable pages, including every article.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    lastModified: Date = now,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  const parseDate = (value?: string): Date => {
    if (!value) return now;
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? now : d;
  };

  const articlePages = getAllArticles().map((article) =>
    page(
      `/guides/${article.slug}`,
      0.6,
      "monthly",
      parseDate(article.updated || article.date),
    ),
  );

  return [
    page("/", 1.0, "monthly"),
    page("/app", 0.8, "monthly"),
    page("/guides", 0.7, "weekly"),
    page("/contact", 0.5, "yearly"),
    page("/delete-account", 0.4, "yearly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
    ...articlePages,
  ];
}
