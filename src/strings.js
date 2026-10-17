/**
 * Converts free text into a lowercase, hyphen-separated slug.
 * @param {string} value
 * @returns {string}
 */
export function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Shortens a string to at most maxLength UTF-16 code units using an ellipsis.
 * @param {string} value
 * @param {number} maxLength - An integer greater than or equal to 1.
 * @returns {string}
 * @throws {RangeError} If maxLength is not a positive integer.
 */
export function truncate(value, maxLength) {
  if (!Number.isInteger(maxLength) || maxLength < 1) {
    throw new RangeError("maxLength must be an integer greater than or equal to 1");
  }
  if (value.length <= maxLength) {
    return value;
  }
  return value.slice(0, maxLength - 1) + "…";
}
