Gallery photos are served unoptimized, up to 7.3 MB, with no lazy loading or dimensions

**Labels:** `type:chore`, `priority:p2`  
**Estimated Hours:** 3  
**Issue Type:** Task  

---

## Problem
Several committed photos are far larger than needed for web display:
`public/cyber-fair/IMG_1150.jpg` is 7.3 MB, and five more images in `cyber-fair/`/`icpc/`
are 500 KB–1.3 MB each. Because static export forces `images.unoptimized: true`, Next
can't downsize these at build time — they're served exactly as committed. `ImageGallery`
(`src/components/ImageGallery.tsx:30-34, 55-58`) renders them with plain `<img>` tags
with no `width`/`height` (so the browser can't reserve layout space, risking CLS) and no
`loading="lazy"` (so all thumbnails in a gallery load immediately, not just the visible
ones). The Cyber Fair Events tab alone loads 6 images totaling ~11.6 MB on first visit.

## Proposed Solution
Re-encode/resize the source images before committing (e.g. cap at ~1600px on the long
edge, convert to WebP, target well under 500 KB each). Add `loading="lazy"` and explicit
`width`/`height` (or an `aspect-ratio` wrapper, which `ImageGallery` already applies via
`aspect-[4/3]` for thumbnails) to the `<img>` tags in `ImageGallery.tsx`.

## Acceptance Criteria
- [ ] No committed image under `public/` exceeds ~500 KB.
- [ ] Gallery thumbnails use `loading="lazy"`.
- [ ] Image elements have explicit dimensions or an aspect-ratio container to avoid layout shift.
