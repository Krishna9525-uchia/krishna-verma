# 🎨 Palette's Journal

## 2025-05-15 - Feedback for Clipboard Actions
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty and eliminates the need for intrusive notifications.
**Action:** Use a local state to toggle icons (e.g., Copy -> Check) for 2 seconds after a successful `navigator.clipboard.writeText` call.
