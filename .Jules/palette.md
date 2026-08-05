# Palette's Journal - Critical Learnings

## 2026-08-05 - Label-Input Accessibility Association in Calculators
**Learning:** In highly interactive form-driven apps like calculator suites, form labels without explicit `htmlFor` and `id` mapping suffer from poor touch target accessibility and prevent screen reader users from identifying associated fields correctly. Adding `htmlFor` coupled with the `cursor-pointer` class on the label improves target interactivity by making the entire label area clickable, focusing the associated input element.
**Action:** Always associate `<label>` elements with their matching `<input>` or `<select>` controls using unique identifiers (e.g. `inp.name`) via `htmlFor` and `id` attributes, and apply `cursor-pointer` to labels for immediate visual target feedback.
