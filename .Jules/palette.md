## 2025-05-15 - [Copy to Clipboard Success State]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications.
**Action:** Always implement a brief visual confirmation (like a checkmark icon or "Copied!" text) that reverts automatically after a short delay.

## 2025-05-15 - [Keyboard Accessibility for Hidden Actions]
**Learning:** Interactive elements hidden by default for visual cleanliness (e.g., using `group-hover:opacity-100`) must include `focus:opacity-100` to ensure they are accessible to keyboard-only users.
**Action:** Ensure hover-triggered buttons are also visible on focus.
