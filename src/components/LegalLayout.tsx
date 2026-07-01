// Shared shell for /privacy and /terms: a clean, credible, readable legal page.
export default function LegalLayout({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section pb-16 pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-soft">Last updated: {lastUpdated}</p>
        {intro && <p className="mt-6 prose-legal">{intro}</p>}

        <div className="mt-10 space-y-8">{children}</div>
      </div>
    </div>
  );
}

// A titled legal section for consistent styling.
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-ink">{heading}</h2>
      <div className="mt-3 space-y-3 prose-legal">{children}</div>
    </section>
  );
}
