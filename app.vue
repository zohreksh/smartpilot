<script setup lang="ts">
const config = useRuntimeConfig();
const requestUrl = useRequestURL();

const configuredBase = String(config.public.siteUrl || "").trim();
const requestBase = `${requestUrl.protocol}//${requestUrl.host}`;
const siteUrl = (configuredBase || requestBase).replace(/\/$/, "");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SmartPilot",
  url: siteUrl,
  email: "zhr.keshavarz@gmail.com",
  telephone: "+989379407868",
  logo: `${siteUrl}/favicon.svg`,
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

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SmartPilot",
  url: siteUrl,
  description:
    "طراحی و توسعه محصولات دیجیتال، هوش مصنوعی، اتوماسیون، جستجوی هوشمند و سامانه‌های اختصاصی برای کسب‌وکارها.",
  areaServed: "IR",
  serviceType: [
    "AI Development",
    "Digital Product Development",
    "Custom Software Development",
    "SEO Automation",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SmartPilot",
  url: siteUrl,
  inLanguage: "fa-IR",
};

useHead({
  script: [
    {
      key: "SmartPilot-organization-schema",
      type: "application/ld+json",
      innerHTML: JSON.stringify(organizationSchema),
    },
    {
      key: "SmartPilot-professional-service-schema",
      type: "application/ld+json",
      innerHTML: JSON.stringify(professionalServiceSchema),
    },
    {
      key: "SmartPilot-website-schema",
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
