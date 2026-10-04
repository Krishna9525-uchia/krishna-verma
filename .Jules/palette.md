## 2025-05-18 - Search Input Accessibility & Empty State Recovery CTA

**Learning:** Empty search states without a direct recovery mechanism force users to scroll back up to locate and clear the input field manually. Providing an explicit "Clear search" CTA in the empty state card, along with `aria-label="Search calculators"` and `aria-label="Clear search"` attributes, significantly improves screen reader clarity and keyboard flow.

**Action:** Whenever building filtered search views, ensure the empty state card features an accessible action button to clear or reset the filter query directly.
