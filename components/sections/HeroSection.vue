<script setup lang="ts">
const assetUrl = useAssetUrl;
</script>

<template>
  <section class="hero-section" id="hero">
    <div class="hero-semantic-copy">
      <span class="hero-kicker">Digital Product Studio</span>
      <h1>
        طراحی و توسعه محصول دیجیتال، سامانه‌های اختصاصی و راهکارهای هوش مصنوعی
      </h1>
      <p>
        SmartPilot محصولات دیجیتال قابل توسعه می‌سازد؛ از طراحی و معماری تا هوش
        مصنوعی، جستجوی هوشمند، سئو و رشد مستمر.
      </p>
      <div class="hero-actions">
        <NuxtLink class="hero-primary-action" to="/services">
          مشاهده خدمات
        </NuxtLink>
        <NuxtLink class="hero-secondary-action" to="/projects">
          نمونه‌کارها
        </NuxtLink>
      </div>
    </div>

    <picture>
      <source
        media="(max-width: 767px)"
        :srcset="assetUrl('/images/hero/mobile-hero.webp')"
        width="1024"
        height="1536"
      />
      <img
        class="hero-image-only"
        :src="assetUrl('/images/hero/desktop-hero.webp')"
        alt="طراحی و توسعه محصول دیجیتال توسط SmartPilot"
        width="1916"
        height="821"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
    </picture>
  </section>
</template>

<style scoped>
.hero-semantic-copy {
  position: absolute;
  z-index: 2;
  top: clamp(28px, 5vw, 78px);
  right: max(4%, calc((100% - 1240px) / 2));
  width: min(590px, 53%);
  padding: 22px 24px 24px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  background: rgba(252, 248, 244, 0.88);
  box-shadow: 0 24px 70px rgba(7, 17, 31, 0.14);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  direction: rtl;
}

.hero-kicker {
  color: #9f5a34;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.hero-semantic-copy h1 {
  margin: 9px 0 10px;
  color: #101c32;
  font-size: clamp(27px, 3vw, 44px);
  line-height: 1.42;
  letter-spacing: -0.025em;
}

.hero-semantic-copy p {
  margin: 0;
  color: #566174;
  font-size: 15px;
  line-height: 1.95;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.hero-primary-action,
.hero-secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 9px 15px;
  border-radius: 12px;
  font-size: 13.5px;
  font-weight: 800;
}

.hero-primary-action {
  background: #101c32;
  color: #fff;
}

.hero-secondary-action {
  border: 1px solid rgba(159, 90, 52, 0.25);
  background: rgba(255, 255, 255, 0.7);
  color: #9f5a34;
}

@media (max-width: 767px) {
  .hero-semantic-copy {
    position: relative;
    top: auto;
    right: auto;
    width: min(92%, 620px);
    margin: 18px auto;
    padding: 18px;
    border-color: rgba(226, 211, 199, 0.9);
    background: #fffaf6;
    box-shadow: 0 12px 34px rgba(16, 28, 50, 0.07);
    backdrop-filter: none;
  }

  .hero-semantic-copy h1 {
    font-size: clamp(25px, 8vw, 34px);
  }

  .hero-actions {
    margin-top: 14px;
  }
}
</style>
