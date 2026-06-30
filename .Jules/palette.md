## 2025-05-14 - [Clipboard Feedback & Hover-Reveal Patterns]
**Learning:** For interactive utility components like calculators, providing a temporary (2s) visual and ARIA feedback state after a clipboard action significantly reduces user uncertainty. In dense result grids, using a "hover-reveal" pattern (Tailwind `group-hover`) keeps the UI clean while maintaining accessibility via `focus` state visibility.
**Action:** Implement clipboard handlers with `.catch()` error handling and unique state identifiers (e.g., `${type}-${index}`) to prevent feedback cross-talk in dynamic lists.

## 2025-05-14 - [Hydration Fix for Local Development]
**Learning:** The React application may fail to hydrate in the development environment if the main entry point (`index.tsx`) is not explicitly linked as a module script in `index.html`.
**Action:** Ensure `<script type="module" src="/index.tsx"></script>` is present at the end of the `<body>` in `index.html` to enable proper React mounting and hydration.
