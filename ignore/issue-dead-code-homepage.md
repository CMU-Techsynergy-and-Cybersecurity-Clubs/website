Dead commented-out JSX and a resulting unused import in the home page

**Labels:** `type:chore`, `priority:p2`  
**Estimated Hours:** 1  
**Issue Type:** Task  

---

## Problem
`src/app/page.tsx` has a commented-out "Active Clubs" stat block (lines 27-30) and an
entire commented-out CTA section (lines 126-149, `<section>...Ready to Join?...</section>`)
left in place rather than deleted. As a side effect, the `config` import from
`@/lib/cybersecurity` (`page.tsx:2`) is now unused in the code that actually renders —
it's referenced only inside the dead JSX comment. Neither `next lint` nor `tsc --noEmit`
catches this (the project doesn't enable `noUnusedLocals`), so it will sit there
indefinitely unless removed by hand.

## Proposed Solution
Delete the commented-out blocks and the now-unused `config` import. If the CTA section
is meant to come back, restoring it from git history is one command away — keeping it as
a comment forever isn't buying anything.

## Acceptance Criteria
- [ ] No commented-out JSX blocks remain in `page.tsx`.
- [ ] `config` import is removed (or restored to actual use, if the CTA section is
      un-commented instead).
