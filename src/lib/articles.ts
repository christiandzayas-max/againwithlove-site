import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Articles are authored as markdown files in content/articles/*.md with
// frontmatter (title, description, date, optional updated, author). This module
// reads them at build time for the /articles hub and each /articles/[slug] page.
const ARTICLES_DIR = join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
};

function toMeta(slug: string, data: Record<string, unknown>): ArticleMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    updated: data.updated ? String(data.updated) : undefined,
    author: String(data.author ?? "The Again, With Love Team"),
  };
}

export function getAllArticles(): ArticleMeta[] {
  if (!existsSync(ARTICLES_DIR)) return [];
  return readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(readFileSync(join(ARTICLES_DIR, file), "utf8"));
      return toMeta(slug, data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(
  slug: string,
): { meta: ArticleMeta; html: string } | null {
  const file = join(ARTICLES_DIR, `${slug}.md`);
  if (!existsSync(file)) return null;
  const { data, content } = matter(readFileSync(file, "utf8"));
  const html = marked.parse(content, { async: false }) as string;
  return { meta: toMeta(slug, data), html };
}
