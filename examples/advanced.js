// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced custom commitlint rules example
 */
const base = require("../index.cjs");
const custom = {
  ...base,
  rules: {
    ...base.rules,
    "header-max-length": [2, "always", 100],
  },
};
console.log(
  "Extended header-max-length:",
  custom.rules["header-max-length"][2],
);
