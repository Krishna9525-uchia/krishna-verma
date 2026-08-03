# Palette's Journal - Critical UX/Accessibility Learnings

This journal records key reusable UX/accessibility insights, component constraints, and design system patterns discovered during implementation.

## 2025-08-03 - Reusable Clipboard State Isolation in Dynamic Lists
**Learning:** In React applications with dynamic lists of results (such as primary and secondary calculator result cards), using a single global boolean state (like `copied`) for visual feedback leads to feedback cross-talk, where copying one item mistakenly shows all items as copied. Using a unique string identifier (`copiedId`) mapped to unique keys (e.g., `primary-${i}`) isolates visual feedback precisely.
**Action:** When implementing temporary success states (like "Copied!") for multiple list items or dashboard cards, always use a unique key or ID mapping in the state rather than a single boolean. Ensure `useEffect` with a `clearTimeout` handles cleanup to prevent memory leaks from rapid user clicks.
