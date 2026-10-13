<script setup lang="ts">
usePageSeo({
  title: "Shidaneh Beauty E-commerce Case Study | SmartPilot",
  description: "Shidaneh combines custom beauty commerce, catalog management, intelligent search and technical SEO.",
  path: "/en/projects/shidaneh",
  locale: "en",
  image: "/images/projects/shidane.webp",
});
const sections = [
  {
    "kicker": "PROJECT SCOPE",
    "title": "What went into the product",
    "description": "From customer journeys to operational systems.",
    "items": [
      {
        "title": "Customer experience",
        "description": "Useful shopping and product-discovery journeys."
      },
      {
        "title": "Catalog management",
        "description": "Structured product information and content administration."
      },
      {
        "title": "Smart capabilities",
        "description": "Intelligent retrieval and assistance connected to catalog data."
      },
      {
        "title": "Technical SEO",
        "description": "Search-friendly structure, metadata and extensible engineering."
      }
    ]
  },
  {
    "kicker": "RELATED SERVICE",
    "title": "More about this approach",
    "description": "Explore our development capabilities.",
    "items": [
      {
        "title": "Custom e-commerce development",
        "description": "See our approach to tailored shopping platforms.",
        "link": "/en/services/ecommerce-development"
      }
    ]
  }
];
</script>

<template>
  <EnContentPage kicker="CASE STUDY · SHIDANEH" title="Shidaneh: beauty commerce designed to evolve" introduction="A commerce and content product focused on shopping experience, structured catalog information, smart search and continued development." hero-image="/images/projects/shidane.webp" hero-image-alt="Shidaneh: beauty commerce designed to evolve" :sections="sections" />
</template>
