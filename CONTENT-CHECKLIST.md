# Content to collect before launch

The website structure is complete. Nothing on the site is fabricated — every
outstanding item below still shows as a clearly-marked placeholder.

**Last content drop:** the `WEBSITE` folder shared by `play4wardsport@gmail.com`
(official brand doc, Instagram carousel slides, logo, two photos). Items marked
✅ came from there.

## Brand & identity
- [x] ✅ Official logo → `public/logo-play4ward.png`, wired into `src/components/Logo.tsx`
- [ ] Logo as **SVG**, plus a light/knockout version for dark backgrounds
      (the footer currently sets the PNG in a white pill because the mark is black)
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
- [ ] Training schedule, location, and cost → `programs.center.details` (5 fields)
- [ ] What equipment is provided vs. what participants bring → `programs.center.details`

## Proof & media
- [x] ✅ Team photo with banner → `public/photos/team-banner.jpg` (home hero)
- [x] ✅ Training-session graphic → `public/photos/training-session.jpg`
      (about story, training-centre card and section)
- [ ] Photos for the remaining slots: **leadership workshop**, **school clinic**,
      **tournament day**, and **athlete portraits**. Note the two photos above are
      reused across pages; more variety would help.
- [ ] A clean training photo **without** the SDG/title overlay baked in —
      `training-session.jpg` is a designed graphic, not a plain photograph
- [ ] 3 participant or parent testimonials → `impact.stories`, home featured story
- [ ] Confirmed, documented impact numbers → `impact.dashboard.stats` (8 values, all `[—]`)

## Partners & support
- [x] ✅ Confirmed supporters named: IOC Young Leaders / Olympism 365, and the
      EdLight Initiative → `partners.note`, `home.partnersHead.note`
- [ ] Partner **logo files** + permission to display them (the home partners strip
      is still four placeholder tiles)
- [ ] Which category each supporter belongs to → `partners.categories` (5 of 6 still
      placeholders; only "Strategic partners" is filled)
- [ ] Donation method / link → `content/settings.json` (`donate`)
- [ ] Real donation amounts calculated from budget → `support.money.tiers`
- [ ] Whether used equipment is accepted, and where to deliver it → `support.equipment.note`

## Contact & channels
- [x] ✅ General organization email (`play4wardsport@gmail.com`) → `contact.methods.general`,
      `contact.inquiries`
- [x] ✅ Instagram handle `@play4ward_haiti` → already correct in `content/settings.json`
- [ ] WhatsApp / phone (organization, not personal) → `contact.methods.whatsapp`
- [ ] **Registration form URL** → `content/settings.json` (`registrationForm`).
      The "Formulaire de recrutement" in the shared folder is a **private copy** —
      it returns HTTP 401. It must be published and set to accept responses before
      the Join button can point at it.
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
