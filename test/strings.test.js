import assert from "node:assert/strict";
import { test } from "node:test";

import { slugify } from "../src/strings.js";

test("slugify lowercases and joins words with hyphens", () => {
  assert.equal(slugify("  Hello, Symphony World  "), "hello-symphony-world");
});

test("slugify returns an empty string for punctuation only", () => {
  assert.equal(slugify("!!!"), "");
});
