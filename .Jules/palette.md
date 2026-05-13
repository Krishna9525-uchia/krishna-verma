## 2025-05-15 - Clipboard Feedback Pattern
**Learning:** Providing immediate visual feedback (e.g., changing a "Copy" icon to a "Check" icon) for approximately 2 seconds after a clipboard action significantly improves the perceived reliability of the interface and reduces the need for disruptive snackbars or toasts.
**Action:** Implement a `copyStatus` state that toggles between an initial state and a success state for 2000ms after a copy action is triggered.
