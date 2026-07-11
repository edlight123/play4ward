# Play4Ward website

A trilingual (French · Haitian Creole · English) marketing and credibility
website for **Play4Ward** — a youth-development organization in Jacmel, Haiti
that uses handball as a tool for youth development, leadership, and inclusion.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and
**next-intl**. All pages are statically prerendered.

---

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000> — it redirects to `/fr` (the default locale).

Other commands:

```bash
npm run build   # production build (prerenders all pages)
npm run start   # serve the production build
npm run lint    # lint
```

---

## Languages

Three locales, switchable from the header toggle (FR / KR / EN):

| Code | Language | URL prefix | Status |
|------|----------|-----------|--------|
| `fr` | French (default) | `/fr` | Ready |
| `ht` | Haitian Creole | `/ht` | **First-pass translation — needs native review** |
| `en` | English | `/en` | Ready |

> ⚠️ **The Haitian Creole copy is a first-pass translation and must be reviewed
> by a native speaker before launch.** See the note at the top of
> `messages/ht.json`.

### Editing text

All user-facing text lives in one file per language:

```
messages/fr.json
messages/ht.json
messages/en.json
```

To change wording, edit the matching key in **all three** files (the keys are
identical across files). No need to touch any component.

To check the three files still line up after editing:

```bash
node -e "const f=require('./messages/fr.json'),e=require('./messages/en.json'),h=require('./messages/ht.json');const k=o=>{let r=[];const w=(x,p)=>{if(Array.isArray(x))x.forEach(v=>v&&typeof v=='object'&&w(v,p));else if(x&&typeof x=='object')for(const y in x){r.push(p+'.'+y);w(x[y],p+'.'+y)}};w(o,'');return r.sort().join('\n')};const hc={...h};delete hc._meta;console.log(k(f)===k(e)&&k(e)===k(hc)?'OK — keys match':'MISMATCH')"
```

---

## Things to replace before launch

Everything that needs real content is marked **`[REPLACE: …]`** (English/Creole)
or **`[REMPLACER : …]`** (French) directly in the copy, and appears as a labelled
placeholder block on the page. There are **no fabricated numbers, logos,
testimonials, or bios** anywhere.

Key spots:

1. **Links** — `src/lib/config.ts`
   - `registrationForm` → the Join button opens this (currently the Google Form placeholder)
   - `instagram` → your Instagram profile
   - `donate` → your donation link/page
2. **Contact details** — `messages/*.json` under `contact.*` and `footer` (email, WhatsApp, Instagram handle)
3. **Photos** — every `[REPLACE]` image block names the asset it needs (see `CONTENT-CHECKLIST.md`)
4. **Impact numbers** — `messages/*.json` under `impact.dashboard.stats` (all currently `[—]`)
5. **Team bios** — `about.team.members`
6. **Donation amounts** — `support.money.tiers` (currently marked as examples)
7. **Logo** — `src/components/Logo.tsx` (swap the placeholder mark for official logo files)

Replacing real photos: swap `<ImagePlaceholder … />` usages for Next.js
`<Image>` (put files in `public/` and import). The placeholders are intentionally
easy to find — search the codebase for `ImagePlaceholder`.

---

## Design

- **Palette:** deep blue `#123a6b` / ink `#0f2f57`, coral `#ff5a4d`, gold `#f5b53d`, warm sand `#fbf8f3` (see `tailwind.config.ts`).
- **Type:** Archivo (display) + Hanken Grotesk (body), self-hosted via `next/font`.
- **Signature motif:** the handball goal-area arc (`src/components/GoalArc.tsx`), used in heroes, CTAs, and the footer.

---

## Deploying

**Vercel (easiest):** push to GitHub and import the repo at vercel.com. No config
needed — it detects Next.js and builds automatically.

**Netlify:** works out of the box with the Next.js runtime.

**Static-only host (e.g. GitHub Pages):** add `output: 'export'` to
`next.config.mjs`, then `npm run build` produces a static `out/` folder. Note:
with static export the middleware doesn't run, so `/` won't auto-redirect to
`/fr` — link directly to `/fr`, `/ht`, `/en` or add a small redirect page.

---

## Project structure

```
messages/                 # fr.json · ht.json · en.json — all copy
src/
  i18n/                    # next-intl routing, request config, navigation
  lib/                     # nav model + external links config
  middleware.ts            # locale routing
  app/
    layout.tsx             # root pass-through
    [locale]/
      layout.tsx           # html/body, fonts, Header/Footer, providers
      page.tsx             # Home
      about/ programs/ impact/ join/ events/ news/ support/ partners/ contact/
  components/              # Header, Footer, Hero, cards, Section, GoalArc, …
docs/superpowers/specs/    # design spec
```
