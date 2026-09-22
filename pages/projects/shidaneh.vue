<script setup lang="ts">
usePageSeo({
  title: "طراحی و توسعه فروشگاه هوشمند شیدانه | SmartPilot",
  description:
    "مطالعه موردی شیدانه؛ طراحی و توسعه فروشگاه و پلتفرم هوشمند زیبایی با معماری اختصاصی، جستجوی هوشمند، SEO و قابلیت‌های AI.",
  path: "/projects/shidaneh",
  image: "/images/projects/shidane.webp",
});

useBreadcrumbSchema([
  { name: "خانه", path: "/" },
  { name: "پروژه‌ها", path: "/projects" },
  { name: "شیدانه", path: "/projects/shidaneh" },
]);

const schema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "شیدانه",
  description:
    "فروشگاه و پلتفرم هوشمند زیبایی توسعه یافته توسط SmartPilot.",
  creator: {
    "@type": "Organization",
    name: "SmartPilot",
  },
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
    </section>
  </main>
</template>
