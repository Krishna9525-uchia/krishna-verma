## 2025-05-18 - Form Control Label Association in Dynamic Calculator Views
**Learning:** Dynamic form inputs in `CalculatorDetail` lacked `id` attributes and matching `htmlFor` on `<label>` elements, preventing screen reader association and disabling direct click-to-focus on form labels.
**Action:** Always map `inp.name` to both `htmlFor` on `<label>` and `id` on `<input>`/`<select>` elements, and include `cursor-pointer` on labels for responsive visual feedback.
