## 2025-06-26 - [Clipboard Copy Micro-UX]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using unique identifiers (e.g., `primary-${i}`) for states like `copiedId` avoids UI feedback cross-talk in dynamic lists. Dynamic `aria-label` values (e.g., 'Copy result' to 'Copied!') provide immediate screen reader feedback.
**Action:** Always implement a 2s timeout for copy feedback and ensure `aria-label` reflects the current state (Copy vs Copied).
