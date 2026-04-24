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

The site is served at `https://techclubscmu.com` via GitHub Pages with a custom domain. `public/CNAME` contains the domain so Pages keeps the binding on each deploy.

In repo Settings → Pages, set **Source: GitHub Actions** and **Custom domain: techclubscmu.com** (enforce HTTPS once the cert issues).

### DNS

At the domain registrar, point `techclubscmu.com` at GitHub Pages:

- Apex `@` → four A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` → CNAME to `<owner>.github.io`

If deploying under a subpath instead (e.g. `/website` on `*.github.io`), set `NEXT_PUBLIC_BASE_PATH` in the workflow.

## Structure

- `src/app/` — App Router pages (`/`, `/cybersecurity`, `/techsynergy`)
- `src/components/` — `Navbar`, `Footer`, `ClubHero`, `TabContainer`, `ImageGallery`
- `src/lib/` — typed data: `config`, `nav`, `clubs`, `cybersecurity`, `techsynergy`
- `public/` — logos and event photos served from `/cybersecurity/`, `/techsynergy/`, `/cyber-fair/`, `/icpc/`

To update content (events, projects, activities, contact info), edit the `src/lib/*.ts` files — pages render straight from there.
