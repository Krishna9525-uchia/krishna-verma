## 2025-05-14 - [Clipboard Feedback & State Isolation]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions significantly reduces user uncertainty. In dynamic lists, using unique identifiers (e.g., `primary-${i}`) for transient states like `copiedId` is critical to prevent UI feedback cross-talk.
**Action:** Always implement a timeout-based success icon/text and use item-specific IDs for feedback states in lists.
