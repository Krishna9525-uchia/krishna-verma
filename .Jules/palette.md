## 2026-05-06 - Copy to Clipboard with Feedback
**Learning:** Adding a copy-to-clipboard button for primary calculation results provides immediate utility, especially for complex financial or technical numbers. Providing visual feedback (e.g., changing the icon to a checkmark) confirms the action and improves user confidence.
**Action:** Implement a `copied` state with a 2-second timeout to toggle between a `CopyIcon` and a `CheckIcon` for result cards.
