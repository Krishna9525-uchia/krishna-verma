## 2025-05-15 - Skip to Main Content in HashRouter
**Learning:** In a React application using HashRouter, standard anchor links (e.g., <a href="#main-content">) can conflict with the router's path resolution, potentially triggering a route change instead of a simple element jump.
**Action:** Use an onClick handler that calls e.preventDefault() and programmatically moves focus to the target element (which must have tabIndex={-1} and a unique ID) to ensure reliable accessibility navigation.
