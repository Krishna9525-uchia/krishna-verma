## 2026-02-26 - [Accessibility Foundation]
**Learning:** The application lacked several foundational accessibility features: skip-to-content links, proper ARIA labels for icon-only buttons, ARIA expanded states for toggles, and explicit label-to-input associations.
**Action:** When working on a new repo, always perform a quick accessibility audit of the core layout (Header, Footer, Main Search) and dynamic forms. Ensure `htmlFor` and `id` are consistently used even in dynamic loops.
