<script setup lang="ts">
usePageSeo({
  title: "NexaStudio | طراحی و توسعه محصول دیجیتال و هوش مصنوعی",
  description:
    "NexaStudio استودیوی طراحی و توسعه محصول دیجیتال است؛ از سامانه‌های اختصاصی و فروشگاه اینترنتی تا هوش مصنوعی، جستجوی هوشمند، سئو و توسعه مستمر.",
  path: "/",
  image: "/images/hero/desktop-hero.webp",
});
</script>

<template>
  <main id="main-content" class="landing-page" tabindex="-1">
    <SiteHeader />
    <section class="hero-shell">
      <HeroSection />
    </section>
    <ServicesSection />
    <ProjectsSection />
    <WhyUsSection />
    <TeamSection />
</main>
</template>
