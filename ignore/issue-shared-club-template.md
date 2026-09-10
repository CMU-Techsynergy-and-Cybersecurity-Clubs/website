Club pages and club data files are duplicated with no shared template

**Labels:** `type:feature-enhancement`, `priority:p2`  
**Estimated Hours:** 8  
**Issue Type:** Task  

---

## Problem
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

## Proposed Solution
Introduce a `ClubData` type (and move the shared entity types — `Officer`, `Advisor`,
`Sponsor`, `Project`, `Activity`, `FeaturedEvent`, `GalleryImage` — into a neutral
`src/lib/types.ts`) that both `compsci.ts` and `cybersecurity.ts` implement. Render both
clubs from one data-driven component/route (e.g. a single `<ClubPage data={...} />` or a
`[club]/page.tsx` keyed off `clubThemes`) instead of two hand-maintained page files.
Shared config (contact email, meeting day/time/location) that's genuinely identical
across clubs can live in one place and be spread into each club's data, so a future
divergence is an explicit override rather than an accidental copy-paste miss.

## Acceptance Criteria
- [ ] Only one component/template renders a club page; `ComputerScienceClub/page.tsx`
      and `cybersecurity/page.tsx` no longer contain duplicated JSX.
- [ ] Shared entity types live in a module neither club "owns"; `compsci.ts` no longer
      imports types from `cybersecurity.ts`.
- [ ] Changing a value that's meant to be shared (e.g. meeting time) requires editing it
      in exactly one place.
