## 2025-05-15 - Form Label Accessibility
**Learning:** In React applications with dynamic forms, labels often lack explicit association with their controls via `htmlFor` and `id`, preventing screen readers from correctly announcing the field and users from clicking labels to focus inputs.
**Action:** Always verify that input and select components have unique `id` attributes that match their label's `htmlFor` attribute.
