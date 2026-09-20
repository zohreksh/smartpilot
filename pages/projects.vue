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
      <div class="container hero-layout">
        <div class="hero-copy">
          <span class="hero-badge">محصولات واقعی NexaStudio</span>
          <h1>
            نمونه‌کارهایی که فقط
            <strong>طراحی نشده‌اند؛ ساخته و توسعه داده شده‌اند</strong>
          </h1>
          <p>
            شیدانه و HEVIX دو محصول از دو بازار کاملاً متفاوت‌اند، اما یک نقطه
            مشترک دارند: معماری قابل توسعه، تجربه کاربری واقعی و قابلیت‌هایی که
            به نیاز عملیاتی کسب‌وکار وصل شده‌اند.
          </p>

          <div class="hero-actions">
            <a class="primary-action" href="#shidaneh">مشاهده Case Studyها</a>
            <NuxtLink class="secondary-action" to="/contact">شروع یک پروژه</NuxtLink>
          </div>

          <div class="hero-signals">
            <span>AI</span><i aria-hidden="true"></i>
            <span>Smart Search</span><i aria-hidden="true"></i>
            <span>Automated SEO</span><i aria-hidden="true"></i>
            <span>Custom Engineering</span>
          </div>
        </div>

        <div class="hero-showcase" aria-label="پیش‌نمایش محصولات شیدانه و HEVIX">
          <figure class="hero-project hero-shidaneh">
            <img
              src="/images/projects/shidane.webp"
              alt="نمای کامل محصول شیدانه"
              loading="eager"
            />
            <figcaption>
              <span>Beauty Commerce</span>
              <strong>شیدانه</strong>
            </figcaption>
          </figure>

          <figure class="hero-project hero-hevix">
            <img
              src="/images/projects/hevix.webp"
              alt="نمای کامل محصول HEVIX"
              loading="eager"
            />
            <figcaption>
              <span>Industrial Commerce</span>
              <strong>HEVIX</strong>
            </figcaption>
          </figure>

          <div class="showcase-orbit orbit-one" aria-hidden="true"></div>
          <div class="showcase-orbit orbit-two" aria-hidden="true"></div>
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
  padding: 82px 0 94px;
}

.projects-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 18%, rgba(184, 107, 53, 0.13), transparent 27%),
    radial-gradient(circle at 12% 75%, rgba(93, 119, 151, 0.08), transparent 28%);
  pointer-events: none;
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(460px, 1.08fr);
  gap: 68px;
  align-items: center;
}

.hero-copy {
  max-width: 680px;
}

.hero-badge,
.section-badge {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  padding: 6px 18px;
  border: 1px solid rgba(196, 102, 63, 0.5);
  border-radius: 999px;
  background: #fff7f4;
  color: #b45f35;
  font-size: 13px;
  font-weight: 800;
}

.hero-copy h1 {
  margin: 18px 0 19px;
  font-size: clamp(42px, 4.9vw, 65px);
  line-height: 1.4;
  letter-spacing: -0.025em;
}

.hero-copy h1 strong {
  display: block;
  color: var(--accent);
}

.hero-copy > p {
  max-width: 660px;
  margin: 0;
  color: var(--muted);
  font-size: 16.5px;
  line-height: 1.95;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 29px;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  min-height: 49px;
  align-items: center;
  justify-content: center;
  padding: 12px 23px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
}

.primary-action {
  background: linear-gradient(135deg, #c77a43, #96502d);
  color: #fff;
  box-shadow: 0 13px 29px rgba(155, 84, 45, 0.2);
}

.secondary-action {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.82);
  color: var(--text);
}

.hero-signals {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;
  color: #747d8d;
  font-size: 10px;
  font-weight: 700;
  direction: ltr;
}

.hero-signals i {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--accent);
}

.hero-showcase {
  position: relative;
  min-height: 530px;
}

.hero-project {
  position: absolute;
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 25px;
  background: #fff;
  box-shadow: 0 24px 55px rgba(16, 28, 50, 0.11);
}

.hero-project img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.hero-project figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 15px 14px;
  background: rgba(255, 255, 255, 0.98);
}

.hero-project figcaption span {
  color: var(--accent);
  font-size: 9px;
  font-weight: 800;
  direction: ltr;
}

.hero-project figcaption strong {
  color: var(--text);
  font-size: 14px;
}

.hero-shidaneh {
  z-index: 2;
  width: 72%;
  top: 8px;
  right: 0;
  transform: rotate(1.2deg);
}

.hero-hevix {
  z-index: 3;
  width: 61%;
  left: 0;
  bottom: 8px;
  transform: rotate(-1.7deg);
}

.showcase-orbit {
  position: absolute;
  border: 1px solid rgba(184, 107, 53, 0.14);
  border-radius: 50%;
}

.orbit-one {
  width: 390px;
  height: 390px;
  top: 64px;
  right: 76px;
}

.orbit-two {
  width: 255px;
  height: 255px;
  left: 42px;
  bottom: 25px;
  border-style: dashed;
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
  .hero-layout {
    grid-template-columns: minmax(0, 0.92fr) minmax(410px, 1.08fr);
    gap: 38px;
  }

  .case-layout,
  .reverse-layout {
    gap: 38px;
  }
}

@media (max-width: 820px) {
  .projects-hero {
    padding: 58px 0 68px;
  }

  .hero-layout,
  .case-layout,
  .reverse-layout,
  .capability-layout {
    grid-template-columns: 1fr;
  }

  .hero-showcase {
    width: min(100%, 650px);
    min-height: 500px;
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
    padding: 46px 0 54px;
  }

  .hero-copy h1 {
    font-size: clamp(33px, 9.7vw, 44px);
  }

  .hero-copy > p {
    font-size: 15px;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .hero-showcase {
    display: grid;
    min-height: 0;
    gap: 13px;
  }

  .hero-project,
  .hero-shidaneh,
  .hero-hevix {
    position: relative;
    inset: auto;
    width: 100%;
    transform: none;
  }

  .showcase-orbit {
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

  .hero-signals {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
    direction: rtl;
  }

  .hero-signals i {
    display: none;
  }
}
</style>
