import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Again, With Love. Questions, privacy requests, or help with the app. Email us at hello@againwithlove.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="section pb-16 pt-16 sm:pt-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Again, With Love is a small, mission-driven project, and we read every
          message. Whether you have a question, need help, or want to make a
          privacy request, we&apos;d love to hear from you.
        </p>
      </div>

      <div className="card mx-auto mt-10 max-w-2xl p-8 text-center sm:p-10">
        <p className="text-base font-semibold text-ink-soft">Email us at</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-2 inline-block break-all text-2xl font-semibold text-gold-deep underline underline-offset-4 hover:text-ink"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-6 leading-relaxed text-ink-soft">
          We aim to reply within a few business days.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <h2 className="text-xl font-semibold text-ink">What we can help with</h2>
        <ul className="mt-4 space-y-3 prose-legal">
          <li>Questions about the app or how it works.</li>
          <li>
            Privacy requests: to access, correct, or delete your information.
            See our{" "}
            <Link
              href="/privacy"
              className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
            >
              Privacy Policy
            </Link>
            .
          </li>
          <li>
            Deleting your account and data. See{" "}
            <Link
              href="/delete-account"
              className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
            >
              Delete your account &amp; data
            </Link>
            .
          </li>
          <li>Anything else on your mind. We&apos;re glad to help.</li>
        </ul>
      </div>
    </div>
  );
}
