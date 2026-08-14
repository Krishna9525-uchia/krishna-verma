# Palette's Journal - Critical UX/Accessibility Learnings Only

This journal contains only critical, high-value, reusable UX and accessibility insights discovered while working with CalcMaster Pro.

## 2025-08-14 - Label-Input Programmatic Association & Interactivity
**Learning:** In dynamically generated calculator interfaces, wrapping inputs/selects in a container is often mistakenly assumed to provide sufficient association. However, assistive technologies require explicit programmatic mapping via standard `for` and `id` attributes to correctly read input contexts. Additionally, styling labels with `cursor-pointer` dramatically enhances mouse and touch-target expectations, indicating the label itself is an interactive hit target that shifts focus.
**Action:** Always associate dynamically rendered form labels with their respective interactive controls using `htmlFor` and a unique `id` (e.g., mapped to the input's name), and apply `cursor-pointer` to the label elements across the design system.
