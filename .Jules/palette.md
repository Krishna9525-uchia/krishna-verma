## 2025-09-27 - Form Label Control Association & Hit Targets
**Learning:** In dynamically generated calculator form inputs, labels missing explicit `htmlFor` attributes paired with input `id`s prevent screen readers from associating labels with controls and reduce touch/click hit target areas.
**Action:** Always map dynamic input field names (e.g., `inp.name`) to `htmlFor` on `<label>` elements and `id` on form controls, adding `cursor-pointer` to labels to clearly signal interactive focus behavior.
