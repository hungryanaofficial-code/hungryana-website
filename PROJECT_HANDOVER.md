# Hungryana website — project handover

This document is for a developer who has only this repository. It describes what the code does today, how to run it, and how the live site is wired. Where the repository and the older docs disagree, this file follows the source. Unconfirmed items are marked as such.

Repository: `https://github.com/hungryanaofficial-code/hungryana-website`  
Default branch: `main` (the only branch on the remote as of this writing)  
Package name: `@hungryana/web`

Checked against the live domain on 5 Nov 2026, 7:04 PM IST: `https://hungryana.com` and `https://www.hungryana.com` both returned HTTP 200 from Vercel (`server: Vercel`, HSTS present). That confirms a Vercel deployment is serving the domain. It does not confirm which Vercel team, which Git integration, or which commit is deployed.

---

## 1. Overview

Hungryana is a marketing site for a multi-cuisine restaurant in Kirnahar, Birbhum, West Bengal. Visitors browse the story, a short set of signature dishes, and a full digital menu, then call or WhatsApp to order. There is no online checkout, account, or reservation system.

People who use it:

- Customers on a phone or desktop, including anyone who scans a QR code aimed at `/menu`.
- The restaurant owner, who reads contact messages in a Google Sheet (once the webhook is configured) and takes orders by phone or WhatsApp.

What is actually on the pages:

| URL | What the visitor gets |
| --- | --- |
| `/` | Homepage: hero, about, signature dishes, menu preview, contact form, embedded map. Header, footer, mobile tab bar, and WhatsApp button come from the root layout. |
| `/menu` | Full menu with sticky category jumps and a call-to-order button. Dish names and descriptions only. Prices are in the data file and are not rendered. |
| `/sitemap.xml` | Generated sitemap for `/` and `/menu`. |
| `/robots.txt` | Allows `/`, disallows `/api/`, points at the sitemap. |
| `/icon` | Generated 32×32 PNG favicon (a red “H”). |
| `POST /api/contact` | Saves a contact message by calling a Google Apps Script webhook. |

The homepage is `src/app/page.tsx`. It renders, in order: `Hero`, `About`, `Specialities`, `MenuPreview`, `Contact`. Several other section components exist and are not mounted. See section 13.

Business facts that are hardcoded, not loaded from a CMS:

- Name, Bengali name, tagline, email `hungryana.official@gmail.com`, phone `+91 83898 77242`, and address text live in `src/lib/constants.ts`.
- Opening copy says “Grand Opening” on “11th September” in Kirnahar. The year is not in the constant.
- Hours shown on the contact section: Mon–Thu 11:00–23:00, Fri–Sat 11:00–00:00, Sunday 10:00–23:00.

---

## 2. Tech stack

Versions below are the ones installed from `package-lock.json` (`npm ls --depth=0` on 5 Nov 2026). `package.json` only pins ranges.

| Piece | What this project uses |
| --- | --- |
| Language | TypeScript 5.9.3 (`strict: true`). Path alias `@/*` → `src/*` in `tsconfig.json`. |
| UI | React 19.2.7 and React DOM 19.2.7. |
| Framework | Next.js 15.5.19, App Router. Dev and prod servers use port **3001** (`package.json` scripts). |
| Styling | Tailwind CSS 4.3.1 via `@tailwindcss/postcss` 4.3.1. Theme tokens are in `src/app/globals.css` (`@theme`). No `tailwind.config` file. |
| Motion | `framer-motion` 12.40.0. |
| Icons | `lucide-react` 0.469.0. |
| Class names | `clsx` 2.1.1. |
| Fonts | `next/font/google`: Bangers (display) and Hind Siliguri (body, Latin + Bengali). Downloaded at build time. |
| Images | `next/image` for remote Unsplash photos and local logo/QR. `next.config.ts` also allows `images.pexels.com`, but no source file uses Pexels. |
| Analytics | `@vercel/analytics` 2.0.1, mounted in `src/app/layout.tsx`. No measurement ID in code. |
| Lint | ESLint 9.39.4 and `eslint-config-next` 15.5.19 are installed. There is no `eslint.config.*` file. `npm run lint` (`next lint`) stops and asks how to configure ESLint. |
| Database | None. |
| Auth | None. |
| Payments | None. |
| Email sending | None. The contact address is a `mailto:` link. Form submissions are not emailed. |
| Hosting | Vercel. `vercel.json` sets framework `nextjs`, install `npm install`, build `npm run build`, dev `npm run dev`, output `.next`. |
| CDN | Vercel’s edge cache. Response headers on the live site included `x-vercel-cache: HIT`. No separate CDN config is in the repo. |
| PWA | Hand-written `public/manifest.json` and `public/sw.js`. Registered by `src/components/PwaRegister.tsx`. Not a Workbox or `next-pwa` build. |
| Maps | Google Maps embed iframe. No Maps API key. |
| Contact storage | Google Sheets via Apps Script. See section 8. |
| Node | `package.json` has no `engines` field. Next.js 15.5 needs Node.js 18.18 or newer. This environment used Node v22.23.4 and npm 10.9.9. Use Node 20 or 22. |

There is no test runner, no Docker file, no CI config, and no `AGENTS.md`.

---

## 3. Folder structure

```
hungryana-website/
├── PROJECT_HANDOVER.md          this file
├── DEPLOYMENT.md                older launch guide; several statements are stale (section 13)
├── GOOGLE_SHEETS_SETUP.md       how to create the contact sheet and Apps Script
├── package.json                 scripts and dependency ranges
├── package-lock.json            lockfile; use npm ci
├── tsconfig.json                TypeScript + @/* alias
├── next.config.ts               remote image hosts only
├── next-env.d.ts                generated Next types reference; do not edit
├── postcss.config.mjs           Tailwind v4 PostCSS plugin
├── vercel.json                  Vercel install/build/dev commands
├── .env.example                 variable names only; copy to .env.local
├── .gitignore                   ignores node_modules, .next, .env*, .vercel
├── public/
│   ├── logo.png                 preferred logo; LogoImage falls back to the SVG
│   ├── logo.svg                 fallback logo, also the web-app icon
│   ├── qr-menu.png              preferred QR image
│   ├── qr-menu.svg              fallback if the PNG fails to load
│   ├── opening-banner.png       used only by the unmounted OpeningBanner component
│   ├── manifest.json            PWA name, colours, start URL
│   └── sw.js                    service worker, cache name hungryana-v1
├── scripts/
│   └── google-sheets-webhook.gs paste into Apps Script; not executed by Node
└── src/
    ├── app/
    │   ├── layout.tsx           fonts, shell, JSON-LD, Vercel Analytics, PWA register
    │   ├── page.tsx             homepage section list
    │   ├── globals.css          colours, type, layout, component classes
    │   ├── menu/page.tsx        /menu
    │   ├── api/contact/route.ts POST handler
    │   ├── sitemap.ts           /sitemap.xml
    │   ├── robots.ts            /robots.txt
    │   └── icon.tsx             generated favicon
    ├── components/
    │   ├── PwaRegister.tsx
    │   ├── layout/              AppShell, Header, Footer, MobileNav
    │   ├── sections/            page sections; several are unused (section 13)
    │   └── ui/                  Button, LogoImage, OrderNowButton, WhatsAppButton, Lightbox, …
    ├── data/
    │   ├── menu.ts              every dish, price, and featured flag
    │   └── testimonials.ts      four quotes; the carousel that would show them is not mounted
    └── lib/
        ├── constants.ts         name, phone, email, hours, nav, social placeholders
        ├── site.ts              SITE_URL from NEXT_PUBLIC_SITE_URL
        ├── google-sheets.ts     webhook POST
        └── images.ts            Unsplash URLs plus specials, category cards, gallery, why-choose
```

`node_modules/` and `.next/` are local build output. Do not commit them.

---

## 4. Setup from scratch

Requirements: Git, Node.js 20 or 22, npm 10. Network access to `registry.npmjs.org` and, at build time, Google Fonts (Next downloads Bangers and Hind Siliguri).

```bash
git clone https://github.com/hungryanaofficial-code/hungryana-website.git
cd hungryana-website
cp .env.example .env.local
npm ci
npm run dev
```

Open `http://localhost:3001`.

`npm run dev` is `next dev --port 3001`. The site will render with the fallback site URL if `.env.local` is missing. The contact form will show “Unable to save your message right now…” until `GOOGLE_SHEETS_WEBHOOK_URL` is a real Apps Script URL. Leaving the placeholder from `.env.example` in place has the same result.

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build. Also typechecks. On this machine it completed and prerendered `/`, `/menu`, `/icon`, `/robots.txt`, and `/sitemap.xml`. `/api/contact` stays dynamic. |
| `npm run start` | Serves the production build on port 3001. Run `npm run build` first. |
| `npx tsc --noEmit` | Typecheck only. There is no npm script for it. |
| `npm run lint` | Not usable as-is. `next lint` is interactive because no ESLint config file exists. Do not expect it in CI. |

`npm ci` is idempotent: a second run completes without changing the lockfile. `vercel.json` tells Vercel to run `npm install`, not `npm ci`.

There is no database to migrate and no seed script.

---

## 5. Environment variables

Every `process.env` read in this repository:

| Name | Required? | Where it is read | What it does |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended in production. Optional locally. | `src/lib/site.ts`. Consumers: `src/app/layout.tsx` (metadata, Open Graph, Twitter, JSON-LD), `src/app/sitemap.ts`, `src/app/robots.ts`, `src/components/sections/QRMenu.tsx` (unmounted). | Public canonical origin, no trailing slash (the code strips one trailing `/`). Fallback in code: `https://hungryana.com`. Because of the `NEXT_PUBLIC_` prefix, the value is inlined when the client bundle is built. Changing it needs a new build. |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Required only for a successful contact submit. | `src/lib/google-sheets.ts`, called from `src/app/api/contact/route.ts`. | Server-only URL of the Apps Script web app. Trimmed. If missing or blank, the function throws and the route returns HTTP 500. Not exposed to the browser. |

`NEXT_PUBLIC_GA_ID` appears in `.env.example` and in `DEPLOYMENT.md`. No source file reads it. Do not add a Google tag expecting this variable to do anything until someone writes that code.

No other config keys (no `next.config` env, no secrets file, no database URL). Phone, email, and map query are TypeScript constants, not environment variables.

---

## 6. Database

There is no database, ORM, schema, migration, or seed.

Contact messages are intended to land in a Google Sheet named in `GOOGLE_SHEETS_SETUP.md` as “Hungryana Contact Messages”. The sheet is not created by this repo. The Apps Script in `scripts/google-sheets-webhook.gs` appends one row per POST:

| Column | Source |
| --- | --- |
| Timestamp | `new Date()` inside Apps Script (the script project’s timezone, not a field from the website) |
| Name | JSON `name` |
| Email | JSON `email` |
| Phone | JSON `phone` (empty string if omitted) |
| Message | JSON `message` |

The website does not read the sheet back. There are no relationships.

Backup and restore, if the sheet exists: use Google Sheets’ own copy, download (File → Download), or version history. This repository has no backup script. Messages sent before the webhook was deployed are not in the sheet; the setup doc says that explicitly. Nothing in this repo proves the sheet has been created or that production has the webhook URL set.

---

## 7. APIs and routes

No route requires authentication.

### Pages

| Route | File | Render | Notes |
| --- | --- | --- | --- |
| `GET /` | `src/app/page.tsx` | Static | Homepage sections listed in section 1. Below-the-fold sections are loaded with `next/dynamic`. |
| `GET /menu` | `src/app/menu/page.tsx` | Static | Title “Menu \| Hungryana — Kirnahar, Birbhum”. Renders `MenuView`. |
| `GET /sitemap.xml` | `src/app/sitemap.ts` | Static | Two URLs: site root (priority 1, weekly) and `/menu` (priority 0.9, weekly). `lastModified` is the build time. |
| `GET /robots.txt` | `src/app/robots.ts` | Static | `Allow: /`, `Disallow: /api/`, sitemap URL from `SITE_URL`. |
| `GET /icon` | `src/app/icon.tsx` | Static image | 32×32 PNG via `next/og` `ImageResponse`. |
| `GET /manifest.json` | `public/manifest.json` | Static file | PWA manifest. |
| `GET /sw.js` | `public/sw.js` | Static file | Service worker. |
| `GET /logo.png`, `/logo.svg`, `/qr-menu.png`, `/qr-menu.svg`, `/opening-banner.png` | `public/` | Static files | |

Unknown paths use Next’s default not-found page. There is no `src/app/not-found.tsx`.

### `POST /api/contact`

File: `src/app/api/contact/route.ts`. JSON body:

| Field | Rules |
| --- | --- |
| `name` | Required string, trimmed, at least 2 characters. Shorter → 400 `"Please enter your name."` |
| `email` | Required, must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`. Otherwise → 400 `"Please enter a valid email address."` |
| `message` | Required, trimmed, at least 10 characters. Otherwise → 400 `"Message must be at least 10 characters."` |
| `phone` | Optional. Blank becomes `null` in the app and `""` in the sheet payload. |

Success: `200` `{ "ok": true }` after the webhook returns a non-error response.

Failure: `500` `{ "error": "Unable to save your message right now. Please call us or try again." }`. The real error is only `console.error`’d on the server. Causes include a missing webhook URL, a non-OK webhook response, or a webhook JSON body with an `error` field.

The browser form is `src/components/sections/Contact.tsx`. It POSTs the same four fields and shows `result.error` inline. On success it clears the form and replaces it with a thank-you state. HTML `required` on name, email, and message does not enforce the 2-character and 10-character minimums; the API does.

There is no GET handler, no API key, no CSRF token, no rate limit, and no shared secret with the Apps Script.

---

## 8. External integrations

| Service | Used for | Where | Account / dashboard |
| --- | --- | --- | --- |
| Vercel | Hosting, HTTPS, preview/prod deploys, Web Analytics | `vercel.json`, `<Analytics />` in `src/app/layout.tsx`. Live responses from `hungryana.com` are from Vercel. | Vercel project that owns this deployment. `GOOGLE_SHEETS_SETUP.md` calls it `hungryana-website`. The Vercel team and project id are not in the repo. Analytics has no extra key. |
| GitHub | Source | Remote `hungryanaofficial-code/hungryana-website`, branch `main`. | That GitHub account. No GitHub Actions. |
| Google Sheets + Apps Script | Contact form storage | `src/lib/google-sheets.ts`, `scripts/google-sheets-webhook.gs`, `GOOGLE_SHEETS_SETUP.md`. | `GOOGLE_SHEETS_SETUP.md` says to sign in as `hungryana.official@gmail.com` (or “your business Google account”). Deploy the script as a web app, execute as the owner, access “Anyone”. The repo does not prove this deployment exists. |
| Google Maps | Embedded map on the contact section | iframe in `src/components/sections/Contact.tsx`. Query is `SITE.mapsQuery` (`Kirnahar,Birbhum,West+Bengal`). | No API key and no Google Cloud project in the repo. The pin is the Maps search result for that query, not a saved Place id. |
| WhatsApp | Chat / order link | `src/components/ui/WhatsAppButton.tsx` builds `https://wa.me/<digits>` from `SITE.phone`, with a fixed prefilled message. | The WhatsApp account attached to `+91 83898 77242`. The button is `hidden` below the `md` breakpoint and shown from 768px up, because the mobile tab bar covers the corner. |
| Phone dialer | “Order Now” | `src/lib/constants.ts` `PHONE_TEL` = `tel:+918389877242`. Used by `OrderNowButton`, header (small screens), mobile “Order Now” tab, footer. | Same phone number. |
| Email | `mailto:hungryana.official@gmail.com` | Footer and contact section. The form does not send mail. | That mailbox. Public DNS for `hungryana.com` includes `v=spf1 include:spf.efwd.registrar-servers.com ~all`, which is Namecheap email forwarding. This repo does not show where that address actually delivers. |
| Unsplash | Dish and interior photos | `src/lib/images.ts`. Allowed in `next.config.ts` `images.remotePatterns`. | No Unsplash account. Hotlinked photo ids. If Unsplash removes a photo, that image breaks. Hero backgrounds are CSS `url(...)`, so they are not optimized by `next/image`. |
| Google Fonts | Bangers, Hind Siliguri | `src/app/layout.tsx` via `next/font/google`. | No account. Fetched during `next build` / `next dev`. |
| Domain DNS | `hungryana.com` | Observed 5 Nov 2026, 7:04 PM IST. | See section 10. The registrar login is not in the repo. |

No payment provider, no auth provider, no SMS API, no error tracker (no Sentry or similar).

---

## 9. Authentication and roles

There is no login, session, cookie auth, role, or permission check. Anyone who can reach the site can read every page and POST to `/api/contact`.

The Apps Script deployment described in the setup doc is “Who has access: Anyone”, and the Next route does not send a secret. Anyone who learns `GOOGLE_SHEETS_WEBHOOK_URL` can append rows to the sheet without using the website. Treat that URL as a secret.

---

## 10. Build and deployment

### Build

```bash
npm ci
npm run build
npm run start
```

`next build` writes `.next/`. `vercel.json` points Vercel at that directory. There is no `output: 'export'`; this is a normal Next server build, not a fully static HTML export. `/api/contact` needs the server.

### What is already live

On 5 Nov 2026, 7:04 PM IST:

- `https://hungryana.com` → HTTP 200, `server: Vercel`, `strict-transport-security` set (HTTPS is on).
- `https://www.hungryana.com` → HTTP 200 from Vercel as well. The repo does not say which host redirects to the other. `DEPLOYMENT.md` says to pick a primary in the Vercel domain settings.
- DNS `A` for the apex: `76.76.21.21` (the address `DEPLOYMENT.md` documents for Vercel).
- DNS `CNAME` for `www`: `cname.vercel-dns.com`.
- Nameservers: `dns1.registrar-servers.com` and `dns2.registrar-servers.com`. Those hostnames are Namecheap’s. The registrar customer login is not stored here.
- No `CNAME` or `A` for other subdomains was checked.

### How deploys are expected to work

`DEPLOYMENT.md` and `GOOGLE_SHEETS_SETUP.md` describe:

1. Import this GitHub repo into Vercel, framework Next.js, root directory `.` (this repo is not a monorepo; ignore the older `apps/hungryana` note).
2. Build command `npm run build` (also in `vercel.json`).
3. Set `NEXT_PUBLIC_SITE_URL` and `GOOGLE_SHEETS_WEBHOOK_URL` on the Vercel project.
4. Either let Vercel auto-deploy `main`, or from a machine logged into Vercel:

```bash
npx vercel --prod
```

`GOOGLE_SHEETS_SETUP.md` shows that command from a Windows path `C:\Users\iamav\Projects\hungryana-website`. That path is the original author’s machine, not a requirement.

There is no `.github/workflows` directory, no other CI, and no deploy script in the repo. This file cannot tell you whether pushes to `main` auto-deploy, or which commit production is running. Check the Vercel project’s Git settings and the deployment list.

### SSL

Vercel provisions the certificate. HSTS on the live response shows HTTPS is already active for the apex. Nothing in the repo configures certificates by hand.

### Branches

Only `main` exists on the remote. There is no documented staging branch. Vercel preview deployments, if Git is connected, would be a Vercel feature rather than something configured in this repo.

`NEXT_PUBLIC_SITE_URL` is baked in at build time. Production should be `https://hungryana.com`. A preview deployment built with that value will still advertise the production origin in metadata.

---

## 11. Scheduled jobs, background tasks, webhooks

- No cron, queue, or background worker in the repo or in `vercel.json`.
- The only webhook is outbound: `src/lib/google-sheets.ts` POSTs JSON to `GOOGLE_SHEETS_WEBHOOK_URL`.
- Apps Script exposes `doPost` only. It has no time-based trigger.
- `public/sw.js` is not a server job. In the browser it precaches `/`, `/menu`, `/manifest.json`, and `/logo.svg`, then uses a cache-first strategy for other GET requests and updates the cache when the network succeeds. Bump the `CACHE` string (`hungryana-v1`) when you need clients to drop the old cache. POST `/api/contact` is not cached.

---

## 12. Key business logic

**Menu content vs what visitors see.** All dishes, prices, descriptions, and `featured` flags are in `src/data/menu.ts` (`MENU_SECTIONS`). `MenuView` (`src/components/sections/MenuView.tsx`) is what `/menu` renders. It shows name, optional description, and a star for `featured`. It does not render `item.price`. `FullMenu` does the same and is not mounted. `FEATURED_ITEMS` at the bottom of `menu.ts` is exported and unused. A commit on `main` is titled “Hide menu prices from public menu display”; the prices are still in the data file so they can be shown again by rendering `item.price`.

**Ordering is a phone call or WhatsApp chat.** `OrderNowButton` is a `tel:` link. The WhatsApp button opens `wa.me` with “Hi Hungryana! I would like to place an order or reserve a table.” There is no cart.

**Contact save path.** Browser → `POST /api/contact` → validate → `appendContactMessage` → `fetch(GOOGLE_SHEETS_WEBHOOK_URL)`. The webhook must respond OK and, if the body is JSON, must not include `error`. A non-JSON 2xx body is treated as success. The sheet append happens only inside Apps Script, which uses the spreadsheet bound to that script (`getActiveSpreadsheet().getActiveSheet()`).

**Site URL.** `src/lib/site.ts` is the only place the canonical origin is decided. Sitemap, robots, and JSON-LD all follow it. If production is built without `NEXT_PUBLIC_SITE_URL`, those URLs still become `https://hungryana.com` because of the fallback.

**JSON-LD hours are wrong relative to the visible hours.** `buildRestaurantSchema` in `src/app/layout.tsx` maps `BUSINESS_HOURS` by taking the text before the en dash (`Monday`, `Friday`, `Sunday`) and then hardcodes `opens: '11:00'` and `closes: '23:00'` for each. Friday–Saturday until midnight and Sunday from 10:00 are not represented, and the other weekdays in each range are dropped. The contact section prints `BUSINESS_HOURS` as written, so the visible hours and the structured data differ.

**Logo and QR fallbacks.** `LogoImage` starts at `/logo.png` and, on `onError`, switches to `/logo.svg`. `QRMenu` does the same with `/qr-menu.png` → `/qr-menu.svg`. `QRMenu` is not on any page right now, so the QR files are unused by the live UI.

**Address used for SEO.** JSON-LD uses street and locality `Kirnahar`, region `West Bengal`, postal code `731302`, country `IN`, and coordinates latitude `23.758`, longitude `87.869`. Those numbers are literals in `layout.tsx`. This repo does not document how they were chosen.

**Service worker vs fresh content.** Cache-first means a returning visitor can see a cached homepage or menu until the network response replaces it. After a menu change, hard refresh or a cache-name bump is how you force an update.

---

## 13. Known issues, TODOs, and fragile spots

There are no `TODO` or `FIXME` comments in `src/`. The gaps are behavioural:

1. **`DEPLOYMENT.md` is stale.** It says the contact form opens a `mailto:` link. The form POSTs to `/api/contact`. It says to “update the real phone” and that social URLs still need updating. The phone in `src/lib/constants.ts` is already `+91 83898 77242`. It also lists gallery, testimonials, and QR as live features; those components are not imported by any page. It still mentions a monorepo path `apps/hungryana` and a Windows project path. Treat `DEPLOYMENT.md` as historical notes, not as the source of truth.

2. **Unmounted components** (nothing imports them except themselves):
   - `src/components/sections/Gallery.tsx` and `src/components/ui/Lightbox.tsx`
   - `src/components/sections/Testimonials.tsx` (`src/data/testimonials.ts`)
   - `src/components/sections/WhyChoose.tsx`
   - `src/components/sections/MenuCategories.tsx`
   - `src/components/sections/FullMenu.tsx` (older menu layout; `/menu` uses `MenuView`)
   - `src/components/sections/OpeningBanner.tsx` (`public/opening-banner.png`)
   - `src/components/sections/QRMenu.tsx`
   - `SOCIAL_LINKS` in `src/lib/constants.ts` (generic `https://instagram.com`, `https://facebook.com`, `https://twitter.com`, `https://youtube.com`). The footer does not render them.
   - `FEATURED_ITEMS` in `src/data/menu.ts`

3. **Testimonials read like sample copy** (“Priya Sharma”, “Food Blogger”, and so on). The repo does not say they are real reviews. They are not displayed.

4. **Opening badge has no year** (`OPENING.date` is `11th September`). The hero `aria-label` still says “opening soon”.

5. **JSON-LD opening hours** do not match `BUSINESS_HOURS`. See section 12.

6. **Public contact endpoint and public Apps Script.** No rate limit, captcha, or shared secret. A missing webhook is a 500, which is easy to mistake for a bug when developing locally.

7. **`npm run lint` cannot run unattended** until an ESLint config is added. `npm run build` did typecheck successfully without that config.

8. **No automated tests.**

9. **Unsplash URLs can break** without a code change. A few ids in `src/lib/images.ts` look like very new photo ids; the file comments claim each URL was checked, but this handover did not re-verify every image.

10. **Pexels is allowed and unused** in `next.config.ts`.

11. **Service worker is hand-rolled** and cache-first. A bad cached response sticks until the cache name changes or the cache is cleared. Registration errors are swallowed.

12. **WhatsApp is desktop-only** (`hidden` until `md`). On a phone, ordering is the bottom “Order Now” tab, which starts a phone call, not a WhatsApp chat.

13. **Map is a search query**, not a pinned restaurant listing. If Google’s result for “Kirnahar, Birbhum, West Bengal” is the town rather than the restaurant, the iframe will show the town.

14. **`vercel.json` uses `npm install`**, which can update within semver ranges if the lockfile is not respected the way `npm ci` would. Prefer knowing that Vercel’s Next.js installer may still choose `npm ci` when it sees a lockfile; the repo does not pin that behaviour beyond the `installCommand` string.

15. **No privacy notice or consent banner.** Vercel Analytics is loaded for every visitor. The contact form collects name, email, phone, and message and sends them to a Google Sheet.

---

## 14. How to make common changes

**Change phone, email, address, hours, or the opening date.** Edit `src/lib/constants.ts`. `PHONE_TEL` is derived from `SITE.phone` by stripping spaces, so keep the number in a form that dials correctly (`+91 …`). WhatsApp uses the same number. Hours on the page come from `BUSINESS_HOURS`. After changing hours, also fix `buildRestaurantSchema` in `src/app/layout.tsx` or the structured data will stay wrong. Redeploy.

**Change a dish or a price.** Edit `src/data/menu.ts`. Prices stay hidden until `MenuView` (and `FullMenu`, if you mount it) render `item.price`. Set `featured: true` for the gold star. Add a section by appending to `MENU_SECTIONS` with a unique `id`; the sticky bar and the `menu-<id>` anchor are generated from that list.

**Change photos.** Replace URLs in `src/lib/images.ts`. Remote hosts must be listed in `next.config.ts` `images.remotePatterns` if you use `next/image`. Hero images are CSS backgrounds and only need a URL that the browser can load. To use your own photos, put files in `public/` and reference `/your-file.jpg`.

**Change colours or type.** Edit the `@theme` block and the classes in `src/app/globals.css`. Display font is Bangers, body is Hind Siliguri, both wired in `src/app/layout.tsx`. Tailwind v4 has no `tailwind.config.js`.

**Add a homepage section that already exists.** Import it in `src/app/page.tsx` and place it in the fragment. `Gallery`, `Testimonials`, `WhyChoose`, `MenuCategories`, `QRMenu`, and `OpeningBanner` are ready to mount but were left out on purpose or by drift; check the layout before adding all of them. `OpeningBanner` uses `id="home"`, which `Hero` also uses, so do not render both without changing one id.

**Add a new page.** Add `src/app/<segment>/page.tsx`. Add the URL to `src/app/sitemap.ts`. Add a link in `NAV_LINKS` / `QUICK_LINKS` in `src/lib/constants.ts` if it should appear in the header, footer, or hero. The mobile tab bar is a separate list in `src/components/layout/MobileNav.tsx`.

**Add a field to the contact form.** Add the input in `src/components/sections/Contact.tsx`, extend `ContactPayload` and `parseContactPayload` in `src/app/api/contact/route.ts`, add the property to the JSON body in `src/lib/google-sheets.ts`, and append the matching column in `scripts/google-sheets-webhook.gs`. Then redeploy the Apps Script web app (a new deployment version) and put the new URL in `GOOGLE_SHEETS_WEBHOOK_URL` if the deployment URL changes. Existing sheet rows will not grow a new column by themselves; add the header in the sheet.

**Show prices again.** In `src/components/sections/MenuView.tsx`, inside the `<li>`, render `item.price` next to the name. Do the same in `FullMenu.tsx` if that component is brought back.

**Point social icons at real profiles.** Replace the `href`s in `SOCIAL_LINKS`, then render that array somewhere (the footer is the obvious place). Nothing displays it today.

**Change the canonical domain.** Set `NEXT_PUBLIC_SITE_URL` and redeploy. Also update the Vercel domain and DNS. JSON-LD, sitemap, and robots follow the env var automatically.

**Local contact-form test.** With the dev server running:

```bash
curl -s -H 'Content-Type: application/json' \
  -d '{"name":"Test Guest","email":"guest@example.com","phone":"9000000000","message":"Table for two this evening please."}' \
  http://127.0.0.1:3001/api/contact
```

A 500 with “Unable to save your message right now” means the route is working and the webhook is missing or rejected. Do not point a local `.env.local` at the production script unless you mean to write a row into the live sheet.

---

## 15. Accounts and access checklist

No passwords belong in this repository. The owner should keep logins for:

| Access | Why it matters | What this repo knows |
| --- | --- | --- |
| GitHub account that owns `hungryanaofficial-code/hungryana-website` | Source of truth, who can push `main` | The GitHub path only. |
| Vercel team that serves `hungryana.com` | Deploys, env vars, domains, analytics, SSL | Live HTTP responses are from Vercel. Project name is documented as `hungryana-website`. Team login is not in the repo. |
| Domain registrar for `hungryana.com` | Renewal, DNS, WHOIS | Nameservers are `dns1.registrar-servers.com` and `dns2.registrar-servers.com` (Namecheap). Confirm the customer account there before assuming it. |
| DNS access for that domain | Apex `A` `76.76.21.21`, `www` `CNAME` `cname.vercel-dns.com`, SPF TXT | Records observed 5 Nov 2026. They may be edited at the registrar, not in Git. |
| Google account for the contact sheet | Sheet plus Apps Script deployment, and the URL stored as `GOOGLE_SHEETS_WEBHOOK_URL` | Setup doc names `hungryana.official@gmail.com`. Not verified from here. |
| Mailbox for `hungryana.official@gmail.com` | Address printed on the site and used in `mailto:` links | SPF suggests Namecheap email forwarding may be involved. Destination inbox was not verified. |
| WhatsApp and the phone line for `+91 83898 77242` | Every “Order Now” and WhatsApp action | Number is hardcoded. Whether WhatsApp is registered on it was not verified. |
| Google Business Profile, Search Console, Analytics | Mentioned as launch tasks in `DEPLOYMENT.md` | Not referenced by application code. `NEXT_PUBLIC_GA_ID` is unused. Search Console verification is not in the repo. |
| Unsplash | Not required | Images are public hotlinks. |

There is no database host, no payment dashboard, and no auth provider to retain.

When someone leaves the project, remove their GitHub access and their Vercel team access, and rotate `GOOGLE_SHEETS_WEBHOOK_URL` by deploying a new Apps Script version and deleting the old deployment. The old URL keeps working until that deployment is archived.
