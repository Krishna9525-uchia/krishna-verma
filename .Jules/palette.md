## 2026-03-25 - HashRouter Accessibility Anchors
**Learning:** In a `HashRouter` environment, standard anchor links (e.g., `<a href="#main-content">`) may be intercepted by the router, preventing the default browser behavior of jumping to and focusing an element by ID.
**Action:** Use an `onClick` handler on accessibility anchors that calls `e.preventDefault()`, manually focuses the target element with `element.focus()`, and ensures visibility with `element.scrollIntoView()`. Ensure the target element has `tabIndex={-1}`.

## 2026-03-25 - Playwright Verification in AI Studio CDN Environment
**Learning:** Playwright may fail to find React-rendered elements if the `index.html` is missing a `<script type="module" src="/index.tsx"></script>` tag, especially when core dependencies are loaded via an `importmap` from a CDN.
**Action:** Always ensure the module script entry point is explicitly present in `index.html` to guarantee proper hydration during headless browser testing.
