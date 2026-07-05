## 2025-05-15 - [Clipboard Copy Feedback Pattern]
**Learning:** In dynamic lists of results, using a unique identifier (like `category-index`) for temporary UI states (e.g., 'Copied!' success icon) prevents visual feedback from appearing on multiple items simultaneously.
**Action:** Always map list-based feedback states to unique keys rather than a simple boolean to ensure precise micro-interactions.
