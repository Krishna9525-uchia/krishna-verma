## 2025-05-15 - [Accessible Copy to Clipboard Pattern]
**Learning:** For a clean UI, use 'group-hover:opacity-100' on action buttons within cards, but always pair it with 'focus:opacity-100' and 'focus:ring' to ensure keyboard accessibility. Dynamic ARIA labels ('Copy result' -> 'Copied!') provide essential feedback for screen readers.
**Action:** Always implement hover-reveal actions with companion focus states and dynamic accessibility labels.

## 2025-05-15 - [Hydration Entry Point Requirement]
**Learning:** In this environment, the 'index.html' requires an explicit '<script type="module" src="/index.tsx"></script>' tag to correctly hydrate the React application, even if Vite usually handles entry points.
**Action:** If the app fails to load or hydrate in development/verification, check the 'index.html' for the correct script entry point.
