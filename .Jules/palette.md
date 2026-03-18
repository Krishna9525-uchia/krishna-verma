## 2026-03-18 - Accessibility & Navigation Enhancements
**Learning:** In a HashRouter environment, standard anchor links (e.g., <a href="#main-content">) may trigger routing instead of simple element jumping. Dynamic aria-labels and state attributes (like aria-expanded) are critical for communicating component state to screen reader users in real-time.
**Action:** Use an onClick handler with e.preventDefault() and element.focus() for reliable accessibility anchors in HashRouter apps. Always ensure interactive elements reflect their current state via ARIA attributes.
