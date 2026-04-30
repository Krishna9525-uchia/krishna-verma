## 2026-04-30 - [Copy to Clipboard Accessibility]
**Learning:** For UI elements that are hidden by default (e.g., using 'opacity-0 group-hover:opacity-100'), simply adding an 'aria-label' is not enough for keyboard accessibility. The element remains invisible even when focused unless the container also responds to focus.
**Action:** Always add 'focus-within:opacity-100' or similar focus-aware visibility classes to parent containers of hidden-by-default interactive elements.
