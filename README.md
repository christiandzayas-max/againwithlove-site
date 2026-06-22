# Again, With Love — Website

Marketing site for **Again, With Love**, a caregiving app that helps family
caregivers comfort a loved one living with dementia or Alzheimer's using short,
pre-recorded video and audio messages in the caregiver's own voice.

Operated by **Again, With Love, LLC**.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

Intentionally minimal dependencies, mobile-first, and **no third-party trackers**
(health-adjacent, privacy-sensitive audience).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
src/
  app/            routes: / privacy terms contact delete-account
                  robots.ts, sitemap.ts, icon/apple-icon/opengraph-image (png)
  components/     Header, Footer, Hero, Wordmark, StructuredData, LegalLayout
  lib/site.ts     canonical URL + verified brand facts (single source of truth)
public/           logo-icon.png, logo-full.png (brand: gold infinity-heart)
```

## Notes

- `src/lib/site.ts` holds the canonical `SITE_URL` and brand constants. Keep the
  legal entity name ("Again, With Love, LLC") byte-for-byte consistent.
- `NEXT_PUBLIC_SITE_URL` overrides the canonical host (bakes at build time — a
  change needs a fresh deploy). See `.env.example`.
- The privacy policy reflects the app's real data flows (Firebase Auth /
  Firestore / Storage; no analytics or ad SDKs). Legal copy is pending counsel
  review — see comments in `src/app/privacy/page.tsx` and `terms/page.tsx`.
- See `LAUNCH-CHECKLIST.md` for go-live status and steps.
