# Palette Journal 🎨

Critical UX and accessibility learnings for CalcMaster Pro.

## 2025-05-15 - Clipboard Feedback Pattern
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications.
**Action:** Use a `copyStatus` state and `setTimeout` to toggle icons and ARIA labels.
