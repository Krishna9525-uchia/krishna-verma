# Palette's Journal - UX & Accessibility Learnings

This journal documents critical UX and accessibility learnings discovered during the development of CalcMaster Pro.

## 2026-03-14 - Accessibility Gaps in Dynamic Interfaces
**Learning:** Dynamic components (like the mobile menu or search results) and icon-only buttons often lack the necessary ARIA attributes (`aria-label`, `aria-expanded`) to be fully accessible to screen reader users. Additionally, keyboard users require a "Skip to main content" link to bypass repetitive navigation.
**Action:** Always implement `SkipToMain` components and ensure all interactive elements, especially those with dynamic states or icon-only labels, have appropriate ARIA attributes. Explicitly link form labels to inputs using `htmlFor` and `id` even in dynamically generated forms.
