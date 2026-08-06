# Palette's UX & Accessibility Journal

## 2025-02-18 - Form Control Accessibility in Calculator Inputs
**Learning:** In highly interactive form-driven templates (such as mathematical calculators), merely styling a label element next to an input is insufficient for full accessibility. Modern screen readers require explicit associative pairing via the `htmlFor` and `id` attributes. Additionally, cursor feedback (e.g. `cursor-pointer`) on form labels drastically increases desktop discoverability and interactive confidence.
**Action:** Always map dynamically-generated label elements to their target inputs using unique identifiers (e.g., `inp.name`) using `htmlFor` and `id` attributes, and apply interactive pointer cursors.
