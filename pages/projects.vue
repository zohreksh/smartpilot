<script setup>
useHead({
  title: "نمونه‌کارها و محصولات واقعی | NexaStudio",
  meta: [
    {
      name: "description",
      content:
        "نمونه‌کارهای واقعی NexaStudio شامل شیدانه و HEVIX؛ تجربه طراحی و توسعه محصول، هوش مصنوعی، جستجوی هوشمند، سئوی اتومات، داده، کاتالوگ و توسعه اختصاصی.",
    },
  ],
});
</script>

<template>
  <main class="projects-page">
    <SiteHeader />

    <section class="projects-hero">
      <div class="container">
        <div class="portfolio-intro">
          <div class="portfolio-title">
            <span class="portfolio-index" dir="ltr">SELECTED WORK / 02</span>
            <h1>
              محصول واقعی،
              <strong>نه فقط یک قاب زیبا</strong>
            </h1>
          </div>

          <div class="portfolio-summary">
            <p>
              شیدانه و HEVIX دو محصول از دو بازار متفاوت‌اند. هر دو از مسئله واقعی
              کسب‌وکار شروع شده‌اند و تا معماری، تجربه کاربری، داده، جستجو، SEO
              و توسعه مستمر ادامه پیدا کرده‌اند.
            </p>
            <div class="portfolio-actions">
              <NuxtLink class="primary-action" to="/contact">شروع یک پروژه</NuxtLink>
              <a class="text-action" href="#shidaneh">مشاهده Case Studyها ↓</a>
            </div>
          </div>
        </div>

        <div class="portfolio-wall" aria-label="پروژه‌های منتخب NexaStudio">
          <a class="portfolio-card shidaneh-card" href="#shidaneh">
            <div class="portfolio-image">
              <img
                src="/images/projects/shidane.webp"
                alt="نمای کامل محصول شیدانه"
                loading="eager"
              />
            </div>
            <div class="portfolio-meta">
              <div>
                <span class="project-number">01</span>
                <strong>شیدانه</strong>
                <small>Beauty Commerce Platform</small>
              </div>
              <div class="project-tags">
                <span>AI</span>
                <span>Smart Search</span>
                <span>Automated SEO</span>
              </div>
              <span class="project-arrow" aria-hidden="true">↙</span>
            </div>
          </a>

          <a class="portfolio-card hevix-card" href="#hevix">
            <div class="portfolio-image">
              <img
                src="/images/projects/hevix.webp"
                alt="نمای کامل محصول HEVIX"
                loading="eager"
              />
            </div>
            <div class="portfolio-meta">
              <div>
                <span class="project-number">02</span>
                <strong>HEVIX</strong>
                <small>Industrial Commerce Platform</small>
              </div>
              <div class="project-tags">
                <span>Custom Build</span>
                <span>Catalog</span>
                <span>Search</span>
              </div>
              <span class="project-arrow" aria-hidden="true">↙</span>
            </div>
          </a>
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
  padding: 28px 0 64px;
}

.projects-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 84% 6%, rgba(184, 107, 53, 0.1), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.28), transparent 34%);
  pointer-events: none;
}

.portfolio-intro {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.75fr);
  gap: 70px;
  align-items: end;
  padding: 18px 0 32px;
  border-bottom: 1px solid rgba(218, 200, 187, 0.78);
}

.portfolio-title {
  min-width: 0;
}

.portfolio-index {
  display: inline-flex;
  margin-bottom: 8px;
  color: #a9653d;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.portfolio-title h1 {
  max-width: 760px;
  margin: 0;
  color: var(--text);
  font-size: clamp(40px, 5vw, 68px);
  line-height: 1.32;
  letter-spacing: -0.03em;
}

.portfolio-title h1 strong {
  display: block;
  color: var(--accent);
}

.portfolio-summary {
  padding-bottom: 4px;
}

.portfolio-summary p {
  max-width: 560px;
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.95;
}

.portfolio-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

.primary-action {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  padding: 11px 21px;
  border-radius: 999px;
  background: linear-gradient(135deg, #c77a43, #96502d);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  box-shadow: 0 12px 26px rgba(155, 84, 45, 0.18);
}

.text-action {
  color: #7c695c;
  font-size: 11px;
  font-weight: 800;
}

.portfolio-wall {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.14fr) minmax(320px, 0.86fr);
  gap: 18px;
  align-items: start;
  padding-top: 22px;
  direction: ltr;
}

.portfolio-card {
  overflow: hidden;
  min-width: 0;
  border: 1px solid rgba(226, 211, 199, 0.94);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.93);
  box-shadow: 0 18px 42px rgba(16, 28, 50, 0.065);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  border-color: rgba(184, 107, 53, 0.28);
  box-shadow: 0 24px 52px rgba(16, 28, 50, 0.09);
}

.hevix-card {
  margin-top: 58px;
}

.portfolio-image {
  overflow: hidden;
  background: #f7f2ee;
}

.portfolio-image img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.portfolio-meta {
  display: grid;
  grid-template-columns: minmax(150px, auto) minmax(0, 1fr) auto;
  gap: 16px;
  align-items: center;
  padding: 15px 17px 17px;
  direction: rtl;
}

.portfolio-meta > div:first-child {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1px 8px;
  align-items: center;
}

.project-number {
  grid-row: 1 / span 2;
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #faece4;
  color: var(--accent);
  font-size: 9px;
  font-weight: 800;
  direction: ltr;
}

.portfolio-meta strong {
  color: var(--text);
  font-size: 15px;
}

.portfolio-meta small {
  color: var(--muted);
  font-size: 8.5px;
  direction: ltr;
  text-align: right;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
}

.project-tags span {
  padding: 4px 8px;
  border: 1px solid #eee2d9;
  border-radius: 999px;
  background: #faf7f4;
  color: #6f7785;
  font-size: 8.5px;
  direction: ltr;
}

.project-arrow {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border: 1px solid #eadfd7;
  border-radius: 50%;
  color: var(--accent);
  font-size: 15px;
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
  font-size: 9px;
  font-weight: 800;
}

.principles-grid strong {
  font-size: 13px;
}

.principles-grid p {
  margin: 0;
  color: var(--muted);
  font-size: 10.5px;
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
  font-size: 9px;
  font-weight: 800;
}

.case-stamp strong {
  font-size: 15px;
}

.case-stamp small {
  color: var(--muted);
  font-size: 9px;
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
  font-size: 12px;
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
  font-size: 14px;
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
  font-size: 9.5px;
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
  font-size: 8.5px;
  font-weight: 800;
  direction: ltr;
}

.case-detail-grid strong {
  display: block;
  margin-top: 4px;
  font-size: 13px;
}

.case-detail-grid p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 10.5px;
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
  font-size: 14px;
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
  font-size: 8px;
  font-weight: 800;
  direction: ltr;
}

.capability-grid strong {
  font-size: 12.5px;
}

@media (max-width: 1080px) {
  .portfolio-intro {
    gap: 38px;
  }

  .portfolio-wall {
    grid-template-columns: minmax(0, 1.06fr) minmax(300px, 0.94fr);
  }

  .case-layout,
  .reverse-layout {
    gap: 38px;
  }
}

@media (max-width: 820px) {
  .projects-hero {
    padding: 20px 0 56px;
  }

  .portfolio-intro,
  .case-layout,
  .reverse-layout,
  .capability-layout {
    grid-template-columns: 1fr;
  }

  .portfolio-intro {
    gap: 18px;
    padding-top: 10px;
  }

  .portfolio-summary {
    max-width: 720px;
  }

  .portfolio-wall {
    grid-template-columns: 1fr 1fr;
  }

  .hevix-card {
    margin-top: 28px;
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
    padding: 16px 0 48px;
  }

  .portfolio-intro {
    padding-bottom: 24px;
  }

  .portfolio-title h1 {
    font-size: clamp(33px, 9.6vw, 44px);
  }

  .portfolio-summary p {
    font-size: 13.5px;
  }

  .portfolio-actions {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
  }

  .portfolio-wall {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-top: 16px;
  }

  .hevix-card {
    margin-top: 0;
  }

  .portfolio-meta {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .project-tags {
    grid-column: 1 / -1;
    order: 3;
  }

  .project-arrow {
    grid-column: 2;
    grid-row: 1;
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
  .portfolio-actions {
    grid-template-columns: 1fr;
  }

  .text-action {
    text-align: center;
  }

  .portfolio-meta {
    padding: 13px 14px 15px;
  }
}
</style>
