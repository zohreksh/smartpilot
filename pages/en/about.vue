<script setup lang="ts">
usePageSeo({
  title: "About the SmartPilot Product Engineering Team | SmartPilot",
  description: "Meet SmartPilot, a product engineering studio focused on usable digital products, software architecture and practical AI.",
  path: "/en/about",
  locale: "en",
  image: "/images/en/smartpilot_digital_studio_showcase.webp",
});
const sections = [
  {
    "kicker": "REAL PRODUCTS",
    "title": "We have built and developed working platforms",
    "description": "Shidaneh and HEVIX demonstrate experience in different domains.",
    "items": [
      {
        "title": "Shidaneh",
        "description": "Beauty commerce, catalog workflows and search.",
        "link": "/en/projects/shidaneh",
        "image": "/images/en/shidaneh_beauty_commerce_hero.webp"
      },
      {
        "title": "HEVIX",
        "description": "Industrial products, specialized catalogs and intelligent research.",
        "link": "/en/projects/hevix",
        "image": "/images/en/hevix_smarter_parts_sourcing_banner.webp"
      }
    ]
  },
  {
    "kicker": "OUR PRINCIPLES",
    "title": "How we build",
    "description": "Technology should serve the problem, not the other way around.",
    "items": [
      {
        "title": "Product thinking",
        "description": "Understand business and user needs before choosing tools."
      },
      {
        "title": "Sound architecture",
        "description": "Design for maintainability and future changes."
      },
      {
        "title": "Useful AI",
        "description": "Add intelligence only where it produces tangible value."
      },
      {
        "title": "Continuous growth",
        "description": "Use feedback and evidence to guide ongoing improvement."
      }
    ]
  },
  {
    "kicker": "TEAM",
    "title": "Clear ownership for architecture and product quality",
    "description": "We lead the core architecture and add complementary specialists as required.",
    "items": [
      {
        "title": "Zohreh Keshavarz",
        "description": "Product architecture and development focused on user journeys and a practical growth roadmap.",
        "link": "https://www.linkedin.com/in/zohre-keshavarz-2a3221bb",
        "image": "/images/team/zohreh.webp"
      },
      {
        "title": "Hossein Kolani",
        "description": "Software architecture and development with a focus on specialized systems and applied AI.",
        "link": "https://www.linkedin.com/in/hossien-kolani-720103bb",
        "image": "/images/team/hossein.webp"
      },
      {
        "title": "Complementary specialists",
        "description": "Bring in UI/UX, infrastructure, SEO and other expertise when needed."
      }
    ]
  },
  {
    "kicker": "PROCESS",
    "title": "From discovery to an evolving product",
    "description": "Plan deliberately and deliver in manageable stages.",
    "items": [
      {
        "title": "Discover",
        "description": "Identify problems, constraints and desired outcomes."
      },
      {
        "title": "Design",
        "description": "Align architecture with product workflows."
      },
      {
        "title": "Build and test",
        "description": "Deliver incrementally and verify quality."
      },
      {
        "title": "Improve",
        "description": "Measure, learn and refine after launch."
      }
    ]
  }
];

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"About","path":"/en/about"}]);

</script>

<template>
  <EnContentPage kicker="ABOUT SMARTPILOT" title="Digital products built around real problems" introduction="We connect product thinking, engineering, applied AI, intelligent search and SEO to deliver software that people use and teams can maintain." hero-image="/images/en/smartpilot_digital_product_studio.webp" hero-image-alt="The SmartPilot digital product studio: custom software, intelligent search and applied AI for ambitious products, presented on a warm studio desk." :hero-hotspots="[{ label: 'Contact SmartPilot — start your project', to: '/en/contact', left: '5.25%', top: '75.8%', width: '17.4%', height: '7.4%' }, { label: 'Watch our work — explore projects', to: '/en/projects', left: '23.4%', top: '75.8%', width: '11%', height: '7.4%' }]" :sections="sections" />
</template>
