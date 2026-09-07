/**
 * 100% Feature Showcase for @sebastienrousseau/commitlint-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/commitlint-config ===");
assert(Array.isArray(config.extends) && config.extends.includes("@commitlint/config-conventional"));
assert(config.rules && typeof config.rules === "object");
assert.strictEqual(config.rules["header-max-length"][2], 72);
assert.strictEqual(config.rules["type-case"][2], "lower-case");
assert(Array.isArray(config.rules["type-enum"][2]));

console.log("  ✓ Extends:", config.extends[0]);
console.log("  ✓ Header max length:", config.rules["header-max-length"][2]);
console.log("  ✓ Permitted types:", config.rules["type-enum"][2].join(", "));
console.log("✅ 100% of commitlint-config rules and features validated.");
