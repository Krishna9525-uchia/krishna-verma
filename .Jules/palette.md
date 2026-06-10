## 2026-06-10 - [Clipboard Feedback Pattern]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications in utility-focused apps.
**Action:** Implement clipboard handlers with a localized `copiedId` state and a `setTimeout` to toggle between `CopyIcon` and `CheckIcon` to provide immediate, non-intrusive visual confirmation.
