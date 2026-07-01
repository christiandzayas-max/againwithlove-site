import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Practical, honest guidance for people caring for someone with dementia or Alzheimer's: everyday help, gentle scripts, and what the research really says.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="section pb-16 pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Articles</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Guides and support for dementia caregivers
        </h1>
        <p className="mt-5 prose-legal">
          Practical help you can use today, in plain language. No fear, no hype,
          and never a substitute for your doctor.
        </p>
      </div>

      {articles.length === 0 ? (
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-ink-soft">
          New articles are on the way. In the meantime, join the newsletter for
          weekly help.
        </p>
      ) : (
        <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug} className="card p-7">
              <h2 className="text-xl font-semibold text-ink">
                <Link
                  href={`/articles/${article.slug}`}
                  className="transition hover:text-gold-deep"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {article.description}
              </p>
              <Link
                href={`/articles/${article.slug}`}
                className="mt-4 inline-block font-medium text-gold-deep transition hover:text-ink"
              >
                Read more
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="mx-auto mt-14 text-center">
        <Link href="/#signup" className="btn-primary">
          Join the newsletter
        </Link>
      </div>
    </div>
  );
}
