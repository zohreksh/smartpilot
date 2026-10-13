# SmartPilot: language choice based on country IP (phase 3)

## Static deployment and site language URLs
- GitHub Pages remains the host. DNS and server configuration are unchanged.
- Persian remains the canonical `/`, English is served at `/en/`.
- All translated inner pages remain directly reachable from either country, on their own stable URLs.
- **Only visits to the root `/` without a fragment** are eligible for automatic language selection.
- Server-rendered/prerendered HTML, hreflang, canonical and sitemap are unchanged by GeoIP routing.
- Known crawlers bypass automatic selection. Crawlers can still discover either language from `hreflang` and `sitemap.xml`.
- We do not redirect on any explicitly localized or deep-linked page. Google recommends against locale-driven forced redirects.

## Decision order
1. Manual FA/EN preference, recorded by Nuxt in the `smartpilot_language` cookie for up to 365 days, always wins.
2. Otherwise read only a valid two-letter country code from `smartpilot_geo_country_v1` in browser sessionStorage.
3. Otherwise request `https://api.country.is/` client-side once (GET, credentials omitted, no referrer, 2.2 second timeout).
4. For a valid `IR` country choose Persian, for any other valid country choose English.
5. If the API is unreachable, blocked, times out, reports an unknown country or its CORS fails, use the first browser language; no browser language defaults to Persian.
6. Only an English decision replaces the browser URL with `/en/`, keeping query parameters. A Persian decision remains on `/`.

No visitor IP is stored in our cookies or browser session storage. Only a two-character country code is retained for the browser session. The third-party GeoIP provider necessarily receives the visitor's IP via the network request; it states it does not log requests. Update your privacy notice before deploying if required.

Provider documentation: https://country.is/ and https://github.com/lineofflight/country. The provider offers a free API with no key, permissive browser CORS, and an infrastructure protection limit. **This is not a contractual SLA:** production monitoring should watch timeouts and loss of availability.

## Trade-offs
- Static hosting means IP detection runs after hydration. International visitors may briefly see prerendered Persian homepage before navigating to English. No server-side IP detection or truly flicker-free redirect is possible without edge hosting or a proxy.
- Country detection can be wrong for VPNs, proxies, mobile carriers or privacy relays; users can always switch manually.
- This design does not mutate DNS or route external traffic through the Shidaneh server.
- To avoid a live GeoIP dependency, remove the plugin and retain manual FA/EN selector.
- Some browsers block cookies/sessionStorage and remote APIs; errors are deliberately non-fatal.

## Validation
`node --test tests/geo-language.test.mjs` covers decision functions without network.
`node scripts/geo-language-qa.mjs` (against generated static site) uses Playwright to mock location and test root behavior, direct deep links, manual overrides, crawler behavior, failure fallback and session caching.
