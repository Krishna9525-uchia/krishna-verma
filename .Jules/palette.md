## 2026-06-24 - [Micro-feedback: Copy to Clipboard]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using unique identifiers (e.g., `primary-${i}`) for states like `copiedId` avoids UI feedback cross-talk in dynamic lists. Dynamic `aria-label` values that toggle (e.g., 'Copy result' to 'Copied!') ensure screen reader users receive immediate confirmation.
**Action:** Implement clipboard handlers with dynamic `aria-label` support and unique state IDs for list items.
