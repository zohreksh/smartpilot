import fs from "node:fs";
import path from "node:path";

const outputDir = path.resolve(".output/public");
const siteUrl = String(
  process.env.NUXT_PUBLIC_SITE_URL || "https://smartpilot.ir",
).replace(/\/$/, "");

const pages = [
  ["/", "index.html"],
  ["/en", "en/index.html"],
  ["/en/services", "en/services/index.html"],
  ["/en/services/ai-development", "en/services/ai-development/index.html"],
  ["/en/services/ecommerce-development", "en/services/ecommerce-development/index.html"],
  ["/en/projects", "en/projects/index.html"],
  ["/en/projects/shidaneh", "en/projects/shidaneh/index.html"],
  ["/en/projects/hevix", "en/projects/hevix/index.html"],
  ["/en/about", "en/about/index.html"],
  ["/en/contact", "en/contact/index.html"],
  ["/en/demo", "en/demo/index.html"],
  ["/privacy", "privacy/index.html"],
  ["/en/privacy", "en/privacy/index.html"],
  ["/services", "services/index.html"],
  ["/services/ai-development", "services/ai-development/index.html"],
  ["/services/ecommerce-development", "services/ecommerce-development/index.html"],
  ["/projects", "projects/index.html"],
  ["/projects/shidaneh", "projects/shidaneh/index.html"],
  ["/projects/hevix", "projects/hevix/index.html"],
  ["/about", "about/index.html"],
  ["/contact", "contact/index.html"],
  ["/demo", "demo/index.html"],
];

const failures = [];

const read = (relativePath) =>
  fs.readFileSync(path.join(outputDir, relativePath), "utf8");

const hasMeta = (html, name) =>
  [...html.matchAll(/<meta\b[^>]*>/gi)].some((match) => {
    const tag = match[0];
    return new RegExp(`name=["']${name}["']`, "i").test(tag) &&
      /content=["'][^"']+["']/i.test(tag);
  });

const canonicalHref = (html) => {
  const tag = [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((match) => match[0])
    .find((value) => /rel=["']canonical["']/i.test(value));

  return tag?.match(/href=["']([^"']+)["']/i)?.[1] || null;
};

for (const [route, relativePath, hasTranslationPair = true] of pages) {
  const fullPath = path.join(outputDir, relativePath);

  if (!fs.existsSync(fullPath)) {
    failures.push(`${route}: generated HTML is missing (${relativePath})`);
    continue;
  }

  const html = read(relativePath);
  if (route.startsWith("/en")) {
    if (!html.includes('lang="en"')) failures.push(`${route}: html lang must be en`);
    if (!html.includes('dir="ltr"')) failures.push(`${route}: direction must be ltr`);
  }
  const expectedCanonical = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;

  if (!/<title>[^<]+<\/title>/i.test(html)) {
    failures.push(`${route}: missing non-empty <title>`);
  }

  if (!hasMeta(html, "description")) {
    failures.push(`${route}: missing meta description`);
  }

  const canonical = canonicalHref(html);
  if (canonical !== expectedCanonical) {
    failures.push(
      `${route}: canonical mismatch (expected ${expectedCanonical}, received ${canonical})`,
    );
  }

  // English-only pages (privacy) have no published translation pair yet, so no
  // alternates are advertised for them.
  if (hasTranslationPair) {
    const baseRoute = route === "/en" ? "/" : route.startsWith("/en/") ? route.slice(3) : route;
    const englishRoute = baseRoute === "/" ? "/en" : `/en${baseRoute}`;
    for (const [lang, href] of [["fa-IR", `${siteUrl}${baseRoute}`], ["en", `${siteUrl}${englishRoute}`]]) {
      if (!html.includes(`hreflang="${lang}"`) || !html.includes(`href="${href}"`)) {
        failures.push(`${route}: missing alternate for ${lang}`);
      }
    }
  }

  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  if (h1Count !== 1) {
    failures.push(`${route}: expected exactly one H1, found ${h1Count}`);
  }

  if (/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) {
    failures.push(`${route}: contains noindex`);
  }
}

const sitemapPath = path.join(outputDir, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  failures.push("/sitemap.xml: missing");
} else {
  const sitemap = read("sitemap.xml");
  for (const [route] of pages) {
    const canonical = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;
    if (!sitemap.includes(`<loc>${canonical}</loc>`)) {
      failures.push(`/sitemap.xml: missing ${canonical}`);
    }
  }
}

const robotsPath = path.join(outputDir, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  failures.push("/robots.txt: missing");
} else {
  const robots = read("robots.txt");
  if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
    failures.push("/robots.txt: sitemap URL is missing or incorrect");
  }
}

if (failures.length) {
  console.error("SEO QA failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SEO QA passed for ${pages.length} indexable pages.`);
