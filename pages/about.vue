<script setup lang="ts">
usePageSeo({
  title: "درباره NexaStudio | تیم معماری و توسعه محصول دیجیتال",
  description:
    "درباره NexaStudio، رویکرد ما به معماری و توسعه محصول، تجربه ساخت شیدانه و HEVIX و تیمی که مسئولیت فنی و کیفیت محصول را مستقیم هدایت می‌کند.",
  path: "/about",
  image: "/images/projects/shidane.webp",
});
</script>

<template>
  <main id="main-content" class="about-page" tabindex="-1">
    <SiteHeader />

    <section class="about-hero">
      <div class="container about-hero-inner">
        <div class="about-content">
          <span class="about-badge">درباره NexaStudio</span>
          <h1>
            ما محصولات دیجیتال می‌سازیم؛
            <strong>از ایده تا محصول واقعی</strong>
          </h1>
          <p class="about-lead">
            NexaStudio یک استودیوی مهندسی محصول است. از معماری و توسعه تا هوش
            مصنوعی، جستجوی هوشمند، سئو و رشد محصول، راهکارهایی می‌سازیم که در
            دنیای واقعی استفاده شوند و قابل توسعه باقی بمانند.
          </p>

          <div class="hero-actions">
            <a class="primary-action" href="#about-projects">مشاهده محصولات ما</a>
            <NuxtLink class="secondary-action" to="/contact">شروع همکاری</NuxtLink>
          </div>

          <div class="hero-proof" role="group" aria-label="محصولات ساخته‌شده توسط NexaStudio">
            <span>محصولات واقعی</span>
            <strong>شیدانه</strong>
            <i aria-hidden="true"></i>
            <strong>هویکس</strong>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-glow visual-glow-one" aria-hidden="true"></div>
          <div class="visual-glow visual-glow-two" aria-hidden="true"></div>
          <figure class="product-preview preview-primary">
            <img src="/images/projects/shidane1.webp" alt="پیش‌نمایش محصول شیدانه" width="1659" height="948" decoding="async" />
            <figcaption>
              <strong>شیدانه</strong>
              <span>فروشگاه و پلتفرم هوشمند زیبایی</span>
            </figcaption>
          </figure>
          <figure class="product-preview preview-secondary">
            <img src="/images/projects/hevix1.webp" alt="پیش‌نمایش محصول هویکس" width="1659" height="948" decoding="async" />
            <figcaption>
              <strong>HEVIX</strong>
              <span>پلتفرم تخصصی قطعات و تجهیزات</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section id="about-projects" class="about-section proof-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">محصولات واقعی</span>
          <h2>فقط درباره محصول حرف نمی‌زنیم؛ خودمان ساخته‌ایم.</h2>
          <p>
            شیدانه و هویکس نمونه‌هایی از محصولاتی هستند که از معماری و تجربه
            کاربری تا توسعه و رشد مستمر آن‌ها را در عمل تجربه کرده‌ایم.
          </p>
        </div>

        <div class="proof-grid">
          <article class="proof-card">
            <div class="proof-image">
              <img src="/images/projects/shidane.webp" alt="نمای پروژه شیدانه" width="1659" height="948" loading="lazy" decoding="async" />
            </div>
            <div class="proof-copy">
              <span>Shidaneh</span>
              <h3>فروشگاه و پلتفرم هوشمند زیبایی</h3>
              <p>تجربه واقعی ساخت محصول، تجارت الکترونیک، سئو و قابلیت‌های هوشمند.</p>
            </div>
          </article>

          <article class="proof-card">
            <div class="proof-image">
              <img src="/images/projects/hevix.webp" alt="نمای پروژه هویکس" width="1659" height="948" loading="lazy" decoding="async" />
            </div>
            <div class="proof-copy">
              <span>HEVIX</span>
              <h3>پلتفرم تخصصی قطعات و تجهیزات</h3>
              <p>زیرساخت محصول، جستجو، داده و توسعه اختصاصی برای یک بازار تخصصی.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="about-section thinking-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">نگاه ما</span>
          <h2>چطور محصول می‌سازیم؟</h2>
          <p>
            تکنولوژی برای ما نقطه شروع نیست. ابتدا مسئله، کاربر و مسیر رشد را
            می‌فهمیم و بعد راهکار مناسب را می‌سازیم.
          </p>
        </div>

        <div class="thinking-grid">
          <article class="thinking-card">
            <div class="line-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z" />
                <path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
              </svg>
            </div>
            <h3>تفکر محصول</h3>
            <p>قبل از نوشتن کد، مسئله کسب‌وکار و نیاز واقعی کاربر را روشن می‌کنیم.</p>
          </article>

          <article class="thinking-card">
            <div class="line-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
              </svg>
            </div>
            <h3>معماری مهندسی‌شده</h3>
            <p>محصول را طوری طراحی می‌کنیم که توسعه آینده به بازسازی پرهزینه تبدیل نشود.</p>
          </article>

          <article class="thinking-card">
            <div class="line-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z" />
                <path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
              </svg>
            </div>
            <h3>هوشمندی کاربردی</h3>
            <p>هوش مصنوعی را فقط جایی وارد محصول می‌کنیم که ارزش قابل لمس ایجاد کند.</p>
          </article>

          <article class="thinking-card">
            <div class="line-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 17 9 12l3 3 7-8" />
                <path d="M15 7h4v4" />
              </svg>
            </div>
            <h3>رشد مستمر</h3>
            <p>انتشار پایان کار نیست؛ داده، بازخورد و رفتار کاربر مسیر بعدی محصول را می‌سازند.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="about-section founders-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">سازندگان NexaStudio</span>
          <h2>مسئول معماری و کیفیت محصول، خودمان هستیم.</h2>
          <p>
            هسته معماری و توسعه را خودمان هدایت می‌کنیم و برای تخصص‌های مکمل،
            تیم متناسب با نیاز واقعی هر پروژه شکل می‌گیرد.
          </p>
        </div>

        <div class="founders-grid">
          <article class="founder-card">
            <div class="founder-image">
              <img src="/images/team/zohreh.webp" alt="زهره کشاورز" width="1140" height="1280" loading="lazy" decoding="async" />
            </div>
            <div class="founder-content">
              <span class="founder-role">معمار محصول و توسعه‌دهنده</span>
              <h3>زهره کشاورز</h3>
              <p>
                تمرکز بر تبدیل نیاز کسب‌وکار به تجربه کاربری، جریان محصول و
                مسیر رشد قابل اجرا.
              </p>
              <div class="skill-chips" role="group" aria-label="تخصص‌های زهره کشاورز">
                <span>معماری تجربه و جریان محصول</span>
                <span>طراحی مسیر توسعه و اولویت‌بندی</span>
                <span>رشد و بهینه‌سازی محصول</span>
              </div>
            </div>
          </article>

          <article class="founder-card">
            <div class="founder-image">
              <img src="/images/team/hossein.webp" alt="حسین کولانی" width="1080" height="1280" loading="lazy" decoding="async" />
            </div>
            <div class="founder-content">
              <span class="founder-role">معمار نرم‌افزار و توسعه‌دهنده</span>
              <h3>حسین کولانی</h3>
              <p>
                تمرکز بر معماری فنی، سامانه‌های اختصاصی و ادغام قابلیت‌های
                هوش مصنوعی در محصول.
              </p>
              <div class="skill-chips" role="group" aria-label="تخصص‌های حسین کولانی">
                <span>معماری سامانه‌های توسعه‌پذیر</span>
                <span>هوش مصنوعی و قابلیت‌های هوشمند</span>
                <span>طراحی و توسعه سیستم‌های تخصصی</span>
              </div>
            </div>
          </article>
        </div>

        <div class="specialists-panel">
          <div class="line-icon specialists-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M3 19c.5-3.2 2.2-5 5-5s4.5 1.8 5 5M13 14.5c.8-1 1.9-1.5 3.5-1.5 2.5 0 4 1.6 4.5 4.5" />
            </svg>
          </div>
          <div class="specialists-copy">
            <h3>شبکه تخصص‌های مکمل</h3>
            <p>
              برای هر پروژه، تخصص‌های مکمل فقط در جایی به تیم اضافه می‌شوند
              که واقعاً لازم باشند.
            </p>
          </div>
          <div class="specialist-chips" role="group" aria-label="تخصص‌های شبکه همکاران">
            <span>UI/UX</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>DevOps</span>
            <span>SEO</span>
            <span>AI</span>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section process-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">فرآیند همکاری</span>
          <h2>از مسئله تا محصول</h2>
          <p>مسیر همکاری روشن است و قبل از توسعه، تصمیم‌های اصلی مشخص می‌شوند.</p>
        </div>

        <ol class="process-list">
          <li class="process-item">
            <span class="process-number">01</span>
            <div>
              <h3>شناخت مسئله</h3>
              <p>هدف کسب‌وکار، کاربران، محدودیت‌ها و ارزش مورد انتظار را مشخص می‌کنیم.</p>
            </div>
          </li>
          <li class="process-item">
            <span class="process-number">02</span>
            <div>
              <h3>طراحی محصول و معماری</h3>
              <p>مسیر محصول، تجربه کاربری و زیرساخت فنی را قبل از توسعه هم‌راستا می‌کنیم.</p>
            </div>
          </li>
          <li class="process-item">
            <span class="process-number">03</span>
            <div>
              <h3>ساخت، تست و انتشار</h3>
              <p>توسعه مرحله‌ای، کنترل کیفیت و تحویل قابل استفاده به‌جای خروجی نمایشی.</p>
            </div>
          </li>
          <li class="process-item">
            <span class="process-number">04</span>
            <div>
              <h3>رشد و توسعه مستمر</h3>
              <p>پس از انتشار، داده و بازخورد واقعی مبنای تصمیم‌های بعدی محصول می‌شوند.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

  </main>
</template>

<style scoped>
.about-page {
  direction: rtl;
  min-height: 100vh;
  overflow-x: clip;
  background: var(--bg);
  color: var(--text);
}

.about-hero {
  position: relative;
  padding: 20px 0 58px;
}

.about-hero::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 420px;
  background: radial-gradient(circle at 78% 20%, rgba(184, 107, 53, 0.1), transparent 34%);
  pointer-events: none;
}

.about-hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
  gap: 54px;
  align-items: center;
  min-height: 570px;
  padding: 42px 42px;
  overflow: hidden;
  border: 1px solid rgba(226, 211, 199, 0.92);
  border-radius: 32px;
  background:
    radial-gradient(circle at 82% 18%, rgba(184, 107, 53, 0.11), transparent 27%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(255, 249, 245, 0.95));
  box-shadow:
    0 24px 58px rgba(16, 28, 50, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.about-content {
  max-width: 650px;
  text-align: right;
}

.about-badge,
.section-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #d86b4a;
  border-radius: 999px;
  background: #fff7f4;
  color: #c56839;
  font-size: 16px;
  font-weight: 700;
}

.about-badge {
  padding: 6px 18px;
}

.about-content h1 {
  max-width: 650px;
  margin: 18px 0 20px;
  font-size: clamp(40px, 4.6vw, 62px);
  line-height: 1.38;
  letter-spacing: -0.02em;
}

.about-content h1 strong {
  display: block;
  color: var(--accent);
}

.about-lead {
  max-width: 620px;
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
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.primary-action {
  background: linear-gradient(135deg, #c17a42, #9b542d);
  color: #fff;
  box-shadow: 0 12px 30px rgba(155, 84, 45, 0.18);
}

.secondary-action {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.74);
  color: var(--text);
}

.primary-action:hover,
.secondary-action:hover {
  transform: translateY(-2px);
}

.hero-proof {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
  color: var(--muted);
  font-size: 13.5px;
}

.hero-proof strong {
  color: var(--text);
  font-size: 14.5px;
}

.hero-proof i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
}

.hero-visual {
  position: relative;
  min-height: 500px;
}

.visual-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  pointer-events: none;
}

.visual-glow-one {
  width: 260px;
  height: 260px;
  top: 20px;
  left: 35px;
  background: rgba(200, 126, 74, 0.14);
}

.visual-glow-two {
  width: 200px;
  height: 200px;
  right: 0;
  bottom: 15px;
  background: rgba(16, 28, 50, 0.07);
}

.product-preview {
  position: absolute;
  overflow: hidden;
  margin: 0;
  border: 1px solid rgba(234, 223, 215, 0.92);
  border-radius: 26px;
  background: var(--surface);
  box-shadow: var(--shadow);
}

.product-preview img {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: center;
}

.product-preview figcaption {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 16px 16px;
  text-align: right;
}

.product-preview figcaption strong {
  color: var(--text);
  font-size: 16px;
}

.product-preview figcaption span {
  color: var(--muted);
  font-size: 13.5px;
}

.preview-primary {
  z-index: 2;
  width: min(86%, 470px);
  right: 0;
  top: 18px;
  transform: rotate(1.5deg);
}

.preview-secondary {
  z-index: 3;
  width: min(68%, 360px);
  left: 0;
  bottom: 18px;
  transform: rotate(-2deg);
}

.about-section {
  padding: 74px 0;
}

.section-heading {
  max-width: 760px;
  margin: 0 auto 34px;
  text-align: center;
}

.section-badge {
  padding: 5px 18px;
}

.section-heading h2 {
  margin: 14px 0 10px;
  color: var(--text);
  font-size: clamp(30px, 3.4vw, 42px);
  line-height: 1.45;
}

.section-heading p {
  max-width: 680px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.9;
}

.proof-section {
  padding-top: 58px;
  scroll-margin-top: 110px;
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.proof-card {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--surface);
  box-shadow: 0 16px 44px rgba(16, 28, 50, 0.06);
}

.proof-image {
  overflow: hidden;
  background: #f8f3ef;
}

.proof-image img {
  display: block;
  width: 100%;
  height: auto;
}

.proof-copy {
  padding: 20px 22px 24px;
  text-align: right;
}

.proof-copy > span {
  color: var(--accent);
  font-size: 13.5px;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.proof-copy h3 {
  margin: 6px 0 8px;
  color: var(--text);
  font-size: 20px;
}

.proof-copy p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.85;
}

.thinking-section {
  background: rgba(255, 255, 255, 0.48);
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  border-bottom: 1px solid rgba(234, 223, 215, 0.72);
}

.thinking-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.thinking-card {
  min-height: 230px;
  padding: 24px 20px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--surface);
  text-align: right;
  box-shadow: 0 10px 30px rgba(16, 28, 50, 0.04);
}

.line-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #faece4;
  color: var(--accent);
}

.line-icon svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.thinking-card h3 {
  margin: 18px 0 8px;
  color: var(--text);
  font-size: 18px;
}

.thinking-card p {
  margin: 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.9;
}

.founders-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.founder-card {
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr);
  gap: 24px;
  align-items: center;
  min-width: 0;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--surface);
  box-shadow: 0 12px 34px rgba(16, 28, 50, 0.05);
}

.founder-image {
  overflow: hidden;
  width: 190px;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  background: #f8f3ef;
}

.founder-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder-content {
  min-width: 0;
  text-align: right;
}

.founder-role {
  display: inline-flex;
  padding: 5px 11px;
  border-radius: 999px;
  background: #fff3ed;
  color: #bd7448;
  font-size: 13.5px;
  font-weight: 700;
}

.founder-content h3 {
  margin: 10px 0 6px;
  color: var(--text);
  font-size: 22px;
}

.founder-content p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;
}

.skill-chips,
.specialist-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.skill-chips {
  margin-top: 14px;
}

.skill-chips span,
.specialist-chips span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 4px 10px;
  border: 1px solid #eee2d9;
  border-radius: 999px;
  background: #faf7f4;
  color: #667085;
  font-size: 14px;
  line-height: 1.4;
}

.specialists-panel {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) minmax(320px, auto);
  gap: 20px;
  align-items: center;
  margin-top: 22px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: #fff9f5;
}

.specialists-icon {
  flex: none;
}

.specialists-copy {
  text-align: right;
}

.specialists-copy h3 {
  margin: 0 0 5px;
  color: var(--text);
  font-size: 18px;
}

.specialists-copy p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.8;
}

.specialist-chips {
  justify-content: flex-end;
}

.process-section {
  padding-top: 64px;
  background: rgba(255, 255, 255, 0.48);
  border-top: 1px solid rgba(234, 223, 215, 0.72);
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
  font-size: 14.5px;
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
  font-size: 14px;
  line-height: 1.85;
}


@media (max-width: 1080px) {
  .about-hero-inner {
    gap: 34px;
    padding: 38px 32px;
  }

  .thinking-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .founder-card {
    grid-template-columns: 150px minmax(0, 1fr);
  }

  .founder-image {
    width: 150px;
  }

  .specialists-panel {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .specialist-chips {
    grid-column: 1 / -1;
    justify-content: flex-start;
    padding-right: 68px;
  }
}

@media (max-width: 820px) {
  .about-hero {
    padding: 16px 0 50px;
  }

  .about-hero-inner {
    grid-template-columns: 1fr;
    gap: 30px;
    min-height: 0;
    padding: 32px;
  }

  .about-content {
    max-width: 720px;
  }

  .hero-visual {
    width: min(100%, 650px);
    min-height: 430px;
    margin: 0 auto;
  }

  .proof-grid,
  .founders-grid {
    grid-template-columns: 1fr;
  }

  .founder-card {
    grid-template-columns: 180px minmax(0, 1fr);
  }

  .founder-image {
    width: 180px;
  }

  .process-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 26px 16px;
  }

  .process-list::before {
    display: none;
  }
}

@media (max-width: 600px) {
  .about-hero {
    padding: 12px 0 44px;
  }

  .about-hero-inner {
    padding: 24px 20px 22px;
    border-radius: 24px;
  }

  .about-content h1 {
    margin-top: 16px;
    font-size: clamp(32px, 9.5vw, 42px);
    line-height: 1.5;
  }

  .about-lead {
    font-size: 16.5px;
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
    font-size: 14.5px;
  }

  .hero-proof {
    margin-top: 22px;
  }

  .hero-visual {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    min-height: 0;
  }

  .visual-glow {
    display: none;
  }

  .product-preview,
  .preview-primary,
  .preview-secondary {
    position: relative;
    inset: auto;
    width: 100%;
    transform: none;
  }

  .product-preview {
    border-radius: 20px;
  }

  .about-section {
    padding: 56px 0;
  }

  .section-heading {
    margin-bottom: 26px;
  }

  .section-heading h2 {
    font-size: 28px;
  }

  .section-heading p {
    font-size: 16px;
  }

  .proof-card {
    border-radius: 20px;
  }

  .thinking-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .thinking-card {
    min-height: 0;
    padding: 20px;
  }

  .founder-card {
    grid-template-columns: 38% minmax(0, 1fr);
    gap: 16px;
    padding: 16px;
    border-radius: 20px;
  }

  .founder-image {
    width: 100%;
    border-radius: 16px;
  }

  .founder-content h3 {
    font-size: 18px;
  }

  .founder-content p {
    font-size: 14px;
    line-height: 1.75;
  }

  .founder-role {
    font-size: 14px;
  }

  .skill-chips {
    gap: 5px;
    margin-top: 10px;
  }

  .skill-chips span {
    min-height: 25px;
    padding: 3px 8px;
    font-size: 12px;
  }

  .specialists-panel {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 20px;
    text-align: center;
  }

  .specialists-icon {
    margin: 0 auto;
  }

  .specialists-copy {
    text-align: center;
  }

  .specialist-chips {
    grid-column: auto;
    justify-content: center;
    padding-right: 0;
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

}

@media (max-width: 390px) {
  .hero-actions {
    grid-template-columns: 1fr;
  }

  .founder-card {
    grid-template-columns: 1fr;
  }

  .founder-image {
    width: 132px;
    margin: 0 auto;
  }

  .founder-content {
    text-align: center;
  }

  .skill-chips {
    justify-content: center;
  }
}
</style>
