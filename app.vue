<script setup lang="ts">
const config = useRuntimeConfig();
const requestUrl = useRequestURL();

const configuredBase = String(config.public.siteUrl || "").trim();
const requestBase = `${requestUrl.protocol}//${requestUrl.host}`;
const siteUrl = (configuredBase || requestBase).replace(/\/$/, "");
const organizationId = `${siteUrl}/#organization`;
const webSiteId = `${siteUrl}/#website`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: "SmartPilot",
  url: siteUrl,
  email: "zhr.keshavarz@gmail.com",
  telephone: "+989379407868",
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/favicon.svg`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+989379407868",
    email: "zhr.keshavarz@gmail.com",
    contactType: "customer service",
    availableLanguage: ["fa"],
  },
  founder: [
    {
      "@type": "Person",
      name: "زهره کشاورز",
      sameAs: ["https://www.linkedin.com/in/zohre-keshavarz-2a3221bb"],
    },
    {
      "@type": "Person",
      name: "حسین کولانی",
      sameAs: ["https://www.linkedin.com/in/hossien-kolani-720103bb"],
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": webSiteId,
  name: "SmartPilot",
  url: siteUrl,
  inLanguage: "fa-IR",
  publisher: {
    "@id": organizationId,
  },
};

useHead({
  script: [
    {
      key: "smartpilot-organization-schema",
      type: "application/ld+json",
      innerHTML: JSON.stringify(organizationSchema),
    },
    {
      key: "smartpilot-website-schema",
      type: "application/ld+json",
      innerHTML: JSON.stringify(webSiteSchema),
    },
  ],
});
</script>

<template>
  <div>
    <a class="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
