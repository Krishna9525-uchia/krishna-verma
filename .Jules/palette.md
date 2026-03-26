## 2025-05-22 - [HashRouter Anchor Link Accessibility]
**Learning:** In a `HashRouter` environment, standard anchor links (e.g., `<a href="#main-content">`) can sometimes be misinterpreted as a route change, preventing the browser's default behavior of jumping and focusing the target element.
**Action:** Use an `onClick` handler on the anchor link to manually prevent default behavior and call `element.focus()` on the target (ensure the target has `tabIndex={-1}` and `outline-none`).
