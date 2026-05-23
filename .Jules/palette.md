## 2026-05-23 - Label-Input Association for Dynamic Forms
**Learning:** In React applications with dynamically generated forms (like the calculators here), it's easy to overlook programmatic label association. Missing 'htmlFor' and 'id' prevents screen readers from announcing input context and stops users from focusing inputs by clicking labels.
**Action:** Always ensure that 'htmlFor' on labels matches the 'id' on the corresponding input/select element, using stable identifiers like the field name.
