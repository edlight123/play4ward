# Content to collect before launch

The website structure is complete. Nothing on the site is fabricated.

**Placeholders are hidden from visitors, not deleted.** The markers below still
live in `messages/*.json` — that is what the team sees as a prompt in `/admin` —
but the pages treat `[REPLACE: …]`, `[REMPLACER : …]`, `[RANPLASE: …]`, `[—]` and
`[DATE]` as "no value" and hide the surrounding row, block, or section
(`src/lib/placeholder.ts`). **Fill a value in `/admin` and it appears on its own** —
no code change needed. So the checklist below is still the to-do list; it is just
no longer visible on the public site.

Currently hidden for want of content: the impact dashboard (8 empty stats), the
testimonials block, the home featured story, all news articles, all events, team
bios and portraits, 5 of 6 partner category descriptions, cost / what-to-bring,
the donation-method and equipment notes, and 3 program-card photos. The Events and
News pages stay in the nav and show an honest "nothing yet, follow us on Instagram"
message instead.

Note: the four sample events (12 SEP, 05 OCT, 16 NOV, 30 NOV) were **invented
dates** being shown publicly as if real. They are no longer rendered.

**Last content drop:** the `WEBSITE` folder shared by `play4wardsport@gmail.com`
(official brand doc, Instagram carousel slides, logo, two photos). Items marked
✅ came from there.

## Brand & identity
- [x] ✅ Official logo → `public/logo-play4ward.png`, wired into `src/components/Logo.tsx`.
      Trimmed of its white margins and the white background knocked out to
      transparency, so it sits directly on the cream header.
- [ ] Logo as **SVG**, plus a light/knockout version for dark backgrounds. The
      mark's player silhouette is black, so the footer still sets the logo in a
      white pill — a light version would let it sit on dark cleanly.
- [ ] Confirmed brand colors and fonts. Note the official assets use a
      **blue + gold** palette; `tailwind.config.ts` still uses coral as the accent.

## Organization
- [x] ✅ Mission and vision — official wording, from the brand doc → `about.mv`
- [x] ✅ Founder story / why Play4Ward exists → `about.story`
- [x] ✅ Values — the three official values replace the earlier five → `about.values`
- [x] ✅ Four official pillars (Inclusion, Youth Leadership, Empowerment, Resilience) → `mission`
- [x] ✅ Team names and roles → `about.team.groups`
- [ ] **Team bios** (2–3 sentences each) and **portraits** for all four people →
      `about.team.groups[].members[].bio`
- [ ] Legal registration status → `about.governance`
- [ ] Safeguarding & parental-consent procedures → `join.safeguarding`

## Programs
- [x] ✅ Program card descriptions — official "Ce que nous faisons" wording → `programCards`
- [x] ✅ Age range corrected to **12–19** in 7 places (the site previously said 13–18,
      which had no source; the July 2026 fund application says "youth between the ages
      of 12 and 19"). **Please confirm** — this is recruitment eligibility.
- [x] ✅ Location "School field, Jacmel", Schedule "Weekly sessions", and Equipment
      provided "handballs, cones, agility ladders, bibs" → `programs.center.details`,
      all sourced from the fund application
- [ ] **Cost** and **what to bring** → `programs.center.details`. Not stated in any
      document we hold, so still placeholders.
- [ ] A more specific schedule (which day, what time) and the name of the school /
      venue, if you want those public

## Proof & media
- [x] ✅ Team photo with banner → `public/photos/team-banner.jpg` (home hero)
- [x] ✅ Clean training photo, no overlay → `public/photos/training-drills.jpg`
      (training-centre card + programs page). Extracted from the `video` file in the
      shared Drive folder: a letterboxed landscape clip, bars auto-cropped.
- [x] ✅ Player beside the team banner → `public/photos/player-banner.jpg`
      (about story, portrait 4/5). Also from the video.
- [ ] Photos for the remaining slots: **leadership workshop**, **school clinic**,
      **tournament day**, and **athlete portraits**. The video is entirely training
      footage, so it cannot honestly fill those three — they are different activities.
      Frames are also only 1080px wide; real photographs would be sharper.
- [ ] 3 participant or parent testimonials → `impact.stories`, home featured story
- [ ] Confirmed, documented impact numbers → `impact.dashboard.stats` (8 values, all `[—]`).
      The July 2026 fund application says "attendance continues to grow with every
      session" but gives no figures anywhere.

## Partners & support
- [x] ✅ Confirmed supporters named: IOC Young Leaders / Olympism 365, and the
      EdLight Initiative → `partners.note`, `home.partnersHead.note`
- [x] ✅ EdLight Initiative logo → `public/partners/edlight-initiative.png`, live in
      the home partners strip (white background knocked out to transparency)
- [x] ✅ **IOC Young Leaders / Olympism 365 logo** → `public/partners/ioc-young-leaders.png`,
      cropped from the flat supporter credit at the foot of Play4Ward's own carousel
      slide (not the photographed banner, which is on fabric) and made transparent.
      450×82 native, shown at 36px high, so it is sharp at 2× but would not survive
      being blown up much larger — a vector or high-res original would be better.
      **Check the IOC's brand guidelines:** the Olympic rings are a protected mark.
      Play4Ward already shows this exact credit on its own banner and posts, so the
      site mirrors existing practice, but the terms are worth confirming.
- [x] ✅ "Supported by" bar high on the home page (`src/components/SupportedBy.tsx`),
      showing both supporter logos right under the hero — the first credibility signal
      a new visitor gets. Driven by `confirmedPartners`, so it needs no separate edit.
- [ ] Remaining partner logo files + permission to display them (three placeholder
      tiles left in the home strip)
- [ ] Which category each supporter belongs to → `partners.categories` (5 of 6 still
      placeholders; only "Strategic partners" is filled)
- [ ] Donation method / link → `content/settings.json` (`donate`). The seeded value
      is a dead placeholder, so the Support page no longer shows a broken Donate
      button — it invites people to email instead. Paste a real URL in `/admin` and
      the button returns by itself.
- [ ] Real donation amounts calculated from budget → `support.money.tiers`
- [ ] Whether used equipment is accepted, and where to deliver it → `support.equipment.note`

## Contact & channels
- [x] ✅ General organization email (`play4wardsport@gmail.com`) → `contact.methods.general`,
      `contact.inquiries`
- [x] ✅ Instagram handle `@play4ward_haiti` → already correct in `content/settings.json`
- [ ] WhatsApp / phone (organization, not personal) → `contact.methods.whatsapp`.
      The fund application lists **971-427-7066** and **jfrvasty@gmail.com**, but both
      are an individual team member's personal details and the contact page states
      "We don't publish a personal phone number." Not published — confirm whether that
      number is the organization's before it goes on the site.
- [ ] **Registration form URL** → `content/settings.json` (`registrationForm`).
      The "Formulaire de recrutement" in the shared folder is a **private copy** —
      it returns HTTP 401. Publish it and set it to accept responses, then paste the
      URL in `/admin`.
      Until then the Join page shows an "Inscriptions bientôt ouvertes" panel with an
      email button rather than a dead link, and the safeguarding block swaps its
      "the button below opens our Google Form" note for the same message. Both switch
      back automatically once the URL is set (`linkIsLive` in `src/lib/config.ts`).
- [ ] Dedicated role addresses, if wanted. All three inquiry types currently route
      to the single general address.

## Ongoing
- [ ] Upcoming event details (date, location, description, eligibility) → `events.items`
      (4 example entries, places still placeholders)
- [ ] News articles → `news.items` (3 placeholder entries)

## SDG alignment
- [x] ✅ SDG section added to the impact page (`impact.sdg`, rendered by
      `src/components/SdgGoals.tsx`) — SDG 3, 5, and 10 with the doc's full
      write-ups. French goal names are taken verbatim from the organization's own
      "HAITI HANDBALL" graphic, so those are official.
- [ ] **Official UN SDG icon files.** The cards use each goal's real UN brand
      colour, but the UN's icon artwork is not bundled — nothing on the page
      imitates an official SDG badge. Drop the icons in beside the number in
      `SdgGoals.tsx` once you have them (they're free from the UN's
      communications-materials page, subject to their guidelines).

## Programs long-form
- [x] ✅ The doc's Training Sessions / Workshops / Tournaments write-ups are now
      on the programs page as `programs.{center,leadership,tournaments}.body`
      (two paragraphs each, editable in `/admin`).
- [ ] Nothing outstanding — everything usable from the brand doc has been placed.

## Translation
- [ ] **Haitian Creole review by a native speaker** → `messages/ht.json`.
      All Creole copy is first-pass, including everything added in this content
      drop (story, mission, vision, values, pillars).
- [ ] French review — the mission, vision, "who we are", "what we do", and pillar
      titles are taken **verbatim from the official French slides**, so those are
      brand-approved. The story and value write-ups are translations and would
      benefit from a read-through.

## CMS
- [x] ✅ `/admin` now resolves. It was returning **404**: the next-intl middleware
      redirected `/admin` to `/fr/admin` (not a route), and even without that, Next
      does not serve `public/admin/index.html` at `/admin`. Fixed with a middleware
      exclusion plus a rewrite. The Tina admin itself was building fine all along —
      it was only reachable at the exact URL `/admin/index.html`.
- [ ] **There is no password on `/admin`.** Access is TinaCloud's GitHub login: only
      people you add as collaborators on the TinaCloud project can save changes. The
      page itself is publicly loadable (it is a static file), and the GitHub repo is
      public, so site content is public either way — but nobody can write without a
      TinaCloud session. If you want the page itself gated, that needs Vercel
      Deployment Protection or an equivalent, which is separate from Tina.
- [ ] **Regenerate `tina/tina-lock.json`.** It is the compiled schema TinaCloud
      reads, it is committed to the repo, and it is currently **stale** — it still
      describes the old shape (`mission.moveForward`, flat `about.team.members`)
      and has none of the new fields (`mission.inclusion`, `about.team.groups`,
      `about.team.portraitLabel`, `impact.sdg`, `programs.*.body`).
      It is generated by `tinacms build`, which needs `NEXT_PUBLIC_TINA_CLIENT_ID`
      and `TINA_TOKEN`. Those exist in Vercel but come back empty from
      `vercel env pull` (they look to be marked sensitive), so the lock could not
      be regenerated from this machine. Run `tinacms build` somewhere that has the
      real token, then commit the updated lock file.
      **Until that happens:** the public site is completely unaffected (it is
      statically rendered from `messages/*.json`; TinaCloud is not in the runtime
      path), but `/admin` may error when editing the *new* fields, because its
      queries go to TinaCloud whose indexed schema is still the old one.
- [ ] **Restore the cloud check.** `build:cms` currently runs
      `tinacms build --skip-cloud-checks`. Without that flag the Vercel build fails
      with `ERR_CLOUD_CHECK_FAILED` on the stale-lock mismatch above
      (`[NON_BREAKING - TYPE_ADDED] Type 'MessagesMissionInclusion' was added`).
      Once the lock is regenerated and committed, drop `--skip-cloud-checks` so the
      guard against genuinely breaking schema changes is active again.
- [ ] `npm run build:cms` cannot be run locally at all without those credentials.
      `npm run build` (no CMS step) works and is what to use for local checks.
