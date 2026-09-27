<script setup lang="ts">
const { baseUrl, canonicalUrl, imageUrl } = usePageSeo({
  title: "طراحی و توسعه فروشگاه هوشمند شیدانه | SmartPilot",
  description:
    "مطالعه موردی شیدانه؛ طراحی و توسعه فروشگاه و پلتفرم هوشمند زیبایی با معماری اختصاصی، جستجوی هوشمند، SEO و قابلیت‌های AI.",
  path: "/projects/shidaneh",
  image: "/images/projects/shidane.webp",
  imageAlt: "فروشگاه و پلتفرم هوشمند شیدانه",
});

useBreadcrumbSchema([
  { name: "خانه", path: "/" },
  { name: "پروژه‌ها", path: "/projects" },
  { name: "شیدانه", path: "/projects/shidaneh" },
]);

const schema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${canonicalUrl}#case-study`,
  name: "شیدانه",
  url: canonicalUrl,
  image: imageUrl,
  inLanguage: "fa-IR",
  description:
    "فروشگاه و پلتفرم هوشمند زیبایی توسعه یافته توسط SmartPilot.",
  creator: {
    "@id": `${baseUrl}/#organization`,
  },
  mainEntityOfPage: canonicalUrl,
};

useHead({
  script: [{
    key: "shidaneh-case-schema",
    type: "application/ld+json",
    innerHTML: JSON.stringify(schema),
  }],
});
</script>

<template>
  <main id="main-content" class="case-study-page">
    <section>
      <h1>شیدانه؛ فروشگاه هوشمند زیبایی با معماری قابل توسعه</h1>
      <p>
        طراحی و توسعه یک محصول تجارت الکترونیک با تمرکز بر تجربه خرید، مدیریت
        داده، جستجوی هوشمند و رشد مستمر.
      </p>
      <h2>دامنه کار</h2>
      <ul>
        <li>طراحی و توسعه فروشگاه اینترنتی</li>
        <li>ساخت زیرساخت قابل توسعه محصول</li>
        <li>جستجوی هوشمند و قابلیت‌های AI</li>
        <li>SEO فنی و رشد ارگانیک</li>
      </ul>
      <p>
        <NuxtLink to="/services/ecommerce-development">
          مشاهده خدمات طراحی و توسعه فروشگاه اینترنتی
        </NuxtLink>
      </p>
    </section>
  </main>
</template>
