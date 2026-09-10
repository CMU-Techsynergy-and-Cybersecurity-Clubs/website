No automated checks beyond next build; no accessibility coverage for interactive components

**Labels:** `type:chore`, `priority:p2`  
**Estimated Hours:** 3  
**Issue Type:** Task  

---

## Problem
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

## Proposed Solution
At minimum, add `npm run lint` (and `tsc --noEmit`) as a CI step before `npm run build`
so lint regressions block a deploy rather than only being visible locally. For the a11y
gaps, wire up `id`/`aria-controls` between `TabContainer`'s buttons and panel, and add an
`Escape` keydown handler plus `role="dialog"` + initial focus to `ImageGallery`'s
lightbox. A full test suite is likely overkill for this site's size; targeted a11y fixes
plus a CI lint gate cover the concrete gaps found here.

## Acceptance Criteria
- [ ] CI runs `npm run lint` (and ideally `tsc --noEmit`) and fails the workflow on
      errors, before the build/deploy step.
- [ ] Tab buttons and their panel are associated via ARIA attributes.
- [ ] The image lightbox closes on `Escape` and is reachable/closable via keyboard alone
      without hunting for the close button.
