## 2025-05-22 - Reliable Skip-to-Content in HashRouter
**Learning:** In a HashRouter environment, standard anchor links (e.g., `<a href="#main-content">`) can be misinterpreted by the router as a navigation event rather than a document jump. This can break accessibility for keyboard users relying on skip links.
**Action:** Use an `onClick` handler on the skip link that calls `e.preventDefault()`, manually finds the target element, and calls `.focus()` (ensure target has `tabIndex={-1}`) to guarantee focus moves correctly without triggering unexpected routing behavior.
