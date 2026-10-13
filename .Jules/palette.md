## 2025-05-18 - Explicit Form Label Association
**Learning:** Dynamic form controls rendered in loop constructs must explicitly map `htmlFor` on labels to `id` on inputs/selects using unique input names (`inp.name`) to enable screen reader support and hit-target click focusing.
**Action:** Always verify that dynamically generated inputs have corresponding `htmlFor` and `id` attributes and styled hit target cues (`cursor-pointer`).
