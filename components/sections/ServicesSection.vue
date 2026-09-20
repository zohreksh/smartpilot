<template>
  <section id="services" class="services-section">
    <div class="hero-floating-cards container">
      <article class="floating-service-card">
        <div class="service-icon">⌘</div>
        <div class="floating-service-content">
          <h3>توسعه اختصاصی</h3>
          <p>ساخت سامانه‌ها و محصولات دیجیتال اختصاصی متناسب با نیاز کسب‌وکار شما</p>
        </div>
      </article>
      <article class="floating-service-card">
        <div class="service-icon">✦</div>
        <div class="floating-service-content">
          <h3>هوش مصنوعی</h3>
          <p>راهکارهای هوشمند برای اتوماسیون، تحلیل داده و رشد سریع‌تر</p>
        </div>
      </article>
      <article class="floating-service-card">
        <div class="service-icon">◉</div>
        <div class="floating-service-content">
          <h3>سئو و رشد ارگانیک</h3>
          <p>بهینه‌سازی ساختار سایت برای دیده‌شدن و جذب مشتری واقعی</p>
        </div>
      </article>
    </div>

    <div class="services-heading home-section-heading container">
      <span class="services-badge home-section-kicker">خدمات ما</span>
      <h2 class="home-section-title">راهکارهای کامل برای دنیای دیجیتال</h2>
      <p class="home-section-description">از ایده و معماری تا ساخت، هوشمندسازی و رشد، یک مسیر یکپارچه برای محصول شما.</p>
      <span class="home-section-rule" aria-hidden="true"></span>
    </div>

    <div class="floating-services-grid container">
      <article class="service-card">
        <div class="service-icon">⌘</div>
        <div class="service-content">
          <h3>طراحی وب سایت و فروشگاه اینترنتی</h3>
          <p>طراحی مدرن، کاربرپسند و فروش‌محور</p>
          <NuxtLink to="/services">اطلاعات بیشتر</NuxtLink>
        </div>
      </article>
      <article class="service-card">
        <div class="service-icon">◈</div>
        <div class="service-content">
          <h3>توسعه سامانه‌های اختصاصی</h3>
          <p>راهکارهای اختصاصی برای نیازهای خاص شما</p>
          <NuxtLink to="/services">اطلاعات بیشتر</NuxtLink>
        </div>
      </article>
      <article class="service-card">
        <div class="service-icon">✦</div>
        <div class="service-content">
          <h3>هوش مصنوعی و جستجوی هوشمند</h3>
          <p>تجربه کاربری بهتر و فروش بیشتر</p>
          <NuxtLink to="/services">اطلاعات بیشتر</NuxtLink>
        </div>
      </article>
      <article class="service-card">
        <div class="service-icon">◉</div>
        <div class="service-content">
          <h3>پشتیبانی و رشد مستمر</h3>
          <p>همراه شما در تمام مراحل</p>
          <NuxtLink to="/services">اطلاعات بیشتر</NuxtLink>
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
