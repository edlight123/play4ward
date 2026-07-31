# Play4Ward website

A trilingual (French · Haitian Creole · English) marketing and credibility
website for **Play4Ward** — a youth-development organization in Jacmel, Haiti
that uses handball as a tool for youth development, leadership, and inclusion.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and
**next-intl**. All pages are statically prerendered.

**Live:** <https://play4ward.vercel.app> — deployed on Vercel under the
`edlight-initiative` team. Redeploy with `vercel --prod --scope edlight-initiative`.

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

Everything that still needs real content is marked **`[REPLACE: …]`** (English),
**`[REMPLACER : …]`** (French), or **`[RANPLASE: …]`** (Creole) directly in the
copy, and appears as a labelled placeholder block on the page. There are **no
fabricated numbers, logos, testimonials, or bios** anywhere.

`CONTENT-CHECKLIST.md` is the full, current list. Already supplied from the
official brand folder: the logo, mission, vision, values, the four pillars, the
founder story, team names and roles, the general email, and two photos.

Key spots still outstanding:

1. **Registration form** — `content/settings.json` (`registrationForm`). The
   recruitment form in the shared Drive folder is a private copy (HTTP 401); it
   has to be published and accepting responses before the Join button can use it.
2. **Donation link** — `content/settings.json` (`donate`)
3. **WhatsApp number** — `messages/*.json` under `contact.methods.whatsapp`
4. **Impact numbers** — `impact.dashboard.stats` (8 values, all `[—]`)
5. **Team bios and portraits** — `about.team.groups[].members[]`
6. **Training schedule, location, cost** — `programs.center.details`
7. **Photos** — leadership workshop, school clinic, tournament day, athlete
   portraits. Every remaining image block names the asset it needs.
8. **Partner logos** — the home partners strip is still four placeholder tiles.
9. **Events and news** — `events.items`, `news.items`

Adding real photos: use the `<Photo>` component (`src/components/Photo.tsx`) in
place of `<ImagePlaceholder>` — it takes the same `label` / `ratio` / `className`
props, so the swap is one-for-one, and `label` becomes the alt text. Put files in
`public/photos/`. The remaining placeholders are easy to find: search for
`ImagePlaceholder`.

---

## Design

- **Palette:** deep blue `#123a6b` / ink `#0f2f57`, coral `#ff5a4d`, gold `#f5b53d`, warm sand `#fbf8f3` (see `tailwind.config.ts`).
- **Type:** Archivo (display) + Hanken Grotesk (body), self-hosted via `next/font`.
- **Signature motif:** the handball goal-area arc (`src/components/GoalArc.tsx`), used in heroes, CTAs, and the footer.

---

## Content editing for the team (TinaCMS)

Non-technical staff can edit all site text, numbers, and photos — and set the
Google Form / donation / Instagram links — through a visual admin at **`/admin`**,
with no code. Saving commits to GitHub, which triggers a redeploy.

- **What's editable:** every field in `messages/{fr,ht,en}.json` (organized by
  section: Home, About, Programs, Impact, Events, etc., per language) and the
  links in `content/settings.json`. Photos upload to `public/uploads`.
- **Local editing/testing:** `npm run dev` starts Tina + Next; open
  `http://localhost:3000/admin` (works without any cloud account).

### One-time setup to make `/admin` work in production

1. **Push the repo to GitHub** (see Deploying below).
2. Go to **<https://app.tina.io>**, sign in with GitHub, create a project, and
   connect the `play4ward` repo.
3. TinaCloud gives you a **Client ID** and lets you generate a **Read-Only
   Token**.
4. In **Vercel → Project → Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` = the Client ID
   - `TINA_TOKEN` = the Read-Only Token
   - `NEXT_PUBLIC_TINA_BRANCH` = `main`
5. In **Vercel → Settings → Build & Development**, set the **Build Command** to
   `npm run build:cms` (this runs `tinacms build && next build`).

   > **Note:** `build:cms` currently passes `--skip-cloud-checks`. The committed
   > `tina/tina-lock.json` is the compiled schema TinaCloud reads, and it is stale
   > — it predates the `mission`/`about.team`/`impact.sdg`/`programs.*.body` field
   > changes. Without the flag the build fails with `ERR_CLOUD_CHECK_FAILED`.
   > Regenerate the lock with `tinacms build` somewhere that has the real
   > `TINA_TOKEN`, commit it, then drop the flag. See CONTENT-CHECKLIST.md → CMS.
6. In **Vercel → Settings → Git**, connect the GitHub repo so content commits
   auto-deploy. Then redeploy.

After that, editors visit `https://play4ward.vercel.app/admin`, log in via
TinaCloud, edit, and hit save — changes go live automatically.

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
