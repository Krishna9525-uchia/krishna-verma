## 2025-05-18 - Form Label Accessibility Association in Dynamic Calculators
**Learning:** In dynamic form generators like `CalculatorDetail`, inputs and selects lacked `id` attributes and their corresponding `<label>` elements lacked `htmlFor` attributes, preventing screen readers from announcing field labels on focus and preventing users from clicking labels to focus inputs.
**Action:** Always map `htmlFor={inp.name}` on the `<label>` with matching `id={inp.name}` on `<input>` and `<select>` elements, and apply `cursor-pointer` to visual cues for hit targets.
