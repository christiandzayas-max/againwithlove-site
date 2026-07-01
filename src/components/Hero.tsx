import Link from "next/link";
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
          When a loved one living with dementia asks the same
          anxious question again and again, Again, With Love lets them see and
          hear your reassurance. Short messages you record once, ready whenever
          they need comfort.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#how-it-works" className="btn-primary">
            See how it works
          </Link>
          <Link href="/#stay-updated" className="btn-ghost">
            Get launch updates
          </Link>
        </div>

        <p className="mt-6 text-sm text-ink-soft/80">
          The app is in development and testing. It is not yet available to
          download.
        </p>
      </div>
    </section>
  );
}
