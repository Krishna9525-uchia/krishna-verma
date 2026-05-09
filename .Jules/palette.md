## 2025-05-22 - Missing Form Label Associations
**Learning:** In React applications that generate forms dynamically from data (like this calculator suite), it's a common oversight to forget associating `<label>` elements with their controls via `htmlFor` and `id`. This breaks standard browser behaviors like focusing an input on label click and degrades the experience for screen reader users.
**Action:** Always ensure that dynamic form templates include a unique identifier (like a field `name`) that can be used to link labels and inputs, even when the UI is highly styled.
