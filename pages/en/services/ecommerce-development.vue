<script setup lang="ts">
const { baseUrl, canonicalUrl, imageUrl } = usePageSeo({
  title: "Custom E-commerce Development | SmartPilot",
  description: "SmartPilot builds custom e-commerce websites with scalable catalogs, technical SEO, intelligent search and effective shopping experiences.",
  path: "/en/services/ecommerce-development",
  locale: "en",
  image: "/images/en/smartpilot_digital_studio_showcase.webp",
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
        "image": "/images/en/shidaneh_beauty_commerce_hero.webp"
      }
    ]
  }
];
// FAQ copy aligns with the matching Persian service page.
sections.push({
  "kicker": "COMMON QUESTIONS",
  "title": "Frequently asked questions",
  "description": "The right approach depends on catalog complexity, budget, operational processes and future plans.",
  "items": [
    {
      "title": "Is custom e-commerce always better than an off-the-shelf solution?",
      "description": "No. For simpler requirements, established solutions may be more cost-effective. Custom development is justified when the product or operations need it."
    },
    {
      "title": "Can technical SEO be added after design?",
      "description": "Some issues can be fixed later, but URL structure, HTML, speed, category architecture and structured data are best considered during design and development."
    }
  ]
});

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"Services","path":"/en/services"},{"name":"E-commerce Development","path":"/en/services/ecommerce-development"}]);

useHead({
  script: [{
    key: "pages-en-services-ecommerce-development.vue-schema",
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: "Custom e-commerce development",
      url: canonicalUrl,
      image: imageUrl,
      inLanguage: "en",
      serviceType: "Custom e-commerce development",
      provider: { "@id": `${baseUrl}/#organization` },
    }),
  }],
});

</script>

<template>
  <EnContentPage kicker="E-COMMERCE" title="Custom commerce built for long-term growth" introduction="Great online stores combine shopping journeys with sound catalog data, manageable operations, SEO and performance."  :sections="sections" />
</template>
