<script setup lang="ts">
usePageSeo({
  title: "HEVIX Industrial Parts Case Study | SmartPilot",
  description: "HEVIX is a specialized platform for industrial parts catalogs, smart search, data and product research workflows.",
  path: "/en/projects/hevix",
  locale: "en",
  image: "/images/projects/hevix.webp",
});
const sections = [
  {
    "kicker": "PROJECT SCOPE",
    "title": "Engineering for a specialist market",
    "description": "Catalog accuracy and useful discovery take priority.",
    "items": [
      {
        "title": "Industrial catalogs",
        "description": "Structured product attributes and information for technical audiences."
      },
      {
        "title": "Product search and research",
        "description": "Discovery and research workflows focused on better catalog quality."
      },
      {
        "title": "Custom architecture",
        "description": "Specialist product and administrative processes."
      },
      {
        "title": "Technical SEO",
        "description": "Indexability and structured information designed for growth."
      }
    ]
  },
  {
    "kicker": "RELATED SERVICE",
    "title": "Explore applied AI",
    "description": "Connect intelligent features to real product data.",
    "items": [
      {
        "title": "Intelligent search and AI",
        "description": "Learn about our RAG, agents and semantic retrieval services.",
        "link": "/en/services/ai-development"
      }
    ]
  }
];
</script>

<template>
  <EnContentPage kicker="CASE STUDY · HEVIX" title="HEVIX: a platform for specialized industrial parts" introduction="A data-centered industrial product with custom workflows, structured catalogs and intelligent product retrieval." hero-image="/images/projects/hevix.webp" hero-image-alt="HEVIX: a platform for specialized industrial parts" :sections="sections" />
</template>
