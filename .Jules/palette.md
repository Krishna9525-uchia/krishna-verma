# Palette's Journal

## 2026-05-04 - Results Accessibility & Interaction
**Learning:** In highly interactive calculation tools, users benefit from both immediate visual feedback (like a "Copied" checkmark) and accessibility announcements. Using `aria-live="polite"` on the results container ensures that screen readers announce new results as users type, without interrupting their flow.
**Action:** Always wrap calculation result containers in an `aria-live` region and provide icon-based feedback with a time-limited state for clipboard actions.
