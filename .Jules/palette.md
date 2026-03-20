## 2026-03-20 - [Accessibility] Dynamic Form Label Association
**Learning:** In components like CalculatorDetail where inputs are dynamically mapped, ensure the configuration's unique name (e.g., 'inp.name') is explicitly used to link labels to inputs via 'htmlFor' and 'id'. Without this, screen readers fail to associate labels with their respective fields in dynamically generated forms.
**Action:** Always verify that 'inputs.map' blocks implement matching 'id' and 'htmlFor' attributes using a consistent identifier from the data source.

## 2026-03-20 - [Visual Polish] Unified Focus Feedback for Search
**Learning:** For complex search bars (container + icon + input + clear button), applying 'focus-within:ring' to the parent container provides a more cohesive visual indicator of focus than focusing the naked input alone. This improves the perceived quality of the interface.
**Action:** Use 'focus-within' on composite input groups to wrap the entire interactive area in a focus state.
