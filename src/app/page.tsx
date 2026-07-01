import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { LEGAL_ENTITY } from "@/lib/site";

export const metadata: Metadata = {
  description:
    "A free weekly newsletter for people caring for someone with dementia: practical help, honest research, and reassurance you are not alone. The Again, With Love app is coming soon.",
  alternates: { canonical: "/" },
};

const NEWSLETTER_VALUE = [
  {
    title: "Honest research, minus the hype",
    body: "Plain-language updates on dementia prevention and care, always tied to a real source, never overstated, and never false hope.",
  },
  {
    title: "Practical tools you can use",
    body: "A script, a checklist, or one small thing that makes a hard day a little easier, ready the moment you open the email.",
  },
  {
    title: "Care for you, too",
    body: "The caregiver matters as much as the person being cared for. A little room to breathe, and a nudge to be kind to yourself.",
  },
  {
    title: "You are not alone",
    body: "A quiet circle of people who understand. Real tips, real questions, and the comfort of knowing others are walking this too.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* What you get in the newsletter */}
      <section
        id="newsletter"
        aria-labelledby="newsletter-title"
        className="scroll-mt-24 bg-calm-soft/50 py-16 sm:py-20"
      >
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The newsletter</span>
            <h2
              id="newsletter-title"
              className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              What lands in your inbox each week
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Short, warm, and genuinely useful. No jargon, no fear, no selling.
              Just help for the week ahead.
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
            {NEWSLETTER_VALUE.map((item) => (
              <li key={item.title} className="card p-7">
                <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/#signup" className="btn-primary">
              Join the newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section
        aria-labelledby="who-title"
        className="section scroll-mt-24 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Who it&apos;s for</span>
          <h2
            id="who-title"
            className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            For the person holding it all together
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            If you are caring for a parent, a spouse, or someone you love as their
            memory changes, this is for you. Whether the diagnosis came last week
            or years ago, you are welcome here.
          </p>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="scroll-mt-24 bg-calm-soft/50 py-16 sm:py-20"
      >
        <div className="section">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">About</span>
            <h2
              id="about-title"
              className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              A small, mission-driven project
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Again, With Love is built by {LEGAL_ENTITY}, a solo,
                family-inspired effort, not a big corporation. It began with a
                simple wish: to help a loved one feel safe, even in the hardest
                moments of memory loss.
              </p>
              <p>
                We build carefully and honestly. Again, With Love is a caregiving
                aid, not a medical device or treatment, so we do not make medical
                claims. We treat the people who use it, and the families who love
                them, with respect and dignity.
              </p>
              <p>
                Privacy is built in: no advertising, no third-party trackers, and
                no selling your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App teaser */}
      <section
        aria-labelledby="app-teaser-title"
        className="section scroll-mt-24 py-16 sm:py-20"
      >
        <div className="card mx-auto max-w-3xl p-8 text-center sm:p-10">
          <span className="eyebrow">Coming later</span>
          <h2
            id="app-teaser-title"
            className="mt-4 text-3xl font-bold tracking-tight text-ink"
          >
            There is also an app on the way
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            The Again, With Love app will let you record short video and audio
            reassurance that a loved one can play back anytime they feel anxious
            or unsure. It is in development now.
          </p>
          <div className="mt-7">
            <Link href="/app" className="btn-ghost">
              See how the app will help
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cocoa py-16 text-center sm:py-20">
        <div className="section">
          <h2 className="text-3xl font-bold tracking-tight text-surface sm:text-4xl">
            Start with a little support this week
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-surface/80">
            Free, weekly, and made with care. Unsubscribe any time.
          </p>
          <div className="mt-8">
            <Link href="/#signup" className="btn-primary">
              Join the newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
