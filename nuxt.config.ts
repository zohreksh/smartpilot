export default defineNuxtConfig({
  ssr: true,

  components: {
    dirs: [
      { path: "~/components", pathPrefix: false },
    ],
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://smartpilot.ir",
    },
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/smartpilot/",
    head: {
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      title: "SmartPilot | طراحی محصول دیجیتال و راهکارهای هوشمند",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#07111f" },
      ],
    },
  },

  routeRules: {
    "/**": {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
        "Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: blob:; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' ws: wss:;",
      },
    },
  },

  nitro: {
    prerender: {
      routes: ["/robots.txt", "/sitemap.xml"],
    },
  },

  css: ["~/assets/css/main.css"],
});
