## 2025-03-13 - Form Accessibility in Dynamic Calculators
**Learning:** In applications where forms are dynamically generated from configuration objects, it's easy to overlook the explicit link between labels and inputs. Standardizing the use of unique identifiers (like `inp.name`) for both `id` and `htmlFor` is crucial for screen reader support.
**Action:** Always ensure that any loop-generated form fields include matching `id` and `htmlFor` attributes derived from the field's unique key.
