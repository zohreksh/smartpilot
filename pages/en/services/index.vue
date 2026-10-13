<script setup lang="ts">
usePageSeo({
  title: "Custom Software & Applied AI Services | SmartPilot",
  description: "SmartPilot develops AI capabilities, custom platforms, online stores, smart search, technical SEO and integrated operational software.",
  path: "/en/services",
  locale: "en",
  image: "/images/en/smartpilot_digital_studio_showcase.webp",
});
const sections = [
  {
    "kicker": "AI THAT WORKS",
    "title": "Intelligent capabilities tied to real data",
    "description": "Not a decorative chatbot: useful AI should save time, reduce friction and support better decisions.",
    "items": [
      {
        "title": "AI advisors",
        "description": "Grounded support based on catalogs, documents and business rules.",
        "link": "/en/services/ai-development"
      },
      {
        "title": "Semantic search",
        "description": "Product and knowledge discovery beyond exact keyword matching.",
        "link": "/en/services/ai-development"
      },
      {
        "title": "Agent automation",
        "description": "Multi-step workflows with controlled tools and human oversight.",
        "link": "/en/services/ai-development"
      },
      {
        "title": "Decision support",
        "description": "Use operational data to produce valuable reports and insights."
      }
    ]
  },
  {
    "kicker": "ENGINEERING",
    "title": "Build, integrate and improve",
    "description": "Each service can stand alone or form part of a practical delivery plan.",
    "items": [
      {
        "title": "Custom platforms",
        "description": "Operational dashboards and specialized software built around your workflows."
      },
      {
        "title": "E-commerce development",
        "description": "Tailored shopping experiences, catalogs and conversion journeys.",
        "link": "/en/services/ecommerce-development"
      },
      {
        "title": "Technical SEO",
        "description": "Indexability, structured data, metadata and performance integrated in the product."
      },
      {
        "title": "Data preparation",
        "description": "Structure catalogs and prepare initial data imports."
      },
      {
        "title": "APIs and integrations",
        "description": "Connect systems and simplify operations."
      },
      {
        "title": "Continuous support",
        "description": "Monitoring, maintenance and iterative development after launch."
      }
    ]
  },
  {
    "kicker": "APPROACH",
    "title": "Start with the real problem",
    "description": "An existing product can often be improved without a costly rebuild.",
    "items": [
      {
        "title": "Discover",
        "description": "Clarify the goals, users and constraints."
      },
      {
        "title": "Architect and deliver",
        "description": "Build in testable increments."
      },
      {
        "title": "Measure and iterate",
        "description": "Use evidence to prioritize what comes next."
      }
    ]
  }
];

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"Services","path":"/en/services"}]);

</script>

<template>
  <EnContentPage kicker="SERVICES" title="Software, AI and digital products built for business" introduction="From intelligent search and automation to custom software, e-commerce and growth, we connect useful technology to real operations."  :sections="sections" />
</template>
