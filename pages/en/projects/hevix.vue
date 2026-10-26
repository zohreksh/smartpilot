<script setup lang="ts">
const { baseUrl, canonicalUrl, imageUrl } = usePageSeo({
  title: "HEVIX Industrial Parts Case Study | SmartPilot",
  description: "HEVIX is a specialized platform for industrial parts catalogs, smart search, data and product research workflows.",
  path: "/en/projects/hevix",
  locale: "en",
  image: "/images/en/hevix_smarter_parts_sourcing_banner.webp",
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

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"Projects","path":"/en/projects"},{"name":"HEVIX","path":"/en/projects/hevix"}]);

useHead({
  script: [{
    key: "pages-en-projects-hevix.vue-schema",
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${canonicalUrl}#case-study`,
      name: "HEVIX",
      url: canonicalUrl,
      image: imageUrl,
      inLanguage: "en",
      creator: { "@id": `${baseUrl}/#organization` },
      mainEntityOfPage: canonicalUrl,
    }),
  }],
});

</script>

<template>
  <EnContentPage kicker="CASE STUDY · HEVIX" title="HEVIX: a platform for specialized industrial parts" introduction="A data-centered industrial product with custom workflows, structured catalogs and intelligent product retrieval." hero-image="/images/en/hevix_smarter_parts_sourcing_banner.webp" hero-image-alt="HEVIX: a platform for specialized industrial parts" :sections="sections" />
</template>
