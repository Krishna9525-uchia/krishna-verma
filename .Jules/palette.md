## 2025-05-18 - Associate Calculator Inputs with Form Labels
**Learning:** In React components with dynamic form fields, omitting `htmlFor` on labels and `id` on form inputs degrades accessibility and prevents label click-to-focus interactions.
**Action:** Always map dynamic input identifiers to both `htmlFor` on labels and `id` on inputs, and style labels with `cursor-pointer` for clear hit targets.
