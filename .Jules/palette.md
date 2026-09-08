## 2025-03-08 - Form Label Accessibility Association
**Learning:** In dynamic form generators, rendering `<label>` elements without `htmlFor` and mapped `id` on inputs prevents screen readers from announcing field contexts and prevents users from focusing inputs by tapping/clicking labels.
**Action:** Always map `htmlFor={inp.name}` and `id={inp.name}` when iterating over dynamic input arrays, and apply `cursor-pointer` to labels for clear interactive hit target feedback.
