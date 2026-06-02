## 2025-05-14 - Interactive Element Feedback & Accessibility

**Learning:** Accessibility and micro-UX feedback should always go hand-in-hand. Adding "Copy to Clipboard" buttons with success states provides immediate delight, but these must include dynamic `aria-label` values (e.g., toggling from "Copy" to "Copied!") to ensure screen reader users receive the same confirmation as visual users.

**Action:** When implementing temporary success states (like a 2-second "Copied!" checkmark), ensure the ARIA label or a live region also updates to reflect the change. Always use `htmlFor` and `id` to associate labels with inputs in dynamic forms to ensure focus and screen reader compatibility.
