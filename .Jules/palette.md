## 2025-05-15 - [Copy to Clipboard with Feedback]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using unique identifiers (e.g., `primary-${i}`) for states like `copiedId` avoids UI feedback cross-talk in dynamic lists.
**Action:** Always implement a time-bound success state for clipboard actions and use specific IDs for list-item state management.

## 2025-05-15 - [Interactive Element Accessibility]
**Learning:** Icon-only buttons (mobile menus, search clear buttons) are frequently missing `aria-label` attributes, making them inaccessible to screen readers.
**Action:** Audit interactive elements for missing accessible names and use `aria-label` where text labels are visually absent.
