## 2025-05-14 - Skip Link Implementation Details
**Learning:** When implementing a 'Skip to main content' link, the target element (usually `<main>`) must have `tabIndex={-1}` and `focus:outline-none` to receive focus programmatically without showing a default browser ring unless focused by other means.
**Action:** Always ensure the target container of a skip link is properly configured to receive focus.

## 2025-05-14 - Playwright Visibility for Screen Reader Only Elements
**Learning:** Playwright's `to_be_visible()` can sometimes return true for `sr-only` elements if they are technically in the viewport and not `display: none`.
**Action:** Use `to_be_attached()` or specific state checks when verifying accessibility-only elements that are hidden from sighted users.
