<script setup lang="ts">
usePageSeo({
  title: "Digital Product Projects & Case Studies | SmartPilot",
  description: "Explore real products Shidaneh and HEVIX, built with structured data, intelligent search and maintainable engineering.",
  path: "/en/projects",
  locale: "en",
  image: "/images/og/nexastudio-og.webp",
});
const sections = [
  {
    "kicker": "CASE STUDIES",
    "title": "Products we have worked on",
    "description": "Examples of design, architecture and intelligent capabilities in practical use.",
    "items": [
      {
        "title": "Shidaneh",
        "description": "Beauty commerce and content with catalogs, product discovery and technical SEO.",
        "link": "/en/projects/shidaneh",
        "image": "/images/projects/shidane.webp"
      },
      {
        "title": "HEVIX",
        "description": "Specialized industrial parts platform with structured information and smart search.",
        "link": "/en/projects/hevix",
        "image": "/images/projects/hevix.webp"
      }
    ]
  },
  {
    "kicker": "ENGINEERING APPROACH",
    "title": "What connects these products",
    "description": "From discovery to ongoing delivery.",
    "items": [
      {
        "title": "Product thinking",
        "description": "Design around business goals and user workflows."
      },
      {
        "title": "Extensible systems",
        "description": "Build architecture that can support ongoing changes."
      },
      {
        "title": "Data-driven intelligence",
        "description": "Connect AI and search to useful product data."
      },
      {
        "title": "Continuous improvements",
        "description": "Treat SEO, administration and maintenance as part of the product lifecycle."
      }
    ]
  }
];

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"Projects","path":"/en/projects"}]);

</script>

<template>
  <EnContentPage kicker="PROJECTS" title="Working products, not just beautiful screens" introduction="Two very different markets share one core principle: design around actual user needs and keep the software maintainable."  :sections="sections" />
</template>
