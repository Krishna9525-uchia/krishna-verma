## 2025-05-14 - Accessibility Improvements for Core Interactive Elements
**Learning:** In applications with multiple dynamic forms (like calculators), ensuring consistent accessibility across all fields is best achieved by modifying the shared component (CalculatorDetail) to automatically link labels and inputs using unique IDs derived from the input metadata.
**Action:** Always check shared component templates for missing htmlFor/id associations to fix accessibility at scale.
