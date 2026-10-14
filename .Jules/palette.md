## 2025-05-18 - Form Label Accessibility Mapping in Dynamic Calculators
**Learning:** Dynamically rendered form inputs generated from schema objects in `CalculatorDetail` lacked standard `htmlFor` and `id` mapping, breaking input focus when users click form labels and hindering screen reader association.
**Action:** Always map `htmlFor` on `<label>` and `id` on form inputs (`<input>` / `<select>`) to `inp.name` while adding `cursor-pointer` to labels for immediate interactive feedback.
