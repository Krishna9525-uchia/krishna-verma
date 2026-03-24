## 2026-03-24 - [Skip to Main Content in HashRouter]
**Learning:** In a `HashRouter` environment, standard anchor links like `<a href="#main-content">` may trigger React Router's navigation instead of simple element jumping.
**Action:** Use an `onClick` handler with `e.preventDefault()` and `element.focus()` to ensure the "Skip to main content" link correctly moves focus to the target element without affecting the URL hash in a way that interferes with routing.
