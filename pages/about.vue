<template>
  <main class="about-page">
    <SiteHeader />

    <section class="about-hero container">
      <span class="about-badge">درباره ما</span>
      <h1>ما محصول دیجیتال می‌سازیم، نه فقط وب‌سایت</h1>
      <p>
        ما با ترکیب معماری نرم‌افزار، تجربه محصول و فناوری‌های جدید، به کسب‌وکارها
        کمک می‌کنیم راهکارهای دیجیتال قابل توسعه بسازند.
      </p>
    </section>

    <section class="about-section container">
      <div class="section-title">
        <span>داستان ما</span>
        <h2>تجربه فنی در کنار نگاه محصول</h2>
      </div>
      <p>
        حسین کولانی و زهره کشاورز، معمار و توسعه‌دهنده، با تمرکز بر ساخت محصولات
        واقعی دیجیتال فعالیت می‌کنند. هدف ما ایجاد راهکارهایی است که علاوه بر
        ظاهر مناسب، از نظر معماری، توسعه‌پذیری و ارزش کسب‌وکار نیز درست طراحی شده
        باشند.
      </p>
    </section>

    <section class="about-cards container">
      <article>
        <h3>تفکر محصول</h3>
        <p>قبل از توسعه، مسئله کسب‌وکار، کاربر و مسیر رشد را بررسی می‌کنیم.</p>
      </article>
      <article>
        <h3>معماری و توسعه</h3>
        <p>راهکارهایی می‌سازیم که امکان توسعه و تغییر در آینده را داشته باشند.</p>
      </article>
      <article>
        <h3>فناوری هوشمند</h3>
        <p>از هوش مصنوعی و ابزارهای جدید برای ایجاد تجربه بهتر استفاده می‌کنیم.</p>
      </article>
    </section>

    <section class="about-section container">
      <div class="section-title">
        <span>محصولات ما</span>
        <h2>تجربه ساخت محصولات واقعی</h2>
      </div>
      <div class="products">
        <div>شیدانه</div>
        <div>هویکس</div>
      </div>
    </section>

    <section class="about-cta container">
      <h2>آماده ساخت یک محصول دیجیتال هستید؟</h2>
      <p>بیایید درباره ایده و مسیر رشد پروژه شما صحبت کنیم.</p>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  direction: rtl;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.about-hero {
  text-align: center;
  padding: 90px 24px 50px;
}
.about-badge,
.section-title span {
  display: inline-block;
  color: #d86b4a;
  border: 1px solid #d86b4a;
  border-radius: 999px;
  padding: 6px 18px;
}
.about-hero h1 {
  font-size: 42px;
  margin: 20px 0;
}
.about-hero p,
.about-section p {
  color: #667085;
  line-height: 2;
}
.about-section {
  margin-bottom: 60px;
}
.section-title h2 {
  margin-top: 16px;
}
.about-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.about-cards article,
.products div {
  background: #fff;
  border: 1px solid #eadfd7;
  border-radius: 22px;
  padding: 24px;
}
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.about-cta {
  text-align: center;
  padding: 60px 24px;
}
@media (max-width: 767px) {
  .about-hero h1 {
    font-size: 30px;
  }
  .about-cards,
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
