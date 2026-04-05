## 2025-05-14 - Accessible Dynamic Results
**Learning:** In a calculator-heavy application, dynamic result updates are not automatically announced by screen readers, leading to a poor experience for visually impaired users who might not realize the "Results" section has changed after they modify an input.
**Action:** Always wrap the results display area in a container with `aria-live="polite"` and `aria-atomic="true"` to ensure every calculation update is announced.

## 2025-05-14 - Standardized Focus Indicators
**Learning:** The application uses custom styling that often removes default browser focus outlines, but doesn't always provide a high-contrast replacement, making keyboard navigation difficult.
**Action:** Use `focus:outline-none focus:ring-2 focus:ring-blue-500/50` consistently across all interactive elements (buttons, inputs, selects) to provide a clear, brand-aligned visual focus state.
