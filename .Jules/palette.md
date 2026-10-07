## 2025-05-20 - Python Playwright Script Naming Conflict
**Learning:** Naming a verification script `inspect.py` shadows Python's standard library module `inspect`, causing circular import errors when third-party libraries (like `playwright`) import standard modules.
**Action:** Use distinct file names like `verify_labels.py` or `inspect_dom.py` for verification scripts.
