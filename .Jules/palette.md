## 2026-04-01 - Skip Link Pattern in HashRouter
**Learning:** In a `HashRouter` environment, standard anchor links (e.g., `<a href="#main-content">`) may trigger routing instead of simple element jumping.
**Action:** Use an `onClick` handler with `e.preventDefault()` and `element.focus()` for reliable accessibility anchors.
