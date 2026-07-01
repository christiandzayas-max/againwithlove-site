import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticle } from "@/lib/articles";
import { SITE_URL, BRAND_NAME, LEGAL_ENTITY } from "@/lib/site";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  const { meta } = article;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/articles/${meta.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      url: `${SITE_URL}/articles/${meta.slug}`,
    },
  };
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const { meta, html } = article;
  const url = `${SITE_URL}/articles/${meta.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date || undefined,
    dateModified: meta.updated || meta.date || undefined,
    author: { "@type": "Organization", name: BRAND_NAME },
    publisher: { "@type": "Organization", name: LEGAL_ENTITY },
    mainEntityOfPage: url,
  };

  return (
    <div className="section pb-16 pt-16 sm:pt-20">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/articles"
          className="text-sm font-medium text-gold-deep transition hover:text-ink"
        >
          &larr; All articles
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {meta.title}
        </h1>
        {meta.date && (
          <p className="mt-2 text-sm text-ink-soft">{formatDate(meta.date)}</p>
        )}

        {/* Rendered from trusted, first-party markdown (reviewed via PR). */}
        <div
          className="prose-article mt-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-12 rounded-2xl border border-hairline bg-calm-soft/50 p-6 text-center">
          <p className="text-lg font-semibold text-ink">
            Help for caregivers, every week
          </p>
          <p className="mt-2 text-ink-soft">
            Practical notes and honest research, free.
          </p>
          <Link href="/#signup" className="btn-primary mt-4">
            Join the newsletter
          </Link>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
