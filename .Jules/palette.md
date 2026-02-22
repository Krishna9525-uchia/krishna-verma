## 2025-05-22 - [Accessibility Audit & Improvements]
**Learning:** Many interactive components (mobile menu, search bar, calculator forms) lacked basic accessibility markers (ARIA labels, expanded states, linked labels). Adding a "Skip to main content" link is a high-impact, low-effort win for keyboard users.
**Action:** Always check the main navigation shell and dynamic forms for missing a11y attributes. Ensure the entry point script tag is present in index.html to avoid blank pages.
