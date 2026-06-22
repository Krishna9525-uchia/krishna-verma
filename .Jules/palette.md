## 2025-06-22 - [Clipboard Feedback in Dynamic Lists]
**Learning:** When implementing temporary visual feedback (like a 'Copied!' checkmark) for items in a dynamic list, using a simple boolean state is insufficient as it triggers feedback for all items. Using a unique identifier (e.g., `primary-${index}`) as the state value ensures that feedback is isolated to the specific interaction.
**Action:** Always use unique keys or IDs when managing transient UI states for individual items within mapped arrays.

## 2025-06-22 - [Accessibility for Hover-Triggered Actions]
**Learning:** UI elements that are visually hidden until hover (e.g., `opacity-0 group-hover:opacity-100`) are inaccessible to keyboard-only users unless they are also made visible on focus.
**Action:** Always pair `group-hover:opacity-100` with `focus:opacity-100` or `focus-within:opacity-100` and ensure proper focus rings are visible.
