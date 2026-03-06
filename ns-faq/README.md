# Network School FAQ Landing Page

An SEO-optimized FAQ landing page for [Network School](https://ns.com), designed to drive referral sign-ups. Built with Vite + React. Each question has its own page for programmatic SEO.

## Setup

1. **Add your referral link** — Edit `src/config.js` and set `REFERRAL_URL` to your Network School referral link.

2. **Update site URL** — When deploying, set `SITE_URL` in `src/config.js` to your production URL. The sitemap and robots.txt are generated from this at build time.

## Adding New Questions

Add new FAQ items to `src/data/faqData.js`. Each item needs:
- `id`, `slug` (URL-friendly, e.g. `my-new-question`)
- `question`, `answer`
- `seo`: `{ title, description, keywords }` — used for the question page's meta tags

New questions automatically get a page at `/faq/{slug}` and are added to the sitemap.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`. The build includes:
- Static HTML and assets
- Dynamic `sitemap.xml` with all FAQ URLs (generated from `faqData.js`)
- `robots.txt` (sitemap URL updated from `SITE_URL`)

## Admin Panel

Manage FAQs at `/admin`. Add, edit, and delete questions, then export the updated `faqData.js`.

1. Create `.env` with `VITE_ADMIN_SECRET=your-password`
2. Run `npm run dev` and visit `http://localhost:5173/admin`
3. Log in with your password
4. Make changes, click "Export faqData.js"
5. Replace `src/data/faqData.js` with the downloaded file
6. Run `npm run build` to deploy

For production, set `VITE_ADMIN_SECRET` in your hosting provider's environment variables.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments. `vercel.json` rewrites all routes to `index.html` for client-side routing. Set `VITE_ADMIN_SECRET` in Vercel project settings for the admin panel.

## SEO Features

- **Per-question pages** — Each FAQ has its own URL (`/faq/{slug}`) for programmatic SEO
- **Per-page meta tags** — Title, description, keywords, Open Graph, Twitter Card per question
- **FAQPage JSON-LD** — Each question page has its own schema; home page has full FAQ schema
- **Dynamic sitemap** — All question URLs included; regenerated when you add questions
- **Semantic HTML** — `article`, `nav`, proper heading hierarchy
- **Fast load** — Minimal JS, no heavy frameworks
