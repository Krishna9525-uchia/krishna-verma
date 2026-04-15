## 2026-04-15 - [Accessible Form Inputs & Interactive Feedback]
**Learning:** In a single-file React application with multiple dynamic components, using `useId` is essential for generating stable, unique IDs for form accessibility (label-input association). Additionally, provide immediate visual feedback for clipboard actions using state-driven icon toggling and a `useRef` managed timeout to ensure UI stability.
**Action:** Use `useId()` for all new form elements and implement the `copiedId` + `useRef` timeout pattern for all 'copy to clipboard' features.
