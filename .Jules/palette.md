## 2025-05-14 - [A11y/UX] Modern Accessibility & Interaction Patterns
**Learning:** In React 19 apps using Tailwind, accessible form associations are best handled via `useId` to ensure stable, unique IDs. For interactive feedback like "Copy to Clipboard", a temporary icon swap (Copy -> Check) with `aria-live` or clear ARIA labels provides immediate, accessible confirmation.
**Action:** Always prefer `useId` for form labels and provide visual/ARIA feedback for background actions like clipboard operations.
