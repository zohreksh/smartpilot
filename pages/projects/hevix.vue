<script setup lang="ts">
const { baseUrl, canonicalUrl, imageUrl } = usePageSeo({
  title: "طراحی و توسعه پلتفرم تخصصی هویکس | SmartPilot",
  description:
    "مطالعه موردی هویکس؛ توسعه پلتفرم تخصصی قطعات و تجهیزات با معماری اختصاصی، داده ساختاریافته، جستجوی هوشمند و SEO فنی.",
  path: "/projects/hevix",
  image: "/images/projects/hevix.webp",
  imageAlt: "پلتفرم تخصصی HEVIX",
});

useBreadcrumbSchema([
  { name: "خانه", path: "/" },
  { name: "پروژه‌ها", path: "/projects" },
  { name: "هویکس", path: "/projects/hevix" },
]);

const schema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${canonicalUrl}#case-study`,
  name: "HEVIX",
  url: canonicalUrl,
  image: imageUrl,
  inLanguage: "fa-IR",
  description:
    "پلتفرم تخصصی قطعات و تجهیزات توسعه یافته توسط SmartPilot.",
  creator: {
    "@id": `${baseUrl}/#organization`,
  },
  mainEntityOfPage: canonicalUrl,
};

useHead({
  script: [{
    key: "hevix-case-schema",
    type: "application/ld+json",
    innerHTML: JSON.stringify(schema),
  }],
});
</script>

<template>
  <main id="main-content" class="case-study-page">
    <section>
      <h1>هویکس؛ پلتفرم تخصصی قطعات و تجهیزات</h1>
      <p>
        طراحی و توسعه محصولی داده‌محور برای بازاری تخصصی با تمرکز بر کاتالوگ،
        جستجو، معماری اختصاصی و قابلیت توسعه آینده.
      </p>
      <h2>دامنه کار</h2>
      <ul>
        <li>معماری نرم‌افزار اختصاصی</li>
        <li>مدیریت داده و کاتالوگ تخصصی</li>
        <li>جستجوی بهتر در داده‌های پیچیده</li>
        <li>زیرساخت آماده توسعه</li>
      </ul>
      <p>
        <NuxtLink to="/services/ai-development">
          مشاهده خدمات توسعه هوش مصنوعی و جستجوی هوشمند
        </NuxtLink>
      </p>
    </section>
  </main>
</template>
