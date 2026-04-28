## 2026-04-28 - [Label Association in CalculatorDetail]
**Learning:** Form inputs in the `CalculatorDetail` component were missing `id` attributes and matching `htmlFor` on their labels, preventing screen readers from announcing input context and disabling label-click focus.
**Action:** Always ensure dynamic form generators in this app associate labels and inputs using `inp.name` as a stable ID.
