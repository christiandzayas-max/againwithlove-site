# Publishing guides (SEO content, for the drafting agent)

Guides live on the Vercel site (not beehiiv) so all search authority stays on
againwithlove.com and can link to the newsletter and the app. To publish one, add
a markdown file and open a pull request. On merge it auto-deploys.

## How
1. Create `content/guides/<slug>.md`. The slug becomes the URL `/guides/<slug>`,
   so use lowercase words separated by hyphens.
2. Add frontmatter (everything required except `updated`):
   ```
   ---
   title: "Plain, specific, keyword-aware headline"
   description: "One or two sentences for the search snippet and social preview."
   date: "YYYY-MM-DD"
   updated: "YYYY-MM-DD"   # optional, only when materially revised
   author: "The Again, With Love Team"
   ---
   ```
3. Write the body in plain markdown: `##` and `###` headings, paragraphs, bullet
   and numbered lists, `>` blockquotes, `[links](https://...)`, `**bold**`, and
   `*italic*`.
4. Open a PR for the owner to approve. Merging auto-deploys, and the `/guides`
   hub, the guide page, the Article JSON-LD, and the sitemap all update on their
   own.

## Rules (same standard as the newsletter)
- Follow `VOICE.md`: warm, human, no em or en dashes, and "dementia" as the
  umbrella term.
- Follow `SOURCING.md`: every fact or figure links a primary source, or it gets
  cut. No fabricated stats or quotes.
- No medical claims. End a health-related guide with a line pointing people to
  their doctor. Any affiliate link needs a clear FTC disclosure.
- One clear search intent per guide: answer the question in the title.

See `content/guides/what-to-say-when-they-want-to-go-home.md` for a working
template.
