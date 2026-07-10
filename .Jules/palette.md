## 2025-05-14 - [Copy-to-Clipboard Feedback]
**Learning:** Providing immediate, temporary visual feedback (e.g., 2s icon change) for clipboard actions significantly reduces user uncertainty. Using unique identifiers for state tracking in lists (e.g., `res.label + i`) prevents visual feedback from appearing on multiple items simultaneously.
**Action:** Always implement a 2-second success state with a cleanup function in `useEffect` for clipboard interactions.
