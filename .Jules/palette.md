## 2025-05-14 - [Copy to Clipboard Micro-UX]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications. Using `group/result` Tailwind pattern allows for clean UI where secondary actions are only visible when needed (hover/focus).
**Action:** Implement clipboard handlers with `.catch()` error handling and a success state via `setTimeout`. Use unique identifiers (e.g., `primary-${i}`) for states when rendering multiple result cards to avoid UI feedback cross-talk.
