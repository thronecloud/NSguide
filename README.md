# AttendNS — The Honest Guide to Network School

A content-driven SEO site built to answer every question someone has before joining [Network School](https://ns.com). Written by a resident, not a marketing team.

**Live:** [attendns.com](https://attendns.com)

## Why this exists

Network School is a live-in startup community near Singapore. Interesting concept, but the official site doesn't answer basic questions — how much does it cost, what's the food like, can I get a visa, is the gym good? People were asking the same 50+ questions on Reddit, Twitter, and Telegram over and over.

So I built a site that answers all of them. Honestly. Including the downsides.

The site uses an affiliate referral link. If someone signs up through it, they get 25% off and a free first week. I get credit for the referral. Aligned incentives — I only benefit if the content is good enough to convince someone, and they only click if the answers were useful.

## What it does

- **67+ FAQ pages** — each question gets its own URL for search engines to index individually
- **5 long-form resident guides** — deeper content on topics like fitness, food, and daily life
- **Compatibility quiz** — 10 questions that tell you if NS is actually a fit for your lifestyle
- **Search** — Cmd+K fuzzy search across all FAQs, guides, and quiz
- **Dark mode** — respects system preference, toggleable
- **Admin panel** — password-protected CMS to manage FAQ and quiz content

## Architecture

**Stack:** Vite + React 19 + React Router. No Next.js, no SSR framework. It's a static SPA deployed on Vercel.

Why no SSR? The content is mostly static text. Vite builds fast, the bundle is small, and the SEO is handled at build time. Adding a server framework would be overhead for a content site.

### Project structure

```
NSguide/
├── ns-faq/                      # React app (Vite)
│   ├── src/
│   │   ├── components/          # Hero, CTA, Quiz, Search, Header, Footer
│   │   ├── pages/               # HomePage, QuestionPage, QuizPage, ArticlePage, Admin
│   │   ├── data/                # faqData.js (67 items), quizData.js, articleData.js
│   │   ├── styles/              # Single CSS file, no framework
│   │   └── config.js            # Centralized env config (referral URL, site URL)
│   └── scripts/
│       ├── generate-sitemap.js  # Post-build: writes sitemap.xml from faqData
│       ├── inject-faq-schema.js # Pre-build: injects JSON-LD into index.html
│       └── generate-llms-txt.js # Pre-build: generates llms.txt for AI crawlers
├── api/                         # Vercel serverless (quiz questions from Postgres)
└── vercel.json                  # Monorepo deploy config
```

### Build pipeline

```
npm run build
```

This runs four steps in sequence:

1. **generate-llms-txt.js** — creates `public/llms.txt` from all FAQ + article content (so AI models can read the site)
2. **inject-faq-schema.js** — rewrites `index.html` with FAQPage and Organization JSON-LD from `faqData.js`
3. **vite build** — bundles everything into `dist/`
4. **generate-sitemap.js** — generates `dist/sitemap.xml` with all FAQ and article URLs, patches `robots.txt`

### SEO approach

Every FAQ question is a page. Every page gets:

- Unique title, description, keywords via `react-helmet-async`
- Open Graph and Twitter Card meta tags
- FAQPage JSON-LD schema (per question + aggregate on homepage)
- WebSite schema with SearchAction
- Canonical URLs

The sitemap is generated from `faqData.js` at build time. Add a question to the data file, it gets a page and a sitemap entry automatically.

I also generate `llms.txt` — a plaintext version of all site content optimized for LLM crawlers and AI search engines. If someone asks ChatGPT or Perplexity about Network School, this helps surface accurate answers.

### Quiz

10 questions, each scored 0/5/10. Options are shuffled per render to prevent pattern bias. The quiz fetches questions from a Vercel Postgres database at runtime (`/api/quiz`), with a client-side fallback to `quizData.js` if the API is down.

Results bucket into three tiers based on compatibility score. Every result shows the same CTA — "Apply Now" — regardless of score.

### Code splitting

`HomePage` loads eagerly (it's the landing page). Every other route (`/quiz`, `/faq/:slug`, `/articles`, `/admin`, `/terms`) is `React.lazy` with Suspense. Keeps initial bundle small.

## Running locally

```bash
cd ns-faq
npm install
npm run dev
```

Admin panel at `localhost:5173/admin` — set `VITE_ADMIN_SECRET` in `.env`.

## Deploy

Deployed as a Vercel monorepo. The root `vercel.json` handles:

- Install: `npm install && cd ns-faq && npm install`
- Build: `cd ns-faq && npm run build`
- Output: `ns-faq/dist`
- Rewrites: `/api/*` → serverless functions, everything else → SPA

Push to `main` and it deploys automatically.

## Config

All configuration lives in `ns-faq/src/config.js` and `.env` files:

| Variable | Purpose |
|---|---|
| `VITE_REFERRAL_URL` | Affiliate referral link used in all "Apply Now" CTAs |
| `VITE_SITE_URL` | Production URL for sitemap and canonical tags |
| `VITE_ADMIN_SECRET` | Password for the admin panel |
| `VITE_SHOW_REFERRAL_CTA` | Toggle referral CTAs on FAQ pages (`true`/`false`) |

## Tech decisions

- **No CSS framework** — single `App.css` file. The site has a specific editorial aesthetic that would fight against utility classes.
- **No state management library** — React state + URL params are enough for a content site.
- **Client-side search** — the dataset is small enough (67 FAQs + 5 articles) that fuzzy matching in-browser is instant. No Algolia needed.
- **Build-time SEO injection** — JSON-LD is injected directly into `index.html` during build rather than relying on client-side rendering for structured data.
- **GA4 tracking** — basic analytics to understand which questions people actually read.

## Adding content

**New FAQ:** Add an object to `faqItems` in `ns-faq/src/data/faqData.js` with `id`, `slug`, `category`, `question`, `answer`, and `seo`. It automatically gets a page, sitemap entry, and search indexing.

**New article:** Add to `ns-faq/src/data/articleData.js`. Same pattern.

**Quiz questions:** Edit via admin panel or directly in `ns-faq/src/data/quizData.js`.

---

Built by [Priyeshu](https://github.com/thronecloud). If you're considering Network School, the site has real answers from someone who's been there.
