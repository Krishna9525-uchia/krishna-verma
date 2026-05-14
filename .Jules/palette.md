## 2024-05-14 - Copy to Clipboard Interaction
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications. Interactive elements hidden by default for visual cleanliness must include focus:opacity-100 to ensure keyboard accessibility.
**Action:** Always use a status state for clipboard feedback and ensure focus-visible/focus-within coverage for hover-only actions.
