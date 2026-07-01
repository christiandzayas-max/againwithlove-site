// Canonical site URL. Single source of truth.
//
// Every canonical tag, Open Graph URL, sitemap entry, robots directive, and
// JSON-LD value is built from this. It MUST point at the final, non-redirecting
// host. againwithlove.com is registered at Namecheap; the apex is the intended
// canonical. ⚠️ Before launch, confirm the live apex<->www redirect direction
// in Vercel and make this value match the destination (the TBL site shipped a
// www/apex canonical mismatch once, don't repeat it).
//
// Override via NEXT_PUBLIC_SITE_URL only if the canonical host changes (and
// update the Vercel domain redirect to match). NEXT_PUBLIC_* bakes at build
// time, so a change needs a fresh deploy.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://againwithlove.com";

// Verified business facts, used across metadata, footer, legal, and JSON-LD.
// Keep the legal entity name byte-for-byte identical everywhere (banks and
// payment processors check for exact-match consistency).
export const LEGAL_ENTITY = "Again, With Love LLC";
export const BRAND_NAME = "Again, With Love";
export const CONTACT_EMAIL = "hello@againwithlove.com";
export const TAGLINE = "The comfort of your voice, again and again.";
