## 2026-06-16 - [Clipboard Copy Micro-UX]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using unique identifiers (e.g., `primary-${i}`) for states like `copiedId` avoids UI feedback cross-talk in dynamic lists.
**Action:** Implement clipboard handlers with a success state and dynamic `aria-label` for screen reader feedback in future components.
