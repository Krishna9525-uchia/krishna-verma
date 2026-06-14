## 2025-05-15 - Clipboard Success Feedback
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using unique identifiers (e.g., `primary-${i}`) for states like `copiedId` avoids UI feedback cross-talk in dynamic lists.
**Action:** Always implement a 2-second success state for clipboard actions and use specific IDs for state tracking in mapped lists.
