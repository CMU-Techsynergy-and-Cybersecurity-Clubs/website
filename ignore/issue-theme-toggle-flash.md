Theme toggle icon shows the wrong state until after hydration

**Labels:** `type:bug`, `priority:p2`  
**Estimated Hours:** 1  
**Issue Type:** Bug  

---

## Problem
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

## Proposed Solution
Have `ThemeProvider` initialize its state by reading `document.documentElement.classList`
(already set correctly by the inline script) instead of a hardcoded `'light'`, e.g.
`useState<Theme>(() => document.documentElement.classList.contains('dark') ? 'dark' : 'light')`,
removing the need for the `useEffect` to "catch up" after the fact.

## Acceptance Criteria
- [ ] A user who previously chose dark mode sees the correct (moon/sun) toggle icon on
      first paint, with no visible flip shortly after load.
