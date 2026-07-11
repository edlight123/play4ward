# Content to collect before launch

The website structure is complete. To replace the placeholders with real
content, gather the following (from the original brief). Nothing on the site is
fabricated — every item below currently shows as a clearly-marked placeholder.

## Brand & identity
- [ ] Official logo files (SVG + PNG) → `src/components/Logo.tsx`
- [ ] Confirmed brand colors and fonts (current palette is a starting point → `tailwind.config.ts`)

## Organization
- [ ] Mission and vision statements (draft copy already in place → `about.mv`)
- [ ] Founder story / why Play4Ward exists → `about.story`
- [ ] Legal registration status → `about.governance`
- [ ] Team names, roles, and 2–3 sentence bios → `about.team.members`
- [ ] Safeguarding & parental-consent procedures → `join.safeguarding`

## Programs
- [ ] Program descriptions (drafts in place)
- [ ] Training schedule and location → `programs.center.details`
- [ ] Registration criteria and cost → `programs.center.details`

## Proof & media
- [ ] At least 20 high-quality photos (training, tournaments, workshops, coaches, athletes — from Jacmel, not stock)
- [ ] 3 participant or parent testimonials → `impact.stories`, home featured story
- [ ] Confirmed, documented impact numbers → `impact.dashboard.stats`

## Partners & support
- [ ] Partner logos + permission to display them → `partners`, home partners strip
- [ ] Donation method / link → `src/lib/config.ts` (`donate`)
- [ ] Real donation amounts calculated from budget → `support.money.tiers`

## Contact & channels
- [ ] General organization email → `contact.methods.general`, `footer`
- [ ] WhatsApp / phone (organization, not personal) → `contact.methods.whatsapp`
- [ ] Instagram handle + link → `src/lib/config.ts`, `contact`, `footer`
- [ ] Registration form URL → `src/lib/config.ts` (`registrationForm`)

## Ongoing
- [ ] Upcoming event details (date, location, description, eligibility) → `events.items`
- [ ] News articles → `news.items`

## Translation
- [ ] **Haitian Creole review by a native speaker** → `messages/ht.json`
      (currently a first-pass translation, marked in the file's `_meta.review`)
