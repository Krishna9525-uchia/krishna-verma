## 2026-03-30 - Accessible Skip Links in React HashRouter
**Learning:** In a HashRouter environment, standard anchor links (e.g., `<a href="#main-content">`) may trigger routing instead of simple element jumping. However, if the target ID is on a wrapper inside the Router's layout, it generally works if the target has `tabIndex={-1}`.
**Action:** Always ensure the target `<main>` or content container has `tabIndex={-1}` and a matching ID.

## 2026-03-30 - Playwright Verification with CDN dependencies
**Learning:** Playwright may fail with timeouts or blank pages if `index.html` is missing the module script tag or if CDN-hosted dependencies (React, etc.) in the `importmap` take time to load.
**Action:** Add `<script type="module" src="/index.tsx"></script>` to `index.html` and use `page.wait_for_selector("#root > *")` to ensure hydration before verification.
