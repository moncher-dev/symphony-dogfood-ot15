import assert from "node:assert/strict";
import { test } from "node:test";

import { slugify, truncate } from "../src/strings.js";

test("slugify lowercases and joins words with hyphens", () => {
  assert.equal(slugify("  Hello, Symphony World  "), "hello-symphony-world");
});

test("slugify returns an empty string for punctuation only", () => {
  assert.equal(slugify("!!!"), "");
});

test("truncate preserves strings within the limit", () => {
  assert.equal(truncate("hello", 5), "hello");
  assert.equal(truncate("hello", 8), "hello");
  assert.equal(truncate("", 1), "");
});

test("truncate appends an ellipsis within the limit", () => {
  const result = truncate("hello world", 6);
  assert.equal(result, "hello…");
  assert.equal(result.length, 6);
});

test("truncate uses only an ellipsis at a limit of one", () => {
  assert.equal(truncate("hello", 1), "…");
  assert.equal(truncate("a", 1), "a");
});

test("truncate rejects invalid limits even for empty strings", () => {
  for (const limit of [0, -1, 1.5, NaN, Infinity, -Infinity, "3", null, undefined]) {
    assert.throws(() => truncate("", limit), RangeError);
  }
});
