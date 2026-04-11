## 2026-04-11 - [Calculator Results Accessibility]
**Learning:** For dynamic tools like calculators, simply updating the UI text is not enough for accessibility. Screen reader users need the updated results to be announced immediately.
**Action:** Always use `aria-live="polite"` and `aria-atomic="true"` on containers that display dynamic calculation results to ensure updates are properly voiced.

## 2026-04-11 - [Clipboard Feedback UX]
**Learning:** Providing a "Copy" button without immediate visual confirmation can leave users uncertain if the action succeeded.
**Action:** Implement a state-based icon toggle (e.g., from a copy icon to a checkmark) with a 2-second timeout to provide clear, delightful feedback for clipboard actions.
