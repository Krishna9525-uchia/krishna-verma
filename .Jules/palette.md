## 2025-05-14 - [Reusable UX Pattern: Accessible Secondary Actions]
**Learning:** In grid-based result layouts, secondary actions (like Copy) should be visually subtle but immediately available. Using Tailwind's `group-hover` combined with `focus:opacity-100` ensures that these actions are discoverable for mouse users without cluttering the UI, while remaining fully accessible to keyboard users.
**Action:** Apply the `group/{name}` pattern with `focus` visibility for all secondary item actions to maintain a clean aesthetic without sacrificing accessibility.
