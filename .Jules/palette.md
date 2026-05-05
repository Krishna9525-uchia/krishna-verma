## 2026-05-05 - Improved Form Label Association in CalculatorDetail

**Learning:** Accessible forms require explicit association between labels and controls. In dynamic React forms where components are mapped from a definition (like `CalculatorDef.inputs`), using a stable identifier from the definition (e.g., `inp.name`) for both `htmlFor` and `id` is a reliable pattern to ensure accessibility and enable label-click focus.

**Action:** When implementing dynamic forms or interactive calculators, always ensure that each input/select has a unique `id` and its corresponding `<label>` uses the matching `htmlFor` attribute.
