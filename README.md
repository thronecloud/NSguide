# NSguide — Network School  FAQ

Unofficial third-party FAQ for Network School. Deployed at [n-s-guide.vercel.app](https://n-s-guide.vercel.app).

## Quick start

```bash
# From repo root
npm run dev          # Start local dev server (ns-faq)
npm run build        # Build for production
```

## Deploy (Vercel CLI)

```bash
# First time: link to your Vercel project
npx vercel link

# Deploy to production
npm run deploy

# Deploy preview (staging)
npm run deploy:preview

# Build + deploy in one go
npm run ship
```

## Git commands

```bash
npm run git:status   # git status
npm run git:add      # git add -A
npm run git:push     # add, commit (msg: "Update"), push
npm run git:push --msg="Your commit message"   # custom message
npm run git:pull     # git pull
npm run git:log      # recent commits
```

## Project structure

- `ns-faq/` — React app (Vite)
- `vercel.json` — Vercel config (build from ns-faq)
