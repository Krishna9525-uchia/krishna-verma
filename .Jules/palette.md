## 2026-06-08 - Accessible Label-Input Association
**Learning:** In React applications with dynamic forms, ensure all controls have stable 'id' attributes matching their labels' 'htmlFor' to guarantee screen reader support and functional label-click focus.
**Action:** Use the unique `name` property from the data structure as the `id` and `htmlFor` value when mapping over inputs.
