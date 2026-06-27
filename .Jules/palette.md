## 2025-05-14 - [Copy-to-Clipboard Feedback]
**Learning:** Providing immediate visual and screen-reader feedback for "Copy to Clipboard" actions (e.g., toggling icons and aria-labels) significantly enhances trust and accessibility in data-heavy interfaces like calculators. Using unique identifiers (like `primary-${i}`) for feedback states prevents UI cross-talk in dynamic lists.
**Action:** Always implement a 2-second success state with dynamic ARIA labels when adding clipboard functionality to ensure both visual and assistive technology users receive confirmation.
