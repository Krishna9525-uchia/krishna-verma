# Palette's UX & Accessibility Journal

## 2025-02-28 - Hover/Focus Clipboard Copy in Dashboards
**Learning:** In dashboards with nested dynamic result lists, applying hover-only visibility for utility actions (like Copy to Clipboard) can render them completely invisible to keyboard-only and screen reader users. To bridge this accessibility gap while preserving visual cleanliness, we can pair Tailwind's `group-hover:opacity-100` with explicit `focus:opacity-100` / `focus-visible:opacity-100` modifiers. This ensures that the button remains hidden in the static layout but gracefully reveals itself as soon as it receives keyboard focus or when hovered.
**Action:** When designing secondary or nested list actions, always pair `group-hover` visibility classes with `focus` or `focus-visible` classes, and label them with descriptive, dynamic ARIA attributes (e.g., swapping from "Copy result" to "Copied!") for real-time screen reader feedback.
