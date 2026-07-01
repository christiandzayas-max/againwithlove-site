# Welcome email

The first email a new subscriber gets, right after they confirm (double opt-in).
It matters twice over: it sets the tone for the whole relationship, and the early
open, reply, and click it earns tell the inbox we are wanted, which protects
deliverability for every issue after.

**Status: live in beehiiv** (Settings, Emails, Preset Emails). This file is the
source of truth and mirrors what is live. Edit here, then update beehiiv to match.

Written in the voice in `VOICE.md` (warm, gracious, calm, no dashes, "dementia"
as the umbrella term, no medical claims, no hype, signed by the team). The strong
"move us to your inbox" and "say hello" mechanics are adapted from good welcome
emails we studied, with the gimmicks and ad plugs stripped out.

## Related beehiiv settings (also live)
- **Sender name:** Again, With Love
- **From:** againwithlove@mail.beehiiv.com (beehiiv shared infrastructure)
- **Reply-to:** hello@againwithlove.com (so replies to "say hello" reach us)
- **Double opt-in:** on at the publication level, and also on at the subscribe
  form level (Subscribe forms, our embed, Settings, Require double opt-in).
- **Testing note:** the beehiiv account's own owner email is auto-confirmed and
  goes straight to Active with no confirmation email. To test the real flow, use a
  different address that is not tied to the account, and check Promotions and spam.
- **Smart Nudge:** on. A reminder goes out 48 hours later if they have not
  confirmed.
- **Opt-in redirect URL:** againwithlove.com (where a confirmed subscriber lands).
  A dedicated /welcome page on the site that mirrors the two prompts below is a
  planned follow-up; repoint this URL to it once built.

---

## Subject line
Welcome. I'm so glad you're here.

(Alternates to test later: "You're in. Welcome to Again, With Love." /
"Welcome. Let's take this one week at a time.")

## Preview text
A little about what to expect, and two small things that help.

---

## Body (as it is live)

Welcome. I'm so glad you're here.

You just joined Again, With Love, a free weekly note for people caring for someone
with dementia. Whether the diagnosis came last week or years ago, you are welcome
here.

Here is the thing I most want you to know: this is hard, and you are not doing it
wrong. We are not here to lecture you, and we will never sell you false hope. We
are here with practical help for the hard moments, honest research you can trust,
and the steady reminder that you are not alone.

Every Sunday morning, you will get one short, warm email. Something you can
actually use that week: a script for a hard conversation, one small thing that
helps, a plain and honest research note, and a little room to breathe for you,
too. No jargon. No fear. No selling.

Two small things, so my note actually reaches you.

First, move me to your primary inbox. In Gmail on your phone, tap the three dots
at the top right of this email, choose Move to, then Primary. In Gmail on a
computer, drag this email into the Primary tab. In Apple Mail, tap our address at
the top and choose Add to VIPs. Anywhere else, add againwithlove@mail.beehiiv.com
to your contacts.

Second, say hello. Just hit reply and tell me a little about who you are caring
for. I read every one, and it helps me write for you, not at you. If today is not
the day for that, that is okay too.

While you wait for the first issue, here is one thing worth reading now:
https://againwithlove.com/guides/what-to-say-when-they-want-to-go-home

Take a breath. You are in good company here.

With love,
The Again, With Love Team

---

## Notes
- **Send slot:** the body says "Sunday morning." If the day or time changes, edit
  this line here and in beehiiv, and update `GROWTH.md` and `PLAN.md`.
- **Post-subscribe page:** the two "small things" above are the prompts to mirror
  on a future /welcome page. Until then, the welcome email carries them.
- **Opt-in email:** left as beehiiv's default confirmation email. Customize later
  if we want it in our voice.
- Keep it dash-free and re-read it out loud before changing it (see the pre-send
  scan in `VOICE.md`).
