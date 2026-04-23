# Palette's Journal

## 2026-04-23 - Cohesive Focus State for Search Bar
**Learning:** When using a custom-styled search bar container that wraps a headless input (e.g., with `focus:ring-0`), applying `focus-within:ring-2` to the container provides a much more cohesive and modern focus indicator than the default input ring. This maintains accessibility while aligning with the container's visual boundaries.
**Action:** Use `focus-within` on parent containers when the primary interactive child has its default focus indicator disabled for design reasons.

## 2026-04-23 - Dynamic Search Result Announcements
**Learning:** Users with screen readers benefit significantly from immediate feedback on search result counts. Placing `aria-live="polite"` on the results count span ensures that updates are announced as the user types, without interrupting their flow.
**Action:** Always wrap dynamic count indicators (like "X results found") in an ARIA live region.
