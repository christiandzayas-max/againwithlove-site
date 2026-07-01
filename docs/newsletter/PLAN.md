# Newsletter Plan

## What this is
A weekly email for family caregivers of people living with dementia or
Alzheimer's. It exists to help caregivers in real, practical ways, to build
trust for the Again, With Love brand, and to gently grow the app's audience.

## Principles
- **Value first, every week.** If an issue would not help a tired caregiver, it
  does not ship.
- **AI-first means production.** Agents research and assemble each issue; a human
  approves before anything sends. (A reader-facing AI tool shows up now and then
  as a bonus, not as the weekly anchor.)
- **Tangible when it fits.** People value a thing they can hold: a script, a
  checklist, a printable. Lead with those in the subject line.

## Audience
Adult family caregivers, often women, often 45 to 70, frequently caring for a
parent or a spouse. Stressed, time-poor, emotionally stretched, and hungry for
help they can trust. Many are not "tech people." Write for a real person having
a hard week.

## The weekly structure (named sections)
The masthead brand wraps the whole issue: it opens with **Again,** and closes
with **With love,**.

1. **Again,** — a short, human opening in the writer's voice. Warm, specific,
   real.
2. **On the Horizon** — the Research Radar. One or two credible, plainly
   explained research items, each labeled by evidence strength, each with an
   honest "what this means for you today." Our signature. See `SOURCING.md`.
3. **This Week's Toolkit** — the tangible asset (a script, checklist, or
   printable; an AI tool every few weeks). Several tie back to the app (for
   example, a reassurance script to record).
4. **One Thing That Helps** — a single practical caregiving tip. Concrete, kind,
   never a medical claim.
5. **For You, Too** — support for the caregiver themselves (burnout, guilt,
   respite, grief). Most resources forget the caregiver. We do not.
6. **From the Circle** — a real reader tip or story, used only with permission,
   plus the Question of the Week to invite replies.
7. **Brain Break** — a light riddle or a moment of levity. Relief from the
   weight.
8. **Pass It On** — a one-line forward ask and the referral link.
9. **With love,** — a warm close and a one-line teaser for next week.

Rotating in: a quiz every four to six weeks, reader spotlights, and seasonal
issues (holidays are especially hard for these families).

## Monetization
No paid tier. Two honest paths:
- **The app.** The newsletter builds trust and points caregivers to Again, With
  Love.
- **Affiliates, tastefully.** Genuinely useful products (safety items, books,
  dementia-friendly aids, respite services). Rules: only recommend what we would
  recommend for free, always include a clear FTC disclosure ("we may earn a
  commission, at no cost to you"), never a medical claim, never let it crowd out
  the value.

## Traffic engine (how people find us)
Caregivers are not on X. We write about the same topics for free where they
already are, then point back to the newsletter:
- **Facebook and Instagram**, leading with carousels; test formats.
- **Reddit** (r/dementia, r/AlzheimersGroup, r/CaregiverSupport) where welcome
  and genuinely helpful, never spammy.
- **SEO articles** on againwithlove.com for the long-tail "how do I..." searches
  caregivers type at 2 a.m.

Each issue is repurposed into several free posts and one article by the pipeline
below.

## Growth
- **Pre-launch first.** Build a real list before the first true send, so the
  first issue lands with an audience, not into silence.
- **Referral program (beehiiv native)** with tangible milestone rewards (for
  example, a "Doctor Visit Prep Kit" PDF, then a full "Caregiver Starter
  Binder").
- **Quizzes as lead magnets** (for example, "How dementia-friendly is your home?
  A 12-point check"). Shareable, and they grow the list.
- **Tangible subject lines** (for example, "The 3-line script for 'When are you
  coming home?'").

## The agent pipeline (you approve, agents do the rest)
One human approval gate. Everything else is automated and runs weekly.

1. **Scout agent** gathers the week's best caregiver topics from the sources in
   `SOURCING.md` and returns a ranked brief.
2. **Research Radar agent** finds notable prevention and treatment research.
   - **Evidence Rater sub-agent** labels each item by strength and kills anything
     that cannot be traced to a primary source.
3. **Draft agent** writes the issue in the fixed structure and the voice in
   `VOICE.md`.
4. **Toolkit agent** builds the week's tangible asset.
5. **Repurpose agent** turns the issue into Facebook and Instagram carousels,
   captions, a Reddit-appropriate post, and an SEO article draft.
6. **Guardrail editor agent** checks for medical claims, tone and dignity,
   affiliate disclosure, citations, and runs the anti-AI-tell scan in `VOICE.md`.
7. **You approve** one packaged bundle (newsletter + social + article).
8. **Publish agent** schedules the issue in beehiiv, queues the social posts, and
   opens a pull request for the article, which auto-deploys to the site.

The approval gate is permanent. For a health-adjacent audience, nothing publishes
fully unattended.

## Guardrails
- No medical claims, diagnosis, treatment advice, or promised outcomes.
- Never sell false hope. Early or unproven research is labeled plainly.
- No fabricated stats, quotes, testimonials, endorsements, or reader stories.
- Health facts link a primary source, or they are cut.
- Dignity for caregivers and for the person with dementia, always.
