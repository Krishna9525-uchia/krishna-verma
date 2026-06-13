## 2026-06-13 - [Copy to Clipboard Results]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications. Using unique identifiers (e.g., `primary-${i}`) for component states like `copiedId` when rendering multiple result cards avoids UI feedback cross-talk.
**Action:** Always implement icon toggles or similar immediate visual feedback for copy-to-clipboard actions, ensuring the state is scoped to the specific item being copied.
