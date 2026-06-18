## 2026-06-18 - [Accessibility and Micro-UX Enhancement]
**Learning:** Icon-only buttons (search, clear, menu, copy) must have `aria-label` attributes for screen reader accessibility. For copy buttons in dynamic lists, provide a temporary success state (approx 2s) and use dynamic `aria-label` values (e.g., 'Copy result' -> 'Copied!') to reduce user uncertainty.
**Action:** Always include `aria-label` for icon-only components and implement clear, temporary visual/accessible feedback for clipboard actions.
