# Palette's Journal

## 2025-05-14 - Initial Observations
**Learning:** The application has a beautiful UI but lacks some fundamental accessibility features like label-input associations and ARIA labels on some icon-only buttons. The search bar also lacks a clear focus indicator.
**Action:** Prioritize fundamental accessibility (labels/ARIA) and then look for "delight" features like "Copy to clipboard".

## 2025-05-14 - Copy to Clipboard UX
**Learning:** Adding a "Copy to clipboard" button to calculation results significantly improves the utility of the tool. Using a 2-second success state (icon toggle) provides immediate and clear feedback without needing intrusive toasts.
**Action:** Use the `group/result` pattern with `opacity-0 group-hover/result:opacity-100 focus:opacity-100` for secondary actions to keep the UI clean while remaining accessible.
