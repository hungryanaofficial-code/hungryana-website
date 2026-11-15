# Hungryana website — complete reference

**Restaurant:** Hungryana (হাংরিয়ানা)  
**Tagline:** Eat Hearty, Stay Hungry  
**Menu tagline (menu page):** Eat Hearty, Stay Hungry  
**Location:** Kirnahar, Birbhum, West Bengal, India  
**Phone / Order:** +91 83898 77242  
**Email:** hungryana.official@gmail.com  
**Live site:** https://hungryana.com  
**Menu URL:** https://hungryana.com/menu  

---

## 1. Where the code lives

| Role | Path |
|------|------|
| **Production / deploy (use this)** | `C:\Users\iamav\Projects\hungryana-website` |
| **Monorepo mirror** | `C:\Users\iamav\Projects\sf-expert-marketplace\apps\hungryana` |
| **GitHub** | `hungryanaofficial-code/hungryana-website` |
| **Vercel team** | `avijit-patra-s-projects` (project: `hungryana-website`) |

Always develop and deploy from **hungryana-website** unless you explicitly maintain both copies.

---

## 2. Technology

- **Next.js 15** (App Router)  
- **React 19**  
- **TypeScript**  
- **Tailwind CSS v4**  
- **Framer Motion** (animations on optional Puja landing)  
- **Vercel** hosting  
- **@vercel/analytics** (code in site; enable in Vercel dashboard)  
- **PWA:** `manifest.json` + service worker `public/sw.js`  

Dev port: **3001** (`npm run dev`).

---

## 3. Current homepage (as of handoff)

**Active layout** (`src/app/page.tsx`):

1. **Hero** — split background (pizza left, kebab right), logo, Bengali name, tagline, Kirnahar location, Browse Menu + Order Now, quick links.  
2. **About** — foodie + cook story (no Grand Opening date in subtitle).  
3. **Specialities** — 3 “Must Try” dishes with photos.  
4. **Menu preview** — cuisine chips + 4 dish cards.  
5. **Contact** — form + map.

**Removed from landing (per your request):**

- Puja poster as full-page hero (file still in `public/hungryana-puja-landing.png` if you want it again).  
- “Grand Opening · 11th September” badge on hero.  
- Grand Opening text in About subtitle, footer, mobile menu (shows **Kirnahar, Birbhum** only).

**Unused components** (kept in repo for seasonal use):

- `PujaPosterLanding.tsx` — single full poster + buttons.  
- `DurgaPujaLanding.tsx` — carousel, wish cards, WhatsApp share.

To switch homepage: edit `src/app/page.tsx` and swap `Hero` for another component.

---

## 4. Menu data

**Source file:** `src/data/menu.ts`

Structured as `MENU_SECTIONS` with:

- Starters & Soups  
- South Indian & Pizza  
- Paratha, Rice & Indian Mains (incl. biryanis)  
- Chinese Specialties  
- Tandoor Corner  
- Beverages, Coffee & Desserts  

Prices are in `price` fields (e.g. `₹160`). This matches the **3-page Hungryana print menu** you provided (Pakora, momos, dosa, pizza, kosha, tikka, lassi, etc.).

**Public display:** Menu UI **hides prices** (only names, descriptions, featured star). Prices remain in data for future use or print scripts.

**To change menu:** Edit `menu.ts` only — then rebuild/deploy. Menu page: `src/app/menu/page.tsx` + `MenuView.tsx`.

---

## 5. Branding & assets

| Asset | Location |
|-------|----------|
| Official logo PNG | `public/logo.png`, `public/hungryana-logo.png` |
| Logo SVG fallback | `public/logo.svg` |
| Puja festive poster (optional) | `public/hungryana-puja-landing.png` |
| Sharad banners | `public/hungryana-sharad-subhechcha-banner.jpg`, `.png`, `story.png` |
| Opening banner image | `public/opening-banner.png` (not on current hero) |

**Spelling:** Brand is **Hungryana** (not Hungryiana).

---

## 6. Navigation & mobile app feel

- **Header:** logo, nav, Order Now on mobile.  
- **Footer:** logo, links, contact.  
- **Bottom tab bar (mobile):** Home, Menu, Order Now (tel), Contact.  
- **WhatsApp:** floating button (pre-filled message).  
- **Order Now:** all CTAs dial **+91 83898 77242**.

---

## 7. Contact form

1. User submits on `/#contact`.  
2. `POST /api/contact` validates and may send to Google Sheets via webhook.  
3. Setup: follow **`GOOGLE_SHEETS_SETUP.md`** in repo root.  
4. On Vercel set: **`GOOGLE_SHEETS_WEBHOOK_URL`**.  
5. Without webhook, API returns error — form will not save until configured.

Script template: `scripts/google-sheets-webhook.gs` (in monorepo `apps/hungryana/scripts/`).

---

## 8. Environment variables

See `.env.example`:

```env
NEXT_PUBLIC_SITE_URL=https://hungryana.com
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
```

Optional: `NEXT_PUBLIC_GA_ID` for Google Analytics (not installed by default).

Set variables in **Vercel** → Project → Settings → Environment Variables → redeploy.

---

## 9. Analytics (visitors)

- Package: `@vercel/analytics` in `layout.tsx`.  
- **You must enable** Web Analytics once:  
  https://vercel.com/avijit-patra-s-projects/hungryana-website/analytics  
- CLI cannot enable it; dashboard click required.  
- Stats appear after real traffic.

---

## 10. Deploy workflow

```powershell
cd C:\Users\iamav\Projects\hungryana-website
npm run build
git add -A
git commit -m "Describe your change"
git push origin main
npx vercel --prod --yes -S avijit-patra-s-projects
```

Git push alone may trigger Vercel if connected to GitHub.

**Domain aliases (typical):** hungryana.com, www.hungryana.com

---

## 11. Local development & caching issues

```powershell
cd C:\Users\iamav\Projects\hungryana-website
npm install
npm run dev
```

**If old Puja page still shows on localhost:**

The PWA service worker cached an old homepage. Fix:

1. Chrome DevTools → Application → Service Workers → **Unregister**  
2. Clear site data for `localhost:3001`  
3. Hard refresh (Ctrl+Shift+R)  
4. Or use Incognito  

Service worker: `public/sw.js`, cache version **`hungryana-v2`** — HTML pages prefer **network first**.

---

## 12. Social links (still placeholders)

In `src/lib/constants.ts`, `SOCIAL_LINKS` still point to generic instagram.com, facebook.com, etc.  
**Update** with real Hungryana profile URLs before marketing.

---

## 13. OPENING constant (legacy)

`OPENING` in `constants.ts` still contains `Grand Opening` / `11th September` for possible reuse but **is not shown** on hero, About, footer, or header after your updates. Safe to remove or repurpose for events.

---

## 14. Related files in monorepo (not the live site)

Under `sf-expert-marketplace/apps/hungryana/`:

- **Python poster generators:** `scripts/brand-poster.py`, `generate-print-menu-poster.py`, `generate-sharad-banner.py`, etc.  
- **Print menu poster output:** `public/print/hungryana-menu-poster-print.png`  
- **Employee Manager** Salesforce app — separate project under `apps/employee-manager/`

These do not deploy to hungryana.com unless you copy outputs into `hungryana-website/public/`.

---

## 15. Checklist before you leave Cursor

- [ ] Copy or backup entire folder: `C:\Users\iamav\Projects\hungryana-website`  
- [ ] Confirm GitHub has latest `git push origin main`  
- [ ] Read `docs/website-handoff/QUICK_COMMANDS.md`  
- [ ] Save Vercel login / GitHub access separately  
- [ ] Finish `GOOGLE_SHEETS_WEBHOOK_URL` if contact form needed  
- [ ] Enable Vercel Analytics in dashboard if you want visitor counts  
- [ ] Update real social URLs in `constants.ts`  
- [ ] After Puja season: keep `Hero` on homepage (current) or swap components as needed  

---

## 16. Who to contact for hosting

- **Vercel** account tied to project `hungryana-website`  
- **Domain** hungryana.com DNS should point to Vercel (see `DEPLOYMENT.md` for detail)  
- **GitHub org/user:** `hungryanaofficial-code`

---

## 17. Document index

All handoff docs: **`docs/website-handoff/`**

- `README.md` — index  
- `COMPLETE_WEBSITE_REFERENCE.md` — this file  
- `QUICK_COMMANDS.md` — commands  
- `FILE_MAP.md` — edit locations  

**End of reference.** Save this folder with your project backup.