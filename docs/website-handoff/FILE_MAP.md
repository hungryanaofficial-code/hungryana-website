# Hungryana — file map (what to edit)

Base path: `C:\Users\iamav\Projects\hungryana-website\`

## Business info (phone, email, address, hours)

`src/lib/constants.ts` — `SITE`, `BUSINESS_HOURS`, `SOCIAL_LINKS`, `NAV_LINKS`

## Menu items and prices (data)

`src/data/menu.ts` — all sections, items, prices (`featured` = star on menu)

**Note:** Prices are stored here but **not shown** on the public menu UI (`MenuView.tsx` / `FullMenu.tsx` only show names + descriptions). To show prices again, add `{item.price}` in those components.

## Homepage sections (order)

`src/app/page.tsx`:

1. `Hero` — logo, tagline, pizza/kebab background  
2. `About`  
3. `Specialities`  
4. `MenuPreview`  
5. `Contact`  

## Hero (landing) — no Grand Opening badge

`src/components/sections/Hero.tsx`  
- No "Grand Opening · 11th September" (removed)  
- Location line: Kirnahar, Birbhum only  

## Alternate landings (not used on homepage currently)

- `src/components/sections/PujaPosterLanding.tsx` — full Puja poster image  
- `src/components/sections/DurgaPujaLanding.tsx` — interactive Puja carousel  
To use one, change import in `src/app/page.tsx` from `Hero` to that component.

## Logo

- Files: `public/logo.png`, `public/hungryana-logo.png` (official brand art)  
- Component: `src/components/ui/LogoImage.tsx`  
- Favicon / OG: `src/app/layout.tsx` (`logo.png`)

## Food / hero photos (Unsplash URLs)

`src/lib/images.ts` — `IMAGES`, `SPECIALITIES`, gallery mappings

## Contact form

- UI: `src/components/sections/Contact.tsx`  
- API: `src/app/api/contact/route.ts`  
- Google Sheets: `src/lib/google-sheets.ts` + `GOOGLE_SHEETS_SETUP.md`  
- Vercel env: `GOOGLE_SHEETS_WEBHOOK_URL`

## SEO & social preview

`src/app/layout.tsx` — metadata, JSON-LD Restaurant schema  
`src/app/sitemap.ts`, `src/app/robots.ts`

## PWA

`public/manifest.json`, `public/sw.js`, `src/components/PwaRegister.tsx`  
Service worker cache name: `hungryana-v2` (HTML loads from network first).

## Analytics

`@vercel/analytics` in `src/app/layout.tsx`  
Enable in Vercel dashboard → Project → **Analytics** → Enable Web Analytics.

## Deploy config

`vercel.json` — Next.js framework  
`.env.example` — `NEXT_PUBLIC_SITE_URL`, webhook URL

## Public assets (posters, banners)

`public/` — e.g. `hungryana-puja-landing.png`, `hungryana-sharad-subhechcha-banner.jpg`, `opening-banner.png`

## Monorepo copy (optional mirror)

`C:\Users\iamav\Projects\sf-expert-marketplace\apps\hungryana` — same app structure; sync after edits if you use both.