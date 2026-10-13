import { chromium } from "playwright";
import assert from "node:assert/strict";

const baseUrl = process.env.QA_BASE_URL || "http://127.0.0.1:4173";
const domain = new URL(baseUrl).hostname;
const geoEndpoint = "https://api.country.is/**";

const browser = await chromium.launch({ headless: true });
let checks = 0;

async function scenario(name, { country, locale = "fa-IR", manual, initialPath = "/", userAgent, fail = false, expected, requests = 1, verify = null }) {
  const context = await browser.newContext({
    locale,
    ...(userAgent ? { userAgent } : {}),
  });
  let called = 0;
  await context.route(geoEndpoint, async (route) => {
    called++;
    if (fail) return route.abort("failed");
    return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ country }) });
  });
  if (manual) {
    await context.addCookies([{
      name: "smartpilot_language",
      value: JSON.stringify(manual),
      domain,
      path: "/",
      sameSite: "Lax",
    }]);
  }

  const page = await context.newPage();
  try {
    await page.goto(baseUrl + initialPath, { waitUntil: "networkidle" });
    await page.waitForURL((url) => url.pathname === expected, { timeout: 10000 });
    // Let any unexpected late country request settle.
    await page.waitForTimeout(100);
    assert.equal(called, requests, `${name}: GeoIP request count`);
    if (verify) await verify(page, context);
    console.log(`PASS ${name}`);
    checks++;
  } finally {
    await context.close();
  }
}

try {
  await scenario("Iranian visitor stays on Persian root", { country: "IR", locale: "en-US", expected: "/" });
  await scenario("international visitor goes to English", { country: "FR", expected: "/en/" });
  await scenario("international tracking query is preserved", { country: "DE", initialPath: "/?utm_source=qa", expected: "/en/", verify: async (page) => {
    assert.equal(new URL(page.url()).searchParams.get("utm_source"), "qa");
  } });
  await scenario("explicit Persian preference overrides foreign IP", { country: "FR", manual: "fa", expected: "/", requests: 0 });
  await scenario("explicit English preference overrides Iranian IP", { country: "IR", manual: "en", expected: "/en/", requests: 0 });
  await scenario("deep-linked Persian page is not auto-redirected", { country: "FR", initialPath: "/services/", expected: "/services/", requests: 0 });
  await scenario("deep-linked English page is not auto-redirected", { country: "IR", initialPath: "/en/about/", expected: "/en/about/", requests: 0 });
  await scenario("search engine crawler stays on canonical root", { country: "FR", userAgent: "Googlebot/2.1", expected: "/", requests: 0 });
  await scenario("failed lookup falls back to Persian browser language", { fail: true, locale: "fa-IR", expected: "/" });
  await scenario("failed lookup falls back to English browser language", { fail: true, locale: "en-US", expected: "/en/" });
  await scenario("manual FA switch persists after reload", {
    country: "FR", initialPath: "/en/", expected: "/en/", requests: 0,
    verify: async (page) => {
      await page.locator('.language-switcher a[hreflang="fa"]').click();
      await page.waitForURL((url) => url.pathname === "/");
      await page.reload({ waitUntil: "networkidle" });
      assert.equal(new URL(page.url()).pathname, "/");
      const cookie = (await page.context().cookies()).find((x) => x.name === "smartpilot_language");
      assert.equal(JSON.parse(cookie?.value || "null"), "fa");
    },
  });
  await scenario("GeoIP detection is cached for browser session", {
    country: "IR", expected: "/", requests: 1,
    verify: async (page) => {
      await page.reload({ waitUntil: "networkidle" });
      assert.equal(new URL(page.url()).pathname, "/");
      assert.equal(await page.evaluate(() => sessionStorage.getItem("smartpilot_geo_country_v1")), "IR");
    },
  });
  console.log(`GeoIP integration checks passed: ${checks}`);
} finally {
  await browser.close();
}
