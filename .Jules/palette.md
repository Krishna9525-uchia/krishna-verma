# Palette's Journal - Critical Learnings Only

## 2025-05-14 - Initial Assessment
**Learning:** The application is a React 19 app using Vite and Tailwind CSS. It seems to have a large `App.tsx` file which contains most of the UI logic.
**Action:** Use `sed` or similar tools to read `App.tsx` in chunks if needed, and focus on micro-UX improvements that can be done within 50 lines.

## 2025-05-14 - Skip Link and Form Accessibility
**Learning:** In a HashRouter environment with CDN-loaded dependencies, standard anchor links for skip-to-content may conflict with routing. Programmatic focus management via an `onClick` handler is more reliable for ensuring accessibility.
**Action:** Implement 'Skip to main content' using a button or link with an `onClick` handler that targets an element with `tabIndex={-1}`.
