import Link from "next/link";
import Wordmark from "./Wordmark";
import { LEGAL_ENTITY, TAGLINE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline bg-surface-soft/60">
      <div className="section py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{TAGLINE}</p>
          </div>

          <nav
            className="flex flex-wrap gap-x-10 gap-y-3 text-base"
            aria-label="Footer"
          >
            <Link
              href="/app"
              className="text-ink-soft transition hover:text-ink"
            >
              The App
            </Link>
            <Link
              href="/guides"
              className="text-ink-soft transition hover:text-ink"
            >
              Guides
            </Link>
            <Link
              href="/#signup"
              className="text-ink-soft transition hover:text-ink"
            >
              Newsletter
            </Link>
            <Link
              href="/privacy"
              className="text-ink-soft transition hover:text-ink"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-ink-soft transition hover:text-ink"
            >
              Terms of Use
            </Link>
            <Link
              href="/delete-account"
              className="text-ink-soft transition hover:text-ink"
            >
              Delete your data
            </Link>
            <Link
              href="/contact"
              className="text-ink-soft transition hover:text-ink"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-hairline pt-6">
          <p className="text-sm leading-relaxed text-ink-soft/90">
            {/* No medical claims. Again, With Love is a caregiving aid, not a
                medical device, treatment, or a substitute for professional care. */}
            Again, With Love is a caregiving support tool. It is not a medical
            device, medical advice, or a substitute for professional medical
            care. It does not diagnose, treat, or slow dementia or any other
            condition.
          </p>
          <p className="mt-4 text-sm text-ink-soft/80">
            © {new Date().getFullYear()} {LEGAL_ENTITY}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
