## 2025-05-18 - Associated Form Labels with Control Inputs

**Learning:** In React components rendering dynamic form inputs, form `<label>` elements missing `htmlFor` attributes prevent screen reader association and prevent clicking labels to focus input controls. Adding `htmlFor={inp.name}`, `id={inp.name}`, and `cursor-pointer` improves accessibility and hit target UX.
**Action:** Always map `htmlFor` and `id` using unique field names (such as `inp.name`) when rendering input fields in form loops, and add `cursor-pointer` to labels for visual feedback.
