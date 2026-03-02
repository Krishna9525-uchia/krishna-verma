## 2025-05-15 - Improving Keyboard Navigation with Skip Links

**Learning:** In a React application using `HashRouter`, standard anchor links (e.g., `<a href="#main-content">`) may trigger client-side routing instead of simply jumping to the target element on the same page. This can break the "Skip to main content" functionality if not handled correctly.

**Action:** When implementing a 'Skip to main content' link in a `HashRouter` environment, use an `onClick` handler with `e.preventDefault()` and programmatically focus the target element (usually `<main>`). Ensure the target has `tabIndex={-1}` to be focusable via script while remaining out of the natural tab order.
