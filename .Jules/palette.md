## 2026-07-07 - [Label-Input Accessibility & Interactivity]
**Learning:** In React applications with dynamic forms, failing to associate labels with inputs (id/htmlFor) breaks screen reader navigation and prevents users from focusing inputs by clicking labels. Adding `cursor-pointer` to these labels provides essential visual affordance that the label is part of the interactive control.
**Action:** Always map `inp.name` to both `htmlFor` on the label and `id` on the input/select, and ensure labels have `cursor-pointer` when associated.
