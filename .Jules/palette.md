# Palette's Journal - UX & Accessibility Learnings

## 2025-03-10 - Enhancing Navigation and Form Accessibility
**Learning:** Keyboard users were unable to bypass the main navigation to reach the calculator content quickly. Additionally, form inputs in the dynamic `CalculatorDetail` component were not explicitly linked to their labels, and the mobile menu toggle lacked state and descriptive information for screen readers. In a HashRouter environment, standard anchor links for 'Skip to main content' can be tricky, so an `onClick` handler with `e.preventDefault()`, `element.focus()`, and `element.scrollIntoView()` provides a more robust solution.

**Action:**
1. Always include a 'Skip to main content' link as the first focusable element.
2. Ensure the target element (usually `<main>`) has `id="main-content"` and `tabIndex={-1}` for programmatic focus.
3. Explicitly link all form labels to inputs using `htmlFor` and `id`.
4. Add `aria-expanded` and `aria-label` to mobile menu toggles to communicate their state and purpose.
