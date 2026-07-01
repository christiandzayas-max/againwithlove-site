import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The App",
  description:
    "The Again, With Love app helps you comfort a loved one living with dementia or Alzheimer's using short, pre-recorded video and audio messages in your own voice. In development.",
  alternates: { canonical: "/app" },
};

// The anxious, repeated questions the app is designed to answer. Illustrative
// examples of the experience, not quotes or claims.
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
    title: "They tap, and you are there",
    body: "When worry strikes, they tap a button and see your face and hear your voice reassuring them. It works offline, any time of day or night.",
  },
];

const FEATURES = [
  "Works offline",
  "One simple, locked screen",
  "No ads, no trackers",
  "Support for 40+ languages",
];

export default function AppPage() {
  return (
    <>
      {/* App hero */}
      <section className="section pb-8 pt-16 text-center sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">The app</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Your face and voice, ready whenever they need it
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            The Again, With Love app lets you record short messages of
            reassurance that a loved one living with dementia can play back
            anytime, in your own familiar voice. It is in development and coming
            later.
          </p>
          <div className="mt-8">
            <Link href="/#signup" className="btn-primary">
              Get launch news by email
            </Link>
          </div>
        </div>
      </section>

      {/* The same question, again and again */}
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
            With dementia, short-term memory can fade while feelings stay. A loved
            one may ask the same anxious question many times an hour, because in
            that moment they truly do not remember the last answer. Reassuring
            them each time is loving work, and it can wear you down.
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
          Again, With Love does not replace you. It carries your reassurance for
          the moments you cannot be there in person, or when you simply need to
          take a breath.
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

      {/* Features */}
      <section className="section py-14 sm:py-16">
        <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base font-medium text-ink-soft">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-gold-deep">
                &hearts;
              </span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-cocoa py-16 text-center sm:py-20">
        <div className="section">
          <h2 className="text-3xl font-bold tracking-tight text-surface sm:text-4xl">
            The app is coming. Be the first to know.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-surface/80">
            Join the free newsletter and we will tell you the moment it is ready,
            plus practical help for caregivers along the way.
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
