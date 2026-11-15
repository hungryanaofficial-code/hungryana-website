# Hungryana — ONE FILE maintenance vault

**Purpose:** Everything needed to run, host, and fix **hungryana.com** after you stop using Cursor.

**Important security:**

1. **Copy this file** to your PC as `MASTER_MAINTENANCE_VAULT_FILLED.md` (or print / USB / password manager).
2. **Fill in** every `________` field from your real accounts (Vercel, GitHub, domain, Google).
3. **Do not commit** a filled copy to GitHub (passwords would be public).
4. This website has **no SQL/database** — contact messages go to **Google Sheets** only.

**Last structured:** November 2026

---

## A. Business identity (public)

| Item | Value |
|------|--------|
| Brand name | Hungryana |
| Bengali name | হাংরিয়ানা |
| Tagline | Eat Hearty, Stay Hungry |
| Phone / Order | +91 83898 77242 |
| Email | hungryana.official@gmail.com |
| Address | Kirnahar, Birbhum, West Bengal, India |
| Live website | https://hungryana.com |
| Menu page | https://hungryana.com/menu |
| WhatsApp (uses phone) | https://wa.me/918389877242 |

---

## B. Code on your computer

| Item | Path |
|------|------|
| **Main website (deploy from here)** | `C:\Users\iamav\Projects\hungryana-website` |
| Monorepo copy (optional mirror) | `C:\Users\iamav\Projects\sf-expert-marketplace\apps\hungryana` |
| Handoff docs folder | `...\hungryana-website\docs\website-handoff\` |

---

## C. Git & GitHub

| Item | Value |
|------|--------|
| Repository URL | https://github.com/hungryanaofficial-code/hungryana-website |
| Clone URL (HTTPS) | https://github.com/hungryanaofficial-code/hungryana-website.git |
| Default branch | `main` |
| Git remote name | `origin` |

### Credentials (fill in — keep private)

| Field | Your value |
|-------|------------|
| GitHub username / org | hungryanaofficial-code |
| GitHub login email | ________________________ |
| GitHub password | ________________________ |
| GitHub 2FA recovery codes location | ________________________ |
| Personal Access Token (if used) | ________________________ |
| Who owns the GitHub org/repo | ________________________ |

### Git commands you will use

```powershell
cd C:\Users\iamav\Projects\hungryana-website
git status
git pull origin main
git add -A
git commit -m "Describe change"
git push origin main
```

---

## D. Hosting — Vercel

| Item | Value |
|------|--------|
| Platform | https://vercel.com |
| Team / scope (CLI) | `avijit-patra-s-projects` |
| Project name | `hungryana-website` |
| Project ID (from earlier inspect) | `prj_CDshaOdPCqN0viUtAd7DHHMAfBRm` |
| Framework | Next.js 15 |
| Node version (project setting) | 24.x |
| Production URLs | https://hungryana.com, https://www.hungryana.com |
| Default Vercel URL | https://hungryana-website.vercel.app |
| Analytics page | https://vercel.com/avijit-patra-s-projects/hungryana-website/analytics |
| Env vars UI | Project → Settings → Environment Variables |

### Vercel credentials (fill in)

| Field | Your value |
|-------|------------|
| Vercel login email | ________________________ |
| Vercel password | ________________________ |
| Vercel team owner name | Avijit patra's projects (or update) |
| Linked GitHub account | ________________________ |

### Deploy commands

```powershell
cd C:\Users\iamav\Projects\hungryana-website
npm run build
git push origin main
npx vercel --prod --yes -S avijit-patra-s-projects
```

If CLI says **Not authorized**, sign in: `npx vercel login` then retry with `-S avijit-patra-s-projects`.

---

## E. Domain & DNS (hungryana.com)

The site uses **Vercel**. DNS is set at your **domain registrar** (where you bought hungryana.com).

### Standard Vercel DNS records (verify in Vercel → Domains)

| Type | Host / Name | Value | Notes |
|------|-------------|-------|--------|
| A | `@` | `76.76.21.21` | Root domain → Vercel |
| CNAME | `www` | `cname.vercel-dns.com` | www subdomain |

Check live values: Vercel → **hungryana-website** → **Settings** → **Domains** (Vercel may show updated IPs).

### Domain registrar (fill in)

| Field | Your value |
|-------|------------|
| Registrar (Namecheap / GoDaddy / Cloudflare / other) | ________________________ |
| Registrar login URL | ________________________ |
| Registrar email | ________________________ |
| Registrar password | ________________________ |
| Domain purchased date | ________________________ |
| Domain expiry / renewal date | ________________________ |
| WHOIS / privacy enabled? | ________________________ |

### DNS propagation check

https://dnschecker.org → search `hungryana.com`

### SSL

HTTPS is automatic on Vercel (Let’s Encrypt). No separate SSL password.

---

## F. Environment variables (Vercel production)

Set in **Vercel → Settings → Environment Variables**. Redeploy after changes.

| Variable name | Purpose | Your value (fill in) |
|---------------|---------|----------------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | `https://hungryana.com` |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Contact form → Sheet | ________________________ |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (optional, not wired unless you add code) | ________________________ |

Local dev uses `.env.local` (never commit). Template: `.env.example` in repo root.

---

## G. Database credentials

**None.** This site does not use MySQL, MongoDB, or Postgres.

| Storage | What it stores | Credentials |
|---------|----------------|-------------|
| **Google Sheet** | Contact form submissions | Google account (below) |
| **Vercel** | Hosts the app only | Vercel account (above) |
| **GitHub** | Source code | GitHub account (above) |

---

## H. Google (email, Sheets, contact webhook)

| Item | Value |
|------|--------|
| Business email | hungryana.official@gmail.com |
| Contact form code | `src/app/api/contact/route.ts` |
| Apps Script template | `scripts/google-sheets-webhook.gs` |
| Setup guide | `GOOGLE_SHEETS_SETUP.md` (repo root) |
| Expected sheet name | Hungryana Contact Messages |
| Sheet columns | Timestamp, Name, Email, Phone, Message |

### Google credentials (fill in)

| Field | Your value |
|-------|------------|
| Gmail / Google password | ________________________ |
| Google 2FA backup | ________________________ |
| Google Sheet URL (contact messages) | ________________________ |
| Apps Script deployment URL (`.../exec`) | ________________________ (same as `GOOGLE_SHEETS_WEBHOOK_URL`) |

---

## I. Analytics

| Service | Status | Link / action |
|---------|--------|----------------|
| Vercel Web Analytics | Code installed; enable in dashboard | https://vercel.com/avijit-patra-s-projects/hungryana-website/analytics |
| Google Analytics 4 | Optional; not required | https://analytics.google.com |

| GA4 property ID (if created) | ________________________ |

---

## J. Social media (update in code)

File: `src/lib/constants.ts` → `SOCIAL_LINKS` (currently placeholder URLs).

| Platform | Real profile URL (fill in) |
|----------|----------------------------|
| Instagram | ________________________ |
| Facebook | ________________________ |
| Twitter/X | ________________________ |
| YouTube | ________________________ |

---

## K. Local development

| Item | Value |
|------|--------|
| Dev port | 3001 |
| Start dev server | `npm run dev` |
| Build | `npm run build` |
| Production test locally | `npm run start` |
| Clear stuck cache | Delete `.next` folder; unregister service worker in browser |

**Old Puja page on localhost:** PWA service worker cached old HTML → Incognito or clear site data (see `public/sw.js`, cache `hungryana-v2`).

---

## L. What to edit for common changes

| Change | File |
|--------|------|
| Phone, email, address, hours | `src/lib/constants.ts` |
| Menu items / prices (data) | `src/data/menu.ts` |
| Homepage sections | `src/app/page.tsx` |
| Hero (landing) | `src/components/sections/Hero.tsx` |
| Logo file | `public/logo.png` |
| Contact form | `src/components/sections/Contact.tsx` + Vercel env webhook |

Menu **prices** exist in `menu.ts` but are **hidden** on the public menu page.

---

## I. Accounts checklist (tick when you have saved logins)

- [ ] GitHub (`hungryanaofficial-code/hungryana-website`)
- [ ] Vercel (`hungryana-website` project)
- [ ] Domain registrar (hungryana.com)
- [ ] Google (`hungryana.official@gmail.com` + Sheet + Apps Script)
- [ ] Optional: Google Search Console, Google Business Profile, Analytics

---

## N. Google Search Console & Business (optional SEO)

| Item | Fill in |
|------|---------|
| Search Console property | https://search.google.com/search-console |
| Verification method (DNS TXT / HTML) | ________________________ |
| Sitemap URL submitted | https://hungryana.com/sitemap.xml |
| Google Business Profile login | ________________________ |
| Business listing link | ________________________ |

---

## O. Emergency contacts & vendors

| Role | Name | Phone / email |
|------|------|----------------|
| Site owner | ________________________ | ________________________ |
| Developer / past help (Cursor) | ________________________ | ________________________ |
| Domain support | ________________________ | ________________________ |
| Hosting (Vercel) support | support via vercel.com/help | |

---

## P. Backup checklist (before canceling Cursor)

- [ ] Full folder copy: `C:\Users\iamav\Projects\hungryana-website`
- [ ] This file **filled** saved outside Git (USB / encrypted drive / password manager)
- [ ] `git push origin main` so GitHub is up to date
- [ ] Export contact Google Sheet periodically (File → Download)
- [ ] Screenshot Vercel env vars page (blur if sharing)

---

## Q. Quick reference links (bookmark these)

| Link |
|------|
| https://hungryana.com |
| https://github.com/hungryanaofficial-code/hungryana-website |
| https://vercel.com/avijit-patra-s-projects/hungryana-website |
| https://sheets.google.com |
| https://dnschecker.org |

---

**End of master vault.**  
Fill every blank, store the filled copy safely, then you do not need to search the project for hosting or access details.