# Codebase audit — whole repo (2026-07-26)

Audited the full Next.js 14 App Router site (24 files under `src/`, static-export
config, GitHub Pages deploy). It's a small, low-risk content site with no server code,
auth, or user input, so there are no correctness/security bugs of consequence. The
headline risk is duplication: the two club pages and their data files are near-identical
hand-copies with no shared template, so any future change (a new tab, a new club, a
tweak to shared contact info) has to be made twice and can silently drift.

Findings: 6 · bugs 1 · debt 3 · tests 1 · arch 1

---

## [1] Club pages and club data files are duplicated with no shared template

**Class:** arch · **Suggested labels:** `type:feature-enhancement`, `priority:p2` · **Files:** `src/app/ComputerScienceClub/page.tsx`, `src/app/cybersecurity/page.tsx`, `src/lib/compsci.ts`, `src/lib/cybersecurity.ts`

### Problem
`src/app/ComputerScienceClub/page.tsx` and `src/app/cybersecurity/page.tsx` are ~215-line
hand copies of each other — same five tabs (Events/Projects/Activities/Officers/
Sponsors), same layout, same commented-out `<aside>` sidebar block left in both files
identically. The only real difference is which `src/lib/*.ts` data module and `theme`
key they wire in.

The data layer mirrors this: `src/lib/compsci.ts` and `src/lib/cybersecurity.ts` export
the same shape (`config`, `intro`, a featured event, `upcomingEvents`, `projects`,
`activities`, `officers`, `advisor`, `sponsors`, a gallery) with identical `config` values
in both files (`config.email`, `config.discord`, and `config.meeting.{day,time,location}`
are byte-for-byte the same in both). Nothing enforces that — if one club's meeting time
changes, the other file has to be remembered and edited by hand, and there's no type
tying the two together.

Compounding this, `compsci.ts` imports its own domain types (`FeaturedEvent`, `Project`,
`Activity`, `Officer`, `Advisor`, `Sponsor`, `GalleryImage`) from `cybersecurity.ts`
(`src/lib/compsci.ts:1-9`) instead of a neutral shared module — `cybersecurity.ts` has
accidentally become the app's types module, so editing it for cybersecurity-specific
reasons risks breaking the compsci page's typing.

### Proposed Solution
Introduce a `ClubData` type (and move the shared entity types — `Officer`, `Advisor`,
`Sponsor`, `Project`, `Activity`, `FeaturedEvent`, `GalleryImage` — into a neutral
`src/lib/types.ts`) that both `compsci.ts` and `cybersecurity.ts` implement. Render both
clubs from one data-driven component/route (e.g. a single `<ClubPage data={...} />` or a
`[club]/page.tsx` keyed off `clubThemes`) instead of two hand-maintained page files.
Shared config (contact email, meeting day/time/location) that's genuinely identical
across clubs can live in one place and be spread into each club's data, so a future
divergence is an explicit override rather than an accidental copy-paste miss.

### Acceptance Criteria
- [ ] Only one component/template renders a club page; `ComputerScienceClub/page.tsx`
      and `cybersecurity/page.tsx` no longer contain duplicated JSX.
- [ ] Shared entity types live in a module neither club "owns"; `compsci.ts` no longer
      imports types from `cybersecurity.ts`.
- [ ] Changing a value that's meant to be shared (e.g. meeting time) requires editing it
      in exactly one place.

---

## [2] Repeated `NEXT_PUBLIC_BASE_PATH` + `<img>` pattern duplicated across 6 components

**Class:** debt · **Suggested labels:** `type:chore`, `priority:p2` · **Files:** `src/app/page.tsx`, `src/components/ClubHero.tsx`, `src/components/ImageGallery.tsx`, `src/components/OfficerAvatar.tsx`, `src/components/SponsorLogo.tsx`

### Problem
Because `next.config.js` sets `images: { unoptimized: true }` for static export, every
image is rendered as a raw `<img>` with its `src` manually prefixed by
`process.env.NEXT_PUBLIC_BASE_PATH`. The exact snippet —
`const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''` followed by
`` src={`${base}${path}`} `` plus an `eslint-disable-next-line @next/next/no-img-element`
— is copy-pasted at 7 call sites across 5 files (`page.tsx` ×2, `ClubHero.tsx`,
`ImageGallery.tsx` ×2, `OfficerAvatar.tsx`, `SponsorLogo.tsx`). Any future
image-rendering component has to remember to repeat this by hand, and there's already no
compiler check that it was done — it's opt-in by convention only.

### Proposed Solution
Extract a small `withBasePath(path: string)` helper or a `<StaticImage src alt ... />`
wrapper component that applies the base path and the lint disable in one place. New
image call sites use the helper/component instead of re-deriving `base`.

### Acceptance Criteria
- [ ] Base-path prefixing logic exists in exactly one place.
- [ ] All current `<img>` call sites use it instead of inlining `process.env.NEXT_PUBLIC_BASE_PATH`.

---

## [3] Gallery photos are served unoptimized, up to 7.3 MB, with no lazy loading or dimensions

**Class:** debt · **Suggested labels:** `type:chore`, `priority:p2` · **Files:** `public/cyber-fair/*.jpg`, `public/icpc/*.jpg`, `src/components/ImageGallery.tsx`

### Problem
Several committed photos are far larger than needed for web display:
`public/cyber-fair/IMG_1150.jpg` is 7.3 MB, and five more images in `cyber-fair/`/`icpc/`
are 500 KB–1.3 MB each. Because static export forces `images.unoptimized: true`, Next
can't downsize these at build time — they're served exactly as committed. `ImageGallery`
(`src/components/ImageGallery.tsx:30-34, 55-58`) renders them with plain `<img>` tags
with no `width`/`height` (so the browser can't reserve layout space, risking CLS) and no
`loading="lazy"` (so all thumbnails in a gallery load immediately, not just the visible
ones). The Cyber Fair Events tab alone loads 6 images totaling ~11.6 MB on first visit.

### Proposed Solution
Re-encode/resize the source images before committing (e.g. cap at ~1600px on the long
edge, convert to WebP, target well under 500 KB each). Add `loading="lazy"` and explicit
`width`/`height` (or an `aspect-ratio` wrapper, which `ImageGallery` already applies via
`aspect-[4/3]` for thumbnails) to the `<img>` tags in `ImageGallery.tsx`.

### Acceptance Criteria
- [ ] No committed image under `public/` exceeds ~500 KB.
- [ ] Gallery thumbnails use `loading="lazy"`.
- [ ] Image elements have explicit dimensions or an aspect-ratio container to avoid layout shift.

---

## [4] Dead commented-out JSX and a resulting unused import in the home page

**Class:** debt · **Suggested labels:** `type:chore`, `priority:p2` · **Files:** `src/app/page.tsx:2, 27-30, 126-149`

### Problem
`src/app/page.tsx` has a commented-out "Active Clubs" stat block (lines 27-30) and an
entire commented-out CTA section (lines 126-149, `<section>...Ready to Join?...</section>`)
left in place rather than deleted. As a side effect, the `config` import from
`@/lib/cybersecurity` (`page.tsx:2`) is now unused in the code that actually renders —
it's referenced only inside the dead JSX comment. Neither `next lint` nor `tsc --noEmit`
catches this (the project doesn't enable `noUnusedLocals`), so it will sit there
indefinitely unless removed by hand.

### Proposed Solution
Delete the commented-out blocks and the now-unused `config` import. If the CTA section
is meant to come back, restoring it from git history is one command away — keeping it as
a comment forever isn't buying anything.

### Acceptance Criteria
- [ ] No commented-out JSX blocks remain in `page.tsx`.
- [ ] `config` import is removed (or restored to actual use, if the CTA section is
      un-commented instead).

---

## [5] Theme toggle icon shows the wrong state until after hydration

**Class:** bugs · **Suggested labels:** `type:bug`, `priority:p2` · **Files:** `src/app/layout.tsx:19`, `src/components/ThemeProvider.tsx:18-26`

### Problem
`layout.tsx` runs an inline script before hydration (`layout.tsx:19`) that reads
`localStorage.getItem('theme')` and adds the `dark` class to `<html>` synchronously —
this is what prevents a flash of the wrong *page* theme. But `ThemeProvider`
(`ThemeProvider.tsx:18`) initializes its own `theme` React state to the hardcoded
literal `'light'` and only corrects it to `'dark'` inside a `useEffect` that re-reads
`localStorage` after mount. `Navbar`'s sun/moon toggle icon is driven by that React
`theme` state, not by the `<html>` class — so for a user who previously chose dark mode,
the page background/text render correctly dark on first paint, but the toggle icon
briefly shows "switch to dark mode" (implying the site is currently light) until the
effect fires a moment later.

### Proposed Solution
Have `ThemeProvider` initialize its state by reading `document.documentElement.classList`
(already set correctly by the inline script) instead of a hardcoded `'light'`, e.g.
`useState<Theme>(() => document.documentElement.classList.contains('dark') ? 'dark' : 'light')`,
removing the need for the `useEffect` to "catch up" after the fact.

### Acceptance Criteria
- [ ] A user who previously chose dark mode sees the correct (moon/sun) toggle icon on
      first paint, with no visible flip shortly after load.

---

## [6] No automated checks beyond `next build`; no accessibility coverage for interactive components

**Class:** tests · **Suggested labels:** `type:chore`, `priority:p2` · **Files:** `.github/workflows/deploy.yml`, `src/components/TabContainer.tsx`, `src/components/ImageGallery.tsx`, `package.json`

### Problem
There is no test runner in `package.json` and no test step in
`.github/workflows/deploy.yml` — the only gate before a push to `main` goes live is
whether `npm run build` succeeds; `npm run lint` isn't run in CI at all, only available
locally. This is a reasonable baseline for a static content site, but it means the
interactive components (`ThemeProvider`, `TabContainer`, `ImageGallery`'s lightbox,
`Navbar`'s mobile menu) have zero coverage of their behavior, only of whether they
compile.

Two concrete accessibility gaps in those components, found while reading them:
- `TabContainer.tsx:23-40`: tab buttons (`role="tab"`) and the panel (`role="tabpanel"`)
  have no `id`/`aria-controls`/`aria-labelledby` linking them, so assistive tech can't
  associate a tab with its panel.
- `ImageGallery.tsx:39-63`: the fullscreen lightbox has no `Escape`-to-close handler and
  doesn't move focus into the dialog when it opens (no `role="dialog"`/focus trap) —
  closable only by finding and activating the "Close ✕" button or clicking the backdrop.

### Proposed Solution
At minimum, add `npm run lint` (and `tsc --noEmit`) as a CI step before `npm run build`
so lint regressions block a deploy rather than only being visible locally. For the a11y
gaps, wire up `id`/`aria-controls` between `TabContainer`'s buttons and panel, and add an
`Escape` keydown handler plus `role="dialog"` + initial focus to `ImageGallery`'s
lightbox. A full test suite is likely overkill for this site's size; targeted a11y fixes
plus a CI lint gate cover the concrete gaps found here.

### Acceptance Criteria
- [ ] CI runs `npm run lint` (and ideally `tsc --noEmit`) and fails the workflow on
      errors, before the build/deploy step.
- [ ] Tab buttons and their panel are associated via ARIA attributes.
- [ ] The image lightbox closes on `Escape` and is reachable/closable via keyboard alone
      without hunting for the close button.

---

## Not filed

- **Duplicate officer entries across clubs** (e.g. "Jayden Alonzo-Estrada" appears as
  "Outgoing President" in both `compsci.ts` and `cybersecurity.ts` with near-identical
  bios) — looks intentional (one person serving both clubs during a leadership
  transition), not a defect.
- **`out/` and `.next/` build artifacts** — checked, correctly excluded via `.gitignore`
  and not tracked in git; no issue.
