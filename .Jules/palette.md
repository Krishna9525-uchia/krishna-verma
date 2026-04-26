## 2026-04-26 - [Copy to Clipboard Implementation]
**Learning:** For features providing transient visual feedback (like "Copied!"), using a boolean state with a 2000ms timeout is an effective and common pattern in this repository. Adding `aria-live="polite"` ensures this feedback is also accessible to screen reader users.
**Action:** Use `useState` for `copied` state and `setTimeout` for reset, accompanied by `aria-live` for accessibility in future transient feedback implementations.
