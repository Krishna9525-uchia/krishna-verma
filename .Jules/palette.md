
## 2025-05-14 - [Enhanced Results Card with Clipboard Interaction]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using unique identifiers (e.g., 'primary-${i}') for 'copiedId' state avoids feedback cross-talk in lists.
**Action:** Always implement clipboard handlers with .catch() and a 2s visual toggle (CheckIcon/CopyIcon) using distinct IDs for multi-item results.
