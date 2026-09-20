<script setup lang="ts">
const config = useRuntimeConfig();
const requestUrl = useRequestURL();

const configuredBase = String(config.public.siteUrl || "").trim();
const requestBase = `${requestUrl.protocol}//${requestUrl.host}`;
const siteUrl = (configuredBase || requestBase).replace(/\/$/, "");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaStudio",
  url: siteUrl,
  email: "mailto:zhr.keshavarz@gmail.com",
  telephone: "+989379407868",
  founder: [
    {
      "@type": "Person",
      name: "زهره کشاورز",
    },
    {
      "@type": "Person",
      name: "حسین کولانی",
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexaStudio",
  url: siteUrl,
  inLanguage: "fa-IR",
};

useHead({
  script: [
    {
      key: "nexastudio-organization-schema",
      type: "application/ld+json",
      innerHTML: JSON.stringify(organizationSchema),
    },
    {
      key: "nexastudio-website-schema",
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
