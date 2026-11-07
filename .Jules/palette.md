# Palette's Journal - Critical Learnings

## 2026-11-07 - Accessible Form Label Associations in Dynamic Calculators
**Learning:** In dynamically-rendered calculator forms like `CalculatorDetail`, form labels without `htmlFor` and controls without matching `id` attributes degrade accessibility for screen reader users and prevent users from clicking on labels to focus input or select controls. Adding `cursor-pointer` to the label element provides immediate visual feedback that clicking the label is an interactive target.
**Action:** Always map `htmlFor` and `id` to `inp.name` on dynamically mapped input and select elements, and pair `cursor-pointer` on `<label>` elements.
