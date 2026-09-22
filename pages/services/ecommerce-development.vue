<script setup lang="ts">
const { baseUrl, canonicalUrl, imageUrl } = usePageSeo({
  title: "طراحی و توسعه فروشگاه اینترنتی اختصاصی | SmartPilot",
  description:
    "طراحی و توسعه فروشگاه اینترنتی اختصاصی با تجربه کاربری، معماری قابل توسعه، SEO فنی و قابلیت‌های هوشمند.",
  path: "/services/ecommerce-development",
  image: "/images/projects/shidane.webp",
  imageAlt: "طراحی و توسعه فروشگاه اینترنتی اختصاصی توسط SmartPilot",
});

useBreadcrumbSchema([
  { name: "خانه", path: "/" },
  { name: "خدمات", path: "/services" },
  { name: "توسعه فروشگاه اینترنتی", path: "/services/ecommerce-development" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${canonicalUrl}#service`,
  name: "طراحی و توسعه فروشگاه اینترنتی اختصاصی",
  serviceType: "Ecommerce Development",
  url: canonicalUrl,
  image: imageUrl,
  description:
    "طراحی و توسعه فروشگاه اینترنتی اختصاصی با تمرکز بر تجربه خرید، معماری قابل توسعه، داده، SEO فنی و قابلیت‌های هوشمند.",
  provider: {
    "@id": `${baseUrl}/#organization`,
  },
  inLanguage: "fa-IR",
};

useHead({
  script: [
    {
      key: "ecommerce-development-service-schema",
      type: "application/ld+json",
      innerHTML: JSON.stringify(serviceSchema),
    },
  ],
});
</script>

<template>
  <main id="main-content" class="seo-detail-page">
    <div class="seo-detail-container">
      <nav class="breadcrumb" aria-label="مسیر صفحه">
        <NuxtLink to="/">خانه</NuxtLink>
        <span>/</span>
        <NuxtLink to="/services">خدمات</NuxtLink>
        <span>/</span>
        <span aria-current="page">توسعه فروشگاه اینترنتی</span>
      </nav>

      <span class="page-kicker">Ecommerce Development</span>
      <h1>طراحی و توسعه فروشگاه اینترنتی اختصاصی برای رشد بلندمدت</h1>
      <p class="page-lead">
        فروشگاه خوب فقط مجموعه‌ای از صفحات محصول و سبد خرید نیست. معماری داده،
        جستجو، تجربه خرید، عملکرد فنی، SEO و ابزارهای مدیریتی باید از ابتدا در
        کنار هم طراحی شوند تا محصول با رشد کسب‌وکار محدود نشود.
      </p>

      <section class="content-section">
        <h2>چه بخش‌هایی را در یک فروشگاه اختصاصی طراحی می‌کنیم؟</h2>
        <div class="feature-grid">
          <article class="feature-card">
            <h3>تجربه خرید و Conversion</h3>
            <p>
              طراحی مسیر کشف محصول، دسته‌بندی، فیلتر، صفحه محصول و checkout با
              تمرکز بر وضوح، سرعت و کاهش اصطکاک کاربر.
            </p>
          </article>
          <article class="feature-card">
            <h3>معماری کاتالوگ و داده</h3>
            <p>
              مدل‌سازی محصول، ویژگی‌ها، دسته‌بندی و موجودی به شکلی که افزودن
              قابلیت‌ها و کانال‌های بعدی هزینه بازطراحی ایجاد نکند.
            </p>
          </article>
          <article class="feature-card">
            <h3>SEO فنی از ابتدا</h3>
            <p>
              ساختار URL، metadata، canonical، داده ساختاریافته، crawlability و
              عملکرد فنی به‌عنوان بخشی از معماری محصول دیده می‌شوند.
            </p>
          </article>
          <article class="feature-card">
            <h3>جستجو و قابلیت‌های هوشمند</h3>
            <p>
              در صورت نیاز، جستجوی معنایی، پیشنهاد محصول و قابلیت‌های AI به
              داده و تجربه واقعی فروشگاه متصل می‌شوند.
            </p>
          </article>
        </div>
      </section>

      <section class="content-section">
        <h2>فرایند توسعه</h2>
        <ol>
          <li>شناخت مدل کسب‌وکار، نوع کاتالوگ، فرایند سفارش و نیازهای عملیاتی.</li>
          <li>طراحی معماری اطلاعات و تجربه کاربری پیش از توسعه رابط نهایی.</li>
          <li>پیاده‌سازی لایه‌های frontend، backend و مدیریت داده متناسب با نیاز پروژه.</li>
          <li>تست عملکرد، SEO فنی، مسیرهای خرید و سناریوهای خطا پیش از انتشار.</li>
          <li>پایش و توسعه مرحله‌ای قابلیت‌های جدید بعد از راه‌اندازی.</li>
        </ol>
      </section>

      <section class="content-section">
        <h2>چه زمانی راهکار اختصاصی منطقی‌تر است؟</h2>
        <p>
          وقتی کاتالوگ پیچیده، فرایندهای داخلی خاص، نیاز به اتصال به سیستم‌های
          دیگر، جستجوی پیشرفته یا برنامه توسعه بلندمدت دارید، محدودیت قالب‌ها و
          افزونه‌های آماده می‌تواند به هزینه عملیاتی تبدیل شود. در این شرایط
          معماری اختصاصی امکان کنترل بیشتر روی تجربه، داده و roadmap محصول را
          فراهم می‌کند.
        </p>
      </section>

      <section class="content-section related-card">
        <h2>نمونه مرتبط: شیدانه</h2>
        <p>
          شیدانه نمونه‌ای از تجربه SmartPilot در تجارت الکترونیک، مدیریت
          کاتالوگ، جستجو، SEO و توسعه قابلیت‌های هوشمند است.
        </p>
        <NuxtLink to="/projects/shidaneh">مطالعه Case Study شیدانه</NuxtLink>
      </section>

      <section class="content-section">
        <h2>سؤالات رایج</h2>
        <dl class="faq-list">
          <div class="faq-item">
            <dt>آیا فروشگاه اختصاصی همیشه بهتر از راهکار آماده است؟</dt>
            <dd>
              نه. انتخاب باید بر اساس پیچیدگی محصول، بودجه، فرایندهای عملیاتی و
              roadmap انجام شود. برای نیازهای ساده، راهکار آماده می‌تواند انتخاب
              منطقی‌تری باشد.
            </dd>
          </div>
          <div class="faq-item">
            <dt>SEO بعد از طراحی اضافه می‌شود؟</dt>
            <dd>
              بهتر است نه. ساختار URL، HTML، سرعت، داده ساختاریافته و معماری
              دسته‌بندی باید در زمان طراحی و توسعه در نظر گرفته شوند.
            </dd>
          </div>
        </dl>
      </section>

      <section class="content-section cta-card">
        <h2>برای فروشگاه یا بازطراحی محصول برنامه دارید؟</h2>
        <p>
          می‌توانیم ابتدا معماری فعلی، محدودیت‌ها و اهداف رشد را بررسی کنیم و
          مشخص کنیم چه بخش‌هایی واقعاً به توسعه اختصاصی نیاز دارند.
        </p>
        <NuxtLink to="/contact">شروع بررسی پروژه</NuxtLink>
      </section>
    </div>
  </main>
</template>

<style scoped>
.seo-detail-page {
  background:
    radial-gradient(circle at 90% 0%, rgba(184, 107, 53, 0.08), transparent 28%),
    linear-gradient(180deg, #fcf8f4 0%, #fff 46%, #fbfcfd 100%);
  color: #101c32;
}

.seo-detail-container {
  width: min(980px, 92%);
  margin: 0 auto;
  padding: 54px 0 84px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 24px;
  color: #697386;
  font-size: 13px;
}

.breadcrumb a {
  color: #9f5a34;
}

.page-kicker {
  color: #9f5a34;
  font-size: 13px;
  font-weight: 800;
}

h1 {
  max-width: 820px;
  margin: 10px 0 14px;
  font-size: clamp(34px, 5vw, 54px);
  line-height: 1.42;
  letter-spacing: -0.03em;
}

.page-lead {
  max-width: 820px;
  margin: 0;
  color: #566174;
  font-size: 17px;
  line-height: 2;
}

.content-section {
  margin-top: 48px;
}

.content-section h2 {
  margin: 0 0 16px;
  font-size: clamp(25px, 3vw, 34px);
  line-height: 1.5;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.feature-card {
  padding: 20px;
  border: 1px solid rgba(226, 211, 199, 0.85);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.82);
}

.feature-card h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.feature-card p,
.content-section p,
.content-section li,
.faq-item dd {
  color: #5f6b7d;
  line-height: 1.95;
}

.content-section ul,
.content-section ol {
  padding-inline-start: 22px;
}

.related-card,
.cta-card {
  padding: 22px;
  border-radius: 20px;
  background: #101c32;
  color: #fff;
}

.related-card p,
.cta-card p {
  color: #c5cfda;
}

.related-card a,
.cta-card a {
  display: inline-flex;
  margin-top: 8px;
  color: #f1b98e;
  font-weight: 800;
}

.faq-list {
  display: grid;
  gap: 14px;
}

.faq-item {
  padding: 18px 20px;
  border: 1px solid rgba(220, 226, 232, 0.9);
  border-radius: 16px;
  background: #fff;
}

.faq-item dt {
  font-weight: 800;
}

.faq-item dd {
  margin: 7px 0 0;
}

@media (max-width: 700px) {
  .seo-detail-container {
    padding-top: 34px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .page-lead {
    font-size: 15.5px;
  }
}
</style>

