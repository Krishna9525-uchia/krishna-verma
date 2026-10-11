## 2026-10-11 - Dynamic Form Label Association in Calculator Views
**Learning:** In dynamic schema-driven form generators (such as calculator input arrays), labels frequently lack `htmlFor` attributes because controls are rendered iteratively. Linking `<label htmlFor={inp.name}>` with `<input id={inp.name}>` instantly fixes accessibility across all generated calculators and increases the clickable target area.
**Action:** When working with dynamic form mappers, ensure `id` and `htmlFor` properties are passed down from the field metadata name/key.
