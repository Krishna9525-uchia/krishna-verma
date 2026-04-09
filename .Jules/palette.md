## 2026-04-09 - [State Management in Result Lists]
**Learning:** When implementing temporary feedback (like "Copied!") for items in a list, using a single boolean state causes all items to show the feedback simultaneously.
**Action:** Use a unique identifier (like an item label or ID) in the state to ensure visual feedback is isolated to the specific item the user interacted with.
