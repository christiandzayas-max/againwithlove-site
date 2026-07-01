import Link from "next/link";
import Hero from "@/components/Hero";
import BeehiivSignup from "@/components/BeehiivSignup";
import { LEGAL_ENTITY } from "@/lib/site";

// The anxious, repeated questions the app is designed to answer. These are
// illustrative examples of the experience, not quotes or claims.
const EXAMPLE_QUESTIONS = [
  "Where are you?",
  "Am I okay?",
  "When are you coming home?",
  "Is everything alright?",
];

const STEPS = [
  {
    n: "1",
    title: "Record once, in your own voice",
    body: "In the app, record short video or audio answers to the questions your loved one asks most, calm and familiar, in your own face and voice.",
  },
  {
    n: "2",
    title: "Hand them the device",
    body: "Switch into a simple, full-screen mode with big, clear buttons. No menus, no settings to get lost in. It stays gently locked to this one screen.",
  },
  {
    n: "3",
    title: "They tap, and you're there",
    body: "When worry strikes, they tap a button and see your face and hear your voice reassuring them. It works offline, any time of day or night.",
  },
];

const FEATURES = [
  "Works offline",
  "One simple, locked screen",
  "No ads, no trackers",
  "Support for 40+ languages",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Feature strip */}
      <div className="section">
        <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y border-hairline py-4 text-sm font-medium text-ink-soft">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-gold-deep">
                ♥
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* How it helps */}
      <section
        id="how-it-helps"
        aria-labelledby="how-it-helps-title"
        className="section scroll-mt-24 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why it helps</span>
          <h2
            id="how-it-helps-title"
            className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            The same question, asked again and again
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            With dementia, short-term memory can fade while feelings stay. A
            loved one may ask the same anxious question many times an hour,
            because in that moment, they truly don&apos;t remember the last
            answer. Reassuring them each time is loving work, and it can wear you
            down.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {EXAMPLE_QUESTIONS.map((q) => (
            <li
              key={q}
              className="card px-4 py-5 text-center text-base font-medium text-ink"
            >
              &ldquo;{q}&rdquo;
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-ink-soft">
          Again, With Love doesn&apos;t replace you. It carries your reassurance
          for the moments you can&apos;t be there in person, or when you simply
          need to take a breath.
        </p>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-title"
        className="scroll-mt-24 bg-calm-soft/50 py-16 sm:py-20"
      >
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">How it works</span>
            <h2
              id="how-it-works-title"
              className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Three simple steps
            </h2>
          </div>

          <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <li key={step.n} className="card flex flex-col p-7">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-calm-soft text-xl font-bold text-calm-deep"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        aria-labelledby="about-title"
        className="section scroll-mt-24 py-16 sm:py-20"
      >
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
              aid, not a medical device or treatment, so we don&apos;t make
              medical claims. We treat the people who use this app, and the
              families who love them, with respect and dignity.
            </p>
            <p>
              Privacy is built in: no advertising, no third-party trackers, and
              no selling your information. Your recordings are yours.
            </p>
          </div>
        </div>
      </section>

      {/* Stay updated: beehiiv newsletter signup */}
      <section
        id="stay-updated"
        aria-labelledby="stay-updated-title"
        className="scroll-mt-24 bg-calm-soft/50 py-16 sm:py-20"
      >
        <div className="section">
          <div className="card mx-auto max-w-2xl p-8 text-center sm:p-10">
            <span className="eyebrow">Stay updated</span>
            <h2
              id="stay-updated-title"
              className="mt-4 text-3xl font-bold tracking-tight text-ink"
            >
              Be the first to know
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              We&apos;re getting Again, With Love ready for families. Join the
              list for launch news and gentle, practical notes for caregivers,
              sent about once a week.
            </p>
            <div className="mt-7">
              <BeehiivSignup />
            </div>
            <p className="mt-4 text-sm text-ink-soft/80">
              No spam. Unsubscribe any time. See our{" "}
              <Link
                href="/privacy"
                className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
