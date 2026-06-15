## 2025-05-14 - Copy to Clipboard Feedback
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using unique identifiers (e.g., `primary-${i}`) for states like `copiedId` avoids UI feedback cross-talk in dynamic lists.
**Action:** Always implement visual feedback (icon toggle or text change) for clipboard actions and ensure unique state keys when rendering in loops.
