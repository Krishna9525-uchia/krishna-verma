## 2026-03-06 - Dynamic Form Label Association & Pointer Cursor
**Learning:** Dynamic form controls rendered from data definitions often omit `htmlFor` and `id` bindings, preventing screen readers from announcing input labels and shrinking the touch/click target.
**Action:** Always map `htmlFor={inp.name}` on `<label>` to `id={inp.name}` on `<input>` and `<select>` controls and include `cursor-pointer` on labels in calculator forms.
