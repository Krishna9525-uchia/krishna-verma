# Palette's Journal - UX & Accessibility Learnings

## 2025-05-18 - Form Label Accessibility and Hit Target Optimization
**Learning:** Calculator form inputs were lacking `id` and `htmlFor` associations on labels. Linking labels explicitly with `htmlFor={inp.name}` and `id={inp.name}` alongside `cursor-pointer` improves screen reader navigation and significantly increases interactive hit targets for desktop and touch users.
**Action:** Always map `htmlFor` and `id` on dynamic input lists using unique input field identifiers (e.g., `inp.name`) and add `cursor-pointer` styling to input labels.
