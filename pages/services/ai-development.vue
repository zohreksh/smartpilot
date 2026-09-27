<script setup lang="ts">
const { baseUrl, canonicalUrl, imageUrl } = usePageSeo({
  title: "توسعه هوش مصنوعی برای کسب‌وکارها | SmartPilot",
  description:
    "طراحی و توسعه قابلیت‌های هوش مصنوعی، Agent، RAG، جستجوی هوشمند و اتوماسیون متصل به محصول و داده کسب‌وکار.",
  path: "/services/ai-development",
  image: "/images/hero/desktop-hero.webp",
  imageAlt: "توسعه راهکارهای هوش مصنوعی توسط SmartPilot",
});

useBreadcrumbSchema([
  { name: "خانه", path: "/" },
  { name: "خدمات", path: "/services" },
  { name: "توسعه هوش مصنوعی", path: "/services/ai-development" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${canonicalUrl}#service`,
  name: "توسعه هوش مصنوعی برای کسب‌وکارها",
  serviceType: "توسعه راهکارهای هوش مصنوعی",
  url: canonicalUrl,
  image: imageUrl,
  description:
    "طراحی و توسعه AI Agent، RAG، جستجوی معنایی و اتوماسیون هوشمند متصل به داده و محصول.",
  provider: {
    "@id": `${baseUrl}/#organization`,
  },
  inLanguage: "fa-IR",
};

useHead({
  script: [
    {
      key: "ai-development-service-schema",
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
        <span aria-current="page">توسعه هوش مصنوعی</span>
      </nav>

      <span class="page-kicker">AI Development</span>
      <h1>توسعه هوش مصنوعی کاربردی برای محصولات و عملیات کسب‌وکار</h1>
      <p class="page-lead">
        هدف ما اضافه‌کردن یک قابلیت نمایشی AI نیست. راهکار هوشمند باید به داده،
        فرایند و تجربه واقعی کاربر متصل شود و بتوان اثر آن را در محصول یا عملیات
        اندازه‌گیری و بهبود داد.
      </p>

      <section class="content-section">
        <h2>چه راهکارهایی طراحی و توسعه می‌دهیم؟</h2>
        <div class="feature-grid">
          <article class="feature-card">
            <h3>AI Agent و اتوماسیون</h3>
            <p>
              Agentهایی برای اجرای فرایندهای چندمرحله‌ای، کار با ابزارها و
              سرویس‌های داخلی و کاهش کارهای تکراری تیم.
            </p>
          </article>
          <article class="feature-card">
            <h3>RAG و دانش سازمانی</h3>
            <p>
              اتصال مدل زبانی به اسناد، داده‌ها و منابع داخلی با بازیابی
              کنترل‌شده تا پاسخ‌ها به دانش واقعی کسب‌وکار تکیه کنند.
            </p>
          </article>
          <article class="feature-card">
            <h3>جستجوی معنایی و هوشمند</h3>
            <p>
              بهبود جستجو در کاتالوگ‌ها و محتوای پیچیده با درک مفهوم، شباهت و
              زمینه؛ نه صرفاً تطبیق دقیق کلمات.
            </p>
          </article>
          <article class="feature-card">
            <h3>دستیار و Advisor داخل محصول</h3>
            <p>
              طراحی تجربه گفتگو و پیشنهاددهی متناسب با محصول، داده و قوانین
              کسب‌وکار برای کمک به تصمیم‌گیری کاربر.
            </p>
          </article>
        </div>
      </section>

      <section class="content-section">
        <h2>فرایند اجرای پروژه AI</h2>
        <ol>
          <li>تعریف مسئله، کاربر هدف و معیار موفقیت قبل از انتخاب مدل یا تکنولوژی.</li>
          <li>بررسی کیفیت و دسترسی داده، محدودیت‌های امنیتی و نقاط اتصال به سیستم‌های موجود.</li>
          <li>ساخت نمونه کوچک و قابل ارزیابی برای سنجش کیفیت پاسخ، هزینه و سرعت.</li>
          <li>اتصال راهکار به محصول یا عملیات واقعی و طراحی مسیرهای fallback و کنترل خطا.</li>
          <li>پایش کیفیت و توسعه مرحله‌ای بر اساس داده واقعی استفاده.</li>
        </ol>
      </section>

      <section class="content-section">
        <h2>خروجی همکاری می‌تواند شامل چه چیزهایی باشد؟</h2>
        <ul>
          <li>معماری و APIهای لایه هوش مصنوعی</li>
          <li>Pipeline بازیابی و RAG برای داده و دانش اختصاصی</li>
          <li>جستجوی معنایی، ranking و پیشنهاددهی</li>
          <li>Agent workflow و اتصال به ابزارها و سرویس‌های داخلی</li>
          <li>داشبورد یا لاگ‌های لازم برای ارزیابی کیفیت و هزینه</li>
          <li>مستندات فنی برای توسعه و نگهداری بعدی</li>
        </ul>
      </section>

      <section class="content-section related-card">
        <h2>نمونه مرتبط</h2>
        <p>
          در پروژه‌های SmartPilot از جستجوی هوشمند و قابلیت‌های AI در کنار
          معماری محصول و داده استفاده شده است.
        </p>
        <NuxtLink to="/projects/hevix">مطالعه Case Study هویکس</NuxtLink>
      </section>

      <section class="content-section">
        <h2>سؤالات رایج</h2>
        <dl class="faq-list">
          <div class="faq-item">
            <dt>برای شروع پروژه AI حتماً باید داده زیادی داشته باشیم؟</dt>
            <dd>
              نه همیشه. نیاز داده به مسئله بستگی دارد؛ در بعضی پروژه‌ها اتصال
              درست به دانش موجود مهم‌تر از تولید دیتاست بزرگ است.
            </dd>
          </div>
          <div class="faq-item">
            <dt>آیا می‌توان AI را به محصول موجود اضافه کرد؟</dt>
            <dd>
              بله. معمولاً ابتدا نقاط اتصال، APIها، مدل داده و محدودیت‌های
              محصول فعلی بررسی می‌شوند و قابلیت هوشمند به‌صورت مرحله‌ای اضافه
              می‌شود.
            </dd>
          </div>
        </dl>
      </section>

      <section class="content-section cta-card">
        <h2>مسئله AI شما را بررسی کنیم</h2>
        <p>
          اگر مسئله مشخصی در جستجو، پشتیبانی، دانش سازمانی یا اتوماسیون دارید،
          می‌توانیم ابتدا مناسب‌بودن AI و مسیر اجرای کم‌ریسک آن را بررسی کنیم.
        </p>
        <NuxtLink to="/contact">شروع گفتگو درباره پروژه</NuxtLink>
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

