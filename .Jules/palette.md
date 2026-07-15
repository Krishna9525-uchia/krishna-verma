## 2026-07-15 - Enhanced Feedback & Accessibility Patterns

**Learning:** When implementing "Copy to Clipboard" for multiple results, using unique identifiers (e.g., `primary-${i}`) for state tracking prevents UI feedback cross-talk. Additionally, associating labels with inputs via `htmlFor` and `id` and adding `cursor-pointer` significantly improves the interactive hit area for users.

**Action:** Always use unique keys for list-based temporary UI states and ensure every form input has a corresponding labeled ID for better accessibility and UX.
