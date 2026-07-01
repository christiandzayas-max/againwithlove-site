"use client";

import { useState } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";

const NAV_LINKS = [
  { label: "How it helps", href: "/#how-it-helps" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/80 bg-canvas/85 backdrop-blur-md">
      <div className="section flex h-16 items-center justify-between">
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-ink-soft transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#signup" className="btn-ghost px-5 py-2 text-sm">
            Join the newsletter
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-deep md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-hairline/80 bg-canvas md:hidden">
          <nav className="section flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-ink-soft transition hover:bg-surface-soft hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#signup"
              onClick={() => setOpen(false)}
              className="btn-ghost mt-2"
            >
              Join the newsletter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
