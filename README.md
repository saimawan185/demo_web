# IRIS Salon & Spa — Demo Website

A premium, responsive demo website for **IRIS Salon & Spa** in Gulberg 2, Lahore.

## Pages

- **Home** — Hero, services preview, suggested hours, reviews, CTA
- **About Us** — Story, values, team
- **Services & Prices** — Full service list with dummy PKR pricing
- **Contact** — Phone, address, map, contact form (demo)
- **Privacy Policy**

## Suggested Hours

| Days | Hours |
|------|-------|
| Monday – Thursday | 10:00 AM – 8:30 PM |
| Friday – Sunday | 11:00 AM – 9:30 PM |

Opens earlier on weekdays for morning appointments; extended weekend hours for peak demand.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/iris_saloon_demo/](http://localhost:3000/iris_saloon_demo/) when running locally.

## Live Site (GitHub Pages)

**https://saimawan185.github.io/iris_saloon_demo/**

## Build for Free Hosting

This project uses **Next.js static export** — no server required.

```bash
npm install
npm run build
```

Upload the contents of the **`out/`** folder to any static host:

- **Netlify** — drag & drop the `out` folder, or connect your Git repo
- **Vercel** — import repo (auto-detects Next.js)
- **GitHub Pages** — upload `out` contents to `gh-pages` branch
- **Cloudflare Pages** — connect repo or upload `out`
- **InfinityFree / 000webhost** — upload `out` via FTP to `public_html`

### GitHub Pages note

If hosting on GitHub Pages with a project URL (e.g. `username.github.io/iris-salon`), set `basePath` in `next.config.ts`:

```ts
basePath: '/iris-salon',
```

## Tech Stack

- Next.js 15 (App Router, static export)
- Tailwind CSS 4
- TypeScript

## Demo Disclaimer

Prices and contact form are for demonstration only. Use phone **0301-8467799** or WhatsApp to book real appointments.
