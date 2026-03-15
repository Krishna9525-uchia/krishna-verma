## 2025-03-15 - SkipToMain Link in HashRouter Environment
**Learning:** In a React application using `HashRouter`, standard anchor links (e.g., `<a href="#main-content">`) can sometimes be misinterpreted by the router as a route change rather than a simple fragment jump. Additionally, the target element needs `tabIndex={-1}` to reliably receive focus programmatically.
**Action:** Use an `onClick` handler to call `preventDefault()` and manually focus the target element using its ID. Always ensure the target element has `tabIndex={-1}` and `outline-none` if default focus rings are undesired.
