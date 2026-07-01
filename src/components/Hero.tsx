import Link from "next/link";
import BeehiivSignup from "@/components/BeehiivSignup";
import { BRAND_NAME, TAGLINE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="section pb-12 pt-16 text-center sm:pt-24">
        {/* Gold infinity-heart mark, with a soft warm glow behind it. */}
        <div className="relative mx-auto mb-8 h-28 w-28">
          <div
            className="absolute inset-0 -z-10 rounded-full bg-gold-bright/30 blur-2xl animate-gentle-glow"
            aria-hidden="true"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-icon.png"
            alt=""
            width={160}
            height={160}
            className="h-28 w-28 animate-soft-float"
          />
        </div>

        <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {BRAND_NAME}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-ink-soft sm:text-2xl">
          {TAGLINE}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Support for families caring for someone with dementia. It starts with a
          free weekly newsletter: practical help, honest research on prevention
          and care, and a reminder that you are not alone.
        </p>

        {/* Newsletter signup: the primary call to action for now. */}
        <div id="signup" className="mt-9 scroll-mt-24">
          <BeehiivSignup />
          <p className="mt-4 text-sm text-ink-soft/80">
            Free. No spam. Unsubscribe any time. See our{" "}
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
  );
}
