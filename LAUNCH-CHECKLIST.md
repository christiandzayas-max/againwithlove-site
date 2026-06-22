# Again, With Love — Launch Checklist

Living tracker for the AWL marketing site (Stage 1). Mirrors the TBL protocol.
Source of truth for decisions is `AWL-SITE-BRIEF.md` (kept by the owner).

Status legend: ☐ todo · ☑ done · ⚠️ attention

**Quick status (2026-06-21):** Site code is BUILT and `npm run build` is green
(13 static routes). Not yet committed/pushed or deployed. Stage-1 scope: landing
page + privacy + terms + contact + delete-account, warm/accessible, zero
third-party trackers.

---

## Decisions (confirmed by owner, §7)

- ☑ Domain: **againwithlove.com** (Namecheap). Canonical = apex (default in
      `src/lib/site.ts`) — ⚠️ verify apex↔www redirect direction in Vercel and
      make `SITE_URL` match before trusting canonical.
- ☑ Public contact email: **hello@againwithlove.com** (used as `mailto:`).
- ☑ Email sending infra (SPF/DKIM/DMARC) — **deferred** (no contact form yet).
- ☑ Newsletter: **no live capture**; tasteful beehiiv-ready spot only.
- ☑ Privacy/Terms: **counsel approves** (copy drafted; see "Counsel review").
- ☑ Commit identity: **Christian Zayas / christiandzayas@gmail.com** (per-repo).
- ☑ Tagline: **"The comfort of your voice, again and again."**

## App data inventory (basis for the Privacy Policy — app v1.3.3+11)

- ☑ Firebase **Auth** (email/password), **Firestore** (users, patients,
      reassurance_buttons, usage_logs), **Storage** (recorded video/audio +
      images). On-device: PIN + offline cache (encrypted).
- ☑ **No** third-party analytics, Crashlytics, FCM/push, ads/attribution SDKs.
- ☑ **No in-app account deletion** → `/delete-account` page is the Play Store
      deletion URL (email-request flow; owner deletes manually).

---

## Build

- ☑ Standalone git repo at `C:\Users\chris\againwithlove-site` (own `.git`;
      toplevel verified — NOT the stray home-dir repo). Per-repo identity set.
- ☑ Next.js 14 + TS + Tailwind scaffold (mirrors TBL patterns; warm palette).
- ☑ Pages: `/`, `/privacy`, `/terms`, `/contact`, `/delete-account`.
- ☑ SEO: `metadataBase`, per-page canonicals, `robots.ts`, `sitemap.ts`,
      Organization + WebSite JSON-LD (verified facts only).
- ☑ Brand assets: favicon (`icon.png`), `apple-icon.png`, `opengraph-image.png`
      from the real gold infinity-heart logos.
- ☑ Accessibility: skip link, focus rings, `prefers-reduced-motion`, semantic
      headings, ≥44px targets, large readable type, alt text.
- ☑ `npm run build` green (13 static routes).

## Counsel review (before store submission / banking reliance)

- ☐ Have counsel review `/privacy` and `/terms` (drafted from real data flows;
      marked COUNSEL REVIEW PENDING in source comments).
- ☐ Confirm governing-law state in Terms (currently Arizona — where the LLC is
      organized).
- ☐ Ensure `/privacy` matches Apple App Privacy labels + Google Play Data Safety.

## Deploy (mirror TBL's proven path)

- ☐ Create GitHub repo `againwithlove-site` under `christiandzayas-max`;
      confirm remote BEFORE first push.
- ☐ First commit + push (author email christiandzayas@gmail.com — must be
      verified on GitHub or Vercel BLOCKS the deploy).
- ☐ Vercel: import repo → set `NEXT_PUBLIC_SITE_URL` → deploy.
- ☐ Add custom domain againwithlove.com in Vercel; set DNS at Namecheap.
- ☐ Decide + verify apex↔www redirect; make `NEXT_PUBLIC_SITE_URL` match →
      fresh redeploy (NEXT_PUBLIC_* bakes at build time).
- ☐ Verify `/privacy`, `/contact`, `/delete-account` return HTTP 200 over HTTPS,
      not behind preview/auth protection.

## Polish / later

- ☐ Optional: nicer 1200×630 OG + dark-tile favicon (needs an image tool;
      currently the real transparent logos served as static assets).
- ☐ Newsletter: wire beehiiv embed at `#stay-updated` when ready (disclose in
      Privacy Policy when it collects emails).
- ☐ Email deliverability (SPF/DKIM/DMARC) when the site starts sending mail.
