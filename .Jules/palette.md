## 2026-07-01 - [Clipboard Verification in Headless Playwright]
**Learning:** Playwright verification of clipboard functionality in headless environments requires explicit permission granting.
**Action:** Use `browser.new_context(permissions=['clipboard-read', 'clipboard-write'])` when testing clipboard interactions.

## 2026-07-01 - [Missing React Entry Point]
**Learning:** The application fails to hydrate if the main entry point (`index.tsx`) is not explicitly linked in `index.html`.
**Action:** Always verify that `<script type="module" src="/index.tsx"></script>` is present in `index.html`.
