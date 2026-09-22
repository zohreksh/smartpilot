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
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      title: "SmartPilot | طراحی و توسعه محصولات دیجیتال با هوش مصنوعی",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#07111f" },
        {
          name: "description",
          content:
            "SmartPilot استودیو طراحی و توسعه محصولات دیجیتال، هوش مصنوعی، اتوماسیون SEO و راهکارهای اختصاصی برای کسب‌وکارها است.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "SmartPilot" },
        { property: "og:title", content: "SmartPilot | طراحی و توسعه محصولات دیجیتال با هوش مصنوعی" },
        {
          property: "og:description",
          content:
            "طراحی محصول، توسعه نرم‌افزار اختصاصی، هوش مصنوعی، جستجوی هوشمند و راهکارهای دیجیتال برای رشد کسب‌وکارها.",
        },
        { property: "og:url", content: "https://smartpilot.ir" },
        { name: "twitter:card", content: "summary_large_image" },
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
        "Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: blob:; font-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self' ws: wss:;",
      },
    },
  },

  css: ["~/assets/css/main.css"],
});
