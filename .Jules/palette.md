## 2025-05-12 - [Copy to Clipboard Feedback]
**Learning:** Providing immediate visual feedback (e.g., changing an icon to a checkmark) after a clipboard action significantly reduces user uncertainty and eliminates the need for intrusive toast notifications for minor actions.
**Action:** Always include a temporary success state (approx 2s) when implementing copy-to-clipboard functionality.

## 2025-05-12 - [Icon-Only Button Accessibility]
**Learning:** Icon-only buttons in dense data displays (like calculator results) must have descriptive aria-labels that include the context of the data being copied to ensure screen reader users understand which value the button pertains to.
**Action:** Use dynamic aria-labels like `aria-label={`Copy ${res.label}`}` for buttons associated with specific data points.
