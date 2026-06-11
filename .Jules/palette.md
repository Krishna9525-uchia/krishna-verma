## 2025-05-14 - [Form Accessibility in Dynamic Calculators]
**Learning:** In React applications with dynamic forms generated from a schema, missing `htmlFor` and `id` associations between labels and inputs is a common accessibility oversight. This prevents screen readers from correctly identifying inputs and breaks the expected behavior where clicking a label focuses the corresponding input.
**Action:** Always ensure that form generation logic includes stable, unique identifiers (like `inp.name`) to map `label[htmlFor]` to `input[id]`.
