## 2025-05-14 - Skip-to-content and HashRouter
**Learning:** In a HashRouter environment, ensure the 'Skip to main content' link targets an ID on the main element correctly. Adding tabIndex={-1} to the target element is crucial for ensuring focus is moved programmatically, especially in single-page applications.
**Action:** Always include a 'Skip to main content' link and ensure the target main element has tabIndex={-1} and a unique ID.

## 2025-05-14 - Dynamic Form Accessibility
**Learning:** When form fields are generated dynamically from data, ensure the unique identifier (e.g., 'name') is reused for both 'htmlFor' on labels and 'id' on inputs to maintain accessibility.
**Action:** Link labels and inputs using consistent data-driven IDs.
