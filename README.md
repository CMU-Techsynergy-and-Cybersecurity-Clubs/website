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

Pushes to `main` are linted, type-checked, built, and deployed automatically via `.github/workflows/deploy.yml`.

The site is served at `https://techclubscmu.com` via GitHub Pages with a custom domain. `public/CNAME` contains the domain so Pages keeps the binding on each deploy.

In repo Settings → Pages, set **Source: GitHub Actions** and **Custom domain: techclubscmu.com** (enforce HTTPS once the cert issues).

### DNS

At the domain registrar, point `techclubscmu.com` at GitHub Pages:

- Apex `@` → four A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` → CNAME to `<owner>.github.io`

If deploying under a subpath instead (e.g. `/website` on `*.github.io`), set `NEXT_PUBLIC_BASE_PATH` in the workflow.

## Structure

- `src/app/` — App Router pages (`/`, `/cybersecurity`, `/ComputerScienceClub`)
- `src/components/` — `Navbar`, `Footer`, `ClubPage` (shared page template), `ClubHero`, `TabContainer`, `ImageGallery`, `StaticImage`
- `src/lib/` — typed data: `clubs`, `compsci`, `cybersecurity`, `nav`, plus shared `types` and `sharedConfig` modules the club data files build on
- `public/` — logos and event photos served from `/cybersecurity/`, `/compsci/`, `/cyber-fair/`, `/icpc/`

To update content (events, projects, activities, contact info), edit the `src/lib/*.ts` files — pages render straight from there.
