# CMU Tech Clubs Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Static export, deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
```

## Build

```bash
npm run build  # static export → ./out
```

## Deploy

Pushes to `main` build and deploy automatically via `.github/workflows/deploy.yml`.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/website` so the site lives at `https://<owner>.github.io/website/`. Edit that env var in the workflow if the repo is renamed.

In repo Settings → Pages, set **Source: GitHub Actions** (not the `gh-pages` branch).

## Structure

- `src/app/` — App Router pages (`/`, `/cybersecurity`, `/techsynergy`)
- `src/components/` — `Navbar`, `Footer`, `ClubHero`, `TabContainer`, `ImageGallery`
- `src/lib/` — typed data: `config`, `nav`, `clubs`, `cybersecurity`, `techsynergy`
- `public/` — logos and event photos served from `/cybersecurity/`, `/techsynergy/`, `/cyber-fair/`, `/icpc/`

To update content (events, projects, activities, contact info), edit the `src/lib/*.ts` files — pages render straight from there.
