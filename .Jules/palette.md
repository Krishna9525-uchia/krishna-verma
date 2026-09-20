## 2026-09-20 - Accessible Form Labels in Dynamic Schema Inputs
**Learning:** In dynamic form renderers built from array definitions, omitting explicit `id` attributes matching `<label htmlFor="...">` prevents screen readers from announcing form input controls and prevents label clicks from focusing inputs.
**Action:** Always map schema field identifiers (`inp.name`) to both `htmlFor` on the `<label>` and `id` on the `<input>` or `<select>` elements, and add `cursor-pointer` to indicate interactive click behavior.
