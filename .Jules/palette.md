## 2025-05-14 - [Copy to Clipboard Pattern]
**Learning:** Providing a way to copy results in a calculator app significantly improves utility. Adding visual feedback like a "Copied!" tooltip and icon swap makes the interaction much more satisfying.
**Action:** Implement "Copy to Clipboard" for calculation results with 'aria-live="polite"' for accessibility.

## 2025-05-14 - [Accessibility Label Association]
**Learning:** React 19 apps often benefit from explicit 'htmlFor' and 'id' associations for form inputs to ensure screen reader compatibility.
**Action:** Use 'htmlFor' on labels and 'id' on inputs, even if not explicitly requested, as a baseline accessibility standard.
