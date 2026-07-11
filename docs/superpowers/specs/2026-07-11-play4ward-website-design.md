# Play4Ward Website — Design Spec

**Date:** 2026-07-11
**Status:** Approved (design decisions confirmed with stakeholder)

## Overview

A public marketing/credibility website for **Play4Ward**, a youth-development
organization in Haiti (based in Jacmel) that uses handball as a tool for youth
development, leadership, discipline, and social inclusion. The site must make
Play4Ward look credible enough that **a parent trusts it, a young athlete wants
to join, and a sponsor understands exactly what their contribution funds.**

The organization is positioned as *a youth-development organization powered by
handball*, not merely a place to register for practices.

## Confirmed decisions

| Decision | Choice |
|---|---|
| Tech stack | Next.js 15 (App Router) + TypeScript + Tailwind CSS, static-exportable |
| Internationalization | `next-intl`, locale-prefixed routes `/fr` (default), `/ht`, `/en` |
| Scope | All 9 sections from the source brief |
| Languages | Trilingual FR / HT (Haitian Creole) / EN |
| Content | Honest labelled placeholders; no fabricated numbers/logos/testimonials |
| Join form | Program info page that links out to the **existing Google Form** |
| Palette | Haitian blue + coral (deep blue `#123a6b`, coral `#ff5a4d`, warm white `#fbf8f3`, gold `#f5b53d`) |
| CMS | None in v1; copy lives in per-locale JSON message files |

## Architecture

- **Next.js App Router**, `output: 'export'` so the site builds to static files
  and hosts free on Vercel / Netlify / GitHub Pages with no server.
- **`next-intl`** middleware handles locale routing. All user-visible strings
  live in `messages/fr.json`, `messages/ht.json`, `messages/en.json`. Editing
  copy = editing one JSON file per language; no component spelunking.
- **Tailwind CSS** with a small custom theme (palette + display/body fonts).
- Component-driven. Shared building blocks:
  `Header`, `Footer`, `LanguageToggle`, `Hero`, `StatStrip`, `MissionPillars`,
  `ProgramCard`, `StoryCard`, `EventCard`, `PartnerLogo`, `CTASection`,
  `ImagePlaceholder`, `Section`, `Button`.
- `ImagePlaceholder` renders a neutral labelled block (e.g. `[REPLACE: action
  photo — training, Jacmel]`) so nothing ships with fake or stock imagery.

## Routes / pages (locale-aware, all 9 sections)

```
/[locale]                -> Home
/[locale]/about          -> About Play4Ward
/[locale]/programs       -> Programs
/[locale]/impact         -> Impact
/[locale]/join           -> Join Play4Ward (links to Google Form)
/[locale]/events         -> Events & News hub (events)
/[locale]/news           -> News (articles)
/[locale]/support        -> Support Us
/[locale]/partners       -> Partners
/[locale]/contact        -> Contact
```

**Primary nav:** Home · About · Programs · Impact · Events · Join · Support Us,
with a visually distinct **Donate** button top-right. News, Partners, Contact
are reachable from the footer and cross-links.

## Page contents (from the source brief)

- **Home:** hero (headline "Building Haiti's Next Generation Through Handball" /
  provided FR + HT copy), primary CTAs (Join, Support), quiet Partner link;
  quick impact strip (honest fallback copy, no invented numbers); mission
  Play / Lead / Move Forward; programs preview (4 cards); featured story
  (placeholder); upcoming activities; partner/sponsor logos (placeholders,
  EdLight where appropriate); final CTA (Donate / Partner / Volunteer).
- **About:** our story, mission, vision, values (Discipline, Leadership,
  Inclusion, Teamwork, Opportunity), "Why handball?" (incl. Haiti IHF
  federation context), team & leadership (placeholder bios), governance &
  transparency section (marked as forthcoming).
- **Programs:** Handball Training Center (ages 13–18, what participants receive,
  what's expected), Leadership Through Sport, School & community outreach,
  Tournaments & competitions.
- **Impact:** impact dashboard (metric slots, honest placeholders), participant
  stories, before-and-after indicators, reports (forthcoming).
- **Join:** who can join, what participants receive, what we expect; joining
  options cards (athlete / coach / volunteer / host / school partner);
  "Apply now" links out to the existing Google Form. Safeguarding &
  parental-consent needs described in program info.
- **Events:** event cards (date, location, description, eligibility, CTA).
- **News:** short article cards (placeholders).
- **Support Us:** donate-money tiers (marked as *examples*), donate-equipment
  list, sponsor-a-program packages, corporate partnerships.
- **Partners:** partner cards by type (strategic / financial / program / school
  / media / equipment); no casual supporter labelled "official partner."
- **Contact:** general email, WhatsApp/phone (placeholder), location,
  Instagram, partnership & media & volunteer inquiries. No personal phone
  number published.

## Visual direction

Energetic, youthful, credible, Haitian, community-centered, athletic — **not** a
dark/aggressive sports-league aesthetic.

- Palette: deep blue base, coral accent, warm off-white, gold pop.
- Bold display headlines, high contrast, generous whitespace.
- Subtle diagonal/angled section dividers for movement. No heavy animation.
- Large photo blocks (placeholders in v1).

## Content & language rules

- FR and EN copy written directly from the brief.
- **HT (Haitian Creole) is a first-pass translation and MUST be reviewed by a
  native speaker before launch** — the `ht.json` file is marked accordingly.
- No fabricated impact numbers, testimonials, partner relationships, or bios.
  Every unverifiable element carries a `[REPLACE: …]` marker.
- Donation amounts presented explicitly as *examples* pending a real budget.

## Deliverables

- Complete Next.js project runnable with `npm install && npm run dev`, buildable
  to static export.
- `README.md`: how to edit copy, swap placeholders/photos, connect the real
  Google Form URL, and deploy.
- `CONTENT-CHECKLIST.md`: the "collect before development" list from the brief
  (logo, brand colors, mission/vision, founder story, bios, legal status,
  program details, schedule, registration criteria, safeguarding/consent,
  ≥20 photos, 3 testimonials, confirmed numbers, partner logos+permissions,
  donation method, org email, socials, upcoming events).

## Out of scope for v1

Athlete portal, schedules system, tournament management system, live CMS,
real form processing beyond the Google Form link, analytics dashboards with
live data.

## Success criteria

- All 10 routes render in all 3 locales with a working language toggle.
- Nav + Donate button behave per spec.
- No fabricated data anywhere; placeholders clearly marked.
- Static build (`npm run build`) succeeds and produces deployable output.
- Site reads as credible, youthful, Haitian, and clearly explains what a
  contribution funds.
