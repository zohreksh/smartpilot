<script setup lang="ts">
usePageSeo({
  title: "Custom E-commerce Development | SmartPilot",
  description: "SmartPilot builds custom e-commerce websites with scalable catalogs, technical SEO, intelligent search and effective shopping experiences.",
  path: "/en/services/ecommerce-development",
  locale: "en",
  image: "/images/og/nexastudio-og.webp",
});
const sections = [
  {
    "kicker": "CORE CAPABILITIES",
    "title": "What an effective store needs",
    "description": "A holistic approach to shopping, operations and technical architecture.",
    "items": [
      {
        "title": "Buying experience",
        "description": "Product discovery, categories, filters, product pages and checkout with less friction."
      },
      {
        "title": "Catalog architecture",
        "description": "Flexible products, attributes, categories and stock data for future features."
      },
      {
        "title": "Technical SEO",
        "description": "Crawlability, canonical URLs, structured data and performance planned from the beginning."
      },
      {
        "title": "Intelligent discovery",
        "description": "Optional semantic search and smart recommendations grounded in catalog data."
      }
    ]
  },
  {
    "kicker": "DELIVERY",
    "title": "From discovery to continuous improvement",
    "description": "Each stage stays focused on the actual business.",
    "items": [
      {
        "title": "Map requirements",
        "description": "Understand users, catalogs, workflows, integrations and constraints."
      },
      {
        "title": "Design user journeys",
        "description": "Create clear, mobile-friendly shopping and administration experiences."
      },
      {
        "title": "Build and test",
        "description": "Release in milestones with quality and technical SEO checks."
      },
      {
        "title": "Keep improving",
        "description": "Prioritize refinements using observed behavior."
      }
    ]
  },
  {
    "kicker": "WHEN CUSTOM FITS",
    "title": "Choose tailored development when it makes sense",
    "description": "Specialized catalogs, workflows or integrations can justify custom software. We also examine whether existing tools are sufficient.",
    "items": [
      {
        "title": "Shidaneh — beauty commerce",
        "description": "A commerce and content product with catalog management, search and SEO.",
        "link": "/en/projects/shidaneh",
        "image": "/images/projects/shidane.webp"
      }
    ]
  }
];
</script>

<template>
  <EnContentPage kicker="E-COMMERCE" title="Custom commerce built for long-term growth" introduction="Great online stores combine shopping journeys with sound catalog data, manageable operations, SEO and performance."  :sections="sections" />
</template>
