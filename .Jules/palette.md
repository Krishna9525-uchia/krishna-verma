## 2025-05-14 - Improve Form Accessibility with Label-Input Association
**Learning:** In React applications with dynamically generated form fields, it is common to overlook the explicit association between labels and inputs. Linking them using `htmlFor` and `id` is crucial for screen readers and improves the clickable area for all users.
**Action:** Always ensure that dynamically generated inputs have a unique `id` and that their corresponding `label` uses `htmlFor` to reference that `id`.
