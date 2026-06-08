# lisaaknox.com

[![CI](https://github.com/LLLisa/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/LLLisa/portfolio/actions/workflows/ci.yml)

Personal portfolio of **Lisa Anne Knox** — full-stack engineer.
Live at **[www.lisaaknox.com](https://www.lisaaknox.com)**.

## Stack

- **React + TypeScript** front end, built with **Vite**
- **Express** (TypeScript via `ts-node`) serving the production build, on **Heroku**
- **Vitest** + **Testing Library** for tests
- CSS Modules, no UI framework

## Develop

```bash
npm install
npm run dev        # Vite dev server
npm test           # run the test suite
npm run typecheck  # tsc --noEmit
npm run build      # production build to dist/
npm start          # serve the built app via Express
```

## Content

All site copy lives in [`src/data/content.ts`](src/data/content.ts) — bio,
experience, projects, and skills. Edit there and rebuild.

## Deploy

Pushing to `heroku main` runs `heroku-postbuild` (`vite build`) and serves
`dist/` through Express, which also forces HTTPS and canonicalizes the apex
domain to `www`.

```bash
git push heroku main
```
