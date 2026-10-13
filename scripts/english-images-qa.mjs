import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const assets = [
  "public/images/en/shidaneh_beauty_commerce_hero.webp",
  "public/images/en/hevix_smarter_parts_sourcing_banner.webp",
  "public/images/en/smartpilot_digital_product_studio.webp",
  "public/images/en/smartpilot_digital_studio_showcase.webp",
];
const obsolete = [
  "/images/projects/shidane.webp",
  "/images/projects/hevix.webp",
  "/images/projects/shidane-en.svg",
  "/images/projects/hevix-en.svg",
  "/images/og/nexastudio-og.webp",
  "/images/og/smartpilot-en.svg",
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
  const bytes = fs.readFileSync(path.join(root, file));
  assert.equal(bytes.toString("ascii", 0, 4), "RIFF", `${file} missing RIFF marker`);
  assert.equal(bytes.toString("ascii", 8, 12), "WEBP", `${file} is not WebP`);
  assert.ok(bytes.length < 400 * 1024, `${file} exceeds the 400KB image budget`);
  console.log(`PASS optimized WebP: ${file} (${Math.round(bytes.length / 1024)}KB)`);
}

for (const file of englishPages) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  for (const oldPath of obsolete) {
    assert.ok(!source.includes(oldPath), `${file} references an old Persian or SVG promotion: ${oldPath}`);
  }
}
const home = fs.readFileSync(path.join(root, "pages/en/index.vue"), "utf8");
assert.ok(home.includes('/images/en/smartpilot_digital_product_studio.webp'), "Homepage must display premium SmartPilot hero");
assert.ok(home.includes('/images/en/smartpilot_digital_studio_showcase.webp'), "Homepage social preview must use English WebP");
assert.equal((home.match(/<h1(?:\\s|>)/g) || []).length, 1, "English homepage should have one accessible H1");
console.log(`PASS image references and single H1 across ${englishPages.length} English pages`);
