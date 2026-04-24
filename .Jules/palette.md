# Palette's Journal - CalcMaster Pro

## 2025-05-14 - Accessible Clipboard Feedback
**Learning:** Visual-only feedback for clipboard actions (like a "Copied!" tooltip) is inaccessible to screen reader users. To ensure inclusive UX, always pair visual indicators with an `aria-live="polite"` region to announce the success of the action.
**Action:** Use a dedicated `aria-live` region (optionally with `sr-only` class) to broadcast state changes for asynchronous or hidden interactions like copying to clipboard.
