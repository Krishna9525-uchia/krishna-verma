## 2025-05-14 - [Copy to Clipboard for Results]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications. Using the `group/result` hover pattern keeps the UI clean while ensuring accessibility with `focus:opacity-100`.
**Action:** Implement clipboard handlers with a localized success state (e.g., `copiedLabel`) and toggle icons (Copy -> Check) for immediate visual feedback.
