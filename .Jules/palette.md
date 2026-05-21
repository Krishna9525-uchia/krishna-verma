## 2026-05-21 - [Copy to Clipboard Micro-UX]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications. Using `aria-label` to announce the state change ensures accessibility for screen reader users.
**Action:** Always implement a visual and audible feedback loop (e.g., icon change + ARIA label update) when adding "Copy to Clipboard" functionality.
