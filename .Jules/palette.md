## 2025-05-22 - [Form Accessibility in CalculatorDetail]
**Learning:** Labels in the `CalculatorDetail` component were missing `htmlFor` associations and `cursor-pointer` styles, limiting keyboard and screen reader accessibility, and making hit targets smaller for touch users.
**Action:** Always map `label` elements to their corresponding `input` or `select` using `htmlFor` and `id` attributes (using `inp.name` as a unique key in loop-rendered forms) and apply `cursor-pointer` to labels.
