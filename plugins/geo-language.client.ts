import {
  englishLandingUrl,
  GEO_COUNTRY_SESSION_KEY,
  GEO_LANGUAGE_ENDPOINT,
  GEO_TIMEOUT_MS,
  languageFromCountry,
  readManualLanguage,
  shouldUseGeoip,
  validCountryCode,
} from "~/utils/geo-language.mjs";

type CountryResponse = { country?: unknown };

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  let inFlight = false;

  // Invoked after mounting to avoid SSR/SSG hydration mismatch.
  // The original language-specific static HTML remains indexable by crawlers.
  async function applyFirstVisitLanguage() {
    if (inFlight || !shouldUseGeoip(window.location.pathname, window.location.hash, navigator.userAgent)) {
      return;
    }

    const manualChoice = readManualLanguage(document.cookie);
    if (manualChoice === "fa") return;
    if (manualChoice === "en") {
      window.location.replace(englishLandingUrl(window.location.search));
      return;
    }

    inFlight = true;
    let country: string | null = null;

    try {
      const cached = window.sessionStorage.getItem(GEO_COUNTRY_SESSION_KEY);
      if (validCountryCode(cached)) country = cached;
    } catch {
      // Private mode and restrictive browsers may disable sessionStorage.
    }

    if (!country) {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), GEO_TIMEOUT_MS);
      try {
        const response = await fetch(GEO_LANGUAGE_ENDPOINT, {
          method: "GET",
          credentials: "omit",
          cache: "no-store",
          referrerPolicy: "no-referrer",
          signal: controller.signal,
        });
        if (response.ok) {
          const data = await response.json() as CountryResponse;
          if (validCountryCode(data?.country)) {
            country = data.country as string;
            try {
              window.sessionStorage.setItem(GEO_COUNTRY_SESSION_KEY, country);
            } catch {
              // Detect without persisting if storage is unavailable.
            }
          }
        }
      } catch {
        // Network/CORS/timeout failures fall back to the browser language.
      } finally {
        window.clearTimeout(timeout);
      }
    }

    // Route or preference may change while the country request is pending.
    if (
      shouldUseGeoip(window.location.pathname, window.location.hash, navigator.userAgent) &&
      readManualLanguage(document.cookie) !== "fa" &&
      languageFromCountry(country, navigator.languages || [navigator.language]) === "en"
    ) {
      window.location.replace(englishLandingUrl(window.location.search));
    }

    inFlight = false;
  }

  nuxtApp.hook("app:mounted", () => {
    void applyFirstVisitLanguage();
  });

  // Also handle client-side navigation to the root, without intercepting deep links.
  router.afterEach((to) => {
    if (to.path === "/" && !nuxtApp.isHydrating) {
      void applyFirstVisitLanguage();
    }
  });
});
