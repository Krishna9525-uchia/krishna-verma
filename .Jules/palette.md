## 2025-05-18 - Form Control Label Associations & Hit Targets

**Learning:** Dynamic form inputs rendered without `id` and `htmlFor` attributes break screen reader input identification and reduce hit target size for mouse/touch interactions. Adding `cursor-pointer` to labels visually reinforces that clicking the label focuses the linked input control.

**Action:** Map form `label` elements with `htmlFor={inp.name}` and target `input`/`select` elements with `id={inp.name}` in component templates, styling labels with `cursor-pointer`.
