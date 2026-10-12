import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [app, html, styles] = await Promise.all([
  readFile(new URL("../src/main.jsx", import.meta.url), "utf8"),
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../src/styles.css", import.meta.url), "utf8"),
]);

test("page has the primary product and service sections", () => {
  for (const section of ["id=\"work\"", "id=\"services\"", "id=\"approach\"", "id=\"contact\""]) {
    assert.ok(app.includes(section), `Missing section anchor: ${section}`);
  }
});

test("mobile navigation exposes its expanded state and a controlled target", () => {
  assert.match(app, /aria-expanded=\{menuOpen\}/);
  assert.match(app, /aria-controls="primary-navigation"/);
  assert.match(app, /id="primary-navigation"/);
});

test("document includes useful title, description and language", () => {
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<title>SEVEN-MOTION/);
  assert.match(html, /name="description"/);
});

test("layout includes mobile and reduced-motion accommodations", () => {
  assert.match(styles, /@media \(max-width: 640px\)/);
  assert.match(styles, /prefers-reduced-motion: reduce/);
  assert.match(styles, /:focus-visible/);
});
