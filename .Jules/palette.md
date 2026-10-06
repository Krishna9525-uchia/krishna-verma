## 2025-05-18 - Mobile Navigation Toggle Accessibility

**Learning:** Mobile icon-only menu triggers in React header components often omit essential ARIA attributes (`aria-label`, `aria-expanded`) and focus indicator rings, degrading screen reader navigation and keyboard user experience.
**Action:** Always complement icon-only mobile toggle buttons with explicit `aria-label`, dynamic `aria-expanded` attributes, and `focus-visible:ring-2` styles with hover feedback.
