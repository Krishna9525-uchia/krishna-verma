## 2026-05-22 - Clipboard Feedback Loop
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications. Using ARIA labels that switch from 'Copy' to 'Copied!' ensures screen reader users receive immediate confirmation.
**Action:** Always implement a 2-second visual and accessible confirmation (icon swap + aria-label update) for copy-to-clipboard interactions.
