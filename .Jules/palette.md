## 2025-04-14 - [Copy to Clipboard Micro-interaction]
**Learning:** Adding immediate visual feedback (e.g., toggling from a Copy to a Check icon) for clipboard actions significantly improves user confidence. Combining this with `aria-live="polite"` on the results container ensures that both visual and screen-reader users are informed of dynamic updates and successes.
**Action:** Implement clipboard feedback with a 2-second state reset using `setTimeout` and `useRef` to ensure UI stability across rapid interactions.
