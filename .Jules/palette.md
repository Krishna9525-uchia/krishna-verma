## 2025-05-14 - [Copy-to-Clipboard UX & Accessibility]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Accessibility labels should toggle between 'Copy' and 'Copied' to provide immediate screen reader feedback. Hidden interactive elements (like copy buttons in a grid) must be visible on focus for keyboard users.
**Action:** Always implement a 2-second success icon/label toggle for clipboard actions and ensure 'focus:opacity-100' for elements hidden by 'group-hover'.
