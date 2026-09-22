<template>
  <section id="services" class="services-section">
    <div class="hero-floating-cards container">
      <article class="floating-service-card">
        <div class="service-icon">⌘</div>
        <div class="floating-service-content">
          <h3>توسعه اختصاصی</h3>
          <p>طراحی و توسعه سامانه‌هایی که بر اساس فرایند واقعی کسب‌وکار شما ساخته می‌شوند</p>
        </div>
      </article>
      <article class="floating-service-card">
        <div class="service-icon">✦</div>
        <div class="floating-service-content">
          <h3>هوش مصنوعی</h3>
          <p>هوش مصنوعی متصل به داده و عملیات؛ از جستجوی هوشمند تا Agent و اتوماسیون</p>
        </div>
      </article>
      <article class="floating-service-card">
        <div class="service-icon">◉</div>
        <div class="floating-service-content">
          <h3>سئو و رشد ارگانیک</h3>
          <p>سئوی فنی و ساختاری برای دیده‌شدن پایدار و رشد ارگانیک محصول</p>
        </div>
      </article>
    </div>

    <div class="services-heading home-section-heading container">
      <span class="services-badge home-section-kicker">خدمات ما</span>
      <h2 class="home-section-title">از ایده تا محصولی که آماده رشد باشد</h2>
      <p class="home-section-description">طراحی، توسعه، هوشمندسازی و رشد را در یک مسیر مهندسی‌شده و قابل ادامه کنار هم می‌گذاریم.</p>
      <span class="home-section-rule" aria-hidden="true"></span>
    </div>

    <div class="floating-services-grid container">
      <article class="service-card">
        <div class="service-icon">⌘</div>
        <div class="service-content">
          <h3>طراحی وب سایت و فروشگاه اینترنتی</h3>
          <p>تجربه کاربری، عملکرد فنی و مسیر تبدیل را از ابتدا کنار هم طراحی می‌کنیم</p>
          <NuxtLink to="/services/ecommerce-development">
            جزئیات توسعه فروشگاه اینترنتی
          </NuxtLink>
        </div>
      </article>
      <article class="service-card">
        <div class="service-icon">◈</div>
        <div class="service-content">
          <h3>توسعه سامانه‌های اختصاصی</h3>
          <p>سامانه‌ها و پنل‌هایی متناسب با فرایندها، داده و قواعد واقعی کسب‌وکار</p>
          <NuxtLink to="/services">خدمات توسعه اختصاصی</NuxtLink>
        </div>
      </article>
      <article class="service-card">
        <div class="service-icon">✦</div>
        <div class="service-content">
          <h3>هوش مصنوعی و جستجوی هوشمند</h3>
          <p>مشاور هوشمند، جستجوی معنایی و اتوماسیون متصل به داده واقعی</p>
          <NuxtLink to="/services/ai-development">
            جزئیات توسعه هوش مصنوعی
          </NuxtLink>
        </div>
      </article>
      <article class="service-card">
        <div class="service-icon">◉</div>
        <div class="service-content">
          <h3>پشتیبانی و رشد مستمر</h3>
          <p>پایش، بهبود و توسعه مستمر محصول پس از انتشار</p>
          <NuxtLink to="/services">خدمات رشد و توسعه مستمر</NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 767px) {
  .hero-floating-cards {
    display: none;
  }
}
</style>
