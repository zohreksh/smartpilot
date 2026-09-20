<script setup>
usePageSeo({
  title: "نمونه‌کارها و محصولات واقعی | NexaStudio",
  description:
    "نمونه‌کارهای واقعی NexaStudio شامل شیدانه و HEVIX؛ معماری و توسعه محصول، هوش مصنوعی، جستجوی هوشمند، سئو، داده و سامانه‌های اختصاصی.",
  path: "/projects",
  image: "/images/projects/shidane.webp",
});
</script>

<template>
  <main class="projects-page">
    <SiteHeader />

    <section class="projects-hero">
      <div class="container">
        <div class="hero-panel">
          <div class="hero-copy">
            <span class="hero-kicker" dir="ltr">SELECTED WORK / 02</span>

            <h1>
              محصول واقعی،
              <strong>نه فقط یک قاب زیبا</strong>
            </h1>

            <p>
              شیدانه و HEVIX دو محصول از دو بازار متفاوت‌اند؛ هر دو از یک مسئله
              واقعی شروع شده‌اند و تا معماری، تجربه کاربری، داده، جستجو، SEO و
              توسعه مستمر ادامه پیدا کرده‌اند.
            </p>

            <div class="hero-actions">
              <a class="primary-action" href="#shidaneh">مشاهده Case Studyها</a>
              <NuxtLink class="secondary-action" to="/contact">شروع یک پروژه</NuxtLink>
            </div>

            <div class="hero-tech">
              <span>AI</span>
              <span>Smart Search</span>
              <span>Automated SEO</span>
              <span>Custom Engineering</span>
            </div>
          </div>

          <div class="hero-visual" aria-label="پروژه‌های منتخب NexaStudio">
            <a class="hero-main-project" href="#shidaneh">
              <img
                src="/images/projects/shidane.webp"
                alt="نمای کامل محصول شیدانه"
                loading="eager"
              />
              <span class="project-label">
                <small>Beauty Commerce</small>
                <strong>شیدانه</strong>
              </span>
            </a>

            <a class="hero-inset-project" href="#hevix">
              <img
                src="/images/projects/hevix.webp"
                alt="نمای کامل محصول HEVIX"
                loading="eager"
              />
              <span class="project-label">
                <small>Industrial Commerce</small>
                <strong>HEVIX</strong>
              </span>
            </a>

            <span class="hero-project-count" aria-hidden="true">02</span>
          </div>
        </div>
      </div>
    </section>

    <section class="project-principles">
      <div class="container principles-grid">
        <article>
          <span>01</span>
          <strong>محصول‌محور</strong>
          <p>معماری و UI حول نیاز واقعی کاربر و کسب‌وکار شکل گرفته است.</p>
        </article>
        <article>
          <span>02</span>
          <strong>قابل توسعه</strong>
          <p>زیرساخت‌ها برای اضافه‌شدن قابلیت‌های بعدی طراحی شده‌اند.</p>
        </article>
        <article>
          <span>03</span>
          <strong>AI و داده</strong>
          <p>هوش مصنوعی و جستجو به داده و جریان واقعی محصول متصل شده‌اند.</p>
        </article>
        <article>
          <span>04</span>
          <strong>رشد مستمر</strong>
          <p>SEO، گزارشات و توسعه مرحله‌ای بخشی از چرخه محصول هستند.</p>
        </article>
      </div>
    </section>

    <section id="shidaneh" class="case-study case-shidaneh">
      <div class="container case-layout">
        <div class="case-visual">
          <div class="project-frame">
            <img
              src="/images/projects/shidane.webp"
              alt="نمای کامل پلتفرم شیدانه"
              loading="lazy"
            />
          </div>
          <div class="case-stamp">
            <span>01</span>
            <strong>Shidaneh</strong>
            <small>Beauty & Personal Care</small>
          </div>
        </div>

        <div class="case-copy">
          <span class="case-kicker">فروشگاه و پلتفرم هوشمند زیبایی</span>
          <h2>شیدانه؛ تجارت الکترونیک با لایه‌های هوشمند و قابل توسعه</h2>
          <p class="case-lead">
            شیدانه فقط یک فروشگاه اینترنتی نیست. تجربه ساخت آن شامل طراحی محصول،
            مدیریت کاتالوگ، جستجوی هوشمند، سئو، قابلیت‌های AI و فرآیندهای
            مدیریتی و عملیاتی است.
          </p>

          <div class="case-scope">
            <span>طراحی و توسعه Ecommerce</span>
            <span>مشاور هوشمند</span>
            <span>جستجوی هوشمند</span>
            <span>سئوی اتومات</span>
            <span>مدیریت کاتالوگ و دیتا</span>
            <span>گزارشات و توسعه مستمر</span>
          </div>

          <div class="case-detail-grid">
            <article>
              <small>Product</small>
              <strong>تجربه خرید و مدیریت محصول</strong>
              <p>ساختار فروشگاهی، صفحات محصول و جریان‌های قابل توسعه برای عملیات واقعی.</p>
            </article>
            <article>
              <small>Intelligence</small>
              <strong>AI و Smart Search</strong>
              <p>قابلیت‌های هوشمند برای راهنمایی کاربر و بازیابی بهتر اطلاعات و محصول.</p>
            </article>
            <article>
              <small>Growth</small>
              <strong>SEO به‌عنوان بخشی از محصول</strong>
              <p>ساختار فنی و فرآیندهایی که سئو را از یک کار دستی جداگانه خارج می‌کنند.</p>
            </article>
            <article>
              <small>Operations</small>
              <strong>داده و ابزارهای مدیریتی</strong>
              <p>مدیریت اطلاعات، گزارشات و قابلیت‌های عملیاتی برای توسعه مرحله‌ای محصول.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="hevix" class="case-study case-hevix">
      <div class="container case-layout reverse-layout">
        <div class="case-copy">
          <span class="case-kicker">پلتفرم تخصصی قطعات و تجهیزات</span>
          <h2>HEVIX؛ محصول تخصصی برای بازاری که داده و جستجو در آن تعیین‌کننده‌اند</h2>
          <p class="case-lead">
            HEVIX برای یک بازار تخصصی و کاتالوگ‌محور طراحی شده است؛ جایی که
            ساختار داده، جستجو، معماری اختصاصی و قابلیت توسعه اهمیت بیشتری از
            یک قالب فروشگاهی عمومی دارند.
          </p>

          <div class="case-scope">
            <span>پلتفرم تخصصی</span>
            <span>معماری اختصاصی</span>
            <span>جستجو و داده</span>
            <span>کاتالوگ ساختاریافته</span>
            <span>SEO فنی</span>
            <span>توسعه مستمر</span>
          </div>

          <div class="case-detail-grid">
            <article>
              <small>Architecture</small>
              <strong>پایه فنی اختصاصی</strong>
              <p>ساختار محصول برای نیاز بازار تخصصی، نه محدودیت یک قالب آماده.</p>
            </article>
            <article>
              <small>Catalog</small>
              <strong>داده و دسته‌بندی تخصصی</strong>
              <p>مدیریت اطلاعات محصول و ساختاری که برای توسعه کاتالوگ آماده بماند.</p>
            </article>
            <article>
              <small>Discovery</small>
              <strong>جستجو و پیدا کردن قطعه</strong>
              <p>تمرکز روی بازیابی دقیق‌تر اطلاعات در محصولی که تنوع داده بالاست.</p>
            </article>
            <article>
              <small>Evolution</small>
              <strong>قابل گسترش برای قابلیت‌های بعدی</strong>
              <p>معماری مرحله‌ای برای اضافه‌شدن عملیات، داده و قابلیت‌های هوشمند آینده.</p>
            </article>
          </div>
        </div>

        <div class="case-visual">
          <div class="project-frame hevix-frame">
            <img
              src="/images/projects/hevix.webp"
              alt="نمای کامل پلتفرم HEVIX"
              loading="lazy"
            />
          </div>
          <div class="case-stamp hevix-stamp">
            <span>02</span>
            <strong>HEVIX</strong>
            <small>Industrial Parts Platform</small>
          </div>
        </div>
      </div>
    </section>

    <section class="capability-proof">
      <div class="container capability-layout">
        <div class="capability-copy">
          <span class="section-badge">آنچه این پروژه‌ها نشان می‌دهند</span>
          <h2>از یک بازار زیبایی تا یک بازار صنعتی، هسته مهندسی محصول یکی است</h2>
          <p>
            نیاز کسب‌وکار را به معماری، تجربه کاربری، داده و قابلیت قابل استفاده
            تبدیل می‌کنیم. فناوری بر اساس مسئله انتخاب می‌شود، نه برعکس.
          </p>
        </div>

        <div class="capability-grid">
          <article><span>AI</span><strong>هوش مصنوعی کاربردی</strong></article>
          <article><span>SEARCH</span><strong>جستجوی هوشمند</strong></article>
          <article><span>SEO</span><strong>سئوی اتومات و فنی</strong></article>
          <article><span>DATA</span><strong>مدیریت و ورود داده</strong></article>
          <article><span>BUILD</span><strong>توسعه اختصاصی</strong></article>
          <article><span>GROW</span><strong>پشتیبانی و توسعه مستمر</strong></article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  overflow-x: clip;
  direction: rtl;
  background: linear-gradient(180deg, #fcf8f4 0%, #fffdfb 48%, #fcf8f4 100%);
  color: var(--text);
}

.projects-hero {
  position: relative;
  overflow: hidden;
  padding: 20px 0 58px;
}

.projects-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 82% 8%, rgba(184, 107, 53, 0.09), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.35), transparent 42%);
  pointer-events: none;
}

.hero-panel {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(520px, 1.12fr);
  gap: 52px;
  align-items: center;
  min-height: 570px;
  padding: 44px 46px;
  overflow: hidden;
  border: 1px solid rgba(226, 211, 199, 0.92);
  border-radius: 32px;
  background:
    radial-gradient(circle at 84% 18%, rgba(184, 107, 53, 0.12), transparent 26%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(255, 249, 245, 0.95));
  box-shadow:
    0 24px 58px rgba(16, 28, 50, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.hero-panel::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  right: -120px;
  bottom: -150px;
  border: 1px solid rgba(184, 107, 53, 0.13);
  border-radius: 50%;
  box-shadow: 0 0 0 40px rgba(184, 107, 53, 0.025);
  pointer-events: none;
}

.hero-copy {
  position: relative;
  z-index: 3;
  max-width: 650px;
}

.hero-kicker {
  display: inline-flex;
  color: #a9653d;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.hero-copy h1 {
  margin: 12px 0 16px;
  color: var(--text);
  font-size: clamp(40px, 4.7vw, 64px);
  line-height: 1.34;
  letter-spacing: -0.03em;
}

.hero-copy h1 strong {
  display: block;
  color: var(--accent);
}

.hero-copy > p {
  max-width: 590px;
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.95;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  min-height: 47px;
  align-items: center;
  justify-content: center;
  padding: 11px 21px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.primary-action {
  background: linear-gradient(135deg, #c77a43, #96502d);
  color: #fff;
  box-shadow: 0 12px 26px rgba(155, 84, 45, 0.2);
}

.secondary-action {
  border: 1px solid rgba(226, 211, 199, 0.96);
  background: rgba(255, 255, 255, 0.84);
  color: var(--text);
}

.primary-action:hover,
.secondary-action:hover {
  transform: translateY(-2px);
}

.hero-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 22px;
}

.hero-tech span {
  padding: 5px 9px;
  border: 1px solid rgba(230, 216, 205, 0.94);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: #6c7482;
  font-size: 11px;
  font-weight: 700;
  direction: ltr;
}

.hero-visual {
  position: relative;
  z-index: 2;
  min-height: 470px;
}

.hero-main-project,
.hero-inset-project {
  position: absolute;
  overflow: hidden;
  border: 1px solid rgba(224, 210, 199, 0.94);
  background: #fff;
  box-shadow: 0 20px 46px rgba(16, 28, 50, 0.1);
}

.hero-main-project {
  inset: 12px 26px 56px 44px;
  border-radius: 26px;
}

.hero-inset-project {
  z-index: 3;
  width: 55%;
  left: 0;
  bottom: 0;
  border-radius: 21px;
}

.hero-main-project img,
.hero-inset-project img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.project-label {
  position: absolute;
  right: 13px;
  bottom: 12px;
  display: flex;
  min-width: 118px;
  flex-direction: column;
  gap: 1px;
  padding: 8px 10px;
  border: 1px solid rgba(232, 220, 212, 0.94);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  text-align: right;
}

.project-label small {
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
  direction: ltr;
}

.project-label strong {
  color: var(--text);
  font-size: 13.5px;
}

.hero-project-count {
  position: absolute;
  top: 2px;
  left: 8px;
  color: rgba(184, 107, 53, 0.16);
  font-size: 62px;
  font-weight: 900;
  line-height: 1;
  direction: ltr;
}

.project-principles {
  padding: 26px 0 74px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.principles-grid article {
  display: grid;
  grid-template-columns: 39px minmax(0, 1fr);
  gap: 4px 12px;
  align-items: center;
  padding: 17px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.84);
}

.principles-grid article > span {
  display: inline-flex;
  grid-row: 1 / span 2;
  width: 37px;
  height: 37px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #faece4;
  color: var(--accent);
  font-size: 10.5px;
  font-weight: 800;
}

.principles-grid strong {
  font-size: 14.5px;
}

.principles-grid p {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.65;
}

.case-study {
  padding: 92px 0;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  scroll-margin-top: 110px;
}

.case-shidaneh {
  background:
    radial-gradient(circle at 12% 10%, rgba(205, 126, 81, 0.08), transparent 24%),
    rgba(255, 255, 255, 0.58);
}

.case-hevix {
  background:
    radial-gradient(circle at 88% 12%, rgba(87, 126, 164, 0.09), transparent 26%),
    #fcf8f4;
}

.case-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(360px, 0.88fr);
  gap: 64px;
  align-items: center;
}

.reverse-layout {
  grid-template-columns: minmax(360px, 0.88fr) minmax(0, 1.12fr);
}

.case-visual {
  position: relative;
  min-width: 0;
}

.project-frame {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: #f8f3ef;
  box-shadow: 0 24px 55px rgba(16, 28, 50, 0.09);
}

.project-frame img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.case-stamp {
  position: absolute;
  right: -18px;
  bottom: -28px;
  display: flex;
  min-width: 174px;
  flex-direction: column;
  gap: 1px;
  padding: 14px 17px;
  border: 1px solid rgba(230, 214, 202, 0.9);
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 15px 34px rgba(16, 28, 50, 0.08);
}

.case-stamp > span {
  color: var(--accent);
  font-size: 10.5px;
  font-weight: 800;
}

.case-stamp strong {
  font-size: 16px;
}

.case-stamp small {
  color: var(--muted);
  font-size: 10.5px;
  direction: ltr;
  text-align: right;
}

.hevix-stamp {
  right: auto;
  left: -18px;
}

.case-copy {
  min-width: 0;
}

.case-kicker {
  color: var(--accent);
  font-size: 13.5px;
  font-weight: 800;
}

.case-copy h2 {
  margin: 9px 0 13px;
  font-size: clamp(30px, 3.5vw, 44px);
  line-height: 1.48;
}

.case-lead {
  margin: 0;
  color: var(--muted);
  font-size: 15.5px;
  line-height: 1.95;
}

.case-scope {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 21px;
}

.case-scope span {
  padding: 5px 10px;
  border: 1px solid #eadfd7;
  border-radius: 999px;
  background: #fff;
  color: #667085;
  font-size: 11.5px;
}

.case-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 26px;
}

.case-detail-grid article {
  padding: 17px;
  border: 1px solid var(--line);
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.78);
}

.case-detail-grid small {
  color: var(--accent);
  font-size: 10.5px;
  font-weight: 800;
  direction: ltr;
}

.case-detail-grid strong {
  display: block;
  margin-top: 4px;
  font-size: 14.5px;
}

.case-detail-grid p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.7;
}

.capability-proof {
  padding: 88px 0 96px;
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  background: rgba(255, 255, 255, 0.55);
}

.capability-layout {
  display: grid;
  grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
  gap: 58px;
  align-items: center;
}

.capability-copy h2 {
  margin: 14px 0 12px;
  font-size: clamp(30px, 3.2vw, 41px);
  line-height: 1.5;
}

.capability-copy p {
  margin: 0;
  color: var(--muted);
  font-size: 15.5px;
  line-height: 1.9;
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.capability-grid article {
  display: flex;
  align-items: center;
  gap: 13px;
  min-height: 78px;
  padding: 15px 17px;
  border: 1px solid var(--line);
  border-radius: 17px;
  background: #fff;
}

.capability-grid span {
  display: inline-flex;
  min-width: 54px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #faece4;
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
  direction: ltr;
}

.capability-grid strong {
  font-size: 14px;
}

@media (max-width: 1080px) {
  .hero-panel {
    grid-template-columns: minmax(0, 0.9fr) minmax(430px, 1.1fr);
    gap: 34px;
    padding: 38px 34px;
  }

  .case-layout,
  .reverse-layout {
    gap: 38px;
  }
}

@media (max-width: 820px) {
  .projects-hero {
    padding: 16px 0 50px;
  }

  .hero-panel,
  .case-layout,
  .reverse-layout,
  .capability-layout {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    gap: 26px;
    min-height: 0;
    padding: 32px;
  }

  .hero-copy {
    max-width: 720px;
  }

  .hero-visual {
    width: min(100%, 680px);
    min-height: 460px;
    margin: 0 auto;
  }

  .principles-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .case-copy {
    order: 1;
  }

  .case-visual {
    order: 2;
    width: min(100%, 700px);
    margin: 0 auto;
  }

  .case-stamp {
    right: 16px;
    bottom: -22px;
  }

  .hevix-stamp {
    right: auto;
    left: 16px;
  }

  .capability-copy {
    max-width: 720px;
  }
}

@media (max-width: 600px) {
  .projects-hero {
    padding: 12px 0 44px;
  }

  .hero-panel {
    padding: 25px 20px 22px;
    border-radius: 24px;
  }

  .hero-copy h1 {
    font-size: clamp(33px, 9.6vw, 44px);
  }

  .hero-copy > p {
    font-size: 15px;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .hero-visual {
    display: grid;
    min-height: 0;
    gap: 12px;
  }

  .hero-main-project,
  .hero-inset-project {
    position: relative;
    inset: auto;
    width: 100%;
    border-radius: 18px;
  }

  .hero-inset-project {
    left: auto;
    bottom: auto;
  }

  .hero-project-count {
    display: none;
  }

  .project-principles {
    padding-bottom: 58px;
  }

  .principles-grid {
    grid-template-columns: 1fr;
  }

  .case-study,
  .capability-proof {
    padding: 62px 0;
  }

  .case-copy h2,
  .capability-copy h2 {
    font-size: 28px;
  }

  .case-detail-grid,
  .capability-grid {
    grid-template-columns: 1fr;
  }

  .case-stamp,
  .hevix-stamp {
    position: relative;
    inset: auto;
    width: fit-content;
    margin: -16px 14px 0 auto;
  }
}

@media (max-width: 390px) {
  .hero-actions {
    grid-template-columns: 1fr;
  }

  .hero-tech {
    gap: 5px;
  }
}
</style>
