## 2025-05-15 - [Skip to Main Content with HashRouter]
**Learning:** Standard anchor links (e.g., <a href="#main-content">) can conflict with HashRouter by triggering a route change instead of an internal page jump.
**Action:** Use an onClick handler with e.preventDefault() and element.focus() on the target element (which must have tabIndex={-1}) to ensure reliable accessibility navigation in HashRouter environments.
