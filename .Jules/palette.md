## 2025-05-14 - Skip to Main Content Link in HashRouter
**Learning:** In a HashRouter environment, standard anchor links (e.g., `<a href="#main-content">`) may trigger routing instead of simple element jumping.
**Action:** Use an `onClick` handler with `e.preventDefault()` and `element.focus()` for reliable accessibility anchors.

## 2025-05-14 - Importance of tabIndex on Main Element
**Learning:** When implementing a 'Skip to main content' link, the target element (usually `<main>`) must have `tabIndex={-1}` to allow it to receive programmatic focus properly, even if it's not naturally focusable.
**Action:** Always include `tabIndex={-1}` on the target of skip links.
