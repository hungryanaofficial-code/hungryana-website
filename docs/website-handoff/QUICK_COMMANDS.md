# Hungryana — quick commands

Run PowerShell from the **deploy repo** unless noted.

## Local development

```powershell
cd C:\Users\iamav\Projects\hungryana-website
npm install
npm run dev
```

Open **http://localhost:3001** (port is fixed in `package.json`).

If you still see an old Puja poster page: **Incognito** or DevTools → Application → Unregister service worker → Clear site data → Ctrl+Shift+R.

## Production build test

```powershell
cd C:\Users\iamav\Projects\hungryana-website
npm run build
npm run start
```

## Deploy to Vercel (production)

```powershell
cd C:\Users\iamav\Projects\hungryana-website
git add -A
git status
git commit -m "Your message"
git push origin main
npx vercel --prod --yes -S avijit-patra-s-projects
```

If `vercel` says "Not authorized", retry with `-S avijit-patra-s-projects` or push to GitHub and let Vercel auto-deploy.

## Clear Next.js cache

```powershell
cd C:\Users\iamav\Projects\hungryana-website
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

## GitHub

- Remote: `https://github.com/hungryanaofficial-code/hungryana-website.git`
- Branch: `main`