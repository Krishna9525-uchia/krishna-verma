## 2025-05-14 - Label-Input Accessibility and Clipboard Feedback
**Learning:** In React applications with dynamic form generation, ensuring explicit association between labels and inputs via `htmlFor` and `id` (using the field's name/unique ID) is critical for both accessibility and UX (larger hit targets). Additionally, providing a temporary success state (e.g., changing "Copy" to "Copied!" for 2 seconds) significantly reduces user uncertainty during clipboard operations.
**Action:** Always map `inp.name` to `id`/`htmlFor` in form loops and implement a `copiedId` state pattern for lists of results to avoid UI feedback cross-talk.

## 2025-05-14 - Hydration and Entry Point Verification
**Learning:** When a React application renders a blank page despite a successful build, verify that the entry point script (e.g., `<script type="module" src="/index.tsx"></script>`) is correctly placed in the `index.html`. Its absence prevents React from hydrating the root element.
**Action:** Check `index.html` for the module script tag if `pnpm preview` or `pnpm dev` shows a blank page.
