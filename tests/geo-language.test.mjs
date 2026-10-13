import test from "node:test";
import assert from "node:assert/strict";
import {
  englishLandingUrl,
  isSearchCrawler,
  languageFromCountry,
  readManualLanguage,
  shouldUseGeoip,
  validCountryCode,
} from "../utils/geo-language.mjs";

test("Iranian IP defaults to Persian regardless of browser locale", () => {
  assert.equal(languageFromCountry("IR", ["en-US"]), "fa");
});
test("any valid non-Iranian IP defaults to English", () => {
  assert.equal(languageFromCountry("FR", ["fa-IR"]), "en");
  assert.equal(languageFromCountry("US", ["fa-IR"]), "en");
});
test("country lookup errors fall back safely to browser locale", () => {
  assert.equal(languageFromCountry(null, ["fa-IR"]), "fa");
  assert.equal(languageFromCountry(null, ["en-US"]), "en");
  assert.equal(languageFromCountry(null, []), "fa");
  assert.equal(languageFromCountry("XX", ["fa-IR"]), "fa");
  assert.equal(validCountryCode("A1"), false);
});
test("only the unqualified root is an automatic-routing candidate", () => {
  assert.equal(shouldUseGeoip("/", "", "Mozilla/5.0"), true);
  assert.equal(shouldUseGeoip("/en/", "", "Mozilla/5.0"), false);
  assert.equal(shouldUseGeoip("/services", "", "Mozilla/5.0"), false);
  assert.equal(shouldUseGeoip("/", "#projects", "Mozilla/5.0"), false);
});
test("major crawlers are not routed by country", () => {
  assert.equal(isSearchCrawler("Googlebot/2.1"), true);
  assert.equal(shouldUseGeoip("/", "", "Googlebot/2.1"), false);
  assert.equal(shouldUseGeoip("/", "", "bingbot/2.0"), false);
});
test("both Nuxt JSON cookie and plain cookie values are respected", () => {
  assert.equal(readManualLanguage("smartpilot_language=%22fa%22; other=1"), "fa");
  assert.equal(readManualLanguage("smartpilot_language=%22en%22"), "en");
  assert.equal(readManualLanguage("smartpilot_language=fa"), "fa");
  assert.equal(readManualLanguage("smartpilot_language=wrong"), null);
  assert.equal(readManualLanguage("session=one"), null);
});
test("tracking parameters are kept when going to the English home", () => {
  assert.equal(englishLandingUrl("?utm_source=ad"), "/en/?utm_source=ad");
  assert.equal(englishLandingUrl(""), "/en/");
});
