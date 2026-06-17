## 2025-05-14 - [Copy to Clipboard Pattern]
**Learning:** Providing a temporary success state (approx 2s) after clipboard actions reduces user uncertainty. Using unique identifiers (e.g., `primary-${i}`) for states like `copiedId` avoids UI feedback cross-talk in dynamic lists.
**Action:** Use a `copiedId` state with `setTimeout` and dynamic `aria-label` for all clipboard interactions.

## 2025-05-14 - [Form Accessibility]
**Learning:** Standardizing `htmlFor` on labels and `id` on inputs using consistent data properties (like `inp.name`) significantly improves screen reader navigation and click target area.
**Action:** Always map label-input pairs using unique data identifiers in dynamic forms.
