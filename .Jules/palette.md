# Palette Journal

## 2025-07-29 - Linking Form Labels to Custom Inputs
**Learning:** In highly customized Tailwind layouts, missing `htmlFor` and matching `id` attributes on form labels and controls degrades keyboard/screen reader accessibility. Adding `cursor-pointer` to labels improves mouse interaction discoverability as it highlights clickability.
**Action:** Always map labels dynamically using `inp.name` (or a unique suffix) to the input/select `id`, and style custom labels with `cursor-pointer` to give immediate visual feedback.
