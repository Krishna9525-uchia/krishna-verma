## 2025-03-08 - Reliable Skip Links in HashRouter
**Learning:** In a `HashRouter` environment, standard anchor links like `<a href="#main-content">` can trigger unintended routing instead of jumping to the element.
**Action:** Always implement skip links using an `onClick` handler that calls `e.preventDefault()` and `element.focus()` to ensure reliable accessibility navigation without breaking application routing.
