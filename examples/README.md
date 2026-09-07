# `@sebastienrousseau/commitlint-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/commitlint-config`.

---

## Example Suite Overview

| File | Type | Feature Coverage | Command |
| :--- | :--- | :--- | :--- |
| [`basic.js`](./basic.js) | CommonJS | Standard default configuration import | `node examples/basic.js` |
| [`advanced.js`](./advanced.js) | CommonJS | Custom extension and rule overrides | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs) | ES Module | Native ESM consumption via `import` | `node examples/esm.mjs` |
| [`features.js`](./features.js) | CommonJS | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **Conventional Commits Extension**: Inherits @commitlint/config-conventional baseline
- [x] **Header Max Length**: Enforces 72 character ceiling on commit headers
- [x] **Body & Footer Max Line Length**: Enforces 100 character line wraps in commit bodies
- [x] **Allowed Type Enum**: Restricts commit types to standard conventional prefixes
- [x] **Case Restrictions**: Enforces lower-case subjects and types with no trailing punctuation
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
