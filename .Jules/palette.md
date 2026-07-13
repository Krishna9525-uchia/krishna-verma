## 2025-05-15 - [Clipboard Feedback Pattern]
**Learning:** Providing immediate visual and ARIA feedback (e.g., toggling between `CopyIcon` and `CheckIcon` and updating `aria-label`) after a clipboard action reduces user uncertainty and improves accessibility. Using a unique identifier for the copied state (e.g., `primary-${i}`) prevents visual state collisions when multiple items are present.
**Action:** Implement `copiedId` state with a 2-second `setTimeout` reset and dynamic `aria-label` for all "Copy to Clipboard" interactions.
