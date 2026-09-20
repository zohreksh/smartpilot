<template>
  <main class="services-page">
    <SiteHeader />

    <section class="services-hero">
      <div class="container services-hero-inner">
        <div class="hero-copy">
          <span class="services-badge">خدمات NexaStudio</span>
          <h1>
            از یک نیاز مشخص تا
            <strong>محصولی که واقعاً کار می‌کند</strong>
          </h1>
          <p class="hero-lead">
            طراحی، توسعه و رشد محصولات دیجیتال را به‌صورت یک مسیر یکپارچه جلو
            می‌بریم؛ از وب‌سایت و فروشگاه تا سامانه‌های اختصاصی، قابلیت‌های
            هوشمند، سئو، داده و پشتیبانی مستمر.
          </p>

          <div class="hero-actions">
            <a class="primary-action" href="#service-catalog">مشاهده خدمات</a>
            <NuxtLink class="secondary-action" to="/contact">بررسی پروژه شما</NuxtLink>
          </div>

          <div class="hero-highlights" role="group" aria-label="ویژگی‌های همکاری">
            <span>طراحی متناسب با کسب‌وکار</span>
            <i aria-hidden="true"></i>
            <span>معماری قابل توسعه</span>
            <i aria-hidden="true"></i>
            <span>همراهی بعد از انتشار</span>
          </div>
        </div>

        <div class="hero-stack" aria-hidden="true">
          <article class="stack-card stack-card-main">
            <div class="stack-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16v12H4zM4 9h16" />
                <path d="M7 7.5h.01M10 7.5h.01" />
              </svg>
            </div>
            <div>
              <span>محصول دیجیتال</span>
              <strong>طراحی و توسعه یکپارچه</strong>
            </div>
          </article>

          <article class="stack-card stack-card-ai">
            <div class="stack-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z" />
                <path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
              </svg>
            </div>
            <div>
              <span>AI</span>
              <strong>قابلیت‌های هوشمند کاربردی</strong>
            </div>
          </article>

          <article class="stack-card stack-card-growth">
            <div class="stack-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 17 9 12l3 3 7-8" />
                <path d="M15 7h4v4" />
              </svg>
            </div>
            <div>
              <span>Growth</span>
              <strong>سئو، داده و بهبود مستمر</strong>
            </div>
          </article>

          <div class="stack-orbit stack-orbit-one"></div>
          <div class="stack-orbit stack-orbit-two"></div>
        </div>
      </div>
    </section>

    <section id="service-catalog" class="service-catalog-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">خدمات ما</span>
          <h2>راهکارهایی که می‌توانند مستقل یا کنار هم اجرا شوند</h2>
          <p>
            لازم نیست همه‌چیز را از صفر بسازید. بر اساس وضعیت فعلی کسب‌وکار،
            فقط همان بخش‌هایی را طراحی و اجرا می‌کنیم که بیشترین ارزش را ایجاد
            می‌کنند.
          </p>
        </div>

        <div class="service-grid">
          <article class="service-panel">
            <div class="service-panel-head">
              <div class="line-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v12H4zM4 9h16" />
                  <path d="M7 7.5h.01M10 7.5h.01" />
                </svg>
              </div>
              <span class="service-index">01</span>
            </div>
            <h3>طراحی وب‌سایت و فروشگاه اینترنتی</h3>
            <p>
              طراحی تجربه کاربری، ساختار محتوا و رابطی که با برند، مسیر خرید و
              اهداف واقعی کسب‌وکار هماهنگ باشد.
            </p>
            <ul>
              <li>طراحی Responsive و RTL</li>
              <li>تجربه خرید و مسیر تبدیل</li>
              <li>زیرساخت مناسب توسعه آینده</li>
            </ul>
          </article>

          <article class="service-panel">
            <div class="service-panel-head">
              <div class="line-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
                </svg>
              </div>
              <span class="service-index">02</span>
            </div>
            <h3>توسعه سامانه‌های اختصاصی</h3>
            <p>
              ساخت پنل، پلتفرم یا فرآیند نرم‌افزاری اختصاصی بر اساس عملیات واقعی
              شما، نه محدودیت یک قالب آماده.
            </p>
            <ul>
              <li>معماری و توسعه اختصاصی</li>
              <li>پنل‌های مدیریتی و Workflow</li>
              <li>اتصال سرویس‌ها و APIها</li>
            </ul>
          </article>

          <article class="service-panel">
            <div class="service-panel-head">
              <div class="line-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z" />
                  <path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
                </svg>
              </div>
              <span class="service-index">03</span>
            </div>
            <h3>هوش مصنوعی و قابلیت‌های هوشمند</h3>
            <p>
              اضافه‌کردن AI در جایی که تجربه کاربر، سرعت عملیات یا کیفیت تصمیم
              را واقعاً بهتر کند.
            </p>
            <ul>
              <li>مشاور و دستیار هوشمند</li>
              <li>جستجوی هوشمند و Semantic</li>
              <li>اتوماسیون و تحلیل داده</li>
            </ul>
          </article>

          <article class="service-panel">
            <div class="service-panel-head">
              <div class="line-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="6" />
                  <path d="m16 16 4 4M8 11h6M11 8v6" />
                </svg>
              </div>
              <span class="service-index">04</span>
            </div>
            <h3>سئو و رشد ارگانیک</h3>
            <p>
              بهینه‌سازی فنی و محتوایی برای اینکه محصول شما قابل کشف باشد و
              ورودی ارگانیک به یک دارایی بلندمدت تبدیل شود.
            </p>
            <ul>
              <li>Technical SEO و ساختار صفحات</li>
              <li>Schema، Sitemap و Indexability</li>
              <li>فرآیند محتوا و فرصت‌های جستجو</li>
            </ul>
          </article>

          <article class="service-panel">
            <div class="service-panel-head">
              <div class="line-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 5h14v14H5z" />
                  <path d="M8 9h8M8 12h8M8 15h5" />
                </svg>
              </div>
              <span class="service-index">05</span>
            </div>
            <h3>ورود اطلاعات و مدیریت کاتالوگ</h3>
            <p>
              آماده‌سازی و سازمان‌دهی داده‌های محصول برای راه‌اندازی سریع‌تر،
              جستجوی بهتر و مدیریت دقیق‌تر فروشگاه.
            </p>
            <ul>
              <li>ورود و پاک‌سازی اطلاعات</li>
              <li>ساختاردهی دسته، برند و ویژگی‌ها</li>
              <li>آماده‌سازی محتوا و تصاویر محصول</li>
            </ul>
          </article>

          <article class="service-panel">
            <div class="service-panel-head">
              <div class="line-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12a7 7 0 0 1 12-4.9L19 9" />
                  <path d="M19 5v4h-4M19 12a7 7 0 0 1-12 4.9L5 15" />
                  <path d="M5 19v-4h4" />
                </svg>
              </div>
              <span class="service-index">06</span>
            </div>
            <h3>پشتیبانی و توسعه مستمر</h3>
            <p>
              بعد از انتشار کنار محصول می‌مانیم تا نگهداری، رفع مسئله و توسعه
              قابلیت‌های بعدی به‌صورت کنترل‌شده انجام شود.
            </p>
            <ul>
              <li>نگهداری و بهینه‌سازی</li>
              <li>رفع خطا و پایش فنی</li>
              <li>توسعه مرحله‌ای قابلیت‌های جدید</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="engagement-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">مدل همکاری</span>
          <h2>از هر نقطه‌ای که هستید می‌توانیم شروع کنیم</h2>
          <p>
            همکاری فقط برای پروژه‌های صفر تا صد نیست. می‌توانیم روی یک محصول
            موجود، یک قابلیت مشخص یا یک مسئله فنی و محصولی متمرکز شویم.
          </p>
        </div>

        <div class="engagement-grid">
          <article class="engagement-card">
            <span class="engagement-label">شروع از صفر</span>
            <h3>محصول جدید</h3>
            <p>
              از تعریف مسئله و معماری تا طراحی، توسعه و انتشار نسخه قابل استفاده.
            </p>
            <div class="engagement-footer">
              <span>Discovery</span>
              <span>Architecture</span>
              <span>Build</span>
            </div>
          </article>

          <article class="engagement-card featured-card">
            <span class="engagement-label">توسعه محصول موجود</span>
            <h3>قابلیت جدید یا بازطراحی</h3>
            <p>
              اضافه‌کردن قابلیت‌های اختصاصی، AI، جستجو، گزارشات، SEO یا بهبود UX
              بدون بازسازی بی‌دلیل کل سیستم.
            </p>
            <div class="engagement-footer">
              <span>Audit</span>
              <span>Feature</span>
              <span>Integration</span>
            </div>
          </article>

          <article class="engagement-card">
            <span class="engagement-label">همراهی بلندمدت</span>
            <h3>رشد و نگهداری</h3>
            <p>
              توسعه تدریجی محصول بر اساس داده، نیاز کاربران و اولویت‌های جدید
              کسب‌وکار.
            </p>
            <div class="engagement-footer">
              <span>Support</span>
              <span>Optimization</span>
              <span>Growth</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="capabilities-section">
      <div class="container capabilities-layout">
        <div class="capabilities-copy">
          <span class="section-badge">قابلیت‌های قابل اضافه‌شدن</span>
          <h2>یک سایت ثابت نمی‌سازیم؛ یک پایه قابل توسعه می‌سازیم.</h2>
          <p>
            بسیاری از قابلیت‌ها لازم نیست از روز اول اجرا شوند. محصول می‌تواند
            با نیاز اصلی شروع شود و بعد بر اساس اولویت کسب‌وکار گسترش پیدا کند.
          </p>
          <NuxtLink class="text-link" to="/contact">درباره نیاز پروژه صحبت کنیم ←</NuxtLink>
        </div>

        <div class="capabilities-grid">
          <article>
            <strong>SEO خودکار</strong>
            <span>ساختار فنی، Metadata، Schema و فرآیندهای مقیاس‌پذیر</span>
          </article>
          <article>
            <strong>مشاور هوشمند</strong>
            <span>راهنمایی کاربر با استفاده از داده و محتوای واقعی محصول</span>
          </article>
          <article>
            <strong>جستجوی هوشمند</strong>
            <span>جستجوی معنایی و بازیابی بهتر برای کاتالوگ‌های بزرگ</span>
          </article>
          <article>
            <strong>گزارشات مدیریتی</strong>
            <span>تبدیل داده‌های عملیاتی به اطلاعات قابل تصمیم‌گیری</span>
          </article>
          <article>
            <strong>اتوماسیون عملیات</strong>
            <span>کاهش کارهای تکراری و اتصال فرآیندهای پراکنده</span>
          </article>
          <article>
            <strong>قابلیت‌های اختصاصی</strong>
            <span>هر ویژگی‌ای که مزیت واقعی برای مدل کسب‌وکار شما ایجاد کند</span>
          </article>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">فرآیند اجرا</span>
          <h2>پروژه را قبل از کدنویسی روشن می‌کنیم</h2>
          <p>
            هدف این است که توسعه با فرضیات مبهم شروع نشود و هر مرحله خروجی
            قابل بررسی داشته باشد.
          </p>
        </div>

        <ol class="process-list">
          <li class="process-item">
            <span class="process-number">01</span>
            <div>
              <h3>شناخت نیاز</h3>
              <p>مسئله، کاربران، وضعیت فعلی و محدودیت‌های پروژه را مشخص می‌کنیم.</p>
            </div>
          </li>
          <li class="process-item">
            <span class="process-number">02</span>
            <div>
              <h3>طراحی راهکار</h3>
              <p>Scope، تجربه کاربری، معماری و اولویت‌های اجرا را تعیین می‌کنیم.</p>
            </div>
          </li>
          <li class="process-item">
            <span class="process-number">03</span>
            <div>
              <h3>ساخت و تست</h3>
              <p>توسعه مرحله‌ای انجام می‌شود و کیفیت قبل از تحویل بررسی می‌شود.</p>
            </div>
          </li>
          <li class="process-item">
            <span class="process-number">04</span>
            <div>
              <h3>انتشار و رشد</h3>
              <p>محصول منتشر می‌شود و توسعه بعدی بر اساس نیاز واقعی ادامه پیدا می‌کند.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="proof-section">
      <div class="container proof-layout">
        <div class="proof-copy">
          <span class="section-badge">تجربه واقعی محصول</span>
          <h2>راهکارهایی که پیشنهاد می‌دهیم، در محصولات واقعی تجربه کرده‌ایم.</h2>
          <p>
            شیدانه و هویکس فقط نمونه‌کار تصویری نیستند؛ تجربه ساخت و توسعه آن‌ها
            مبنای بسیاری از تصمیم‌های معماری، محصول، سئو و قابلیت‌های هوشمند ماست.
          </p>
          <NuxtLink class="text-link" to="/about">بیشتر درباره NexaStudio ←</NuxtLink>
        </div>

        <div class="proof-products">
          <figure>
            <img src="/images/projects/shidane1.webp" alt="پیش‌نمایش محصول شیدانه" loading="lazy" />
            <figcaption>
              <strong>شیدانه</strong>
              <span>فروشگاه و پلتفرم هوشمند زیبایی</span>
            </figcaption>
          </figure>
          <figure>
            <img src="/images/projects/hevix1.webp" alt="پیش‌نمایش محصول هویکس" loading="lazy" />
            <figcaption>
              <strong>HEVIX</strong>
              <span>پلتفرم تخصصی قطعات و تجهیزات</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="services-cta-section">
      <div class="container">
        <div class="services-cta">
          <div>
            <span class="cta-kicker">قدم بعدی</span>
            <h2>لازم نیست از قبل راه‌حل را بدانید.</h2>
            <p>
              مسئله، وضعیت فعلی و هدف کسب‌وکار را بررسی می‌کنیم و مسیر مناسب را
              پیشنهاد می‌دهیم؛ از یک قابلیت کوچک تا یک محصول کامل.
            </p>
          </div>
          <NuxtLink class="cta-button" to="/contact">درخواست مشاوره</NuxtLink>
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
  padding: 88px 0 82px;
}

.services-hero::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 460px;
  background:
    radial-gradient(circle at 78% 24%, rgba(184, 107, 53, 0.11), transparent 35%),
    radial-gradient(circle at 18% 12%, rgba(16, 28, 50, 0.05), transparent 28%);
  pointer-events: none;
}

.services-hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: 64px;
  align-items: center;
}

.hero-copy {
  max-width: 670px;
  text-align: right;
}

.services-badge,
.section-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #d86b4a;
  border-radius: 999px;
  background: #fff7f4;
  color: #c56839;
  font-size: 14px;
  font-weight: 700;
}

.services-badge {
  padding: 6px 18px;
}

.hero-copy h1 {
  margin: 18px 0 20px;
  max-width: 680px;
  color: var(--text);
  font-size: clamp(40px, 4.6vw, 62px);
  line-height: 1.4;
  letter-spacing: -0.02em;
}

.hero-copy h1 strong {
  display: block;
  color: var(--accent);
}

.hero-lead {
  max-width: 630px;
  margin: 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.95;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.primary-action,
.secondary-action,
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-action,
.cta-button {
  background: linear-gradient(135deg, #c17a42, #9b542d);
  color: #fff;
  box-shadow: 0 12px 30px rgba(155, 84, 45, 0.18);
}

.secondary-action {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.76);
  color: var(--text);
}

.primary-action:hover,
.secondary-action:hover,
.cta-button:hover {
  transform: translateY(-2px);
}

.hero-highlights {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 28px;
  color: var(--muted);
  font-size: 12px;
}

.hero-highlights i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
}

.hero-stack {
  position: relative;
  min-height: 470px;
}

.stack-card {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 330px;
  padding: 18px;
  border: 1px solid rgba(234, 223, 215, 0.94);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: var(--shadow);
}

.stack-card-main {
  top: 70px;
  right: 10px;
}

.stack-card-ai {
  top: 190px;
  left: 18px;
}

.stack-card-growth {
  right: 46px;
  bottom: 42px;
}

.stack-icon,
.line-icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #faece4;
  color: var(--accent);
}

.stack-icon svg,
.line-icon svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.stack-card div:last-child {
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: right;
}

.stack-card span {
  color: var(--muted);
  font-size: 11px;
}

.stack-card strong {
  color: var(--text);
  font-size: 15px;
}

.stack-orbit {
  position: absolute;
  z-index: 0;
  border: 1px solid rgba(184, 107, 53, 0.18);
  border-radius: 50%;
  pointer-events: none;
}

.stack-orbit-one {
  width: 330px;
  height: 330px;
  top: 38px;
  right: 40px;
}

.stack-orbit-two {
  width: 220px;
  height: 220px;
  left: 25px;
  bottom: 30px;
}

.service-catalog-section {
  padding: 70px 0 80px;
  scroll-margin-top: 110px;
}

.section-heading {
  max-width: 790px;
  margin: 0 auto 36px;
  text-align: center;
}

.section-badge {
  padding: 5px 18px;
}

.section-heading h2,
.capabilities-copy h2,
.proof-copy h2 {
  color: var(--text);
  line-height: 1.45;
}

.section-heading h2 {
  margin: 14px 0 10px;
  font-size: clamp(30px, 3.4vw, 42px);
}

.section-heading p,
.capabilities-copy p,
.proof-copy p {
  color: var(--muted);
  line-height: 1.9;
}

.section-heading p {
  max-width: 700px;
  margin: 0 auto;
  font-size: 15px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.service-panel {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 330px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--surface);
  text-align: right;
  box-shadow: 0 12px 34px rgba(16, 28, 50, 0.045);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-panel:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 42px rgba(16, 28, 50, 0.08);
}

.service-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.service-index {
  color: #c8b7aa;
  font-size: 12px;
  font-weight: 800;
}

.service-panel h3 {
  margin: 18px 0 8px;
  color: var(--text);
  font-size: 20px;
  line-height: 1.55;
}

.service-panel > p {
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.9;
}

.service-panel ul {
  display: grid;
  gap: 8px;
  margin: auto 0 0;
  padding: 20px 0 0;
  list-style: none;
}

.service-panel li {
  position: relative;
  padding-right: 17px;
  color: #566174;
  font-size: 12px;
  line-height: 1.7;
}

.service-panel li::before {
  content: "";
  position: absolute;
  top: 0.75em;
  right: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.engagement-section {
  padding: 76px 0;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  border-bottom: 1px solid rgba(234, 223, 215, 0.72);
  background: rgba(255, 255, 255, 0.48);
}

.engagement-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.engagement-card {
  min-height: 255px;
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--surface);
  text-align: right;
}

.featured-card {
  border-color: rgba(184, 107, 53, 0.38);
  background: #fff9f5;
  box-shadow: 0 16px 38px rgba(184, 107, 53, 0.08);
}

.engagement-label {
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
}

.engagement-card h3 {
  margin: 9px 0 8px;
  color: var(--text);
  font-size: 22px;
}

.engagement-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.9;
}

.engagement-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 24px;
}

.engagement-footer span {
  padding: 5px 10px;
  border: 1px solid #eee2d9;
  border-radius: 999px;
  background: #faf7f4;
  color: #667085;
  font-size: 10.5px;
}

.capabilities-section {
  padding: 82px 0;
}

.capabilities-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.22fr);
  gap: 54px;
  align-items: center;
}

.capabilities-copy {
  text-align: right;
}

.capabilities-copy h2 {
  margin: 14px 0 12px;
  font-size: clamp(30px, 3.1vw, 40px);
}

.capabilities-copy p {
  margin: 0;
  font-size: 14px;
}

.text-link {
  display: inline-flex;
  margin-top: 22px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.capabilities-grid article {
  min-width: 0;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
  text-align: right;
}

.capabilities-grid strong {
  display: block;
  margin-bottom: 5px;
  color: var(--text);
  font-size: 15px;
}

.capabilities-grid span {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.75;
}

.process-section {
  padding: 76px 0;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  background: rgba(255, 255, 255, 0.48);
}

.process-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
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
  background: var(--line);
}

.process-item {
  position: relative;
  z-index: 1;
  padding: 0 8px;
  text-align: center;
}

.process-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border: 1px solid #ddcfc4;
  border-radius: 50%;
  background: var(--bg);
  color: var(--accent);
  font-size: 13px;
  font-weight: 800;
  box-shadow: 0 0 0 8px rgba(252, 248, 244, 0.94);
}

.process-item h3 {
  margin: 18px 0 7px;
  color: var(--text);
  font-size: 17px;
}

.process-item p {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.85;
}

.proof-section {
  padding: 76px 0;
}

.proof-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.22fr);
  gap: 48px;
  align-items: center;
}

.proof-copy {
  text-align: right;
}

.proof-copy h2 {
  margin: 14px 0 12px;
  font-size: clamp(29px, 3vw, 39px);
}

.proof-copy p {
  margin: 0;
  font-size: 14px;
}

.proof-products {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  direction: ltr;
}

.proof-products figure {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--surface);
  box-shadow: 0 12px 30px rgba(16, 28, 50, 0.05);
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
  padding: 13px 14px 15px;
  direction: rtl;
  text-align: right;
}

.proof-products strong {
  color: var(--text);
  font-size: 14px;
}

.proof-products span {
  color: var(--muted);
  font-size: 11px;
}

.services-cta-section {
  padding: 20px 0 78px;
}

.services-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
  padding: 34px 38px;
  border-radius: 26px;
  background: #101c32;
  color: #fff;
  box-shadow: 0 20px 50px rgba(16, 28, 50, 0.14);
}

.cta-kicker {
  color: #e2a06f;
  font-size: 12px;
  font-weight: 700;
}

.services-cta h2 {
  margin: 7px 0 6px;
  color: #fff;
  font-size: clamp(25px, 3vw, 34px);
}

.services-cta p {
  max-width: 680px;
  margin: 0;
  color: #c8d0dc;
  font-size: 13px;
  line-height: 1.8;
}

.cta-button {
  flex: none;
  min-width: 158px;
}

@media (max-width: 1080px) {
  .services-hero-inner {
    gap: 34px;
  }

  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .capabilities-layout,
  .proof-layout {
    gap: 34px;
  }
}

@media (max-width: 820px) {
  .services-hero {
    padding: 56px 0 62px;
  }

  .services-hero-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .hero-copy {
    max-width: 720px;
  }

  .hero-stack {
    width: min(100%, 650px);
    min-height: 390px;
    margin: 0 auto;
  }

  .engagement-grid {
    grid-template-columns: 1fr;
  }

  .engagement-card {
    min-height: 0;
  }

  .capabilities-layout,
  .proof-layout {
    grid-template-columns: 1fr;
  }

  .capabilities-copy,
  .proof-copy {
    max-width: 720px;
  }

  .process-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px 16px;
  }

  .process-list::before {
    display: none;
  }
}

@media (max-width: 600px) {
  .services-hero {
    padding: 44px 0 50px;
  }

  .hero-copy h1 {
    margin-top: 16px;
    font-size: clamp(32px, 9.5vw, 42px);
    line-height: 1.5;
  }

  .hero-lead {
    font-size: 15.5px;
    line-height: 1.9;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 24px;
  }

  .primary-action,
  .secondary-action {
    min-width: 0;
    padding-inline: 14px;
    font-size: 13px;
  }

  .hero-highlights {
    margin-top: 22px;
  }

  .hero-stack {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    min-height: 0;
  }

  .stack-card,
  .stack-card-main,
  .stack-card-ai,
  .stack-card-growth {
    position: relative;
    inset: auto;
    min-width: 0;
    width: 100%;
  }

  .stack-orbit {
    display: none;
  }

  .service-catalog-section,
  .engagement-section,
  .capabilities-section,
  .process-section,
  .proof-section {
    padding: 56px 0;
  }

  .section-heading {
    margin-bottom: 26px;
  }

  .section-heading h2,
  .capabilities-copy h2,
  .proof-copy h2 {
    font-size: 28px;
  }

  .section-heading p {
    font-size: 14px;
  }

  .service-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .service-panel {
    min-height: 0;
    padding: 20px;
  }

  .service-panel h3 {
    font-size: 18px;
  }

  .engagement-card {
    padding: 22px;
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
  }

  .process-list {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .process-item {
    display: grid;
    grid-template-columns: 50px minmax(0, 1fr);
    gap: 14px;
    padding: 0 0 28px;
    text-align: right;
  }

  .process-item:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 46px;
    right: 24px;
    bottom: 0;
    width: 1px;
    background: var(--line);
  }

  .process-number {
    width: 48px;
    height: 48px;
    grid-row: 1 / span 2;
    box-shadow: none;
  }

  .process-item h3 {
    margin: 2px 0 5px;
  }

  .proof-products {
    grid-template-columns: 1fr;
    direction: rtl;
  }

  .services-cta-section {
    padding: 18px 0 56px;
  }

  .services-cta {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    padding: 26px 22px;
    border-radius: 22px;
  }

  .cta-button {
    width: 100%;
  }
}

@media (max-width: 390px) {
  .hero-actions {
    grid-template-columns: 1fr;
  }

  .hero-highlights {
    display: grid;
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .hero-highlights i {
    display: none;
  }
}
</style>
