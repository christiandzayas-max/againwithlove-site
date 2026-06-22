import Link from "next/link";
import { BRAND_NAME } from "@/lib/site";

// Brand lockup: the gold infinity-heart mark + the serif wordmark.
// The image is decorative (alt="") because the adjacent text names the brand.
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${BRAND_NAME} — home`}
      className={`group inline-flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-deep focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-icon.png"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 shrink-0"
      />
      <span className="font-serif text-xl font-semibold tracking-tight text-ink">
        {BRAND_NAME}
      </span>
    </Link>
  );
}
