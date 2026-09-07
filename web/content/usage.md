---
title: "Usage — @sebastienrousseau/commitlint-config"
description: "How to use and configure @sebastienrousseau/commitlint-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/commitlint-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/commitlint-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/commitlint-config";
export default config;
```

## In `package.json`

```json
{
  "commitlint": "@sebastienrousseau/commitlint-config"
}
```
