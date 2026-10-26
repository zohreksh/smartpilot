// Pure routing decisions. Never store or send the visitor's IP address.
export const GEO_LANGUAGE_ENDPOINT = "https://api.country.is/";
export const GEO_COUNTRY_SESSION_KEY = "smartpilot_geo_country_v1";
export const GEO_TIMEOUT_MS = 2200;

export function validCountryCode(value) {
  return typeof value === "string" && /^[A-Z]{2}$/.test(value) && !["XX", "ZZ"].includes(value);
}

export function readManualLanguage(cookieString = "") {
  const part = cookieString.split(";").map((value) => value.trim()).find((value) => value.startsWith("smartpilot_language="));
  if (!part) return null;
  try {
    const decoded = decodeURIComponent(part.slice("smartpilot_language=".length));
    // Nuxt useCookie JSON-encodes string values; accept plain values as well.
    const value = decoded.startsWith('"') ? JSON.parse(decoded) : decoded;
    return value === "fa" || value === "en" ? value : null;
  } catch {
    return null;
  }
}

export function isSearchCrawler(userAgent = "") {
  return /googlebot|bingbot|duckduckbot|baiduspider|yandexbot|slurp|applebot|facebookexternalhit|twitterbot|crawler|spider|\bbot\b/i.test(userAgent);
}

export function shouldUseGeoip(pathname, hash = "", userAgent = "") {
  // Explicit locale URLs and deep links always remain accessible.
  // Bots can index stable, prerendered Persian and English HTML.
  return pathname === "/" && !hash && !isSearchCrawler(userAgent);
}

export function languageFromCountry(country, browserLanguages = []) {
  if (validCountryCode(country)) return country === "IR" ? "fa" : "en";
  // Only when country resolution fails: use browser locale; no network retry loops.
  const locale = Array.isArray(browserLanguages) ? browserLanguages.find((x) => typeof x === "string" && x) : "";
  if (!locale) return "fa";
  return /^fa(?:-|$)/i.test(locale) ? "fa" : "en";
}

export function englishLandingUrl(search = "") {
  return "/en/" + (search.startsWith("?") ? search : "");
}
