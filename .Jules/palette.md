## 2026-09-18 - Associate Dynamic Form Control Labels with Inputs
**Learning:** In dynamically generated form fields (like calculator inputs), neglecting `htmlFor` and `id` mapping prevents screen reader context association and shrinks the clickable touch target area.
**Action:** Always map `htmlFor={inp.name}` on `<label>` elements to `id={inp.name}` on `<input>` or `<select>` elements and apply `cursor-pointer` to indicate interactivity.
