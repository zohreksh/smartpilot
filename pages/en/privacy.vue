<script setup lang="ts">
const { baseUrl, canonicalUrl, imageUrl } = usePageSeo({
  title: "Privacy Notice | SmartPilot",
  description: "How SmartPilot handles language cookies, anonymous country detection and your project brief. This site stores no accounts, analytics or message history.",
  path: "/en/privacy",
  locale: "en",
  image: "/images/en/smartpilot_digital_studio_showcase.webp",
});
const sections = [
  {
    kicker: "THE SHORT VERSION",
    title: "A static site with almost nothing to protect",
    description: "This website is published as static files. It has no accounts, no user passwords and no message database.",
    items: [
      {
        title: "No accounts or sign-ups",
        description: "The site never asks you to register, and nothing you read is linked to an identified profile."
      },
      {
        title: "No analytics or tracking",
        description: "No analytics tool, advertising pixel or social tracker runs on this site. There is no cross-site profiling."
      },
      {
        title: "No message storage",
        description: "The project brief form does not send data to a server. It opens a prefilled WhatsApp message that you review and choose to send."
      }
    ]
  },
  {
    kicker: "WHAT LEAVES YOUR DEVICE",
    title: "The three signals this site uses",
    description: "Everything below happens in your browser and can be cleared at any time.",
    items: [
      {
        title: "Language preference (cookie)",
        description: "If you use the FA/EN switcher, a cookie called smartpilot_language stores only the letters \"fa\" or \"en\" for 12 months so the site remembers your choice. It contains no personal data."
      },
      {
        title: "Country check (first visit)",
        description: "On a first visit to the root URL, the site asks a stand-alone API (api.country.is) which country your connection appears to come from, to choose Persian or English. This lookup uses no cookies; only a two-character country code is kept, for the current browser session only."
      },
      {
        title: "Project brief (form)",
        description: "Answers you type are used only to compose a WhatsApp message in your browser. They are never transmitted to, or stored on, this site's infrastructure."
      }
    ]
  },
  {
    kicker: "THIRD PARTIES",
    title: "Services your visit may touch",
    description: "Data passed to third parties, and only if you act, is described here.",
    items: [
      {
        title: "country.is (language routing)",
        description: "The provider necessarily receives your IP address for the one-time lookup. Its published policy states that it does not log requests. This is deliberately the only third-party request the site makes on its own."
      },
      {
        title: "WhatsApp and email",
        description: "If you choose to contact us, your correspondence is then handled inside WhatsApp or your own email client, under those services' own terms. We see your message only once you send it."
      }
    ]
  },
  {
    kicker: "YOUR RIGHTS",
    title: "Questions, requests and contact",
    description: "For UK and European visitors, standard GDPR rights apply to any personal data we hold.",
    items: [
      {
        title: "What we may hold after you contact us",
        description: "Our normal data footprint is the conversation itself: your name, contact detail, business name and the project description you send us, kept only while a discussion is active."
      },
      {
        title: "Access, correction and deletion",
        description: "Ask at any time and we will confirm what we hold, correct it or delete our copy of the conversation. This site itself cannot associate a visit with a person."
      },
      {
        title: "How to reach us",
        description: "Email zhr.keshavarz@gmail.com and we will respond within one business day. Reference \"privacy request\" for the quickest routing."
      }
    ]
  }
];

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"Privacy","path":"/en/privacy"}]);

useHead({
  script: [{
    key: "pages-en-privacy.vue-schema",
    type: "application/ld+json",
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#privacy`,
      name: "SmartPilot Privacy Notice",
      url: canonicalUrl,
      image: imageUrl,
      inLanguage: "en",
      isPartOf: { "@id": `${baseUrl}/#organization` },
    }),
  }],
});
</script>

<template>
  <EnContentPage kicker="PRIVACY NOTICE" title="What this site does — and does not do — with your data" introduction="SmartPilot runs on static pages with no accounts and no analytics. A language cookie and an anonymous one-time country check are the only signals involved; here is exactly how they work." :chips="['No accounts', 'No analytics', 'No message storage']" :sections="sections" />
</template>
