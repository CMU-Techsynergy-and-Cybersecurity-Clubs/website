Repeated NEXT_PUBLIC_BASE_PATH + <img> pattern duplicated across 6 components

**Labels:** `type:chore`, `priority:p2`  
**Estimated Hours:** 2  
**Issue Type:** Task  

---

## Problem
Because `next.config.js` sets `images: { unoptimized: true }` for static export, every
image is rendered as a raw `<img>` with its `src` manually prefixed by
`process.env.NEXT_PUBLIC_BASE_PATH`. The exact snippet —
`const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''` followed by
`src={\`${base}${path}\`}` plus an `eslint-disable-next-line @next/next/no-img-element`
— is copy-pasted at 7 call sites across 5 files (`page.tsx` ×2, `ClubHero.tsx`,
`ImageGallery.tsx` ×2, `OfficerAvatar.tsx`, `SponsorLogo.tsx`). Any future
image-rendering component has to remember to repeat this by hand, and there's already no
compiler check that it was done — it's opt-in by convention only.

## Proposed Solution
Extract a small `withBasePath(path: string)` helper or a `<StaticImage src alt ... />`
wrapper component that applies the base path and the lint disable in one place. New
image call sites use the helper/component instead of re-deriving `base`.

## Acceptance Criteria
- [ ] Base-path prefixing logic exists in exactly one place.
- [ ] All current `<img>` call sites use it instead of inlining `process.env.NEXT_PUBLIC_BASE_PATH`.
