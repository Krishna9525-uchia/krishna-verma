## 2026-05-18 - [Clipboard Feedback & Accessibility]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Adding 'aria-live' and 'aria-atomic' to results containers ensures screen reader users are notified of dynamic calculation updates without losing context.
**Action:** Always implement a visual feedback loop for copy actions and ensure dynamic result areas are correctly marked with 'aria-live'.
