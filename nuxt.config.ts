export default defineNuxtConfig({
  ssr: true,

  components: {
    dirs: [
      { path: "~/components", pathPrefix: false },
    ],
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "",
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      title: "NexaStudio | طراحی و توسعه محصول دیجیتال",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#07111f",
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ["/robots.txt", "/sitemap.xml"],
    },
  },

  css: ["~/assets/css/main.css"],
});
