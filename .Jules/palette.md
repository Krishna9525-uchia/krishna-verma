## 2026-04-16 - [Dynamic Result Announcement]
**Learning:** In highly interactive apps like calculators, screen reader users may not be aware of result updates if they are not explicitly announced.
**Action:** Always wrap dynamic calculation results in a container with `aria-live="polite"` and `aria-atomic="true"` to ensure every change is voiced.

## 2026-04-16 - [Surgical Edits in Large Files]
**Learning:** When performing surgical edits on large files (like App.tsx) using git merge diffs, it's easy to miss closing braces in JSX map functions, leading to TS1005 errors.
**Action:** Double-check map function closures (`})`) and run `tsc --noEmit` after every minor edit to catch syntax errors early.
