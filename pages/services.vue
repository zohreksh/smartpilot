<script setup>
import { ref } from "vue";

usePageSeo({
  title: "توسعه هوش مصنوعی و خدمات محصول دیجیتال | NexaStudio",
  description:
    "توسعه هوش مصنوعی، جستجوی هوشمند، Agent، سئوی اتومات، سامانه‌های اختصاصی، فروشگاه اینترنتی، تحلیل داده و پشتیبانی مستمر توسط NexaStudio.",
  path: "/services",
  image: "/images/projects/shidane1.webp",
});

const shidaneProofSrc = ref("/images/projects/shidane1.webp");
const hevixProofSrc = ref("/images/projects/hevix1.webp");

let shidaneRetryCount = 0;
let hevixRetryCount = 0;

const recoverProofImage = (image) => {
  if (image === "shidane") {
    if (shidaneRetryCount === 0) {
      shidaneRetryCount = 1;
      shidaneProofSrc.value = "/images/projects/shidane1.webp?retry=1";
      return;
    }

    if (shidaneRetryCount === 1) {
      shidaneRetryCount = 2;
      shidaneProofSrc.value = "/images/projects/shidane.webp";
    }

    return;
  }

  if (hevixRetryCount === 0) {
    hevixRetryCount = 1;
    hevixProofSrc.value = "/images/projects/hevix1.webp?retry=1";
    return;
  }

  if (hevixRetryCount === 1) {
    hevixRetryCount = 2;
    hevixProofSrc.value = "/images/projects/hevix.webp";
  }
};
</script>

<template>
  <main class="services-page">
    <SiteHeader />

    <section class="services-hero">
      <div class="container hero-layout">
        <div class="hero-copy">
          <span class="hero-eyebrow">AI-first Digital Product Studio</span>

          <h1>
            هوش مصنوعی را
            <strong>به قابلیت واقعی کسب‌وکار تبدیل می‌کنیم</strong>
          </h1>

          <p class="hero-lead">
            از مشاور و جستجوی هوشمند تا Agent، اتوماسیون و تحلیل داده؛ و هرجا
            لازم باشد محصول، سامانه، سایت، فروشگاه، سئو و زیرساخت عملیاتی را هم
            در همان مسیر طراحی و توسعه می‌دهیم.
          </p>

          <div class="hero-actions">
            <a class="primary-action" href="#ai-services">خدمات هوش مصنوعی</a>
            <NuxtLink class="secondary-action" to="/contact">بررسی پروژه شما</NuxtLink>
          </div>

          <div class="hero-meta" role="group" aria-label="ویژگی‌های همکاری">
            <span>AI کاربردی، نه نمایشی</span>
            <i aria-hidden="true"></i>
            <span>معماری قابل توسعه</span>
            <i aria-hidden="true"></i>
            <span>اتصال به داده و عملیات واقعی</span>
          </div>
        </div>

        <div class="ai-visual" aria-label="نمودار حوزه‌های اصلی توسعه هوش مصنوعی">
          <div class="ai-diagram">
            <svg class="diagram-links" viewBox="0 0 420 340" aria-hidden="true">
              <line x1="210" y1="170" x2="315" y2="76" />
              <line x1="210" y1="170" x2="105" y2="76" />
              <line x1="210" y1="170" x2="315" y2="264" />
              <line x1="210" y1="170" x2="105" y2="264" />
            </svg>

            <div class="ai-core">
              <span>Nexa AI</span>
              <strong>Intelligence</strong>
              <small>Product Layer</small>
            </div>

            <article class="ai-node node-advisor">
              <span>01</span>
              <div>
                <strong>AI Advisor</strong>
                <small>مشاور هوشمند</small>
              </div>
            </article>

            <article class="ai-node node-search">
              <span>02</span>
              <div>
                <strong>Smart Search</strong>
                <small>جستجوی معنایی</small>
              </div>
            </article>

            <article class="ai-node node-agent">
              <span>03</span>
              <div>
                <strong>AI Agents</strong>
                <small>اتوماسیون عملیات</small>
              </div>
            </article>

            <article class="ai-node node-data">
              <span>04</span>
              <div>
                <strong>AI + Data</strong>
                <small>تحلیل و تصمیم‌یار</small>
              </div>
            </article>
          </div>

          <p class="ai-diagram-caption">
            یک لایه هوشمندی مشترک که به داده، جستجو، عملیات و تجربه کاربر متصل می‌شود.
          </p>
        </div>
      </div>
    </section>

    <section id="ai-services" class="ai-services-section">
      <div class="container">
        <div class="section-heading ai-heading">
          <span class="section-badge">اولویت اول NexaStudio</span>
          <h2>توسعه هوش مصنوعی متصل به محصول، داده و عملیات واقعی</h2>
          <p>
            هدف ما اضافه‌کردن یک چت‌بات تزئینی نیست. AI باید زمان، هزینه یا
            اصطکاک را کم کند، کیفیت تصمیم را بالا ببرد یا تجربه مشتری را بهتر
            کند.
          </p>
        </div>

        <div class="ai-grid">
          <article class="ai-feature ai-feature-main">
            <div class="feature-top">
              <span>AI / 01</span>
              <small>Customer Intelligence</small>
            </div>
            <h3>مشاور و دستیار هوشمند</h3>
            <p>
              دستیارهایی که روی داده، کاتالوگ، محتوای واقعی و قواعد کسب‌وکار
              Ground می‌شوند و کاربر یا تیم داخلی را تا تصمیم و اقدام بعدی
              همراهی می‌کنند.
            </p>
            <ul>
              <li>مشاور خرید و انتخاب محصول</li>
              <li>دستیار داخلی برای اپراتور و مدیر</li>
              <li>Grounding روی داده واقعی</li>
              <li>کنترل دسترسی و پاسخ‌های قابل ممیزی</li>
            </ul>
          </article>

          <div class="ai-side-grid">
            <article class="ai-feature">
              <div class="feature-top">
                <span>AI / 02</span>
                <small>Retrieval</small>
              </div>
              <h3>جستجوی هوشمند و معنایی</h3>
              <p>
                درک بهتر نیت کاربر و بازیابی دقیق‌تر محصول یا اطلاعات، حتی وقتی
                عبارت جستجو با متن کاتالوگ یکسان نیست.
              </p>
              <div class="feature-tags">
                <span>Semantic Search</span>
                <span>Hybrid Retrieval</span>
                <span>RAG</span>
              </div>
            </article>

            <article class="ai-feature">
              <div class="feature-top">
                <span>AI / 03</span>
                <small>Automation</small>
              </div>
              <h3>Agent و اتوماسیون هوشمند</h3>
              <p>
                خودکارسازی کارهای تکراری و Workflowهای چندمرحله‌ای با ابزارهای
                محدودشده، مجوز مشخص و Human-in-the-loop.
              </p>
              <div class="feature-tags">
                <span>Agents</span>
                <span>Workflow</span>
                <span>Human Review</span>
              </div>
            </article>

            <article class="ai-feature">
              <div class="feature-top">
                <span>AI / 04</span>
                <small>Data Intelligence</small>
              </div>
              <h3>تحلیل، گزارش و تصمیم‌یار هوشمند</h3>
              <p>
                تبدیل داده‌های پراکنده به گزارش، هشدار، تشخیص مسئله و پاسخ‌های
                قابل استفاده برای تصمیم‌های مدیریتی و عملیاتی.
              </p>
              <div class="feature-tags">
                <span>Analytics</span>
                <span>Diagnostics</span>
                <span>Decision Support</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="all-services" class="all-services-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">همه خدمات</span>
          <h2>از AI تا ساخت، راه‌اندازی و رشد محصول</h2>
          <p>
            خدمات می‌توانند مستقل انتخاب شوند یا در قالب یک مسیر یکپارچه کنار
            هم قرار بگیرند. چیزی را که برای پروژه لازم نیست، تحمیل نمی‌کنیم.
          </p>
        </div>

        <div class="service-list">
          <article class="service-row service-featured service-ai-card">
            <div class="service-number">01</div>
            <div class="service-title">
              <span>Artificial Intelligence</span>
              <h3>توسعه هوش مصنوعی و قابلیت‌های هوشمند</h3>
            </div>
            <div class="service-body">
              <p>
                طراحی و توسعه لایه هوشمند برای محصول یا عملیات، از معماری و
                انتخاب مدل تا اتصال به داده، ابزار و Workflow.
              </p>
              <div class="service-tags">
                <span>AI Advisor</span>
                <span>Smart Search</span>
                <span>AI Agents</span>
                <span>RAG</span>
                <span>AI Automation</span>
                <span>AI Analytics</span>
              </div>
            </div>
          </article>

          <article class="service-row">
            <div class="service-number">02</div>
            <div class="service-title">
              <span>Custom Engineering</span>
              <h3>سامانه‌ها و پروژه‌های اختصاصی</h3>
            </div>
            <div class="service-body">
              <p>
                ساخت پنل، پلتفرم، سامانه عملیاتی یا پروژه نرم‌افزاری اختصاصی
                برای نیازهایی که با ابزار و قالب آماده حل نمی‌شوند.
              </p>
              <div class="service-tags">
                <span>معماری نرم‌افزار</span>
                <span>پنل مدیریتی</span>
                <span>Workflow</span>
                <span>قابلیت اختصاصی</span>
                <span>پروژه‌های غیرسایتی</span>
              </div>
            </div>
          </article>

          <article class="service-row">
            <div class="service-number">03</div>
            <div class="service-title">
              <span>Web & Commerce</span>
              <h3>طراحی وب‌سایت و فروشگاه اینترنتی</h3>
            </div>
            <div class="service-body">
              <p>
                طراحی و توسعه وب‌سایت و فروشگاه با تجربه کاربری متناسب با برند،
                مسیر تبدیل روشن و زیرساختی که برای توسعه بعدی آماده باشد.
              </p>
              <div class="service-tags">
                <span>UX / UI</span>
                <span>Responsive & RTL</span>
                <span>Ecommerce</span>
                <span>Redesign</span>
                <span>Conversion</span>
              </div>
            </div>
          </article>

          <article class="service-row service-seo service-seo-card">
            <div class="service-number">04</div>
            <div class="service-title">
              <span>Automated SEO</span>
              <h3>سئوی اتومات و رشد ارگانیک</h3>
            </div>
            <div class="service-body">
              <p>
                سئو را به بخشی از خود محصول تبدیل می‌کنیم تا صفحات، Metadata،
                Schema و سیگنال‌های فنی در مقیاس و با قواعد مشخص مدیریت شوند.
              </p>
              <div class="service-tags">
                <span>Metadata Automation</span>
                <span>Schema</span>
                <span>Sitemap</span>
                <span>Canonical</span>
                <span>Indexability</span>
                <span>Content Workflow</span>
              </div>
            </div>
          </article>

          <article class="service-row service-data-card">
            <div class="service-number">05</div>
            <div class="service-title">
              <span>Data Onboarding & Catalog</span>
              <h3>مدیریت و ورود دیتاهای اولیه</h3>
            </div>
            <div class="service-body">
              <p>
                برای راه‌اندازی فروشگاه یا سامانه، داده‌های اولیه را وارد،
                پاک‌سازی، ساختاردهی و آماده می‌کنیم تا پروژه با دیتای قابل
                استفاده شروع شود.
              </p>
              <div class="service-tags">
                <span>ورود محصول</span>
                <span>Data Migration</span>
                <span>پاک‌سازی داده</span>
                <span>دسته و برند</span>
                <span>ویژگی‌ها</span>
                <span>تصاویر و محتوا</span>
              </div>
            </div>
          </article>

          <article class="service-row service-report-card">
            <div class="service-number">06</div>
            <div class="service-title">
              <span>Reporting & BI</span>
              <h3>گزارشات مدیریتی و تحلیل داده</h3>
            </div>
            <div class="service-body">
              <p>
                داده‌های عملیاتی را به داشبورد، گزارش و شاخص‌هایی تبدیل می‌کنیم
                که وضعیت فروش، عملیات و نقاط مسئله را قابل مشاهده و تصمیم‌پذیر
                کنند.
              </p>
              <div class="service-tags">
                <span>Dashboards</span>
                <span>KPI</span>
                <span>BI</span>
                <span>Operational Reports</span>
                <span>Diagnostics</span>
              </div>
            </div>
          </article>

          <article class="service-row">
            <div class="service-number">07</div>
            <div class="service-title">
              <span>Integration & Automation</span>
              <h3>یکپارچه‌سازی، API و اتوماسیون عملیات</h3>
            </div>
            <div class="service-body">
              <p>
                سرویس‌ها و سیستم‌های پراکنده را به هم متصل می‌کنیم، ورود
                اطلاعات تکراری را کم می‌کنیم و فرآیندهای دستی را به Workflow
                قابل کنترل تبدیل می‌کنیم.
              </p>
              <div class="service-tags">
                <span>API Integration</span>
                <span>Automation</span>
                <span>Background Jobs</span>
                <span>Sync</span>
                <span>External Services</span>
              </div>
            </div>
          </article>

          <article class="service-row">
            <div class="service-number">08</div>
            <div class="service-title">
              <span>Support & Evolution</span>
              <h3>پشتیبانی، نگهداری و توسعه مستمر</h3>
            </div>
            <div class="service-body">
              <p>
                بعد از انتشار محصول را رها نمی‌کنیم. نگهداری، رفع خطا،
                بهینه‌سازی و توسعه قابلیت‌های بعدی می‌تواند مرحله‌ای و کنترل‌شده
                ادامه پیدا کند.
              </p>
              <div class="service-tags">
                <span>Maintenance</span>
                <span>Monitoring</span>
                <span>Bug Fixing</span>
                <span>Optimization</span>
                <span>Feature Growth</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="engagement-section">
      <div class="container engagement-layout">
        <div class="engagement-copy">
          <span class="section-badge">مدل همکاری</span>
          <h2>لازم نیست پروژه از صفر شروع شود</h2>
          <p>
            می‌توانیم وارد محصول موجود شویم، فقط یک قابلیت AI یا ماژول خاص را
            بسازیم، یک مسئله فنی را حل کنیم یا مسئولیت توسعه مستمر را بگیریم.
          </p>
          <NuxtLink class="text-link" to="/contact">
            درباره وضعیت فعلی پروژه صحبت کنیم ←
          </NuxtLink>
        </div>

        <div class="engagement-options">
          <article>
            <span>01</span>
            <div>
              <strong>محصول یا پروژه جدید</strong>
              <p>Discovery، معماری، طراحی، توسعه و انتشار.</p>
            </div>
          </article>

          <article class="engagement-highlight">
            <span>02</span>
            <div>
              <strong>AI یا قابلیت جدید روی محصول موجود</strong>
              <p>Audit، طراحی Integration و توسعه کنترل‌شده.</p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <strong>رشد و توسعه مستمر</strong>
              <p>نگهداری، بهینه‌سازی و توسعه بر اساس داده و نیاز جدید.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">فرآیند اجرا</span>
          <h2>قبل از توسعه، مسئله و ارزش خروجی را روشن می‌کنیم</h2>
          <p>
            مخصوصاً در پروژه‌های AI، انتخاب مدل آخرین تصمیم است. ابتدا باید
            مسئله، داده، محدودیت و معیار موفقیت مشخص شوند.
          </p>
        </div>

        <ol class="process-list">
          <li>
            <span>01</span>
            <strong>شناخت مسئله</strong>
            <p>هدف، کاربر، فرآیند فعلی و محدودیت‌ها مشخص می‌شوند.</p>
          </li>
          <li>
            <span>02</span>
            <strong>طراحی راهکار</strong>
            <p>Scope، معماری، داده و نقاط Integration تعریف می‌شوند.</p>
          </li>
          <li>
            <span>03</span>
            <strong>ساخت و تست</strong>
            <p>پیاده‌سازی مرحله‌ای با کنترل کیفیت و تست سناریوهای واقعی.</p>
          </li>
          <li>
            <span>04</span>
            <strong>انتشار و بهبود</strong>
            <p>پایش نتیجه و توسعه بعدی بر اساس داده و بازخورد واقعی.</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="proof-section">
      <div class="container proof-layout">
        <div class="proof-copy">
          <span class="section-badge">تجربه واقعی محصول</span>
          <h2>خدماتی که ارائه می‌دهیم، در محصول واقعی تجربه شده‌اند</h2>
          <p>
            شیدانه و هویکس فقط نمونه‌کار بصری نیستند. تجربه معماری، جستجوی
            هوشمند، SEO، کاتالوگ، گزارشات، عملیات و توسعه مستمر این محصولات،
            پشت تصمیم‌های فنی ما قرار دارد.
          </p>
          <NuxtLink class="text-link" to="/about">
            بیشتر درباره NexaStudio ←
          </NuxtLink>
        </div>

        <div class="proof-products">
          <figure>
            <img
              :src="shidaneProofSrc"
              alt="پیش‌نمایش محصول شیدانه"
              loading="lazy"
              decoding="async"
              @error="recoverProofImage('shidane')"
            />
            <figcaption>
              <span>Beauty Commerce</span>
              <strong>شیدانه</strong>
              <small>فروشگاه، جستجوی هوشمند، SEO و قابلیت‌های AI</small>
            </figcaption>
          </figure>

          <figure>
            <img
              :src="hevixProofSrc"
              alt="پیش‌نمایش محصول هویکس"
              loading="lazy"
              decoding="async"
              @error="recoverProofImage('hevix')"
            />
            <figcaption>
              <span>Industrial Commerce</span>
              <strong>HEVIX</strong>
              <small>پلتفرم تخصصی، داده، جستجو و توسعه اختصاصی</small>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.services-page {
  min-height: 100vh;
  overflow-x: clip;
  direction: rtl;
  background:
    linear-gradient(180deg, #fcf8f4 0%, #fffdfa 48%, #fcf8f4 100%);
  color: var(--text);
}

.services-hero {
  position: relative;
  overflow: hidden;
  padding: 20px 0 60px;
}

.services-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 82% 20%, rgba(184, 107, 53, 0.16), transparent 27%),
    radial-gradient(circle at 70% 72%, rgba(223, 170, 128, 0.12), transparent 24%),
    radial-gradient(circle at 11% 18%, rgba(71, 93, 126, 0.07), transparent 25%);
  pointer-events: none;
}

.services-hero::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  left: -95px;
  bottom: -150px;
  border: 1px solid rgba(184, 107, 53, 0.14);
  border-radius: 50%;
  box-shadow: 0 0 0 46px rgba(184, 107, 53, 0.025);
  pointer-events: none;
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.16fr) minmax(360px, 0.84fr);
  gap: 48px;
  align-items: center;
  min-height: 520px;
  padding: 42px 44px;
  overflow: hidden;
  border: 1px solid rgba(226, 211, 199, 0.92);
  border-radius: 32px;
  background:
    radial-gradient(circle at 84% 18%, rgba(184, 107, 53, 0.12), transparent 27%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(255, 249, 245, 0.95));
  box-shadow:
    0 24px 58px rgba(16, 28, 50, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.hero-copy {
  max-width: 710px;
}

.hero-eyebrow,
.section-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid rgba(196, 102, 63, 0.55);
  border-radius: 999px;
  background: rgba(255, 247, 244, 0.92);
  color: #b45f35;
  font-size: 15.5px;
  font-weight: 800;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.hero-eyebrow {
  padding: 7px 18px;
  direction: ltr;
  letter-spacing: 0.02em;
}

.hero-copy h1 {
  max-width: 780px;
  margin: 20px 0 20px;
  color: var(--text);
  font-size: clamp(40px, 4.4vw, 60px);
  line-height: 1.36;
  letter-spacing: -0.028em;
}

.hero-copy h1 strong {
  display: block;
  color: var(--accent);
}

.hero-lead {
  max-width: 680px;
  margin: 0;
  color: var(--muted);
  font-size: 16.5px;
  line-height: 1.95;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 31px;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 15.5px;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-action {
  background: linear-gradient(135deg, #c97d45, #95502d);
  color: #fff;
  box-shadow: 0 14px 30px rgba(155, 84, 45, 0.22);
}

.secondary-action {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.82);
  color: var(--text);
  box-shadow: 0 8px 22px rgba(16, 28, 50, 0.04);
}

.primary-action:hover,
.secondary-action:hover {
  transform: translateY(-2px);
}

.hero-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 28px;
  color: var(--muted);
  font-size: 14px;
}

.hero-meta i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
}

.ai-visual {
  min-width: 0;
  padding-right: 28px;
  border-right: 1px solid rgba(218, 200, 187, 0.72);
}

.ai-diagram {
  position: relative;
  width: min(100%, 420px);
  aspect-ratio: 420 / 340;
  margin: 0 auto;
}

.diagram-links {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.diagram-links line {
  stroke: rgba(184, 107, 53, 0.22);
  stroke-width: 1.2;
  stroke-dasharray: 4 5;
}

.ai-core {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  display: flex;
  width: 142px;
  height: 142px;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(184, 107, 53, 0.3);
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 28%, #fff, #fff7f1 62%, #f2dfd1 100%);
  box-shadow:
    0 18px 42px rgba(16, 28, 50, 0.09),
    0 0 0 10px rgba(255, 255, 255, 0.34);
  text-align: center;
}

.ai-core > span {
  color: var(--accent);
  font-size: 10.5px;
  font-weight: 800;
}

.ai-core strong {
  margin-top: 4px;
  color: var(--text);
  font-size: 16px;
  line-height: 1.2;
  direction: ltr;
}

.ai-core small {
  margin-top: 4px;
  color: var(--muted);
  font-size: 10px;
  direction: ltr;
}

.ai-node {
  position: absolute;
  z-index: 4;
  display: flex;
  width: 154px;
  min-height: 62px;
  align-items: center;
  gap: 9px;
  padding: 9px 11px;
  border: 1px solid rgba(226, 211, 199, 0.82);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.84);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  box-shadow: 0 9px 24px rgba(16, 28, 50, 0.045);
}

.ai-node > span {
  display: inline-flex;
  flex: none;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: #faece4;
  color: var(--accent);
  font-size: 9.5px;
  font-weight: 800;
}

.ai-node div {
  min-width: 0;
}

.ai-node strong {
  display: block;
  color: var(--text);
  font-size: 11.5px;
  line-height: 1.3;
  direction: ltr;
  text-align: right;
}

.ai-node small {
  display: block;
  margin-top: 2px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.4;
}

.node-advisor {
  top: 6%;
  right: 0;
}

.node-search {
  top: 6%;
  left: 0;
}

.node-agent {
  right: 0;
  bottom: 6%;
}

.node-data {
  left: 0;
  bottom: 6%;
}

.ai-diagram-caption {
  max-width: 390px;
  margin: 12px auto 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
  text-align: center;
}

.ai-services-section {
  padding: 88px 0;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  border-bottom: 1px solid rgba(234, 223, 215, 0.72);
  background:
    radial-gradient(circle at 86% 12%, rgba(202, 126, 72, 0.07), transparent 24%),
    linear-gradient(180deg, #fffefd 0%, #fff8f2 100%);
  scroll-margin-top: 110px;
}

.section-heading {
  max-width: 840px;
  margin: 0 auto 42px;
  text-align: center;
}

.section-badge {
  padding: 5px 17px;
}

.section-heading h2 {
  margin: 14px 0 10px;
  color: var(--text);
  font-size: clamp(30px, 3.5vw, 44px);
  line-height: 1.45;
}

.section-heading p {
  max-width: 730px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.95;
}

.ai-heading h2 {
  max-width: 760px;
  margin-inline: auto;
}

.ai-grid {
  display: grid;
  grid-template-columns: minmax(350px, 0.93fr) minmax(0, 1.07fr);
  gap: 20px;
}

.ai-side-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.ai-feature {
  position: relative;
  overflow: hidden;
  min-width: 0;
  padding: 25px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 14px 34px rgba(16, 28, 50, 0.045);
}

.ai-feature::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 86px;
  height: 4px;
  border-radius: 0 0 0 999px;
  background: #c77a43;
}

.ai-side-grid .ai-feature:nth-child(1)::before {
  background: #7088a4;
}

.ai-side-grid .ai-feature:nth-child(2)::before {
  background: #8a7aa8;
}

.ai-side-grid .ai-feature:nth-child(3)::before {
  background: #6f947b;
}

.ai-feature-main {
  display: flex;
  min-height: 448px;
  flex-direction: column;
  padding: 31px;
  border-color: rgba(184, 107, 53, 0.36);
  background:
    radial-gradient(circle at 88% 8%, rgba(184, 107, 53, 0.13), transparent 28%),
    linear-gradient(145deg, #fff, #fff9f4);
  box-shadow: 0 20px 44px rgba(184, 107, 53, 0.07);
}

.ai-side-grid .ai-feature:nth-child(1) {
  background: linear-gradient(145deg, #fff, #f7fafc);
}

.ai-side-grid .ai-feature:nth-child(2) {
  background: linear-gradient(145deg, #fff, #faf8fd);
}

.ai-side-grid .ai-feature:nth-child(3) {
  grid-column: 1 / -1;
  background: linear-gradient(145deg, #fff, #f5faf7);
}

.feature-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.feature-top span {
  color: var(--accent);
  font-size: 11.5px;
  font-weight: 800;
}

.feature-top small {
  color: #9a8b80;
  font-size: 10.5px;
  direction: ltr;
}

.ai-feature h3 {
  margin: 19px 0 8px;
  color: var(--text);
  font-size: 20px;
  line-height: 1.55;
}

.ai-feature-main h3 {
  font-size: 28px;
}

.ai-feature p {
  margin: 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.9;
}

.ai-feature-main p {
  font-size: 15.5px;
}

.ai-feature ul {
  display: grid;
  gap: 10px;
  margin: auto 0 0;
  padding: 24px 0 0;
  list-style: none;
}

.ai-feature li {
  position: relative;
  padding-right: 17px;
  color: #566174;
  font-size: 15px;
}

.ai-feature li::before {
  content: "";
  position: absolute;
  top: 0.7em;
  right: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 18px;
}

.feature-tags span,
.service-tags span {
  padding: 5px 9px;
  border: 1px solid #eee2d9;
  border-radius: 999px;
  background: rgba(250, 247, 244, 0.9);
  color: #667085;
  font-size: 12.5px;
  line-height: 1.4;
}

.all-services-section {
  padding: 90px 0;
  background:
    radial-gradient(circle at 10% 15%, rgba(101, 131, 161, 0.06), transparent 22%),
    #fcf8f4;
  scroll-margin-top: 110px;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  gap: 18px;
}

.service-row {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 10px 16px;
  align-items: start;
  min-width: 0;
  min-height: 292px;
  height: 100%;
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 23px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 32px rgba(16, 28, 50, 0.04);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
}

.service-row::after {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  left: -60px;
  bottom: -70px;
  border-radius: 50%;
  background: rgba(184, 107, 53, 0.04);
}

.service-row:hover {
  transform: translateY(-4px);
  border-color: rgba(184, 107, 53, 0.26);
  box-shadow: 0 18px 42px rgba(16, 28, 50, 0.075);
}

.service-ai-card {
  border-color: rgba(184, 107, 53, 0.34);
  background:
    radial-gradient(circle at 92% 12%, rgba(184, 107, 53, 0.12), transparent 25%),
    linear-gradient(135deg, #fffaf6, #fff);
  box-shadow: 0 18px 42px rgba(184, 107, 53, 0.07);
}

.service-seo-card {
  background:
    linear-gradient(145deg, #fff, #f5faf7);
  border-color: rgba(111, 148, 123, 0.26);
}

.service-data-card {
  background:
    linear-gradient(145deg, #fff, #f7f5fb);
  border-color: rgba(138, 122, 168, 0.22);
}

.service-report-card {
  background:
    linear-gradient(145deg, #fff, #f5f8fb);
  border-color: rgba(112, 136, 164, 0.22);
}

.service-number {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  background: #faece4;
  color: var(--accent);
  font-size: 11.5px;
  font-weight: 800;
  direction: ltr;
}

.service-seo-card .service-number {
  background: #edf5ef;
  color: #5c8268;
}

.service-data-card .service-number {
  background: #f1eef8;
  color: #766890;
}

.service-report-card .service-number {
  background: #eef3f8;
  color: #657f9c;
}

.service-title {
  min-width: 0;
}

.service-title span {
  color: var(--accent);
  font-size: 12.5px;
  font-weight: 800;
  direction: ltr;
}

.service-title h3 {
  margin: 5px 0 0;
  color: var(--text);
  font-size: 19px;
  line-height: 1.6;
}

.service-body {
  grid-column: 2;
  min-width: 0;
}

.service-body p {
  max-width: 700px;
  margin: 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.9;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 15px;
}

.engagement-section {
  padding: 88px 0;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  border-bottom: 1px solid rgba(234, 223, 215, 0.72);
  background:
    radial-gradient(circle at 84% 20%, rgba(184, 107, 53, 0.07), transparent 26%),
    rgba(255, 255, 255, 0.68);
}

.engagement-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
  gap: 62px;
  align-items: center;
}

.engagement-copy h2,
.proof-copy h2 {
  margin: 14px 0 12px;
  color: var(--text);
  font-size: clamp(30px, 3.2vw, 41px);
  line-height: 1.5;
}

.engagement-copy p,
.proof-copy p {
  margin: 0;
  color: var(--muted);
  font-size: 15.5px;
  line-height: 1.95;
}

.text-link {
  display: inline-flex;
  margin-top: 21px;
  color: var(--accent);
  font-size: 14px;
  font-weight: 800;
}

.engagement-options {
  display: grid;
  gap: 12px;
}

.engagement-options article {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50px minmax(0, 1fr);
  gap: 16px;
  align-items: center;
  padding: 19px 21px;
  border: 1px solid var(--line);
  border-radius: 19px;
  background: var(--surface);
  box-shadow: 0 10px 26px rgba(16, 28, 50, 0.035);
}

.engagement-options article::after {
  content: "";
  position: absolute;
  right: 0;
  top: 16px;
  bottom: 16px;
  width: 3px;
  border-radius: 999px;
  background: #d9b299;
}

.engagement-options article:nth-child(2)::after {
  background: #b86b35;
}

.engagement-options article:nth-child(3)::after {
  background: #7088a4;
}

.engagement-options article > span {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #faece4;
  color: var(--accent);
  font-size: 11.5px;
  font-weight: 800;
}

.engagement-options strong {
  color: var(--text);
  font-size: 16px;
}

.engagement-options p {
  margin: 3px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

.engagement-highlight {
  border-color: rgba(184, 107, 53, 0.36) !important;
  background: linear-gradient(145deg, #fff, #fff8f2) !important;
  box-shadow: 0 14px 32px rgba(184, 107, 53, 0.06) !important;
}

.process-section {
  padding: 88px 0;
  background:
    linear-gradient(180deg, #fcf8f4 0%, #fffdfb 100%);
}

.process-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.process-list::before {
  content: "";
  position: absolute;
  top: 27px;
  right: 9%;
  left: 9%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #dac8bb 16%, #dac8bb 84%, transparent);
}

.process-list li {
  position: relative;
  z-index: 1;
  text-align: center;
}

.process-list li > span {
  display: inline-flex;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  border: 1px solid #decfc4;
  border-radius: 50%;
  background: linear-gradient(145deg, #fff, #f9ede4);
  color: var(--accent);
  font-size: 12.5px;
  font-weight: 800;
  box-shadow:
    0 0 0 8px var(--bg),
    0 10px 24px rgba(16, 28, 50, 0.04);
}

.process-list li:nth-child(2) > span {
  background: linear-gradient(145deg, #fff, #f0f4f8);
  color: #657f9c;
}

.process-list li:nth-child(3) > span {
  background: linear-gradient(145deg, #fff, #f3f0f8);
  color: #766890;
}

.process-list li:nth-child(4) > span {
  background: linear-gradient(145deg, #fff, #eef6f0);
  color: #5c8268;
}

.process-list strong {
  display: block;
  margin-top: 18px;
  color: var(--text);
  font-size: 16px;
}

.process-list p {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.proof-section {
  padding: 90px 0 100px;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  background:
    radial-gradient(circle at 14% 15%, rgba(112, 136, 164, 0.07), transparent 24%),
    rgba(255, 255, 255, 0.62);
}

.proof-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.68fr) minmax(0, 1.32fr);
  gap: 58px;
  align-items: center;
}

.proof-products {
  position: relative;
  min-height: 430px;
  direction: ltr;
}

.proof-products figure {
  position: absolute;
  overflow: hidden;
  width: 58%;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 25px;
  background: var(--surface);
  box-shadow: 0 22px 48px rgba(16, 28, 50, 0.095);
}

.proof-products figure:first-child {
  top: 0;
  left: 0;
  z-index: 2;
  transform: rotate(-1.2deg);
}

.proof-products figure:last-child {
  right: 0;
  bottom: 0;
  z-index: 1;
  transform: rotate(1.2deg);
}

.proof-products img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  object-position: center;
  background: #f8f3ef;
}

.proof-products figcaption {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 15px 17px;
  direction: rtl;
  background: rgba(255, 255, 255, 0.97);
}

.proof-products figcaption span {
  color: var(--accent);
  font-size: 10.5px;
  font-weight: 800;
  direction: ltr;
  text-align: right;
}

.proof-products figcaption strong {
  color: var(--text);
  font-size: 16px;
}

.proof-products figcaption small {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.65;
}

@media (max-width: 1080px) {
  .hero-layout {
    grid-template-columns: minmax(0, 1.12fr) minmax(330px, 0.88fr);
    gap: 32px;
    padding: 38px 32px;
  }

  .ai-grid {
    grid-template-columns: 1fr;
  }

  .ai-feature-main {
    min-height: 0;
  }

  .engagement-layout,
  .proof-layout {
    gap: 38px;
  }
}

@media (max-width: 820px) {
  .services-hero {
    padding: 16px 0 52px;
  }

  .hero-layout {
    grid-template-columns: 1fr;
    gap: 28px;
    min-height: 0;
    padding: 32px;
  }

  .hero-copy {
    max-width: 720px;
  }

  .ai-visual {
    width: 100%;
    padding: 26px 0 0;
    border-top: 1px solid rgba(218, 200, 187, 0.72);
    border-right: 0;
  }

  .ai-diagram {
    width: min(100%, 460px);
  }

  .ai-side-grid {
    grid-template-columns: 1fr;
  }

  .ai-side-grid .ai-feature:nth-child(3) {
    grid-column: auto;
  }

  .service-list {
    grid-template-columns: 1fr;
  }

  .service-body {
    grid-column: 2;
  }

  .engagement-layout,
  .proof-layout {
    grid-template-columns: 1fr;
  }

  .engagement-copy,
  .proof-copy {
    max-width: 720px;
  }

  .proof-products {
    min-height: 390px;
  }

  .process-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 18px;
  }

  .process-list::before {
    display: none;
  }
}

@media (max-width: 600px) {
  .services-hero {
    padding: 12px 0 46px;
  }

  .hero-layout {
    padding: 24px 20px 22px;
    border-radius: 24px;
  }

  .hero-copy h1 {
    font-size: clamp(33px, 9.8vw, 44px);
    line-height: 1.48;
  }

  .hero-lead {
    font-size: 16.5px;
    line-height: 1.9;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .primary-action,
  .secondary-action {
    min-width: 0;
    padding-inline: 12px;
    font-size: 15px;
  }

  .ai-visual {
    padding-top: 20px;
  }

  .ai-diagram {
    width: 100%;
  }

  .ai-core {
    width: 118px;
    height: 118px;
  }

  .ai-node {
    width: 132px;
    min-height: 56px;
    padding: 8px 9px;
  }

  .ai-node > span {
    width: 25px;
    height: 25px;
  }

  .ai-node strong {
    font-size: 12.5px;
  }

  .ai-node small {
    font-size: 9px;
  }

  .ai-services-section,
  .all-services-section,
  .engagement-section,
  .process-section,
  .proof-section {
    padding: 60px 0;
  }

  .section-heading {
    margin-bottom: 29px;
  }

  .section-heading h2,
  .engagement-copy h2,
  .proof-copy h2 {
    font-size: 28px;
  }

  .section-heading p,
  .engagement-copy p,
  .proof-copy p {
    font-size: 15px;
  }

  .ai-feature,
  .ai-feature-main {
    padding: 21px;
    border-radius: 19px;
  }

  .ai-feature-main h3 {
    font-size: 22px;
  }

  .service-row {
    grid-template-columns: 1fr;
    min-height: 0;
    height: auto;
    gap: 8px;
    padding: 23px 20px;
  }

  .service-body {
    grid-column: auto;
  }

  .service-number {
    width: 38px;
    height: 38px;
  }

  .service-title h3 {
    font-size: 17px;
  }

  .service-body p {
    font-size: 14px;
  }

  .process-list {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .process-list li {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 12px 14px;
    padding-bottom: 27px;
    text-align: right;
  }

  .process-list li:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 44px;
    right: 23px;
    bottom: 0;
    width: 1px;
    background: var(--line);
  }

  .process-list li > span {
    grid-row: 1 / span 2;
    width: 46px;
    height: 46px;
    box-shadow: none;
  }

  .process-list strong {
    margin-top: 2px;
  }

  .process-list p {
    margin-top: 0;
  }

  .proof-products {
    display: grid;
    min-height: 0;
    grid-template-columns: 1fr;
    gap: 14px;
    direction: rtl;
  }

  .proof-products figure,
  .proof-products figure:first-child,
  .proof-products figure:last-child {
    position: relative;
    inset: auto;
    width: 100%;
    transform: none;
  }
}

@media (max-width: 390px) {
  .ai-core {
    width: 102px;
    height: 102px;
  }

  .ai-node {
    width: 116px;
    min-height: 50px;
    gap: 6px;
    padding: 7px;
  }

  .ai-node > span {
    width: 22px;
    height: 22px;
    font-size: 12.5px;
  }

  .ai-node strong {
    font-size: 10px;
  }

  .ai-node small {
    font-size: 9px;
  }

  .hero-actions {
    grid-template-columns: 1fr;
  }

  .hero-meta {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .hero-meta i {
    display: none;
  }
}
</style>
