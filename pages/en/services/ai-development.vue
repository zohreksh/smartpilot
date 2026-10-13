<script setup lang="ts">
const { baseUrl, canonicalUrl, imageUrl } = usePageSeo({
  title: "Applied AI, RAG, Agents & Semantic Search | SmartPilot",
  description: "SmartPilot designs AI agents, RAG solutions, semantic search and intelligent assistants grounded in real business data.",
  path: "/en/services/ai-development",
  locale: "en",
  image: "/images/og/nexastudio-og.webp",
});
const sections = [
  {
    "kicker": "AI SOLUTIONS",
    "title": "What we can build",
    "description": "Choose the right approach based on your data, users and operational requirements.",
    "items": [
      {
        "title": "AI agents and automation",
        "description": "Multi-step tasks using controlled tools, defined permissions and appropriate human review."
      },
      {
        "title": "RAG and business knowledge",
        "description": "Ground language-model answers in documents and data using controlled retrieval."
      },
      {
        "title": "Semantic search",
        "description": "Improve discovery across complex catalogs and knowledge bases beyond exact words."
      },
      {
        "title": "Product advisors",
        "description": "Context-aware answers and guidance connected to product data and business rules."
      }
    ]
  },
  {
    "kicker": "DELIVERY",
    "title": "A measured implementation process",
    "description": "Start small, evaluate quality and scale only where justified.",
    "items": [
      {
        "title": "Discovery",
        "description": "Identify constraints, privacy requirements and measurable outcomes."
      },
      {
        "title": "Architecture and prototype",
        "description": "Choose models, retrieval, tools and safeguards for the specific workload."
      },
      {
        "title": "Evaluation and integration",
        "description": "Test real-world questions and errors, not only curated demos."
      },
      {
        "title": "Controlled rollout",
        "description": "Monitor outcomes, cost and user feedback."
      }
    ]
  },
  {
    "kicker": "CASE STUDY",
    "title": "Applied AI in the field",
    "description": "HEVIX combines specialist product data with search and research workflows.",
    "items": [
      {
        "title": "HEVIX — industrial intelligence",
        "description": "Explore a data-centered platform where accurate product search is valuable.",
        "link": "/en/projects/hevix",
        "image": "/images/projects/hevix.webp"
      }
    ]
  }
];
// FAQ copy aligns with the matching Persian service page.
sections.push({
  "kicker": "COMMON QUESTIONS",
  "title": "Frequently asked questions",
  "description": "A small, testable starting point is often more useful than a large speculative AI project.",
  "items": [
    {
      "title": "Do we need a very large dataset before starting?",
      "description": "Not necessarily. It depends on the problem. In many cases, connecting to existing trusted knowledge is more important than building a huge new dataset."
    },
    {
      "title": "Can AI be added to an existing product?",
      "description": "Yes. We first assess interfaces, APIs, data structures and constraints, then add the capability in controlled stages."
    }
  ]
});

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"Services","path":"/en/services"},{"name":"AI Development","path":"/en/services/ai-development"}]);

useHead({
  script: [{
    key: "pages-en-services-ai-development.vue-schema",
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: "AI development and intelligent search",
      url: canonicalUrl,
      image: imageUrl,
      inLanguage: "en",
      serviceType: "AI development and intelligent search",
      provider: { "@id": `${baseUrl}/#organization` },
    }),
  }],
});

</script>

<template>
  <EnContentPage kicker="APPLIED AI" title="Intelligent capabilities built around your product" introduction="We work with real business data and workflows to develop AI features whose value, quality and cost can be measured."  :sections="sections" />
</template>
