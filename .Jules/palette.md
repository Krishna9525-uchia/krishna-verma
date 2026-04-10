## 2026-04-10 - Accessible Skip Links in HashRouter
**Learning:** In a HashRouter environment, standard anchor links for page jumping (e.g., <a href="#main-content">) can sometimes interfere with routing or fail to trigger the browser's scroll-to-id behavior correctly.
**Action:** Use an onClick handler that calls e.preventDefault() and programmatically focuses the target element (which must have tabIndex={-1}) for reliable accessibility.
