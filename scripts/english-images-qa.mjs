import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const assets = [
  "public/images/projects/shidane-en.svg",
  "public/images/projects/hevix-en.svg",
  "public/images/og/smartpilot-en.svg",
];
const obsolete = [
  "/images/projects/shidane.webp",
  "/images/projects/hevix.webp",
  "/images/og/nexastudio-og.webp",
];
const englishPages = [
  "pages/en/index.vue",
  "pages/en/about.vue",
  "pages/en/contact.vue",
  "pages/en/projects/index.vue",
  "pages/en/projects/hevix.vue",
  "pages/en/projects/shidaneh.vue",
  "pages/en/services/index.vue",
  "pages/en/services/ai-development.vue",
  "pages/en/services/ecommerce-development.vue",
];

for (const file of assets) {
  const svg = fs.readFileSync(path.join(root, file), "utf8");
  assert.match(svg, /<svg\b/);
  assert.match(svg, /<\/svg>\s*$/);
  assert.doesNotMatch(svg, /[\u0600-\u06ff\u0750-\u077f\u08a0-\u08ff]/, `${file} contains Persian/Arabic text`);
  assert.doesNotMatch(svg, /<script\b|xlink:href="https?:|<foreignObject\b/i, `${file} must remain a self-contained SVG`);
  console.log(`PASS English image content: ${file}`);
}

for (const file of englishPages) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  for (const oldPath of obsolete) {
    assert.ok(!source.includes(oldPath), `${file} still references Persian promo ${oldPath}`);
  }
}
console.log(`PASS asset references in ${englishPages.length} English pages`);
