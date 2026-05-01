## 2026-05-01 - [Label-Input Association in Dynamic Forms]
**Learning:** In React applications where form controls are dynamically generated from a definition object, accessibility associations (label 'htmlFor' and input 'id') are often overlooked but critical for both screen readers and a better click/touch target experience.
**Action:** Always ensure that dynamically generated inputs have stable, unique IDs and that their corresponding labels correctly reference these IDs via 'htmlFor'. Verify this interaction by ensuring label clicks focus the input.
