## 2025-05-14 - [A11y and hydration fix]
**Learning:** React applications in this environment may be missing the entry point script tag in `index.html`, leading to blank pages during hydration in development/preview. Additionally, dynamic form labels need explicit `htmlFor` association with input `id`s and `cursor-pointer` styles to meet standard accessibility and UX expectations.
**Action:** Always verify the existence of `<script type="module" src="/index.tsx"></script>` in `index.html` if the app fails to load. Ensure dynamic forms use `inp.name` for stable `id`/`htmlFor` mapping.
