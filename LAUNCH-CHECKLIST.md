# Again, With Love — Launch Checklist

Living tracker for the AWL marketing site (Stage 1). Mirrors the TBL protocol.
Source of truth for decisions is `AWL-SITE-BRIEF.md` (kept by the owner).

Status legend: ☐ todo · ☑ done · ⚠️ attention

**Quick status (2026-06-21):** ✅ LIVE at https://againwithlove-site.vercel.app
(Vercel production; GitHub auto-deploy from `main` connected). Repo public at
github.com/christiandzayas-max/againwithlove-site. All routes verified 200.
**Next: point custom domain againwithlove.com at it (DNS at Namecheap).**
Stage-1 scope: landing + privacy + terms + contact + delete-account,
warm/accessible, zero third-party trackers.

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

- ☑ Public GitHub repo `christiandzayas-max/againwithlove-site` created + pushed
      (author christiandzayas@gmail.com — verified on GitHub).
- ☑ Vercel project `againwithlove-site` (scope: christians-projects-2fda38e4);
      `NEXT_PUBLIC_SITE_URL=https://againwithlove.com` set (production).
- ☑ GitHub auto-deploy connected (via dashboard: Settings → Git → Adjust GitHub
      App Permissions → Connect). Pushes to `main` now auto-deploy.
- ☑ Production deploy verified LIVE; all routes 200 over HTTPS, not behind
      preview/auth protection.
- ☐ Add custom domain againwithlove.com (+ www) in Vercel → Settings → Domains;
      set DNS at Namecheap (apex A record + www CNAME, per Vercel's instructions).
- ☐ Set apex as primary, www → apex redirect (canonical = apex, matches
      `SITE_URL`). If you choose www instead, flip `NEXT_PUBLIC_SITE_URL` to www
      and redeploy (NEXT_PUBLIC_* bakes at build time).
- ☐ After DNS: verify https://againwithlove.com/privacy, /contact,
      /delete-account return 200 over HTTPS.

Note: Vercel CLI auth on this machine is stale (token rejected after a forced
CLI upgrade). Deploys now go through GitHub push → Vercel auto-deploy, so the CLI
isn't needed. Re-run `vercel login` only if CLI access is wanted again.

## Polish / later

- ☐ Optional: nicer 1200×630 OG + dark-tile favicon (needs an image tool;
      currently the real transparent logos served as static assets).
- ☐ Newsletter: wire beehiiv embed at `#stay-updated` when ready (disclose in
      Privacy Policy when it collects emails).
- ☐ Email deliverability (SPF/DKIM/DMARC) when the site starts sending mail.
