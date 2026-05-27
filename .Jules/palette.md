## 2025-05-27 - Result Copy Pattern
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using named Tailwind groups (e.g., `group/result`) with `opacity-0 group-hover/result:opacity-100 focus:opacity-100` allows for secondary actions to be tucked away until needed without sacrificing keyboard accessibility.
**Action:** Use the `copyStatus` state pattern and `group/{name}` visibility toggle for result-card actions in future components.
