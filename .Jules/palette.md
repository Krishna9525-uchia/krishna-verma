## 2025-03-09 - Improving App-wide Accessibility
**Learning:** Standard React components often miss basic accessibility features like "Skip to main content" links and explicit label-input associations when dynamically rendered. In a HashRouter environment, skip links need manual focus handling to avoid routing conflicts.
**Action:** Always include a SkipToMain component that handles programmatic focus and ensure all dynamic form inputs have unique IDs linked to their labels.
