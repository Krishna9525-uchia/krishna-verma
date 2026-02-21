# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Initial Repository Assessment
**Learning:** The application was failing to load because the entry point script (`/index.tsx`) was missing from `index.html`, despite being a standard requirement for Vite-based React apps in this environment. Additionally, several core interactive elements (mobile menu, search, form inputs) lacked basic accessibility markers (ARIA labels, linked labels) and focus indicators.
**Action:** Always verify the application loads correctly via screenshot before and after changes. Ensure standard accessibility patterns (linked labels, ARIA attributes) are implemented for all new and existing core interactive components.
