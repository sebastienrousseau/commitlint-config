# `@sebastienrousseau/commitlint-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/commitlint-config`.

---

## Description

Shareable Commitlint rules enforcing Conventional Commits and commit hygiene.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/commitlint-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Conventional Commits Extension

- **Description**: Inherits @commitlint/config-conventional baseline
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Header Max Length

- **Description**: Enforces 72 character ceiling on commit headers
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Body & Footer Max Line Length

- **Description**: Enforces 100 character line wraps in commit bodies
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Allowed Type Enum

- **Description**: Restricts commit types to standard conventional prefixes
- **Scope**: Production & Development
- **Status**: Stable & Active

### 5. Case Restrictions

- **Description**: Enforces lower-case subjects and types with no trailing punctuation
- **Scope**: Production & Development
- **Status**: Stable & Active

