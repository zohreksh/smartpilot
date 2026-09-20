<script setup>
import { ref } from "vue";

useHead({
  title: "توسعه هوش مصنوعی و خدمات محصول دیجیتال | NexaStudio",
  meta: [
    {
      name: "description",
      content:
        "توسعه هوش مصنوعی، جستجوی هوشمند، مشاور و Agentهای اختصاصی، سئوی اتومات، سامانه‌های اختصاصی، طراحی وب و فروشگاه، مدیریت و ورود داده‌های اولیه، گزارشات و پشتیبانی مستمر توسط NexaStudio.",
    },
  ],
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

        <div class="ai-visual" aria-label="حوزه‌های اصلی توسعه هوش مصنوعی">
          <div class="ai-core">
            <span>Nexa AI</span>
            <strong>Intelligence Layer</strong>
            <small>Search · Advisory · Automation</small>
          </div>

          <article class="ai-node node-advisor">
            <span>01</span>
            <div>
              <strong>AI Advisor</strong>
              <small>مشاور و دستیار هوشمند</small>
            </div>
          </article>

          <article class="ai-node node-search">
            <span>02</span>
            <div>
              <strong>Smart Search</strong>
              <small>جستجوی معنایی و بازیابی</small>
            </div>
          </article>

          <article class="ai-node node-agent">
            <span>03</span>
            <div>
              <strong>AI Agents</strong>
              <small>اتوماسیون و عملیات</small>
            </div>
          </article>

          <article class="ai-node node-data">
            <span>04</span>
            <div>
              <strong>AI + Data</strong>
              <small>تحلیل، گزارش و تصمیم‌یار</small>
            </div>
          </article>

          <div class="visual-ring ring-one" aria-hidden="true"></div>
          <div class="visual-ring ring-two" aria-hidden="true"></div>
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
          <article class="service-row service-featured">
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

          <article class="service-row service-seo">
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

          <article class="service-row">
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

          <article class="service-row">
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
  background: var(--bg);
  color: var(--text);
}

.services-hero {
  position: relative;
  overflow: hidden;
  padding: 82px 0 88px;
}

.services-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 78% 26%, rgba(184, 107, 53, 0.11), transparent 30%),
    radial-gradient(circle at 14% 12%, rgba(16, 28, 50, 0.055), transparent 26%);
  pointer-events: none;
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(430px, 0.96fr);
  gap: 72px;
  align-items: center;
}

.hero-copy {
  max-width: 700px;
}

.hero-eyebrow,
.section-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #d86b4a;
  border-radius: 999px;
  background: #fff7f4;
  color: #b45f35;
  font-size: 13px;
  font-weight: 800;
}

.hero-eyebrow {
  padding: 6px 17px;
  direction: ltr;
}

.hero-copy h1 {
  max-width: 760px;
  margin: 18px 0 20px;
  color: var(--text);
  font-size: clamp(42px, 4.9vw, 66px);
  line-height: 1.37;
  letter-spacing: -0.025em;
}

.hero-copy h1 strong {
  display: block;
  color: var(--accent);
}

.hero-lead {
  max-width: 670px;
  margin: 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.95;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 30px;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 49px;
  padding: 12px 23px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-action {
  background: linear-gradient(135deg, #c17a42, #96502d);
  color: #fff;
  box-shadow: 0 12px 28px rgba(155, 84, 45, 0.2);
}

.secondary-action {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.75);
  color: var(--text);
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
  margin-top: 26px;
  color: var(--muted);
  font-size: 11.5px;
}

.hero-meta i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
}

.ai-visual {
  position: relative;
  min-height: 510px;
}

.ai-core {
  position: absolute;
  z-index: 3;
  top: 155px;
  right: 50%;
  display: flex;
  width: 190px;
  height: 190px;
  transform: translateX(50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(184, 107, 53, 0.32);
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 25%, #fff, #fff8f2 58%, #f5e5d9 100%);
  box-shadow:
    0 28px 60px rgba(16, 28, 50, 0.11),
    inset 0 1px 0 #fff;
  text-align: center;
}

.ai-core span {
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
}

.ai-core strong {
  margin-top: 5px;
  color: var(--text);
  font-size: 17px;
}

.ai-core small {
  margin-top: 5px;
  color: #7c8492;
  font-size: 8.5px;
  direction: ltr;
}

.ai-node {
  position: absolute;
  z-index: 4;
  display: flex;
  min-width: 190px;
  align-items: center;
  gap: 10px;
  padding: 13px 14px;
  border: 1px solid rgba(234, 223, 215, 0.95);
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 13px 32px rgba(16, 28, 50, 0.07);
}

.ai-node > span {
  display: inline-flex;
  flex: none;
  width: 33px;
  height: 33px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #faece4;
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
}

.ai-node div {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.ai-node strong {
  color: var(--text);
  font-size: 12.5px;
}

.ai-node small {
  color: var(--muted);
  font-size: 9.5px;
}

.node-advisor {
  top: 46px;
  right: 10px;
}

.node-search {
  top: 70px;
  left: 0;
}

.node-agent {
  right: 5px;
  bottom: 42px;
}

.node-data {
  left: 14px;
  bottom: 58px;
}

.visual-ring {
  position: absolute;
  z-index: 0;
  border: 1px solid rgba(184, 107, 53, 0.15);
  border-radius: 50%;
}

.ring-one {
  width: 400px;
  height: 400px;
  top: 54px;
  right: 50%;
  transform: translateX(50%);
}

.ring-two {
  width: 300px;
  height: 300px;
  top: 104px;
  right: 50%;
  transform: translateX(50%);
  border-style: dashed;
}

.ai-services-section {
  padding: 82px 0;
  border-top: 1px solid rgba(234, 223, 215, 0.7);
  border-bottom: 1px solid rgba(234, 223, 215, 0.7);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.64), rgba(255, 249, 245, 0.72));
  scroll-margin-top: 110px;
}

.section-heading {
  max-width: 830px;
  margin: 0 auto 38px;
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
  font-size: 14.5px;
  line-height: 1.95;
}

.ai-heading h2 {
  max-width: 760px;
  margin-inline: auto;
}

.ai-grid {
  display: grid;
  grid-template-columns: minmax(340px, 0.92fr) minmax(0, 1.08fr);
  gap: 18px;
}

.ai-side-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.ai-feature {
  min-width: 0;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 32px rgba(16, 28, 50, 0.04);
}

.ai-feature-main {
  display: flex;
  min-height: 445px;
  flex-direction: column;
  padding: 30px;
  border-color: rgba(184, 107, 53, 0.36);
  background:
    radial-gradient(circle at 92% 6%, rgba(184, 107, 53, 0.1), transparent 27%),
    #fff;
}

.ai-side-grid .ai-feature:last-child {
  grid-column: 1 / -1;
}

.feature-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.feature-top span {
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
}

.feature-top small {
  color: #9a8b80;
  font-size: 9px;
  direction: ltr;
}

.ai-feature h3 {
  margin: 19px 0 8px;
  color: var(--text);
  font-size: 20px;
  line-height: 1.55;
}

.ai-feature-main h3 {
  font-size: 27px;
}

.ai-feature p {
  margin: 0;
  color: var(--muted);
  font-size: 12.8px;
  line-height: 1.9;
}

.ai-feature-main p {
  font-size: 14px;
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
  font-size: 12px;
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
  background: #faf7f4;
  color: #667085;
  font-size: 9.5px;
  line-height: 1.4;
}

.all-services-section {
  padding: 84px 0;
  scroll-margin-top: 110px;
}

.service-list {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 26px;
  background: var(--surface);
  box-shadow: 0 16px 46px rgba(16, 28, 50, 0.045);
}

.service-row {
  display: grid;
  grid-template-columns: 72px minmax(220px, 0.75fr) minmax(0, 1.25fr);
  gap: 26px;
  align-items: start;
  padding: 30px 32px;
  border-bottom: 1px solid var(--line);
  transition: background 0.2s ease;
}

.service-row:last-child {
  border-bottom: 0;
}

.service-row:hover {
  background: #fffbf8;
}

.service-featured {
  background:
    linear-gradient(90deg, rgba(184, 107, 53, 0.055), rgba(255, 255, 255, 0));
}

.service-seo {
  background:
    linear-gradient(90deg, rgba(215, 237, 230, 0.32), rgba(255, 255, 255, 0));
}

.service-number {
  color: #cfb7a7;
  font-size: 12px;
  font-weight: 800;
  direction: ltr;
}

.service-title span {
  color: var(--accent);
  font-size: 9.5px;
  font-weight: 800;
  direction: ltr;
}

.service-title h3 {
  margin: 5px 0 0;
  color: var(--text);
  font-size: 19px;
  line-height: 1.6;
}

.service-body p {
  max-width: 690px;
  margin: 0;
  color: var(--muted);
  font-size: 12.8px;
  line-height: 1.9;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.engagement-section {
  padding: 82px 0;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  border-bottom: 1px solid rgba(234, 223, 215, 0.72);
  background: rgba(255, 255, 255, 0.5);
}

.engagement-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
  gap: 60px;
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
  font-size: 14px;
  line-height: 1.95;
}

.text-link {
  display: inline-flex;
  margin-top: 21px;
  color: var(--accent);
  font-size: 12.5px;
  font-weight: 800;
}

.engagement-options {
  display: grid;
  gap: 12px;
}

.engagement-options article {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 15px;
  align-items: center;
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
}

.engagement-options article > span {
  display: inline-flex;
  width: 43px;
  height: 43px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #faece4;
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
}

.engagement-options strong {
  color: var(--text);
  font-size: 14.5px;
}

.engagement-options p {
  margin: 3px 0 0;
  color: var(--muted);
  font-size: 11.5px;
  line-height: 1.7;
}

.engagement-highlight {
  border-color: rgba(184, 107, 53, 0.35) !important;
  background: #fff9f5 !important;
}

.process-section {
  padding: 82px 0;
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
  top: 26px;
  right: 9%;
  left: 9%;
  height: 1px;
  background: var(--line);
}

.process-list li {
  position: relative;
  z-index: 1;
  text-align: center;
}

.process-list li > span {
  display: inline-flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border: 1px solid #decfc4;
  border-radius: 50%;
  background: var(--bg);
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  box-shadow: 0 0 0 8px var(--bg);
}

.process-list strong {
  display: block;
  margin-top: 17px;
  color: var(--text);
  font-size: 16px;
}

.process-list p {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 11.5px;
  line-height: 1.8;
}

.proof-section {
  padding: 82px 0 90px;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  background: rgba(255, 255, 255, 0.48);
}

.proof-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
  gap: 52px;
  align-items: center;
}

.proof-products {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
  direction: ltr;
}

.proof-products figure {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--surface);
  box-shadow: 0 15px 36px rgba(16, 28, 50, 0.055);
}

.proof-products img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top center;
}

.proof-products figcaption {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 15px 17px;
  direction: rtl;
}

.proof-products figcaption span {
  color: var(--accent);
  font-size: 9px;
  font-weight: 800;
  direction: ltr;
  text-align: right;
}

.proof-products figcaption strong {
  color: var(--text);
  font-size: 15px;
}

.proof-products figcaption small {
  color: var(--muted);
  font-size: 10.5px;
  line-height: 1.65;
}

@media (max-width: 1080px) {
  .hero-layout {
    grid-template-columns: minmax(0, 1fr) minmax(390px, 0.9fr);
    gap: 36px;
  }

  .ai-grid {
    grid-template-columns: 1fr;
  }

  .ai-feature-main {
    min-height: 0;
  }

  .service-row {
    grid-template-columns: 58px minmax(200px, 0.7fr) minmax(0, 1.3fr);
    gap: 20px;
  }

  .engagement-layout,
  .proof-layout {
    gap: 34px;
  }
}

@media (max-width: 820px) {
  .services-hero {
    padding: 58px 0 66px;
  }

  .hero-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .hero-copy {
    max-width: 720px;
  }

  .ai-visual {
    width: min(100%, 620px);
    min-height: 470px;
    margin: 0 auto;
  }

  .ai-side-grid {
    grid-template-columns: 1fr;
  }

  .ai-side-grid .ai-feature:last-child {
    grid-column: auto;
  }

  .service-row {
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 14px;
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
    padding: 46px 0 54px;
  }

  .hero-copy h1 {
    font-size: clamp(33px, 9.8vw, 44px);
    line-height: 1.48;
  }

  .hero-lead {
    font-size: 15.5px;
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
    font-size: 12px;
  }

  .ai-visual {
    display: grid;
    min-height: 0;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .ai-core {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    height: auto;
    min-height: 132px;
    transform: none;
    border-radius: 22px;
  }

  .ai-node {
    position: relative;
    inset: auto;
    min-width: 0;
    width: 100%;
  }

  .visual-ring {
    display: none;
  }

  .ai-services-section,
  .all-services-section,
  .engagement-section,
  .process-section,
  .proof-section {
    padding: 58px 0;
  }

  .section-heading {
    margin-bottom: 28px;
  }

  .section-heading h2,
  .engagement-copy h2,
  .proof-copy h2 {
    font-size: 28px;
  }

  .section-heading p,
  .engagement-copy p,
  .proof-copy p {
    font-size: 13.5px;
  }

  .ai-feature,
  .ai-feature-main {
    padding: 21px;
    border-radius: 19px;
  }

  .ai-feature-main h3 {
    font-size: 22px;
  }

  .service-list {
    border-radius: 20px;
  }

  .service-row {
    grid-template-columns: 1fr;
    gap: 7px;
    padding: 23px 20px;
  }

  .service-number,
  .service-body {
    grid-column: auto;
  }

  .service-title h3 {
    font-size: 17px;
  }

  .service-body p {
    font-size: 12.5px;
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
    grid-template-columns: 1fr;
    direction: rtl;
  }
}

@media (max-width: 390px) {
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
