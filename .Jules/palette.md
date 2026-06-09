## 2025-06-09 - [Copy to Clipboard Micro-Interaction]
**Learning:** For item-based actions like copying a result in a list, using a Tailwind `group` (e.g., `group/result`) to show the action on hover/focus keeps the UI clean while maintaining accessibility. Providing a 2-second visual feedback (icon swap) directly on the button reduces user uncertainty.
**Action:** Use unique state identifiers (like `label + index`) when managing temporary success states in a mapped list to prevent feedback from appearing on multiple items simultaneously.
