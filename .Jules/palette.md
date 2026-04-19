## 2026-04-19 - Targeted ARIA Live Regions
**Learning:** Placing `aria-live="polite"` on large, frequently updating containers (like search result lists or live calculation grids) creates significant noise for screen reader users, as the entire container is re-announced on every update.
**Action:** Use targeted `aria-live` regions on specific status indicators (e.g., "15 results found") rather than wrapping the whole interactive area.
