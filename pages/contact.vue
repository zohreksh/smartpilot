<template>
  <main class="contact-page">
    <SiteHeader />

    <section class="contact-hero">
      <div class="container contact-hero-inner">
        <div class="hero-copy">
          <span class="contact-badge">شروع همکاری</span>
          <h1>
            درباره مسئله‌ای که می‌خواهید حل کنید
            <strong>با ما صحبت کنید</strong>
          </h1>
          <p class="hero-lead">
            لازم نیست قبل از تماس، راه‌حل فنی را بدانید. کافی است وضعیت فعلی،
            هدف کسب‌وکار و چیزی که می‌خواهید بهتر شود را توضیح دهید تا مسیر
            مناسب را با هم مشخص کنیم.
          </p>

          <div class="hero-actions">
            <a class="primary-action" href="#project-brief">شرح پروژه</a>
            <NuxtLink class="secondary-action" to="/services">مشاهده خدمات</NuxtLink>
          </div>

          <div class="hero-highlights" role="group" aria-label="نحوه شروع همکاری">
            <span>بررسی اولیه مسئله</span>
            <i aria-hidden="true"></i>
            <span>انتخاب مسیر مناسب</span>
            <i aria-hidden="true"></i>
            <span>بدون شروع عجولانه توسعه</span>
          </div>
        </div>

        <figure class="hero-visual">
          <img
            src="/images/hero/contact-hero1.webp"
            alt="شروع گفتگو برای طراحی و توسعه محصول دیجیتال"
          />
          <figcaption>
            <span>از ایده مبهم تا مسیر روشن</span>
            <strong>اول مسئله را می‌فهمیم، بعد راهکار را می‌سازیم.</strong>
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="project-brief" class="project-brief-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">شرح اولیه پروژه</span>
          <h2>چند اطلاعات کوتاه برای شروع کافی است</h2>
          <p>
            این فرم برای جمع‌آوری اطلاعات اولیه پروژه طراحی شده است تا گفتگو از
            نقطه درستی شروع شود.
          </p>
        </div>

        <div class="brief-layout">
          <form class="project-form" aria-describedby="form-status" @submit.prevent>
            <div class="form-row">
              <div class="field-group">
                <label for="full-name">نام و نام خانوادگی</label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autocomplete="name"
                  placeholder="نام شما"
                />
              </div>

              <div class="field-group">
                <label for="contact-way">راه ارتباطی</label>
                <input
                  id="contact-way"
                  name="contact-way"
                  type="text"
                  placeholder="ایمیل یا شماره تماس"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="field-group">
                <label for="business-name">نام کسب‌وکار</label>
                <input
                  id="business-name"
                  name="business-name"
                  type="text"
                  autocomplete="organization"
                  placeholder="اختیاری"
                />
              </div>

              <div class="field-group">
                <label for="project-type">موضوع پروژه</label>
                <select id="project-type" name="project-type">
                  <option value="">انتخاب کنید</option>
                  <option>طراحی سایت یا فروشگاه</option>
                  <option>توسعه سامانه اختصاصی</option>
                  <option>قابلیت هوش مصنوعی</option>
                  <option>سئو و رشد ارگانیک</option>
                  <option>بهبود محصول موجود</option>
                  <option>پشتیبانی و توسعه مستمر</option>
                  <option>موضوع دیگر</option>
                </select>
              </div>
            </div>

            <div class="field-group">
              <label for="project-message">درباره مسئله یا هدف پروژه</label>
              <textarea
                id="project-message"
                name="project-message"
                rows="7"
                placeholder="مثلاً چه چیزی می‌خواهید بسازید یا در محصول فعلی چه مسئله‌ای دارید؟"
              ></textarea>
            </div>

            <div class="form-footer">
              <button type="submit" disabled aria-disabled="true">
                ارسال درخواست
              </button>
              <p id="form-status">
                ارسال آنلاین فرم هنوز به سرویس دریافت پیام متصل نشده است.
              </p>
            </div>
          </form>

          <aside class="brief-guide">
            <div class="guide-head">
              <div class="line-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7 4h10a2 2 0 0 1 2 2v14H5V6a2 2 0 0 1 2-2Z" />
                  <path d="M8 9h8M8 13h8M8 17h5" />
                </svg>
              </div>
              <div>
                <span>برای شروع بهتر</span>
                <h3>چه چیزهایی را بنویسید؟</h3>
              </div>
            </div>

            <ul class="guide-list">
              <li>
                <strong>وضعیت فعلی</strong>
                <span>الان سایت، محصول یا فرآیند شما در چه مرحله‌ای است؟</span>
              </li>
              <li>
                <strong>مسئله اصلی</strong>
                <span>چه چیزی کند، پرهزینه یا ناکارآمد است؟</span>
              </li>
              <li>
                <strong>نتیجه مورد انتظار</strong>
                <span>بعد از اجرای پروژه چه چیزی باید بهتر شده باشد؟</span>
              </li>
              <li>
                <strong>محدودیت مهم</strong>
                <span>زمان، سیستم موجود، داده، بودجه یا وابستگی خاصی دارید؟</span>
              </li>
            </ul>

            <div class="guide-note">
              لازم نیست سند رسمی آماده کنید؛ چند خط روشن و واقعی برای شروع کافی
              است.
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="fit-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">چه زمانی تماس مفید است؟</span>
          <h2>اگر یکی از این مسئله‌ها را دارید، احتمالاً می‌توانیم کمک کنیم</h2>
        </div>

        <div class="fit-grid">
          <article class="fit-card">
            <div class="line-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16v12H4zM4 9h16" />
                <path d="M7 7.5h.01M10 7.5h.01" />
              </svg>
            </div>
            <h3>می‌خواهید محصولی را از صفر بسازید</h3>
            <p>
              ایده دارید اما برای طراحی محصول، معماری و مسیر اجرای درست به یک
              تیم فنی نیاز دارید.
            </p>
          </article>

          <article class="fit-card">
            <div class="line-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
              </svg>
            </div>
            <h3>محصول موجود به قابلیت جدید نیاز دارد</h3>
            <p>
              می‌خواهید بدون بازسازی غیرضروری، قابلیت اختصاصی، پنل، اتصال یا
              Workflow جدید اضافه کنید.
            </p>
          </article>

          <article class="fit-card">
            <div class="line-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z" />
                <path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
              </svg>
            </div>
            <h3>می‌خواهید AI را کاربردی وارد محصول کنید</h3>
            <p>
              دنبال استفاده واقعی از مشاور هوشمند، جستجوی معنایی، تحلیل داده یا
              اتوماسیون هستید.
            </p>
          </article>

          <article class="fit-card">
            <div class="line-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 17 9 12l3 3 7-8" />
                <path d="M15 7h4v4" />
              </svg>
            </div>
            <h3>محصول ساخته شده اما رشد نمی‌کند</h3>
            <p>
              مشکل در سئو، تجربه کاربر، ساختار داده، گزارشات یا توسعه بعدی محصول
              دارید.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="next-step-section">
      <div class="container">
        <div class="section-heading">
          <span class="section-badge">بعد از تماس چه می‌شود؟</span>
          <h2>مسیر شروع همکاری کوتاه و شفاف است</h2>
          <p>
            قبل از هر تعهد اجرایی، مسئله و محدوده کار روشن می‌شود تا مشخص باشد
            چه چیزی باید ساخته شود و چرا.
          </p>
        </div>

        <ol class="step-list">
          <li class="step-item">
            <span class="step-number">01</span>
            <div>
              <h3>بررسی اولیه</h3>
              <p>شرح پروژه و وضعیت فعلی را بررسی می‌کنیم.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-number">02</span>
            <div>
              <h3>گفتگوی کوتاه</h3>
              <p>ابهام‌های اصلی، هدف و محدودیت‌های پروژه مشخص می‌شوند.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-number">03</span>
            <div>
              <h3>پیشنهاد مسیر</h3>
              <p>Scope مناسب، اولویت‌ها و شکل همکاری پیشنهاد می‌شود.</p>
            </div>
          </li>
          <li class="step-item">
            <span class="step-number">04</span>
            <div>
              <h3>شروع کنترل‌شده</h3>
              <p>بعد از توافق روی مسیر، طراحی و اجرا مرحله‌ای آغاز می‌شود.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="contact-links-section">
      <div class="container contact-links-panel">
        <div>
          <span class="links-kicker">قبل از شروع گفتگو</span>
          <h2>می‌خواهید اول بیشتر با روش کار ما آشنا شوید؟</h2>
          <p>
            خدمات و تجربه محصولی NexaStudio را ببینید و بعد درباره پروژه خودتان
            تصمیم بگیرید.
          </p>
        </div>
        <div class="contact-links-actions">
          <NuxtLink class="primary-action" to="/services">مشاهده خدمات</NuxtLink>
          <NuxtLink class="secondary-action light-action" to="/about">درباره ما</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  overflow-x: clip;
  direction: rtl;
  background: var(--bg);
  color: var(--text);
}

.contact-hero {
  position: relative;
  padding: 82px 0 76px;
}

.contact-hero::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 440px;
  background:
    radial-gradient(circle at 78% 18%, rgba(184, 107, 53, 0.1), transparent 34%),
    radial-gradient(circle at 15% 25%, rgba(16, 28, 50, 0.05), transparent 28%);
  pointer-events: none;
}

.contact-hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
  gap: 60px;
  align-items: center;
}

.hero-copy {
  max-width: 680px;
  text-align: right;
}

.contact-badge,
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

.contact-badge {
  padding: 6px 18px;
}

.hero-copy h1 {
  max-width: 690px;
  margin: 18px 0 20px;
  color: var(--text);
  font-size: clamp(40px, 4.5vw, 60px);
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

.hero-actions,
.contact-links-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-actions {
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
  font-size: 14px;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-action {
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
.secondary-action:hover {
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

.hero-visual {
  overflow: hidden;
  margin: 0;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--surface);
  box-shadow: var(--shadow);
}

.hero-visual img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center;
}

.hero-visual figcaption {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 17px 20px 20px;
  text-align: right;
}

.hero-visual figcaption span {
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
}

.hero-visual figcaption strong {
  color: var(--text);
  font-size: 15px;
  line-height: 1.7;
}

.project-brief-section,
.fit-section,
.next-step-section {
  padding: 74px 0;
}

.project-brief-section {
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

.section-heading h2 {
  margin: 14px 0 10px;
  color: var(--text);
  font-size: clamp(30px, 3.4vw, 42px);
  line-height: 1.45;
}

.section-heading p {
  max-width: 700px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.9;
}

.brief-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.55fr);
  gap: 22px;
  align-items: stretch;
}

.project-form,
.brief-guide {
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--surface);
  box-shadow: 0 14px 36px rgba(16, 28, 50, 0.045);
}

.project-form {
  display: grid;
  gap: 18px;
  padding: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.field-group {
  display: grid;
  gap: 8px;
}

.field-group label {
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
}

.field-group input,
.field-group select,
.field-group textarea {
  width: 100%;
  min-width: 0;
  border: 1px solid #e5ddd4;
  border-radius: 14px;
  outline: none;
  background: #fff;
  color: var(--text);
  font: inherit;
  font-size: 13px;
  line-height: 1.7;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field-group input,
.field-group select {
  min-height: 48px;
  padding: 10px 13px;
}

.field-group textarea {
  resize: vertical;
  min-height: 150px;
  padding: 13px;
}

.field-group input:focus,
.field-group select:focus,
.field-group textarea:focus {
  border-color: rgba(184, 107, 53, 0.68);
  box-shadow: 0 0 0 3px rgba(184, 107, 53, 0.08);
}

.field-group input::placeholder,
.field-group textarea::placeholder {
  color: #9a9faa;
}

.form-footer {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 2px;
}

.form-footer button {
  flex: none;
  min-width: 150px;
  min-height: 48px;
  border: 0;
  border-radius: 999px;
  background: #d9c8bb;
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 800;
  cursor: not-allowed;
}

.form-footer p {
  margin: 0;
  color: #8a7769;
  font-size: 11.5px;
  line-height: 1.7;
}

.brief-guide {
  padding: 26px;
  background: #fff9f5;
}

.guide-head {
  display: flex;
  align-items: center;
  gap: 13px;
}

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

.line-icon svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.guide-head span {
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
}

.guide-head h3 {
  margin: 2px 0 0;
  color: var(--text);
  font-size: 19px;
}

.guide-list {
  display: grid;
  gap: 0;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.guide-list li {
  padding: 15px 0;
  border-bottom: 1px solid #eadfd7;
}

.guide-list strong {
  display: block;
  margin-bottom: 4px;
  color: var(--text);
  font-size: 13px;
}

.guide-list span {
  display: block;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.75;
}

.guide-note {
  margin-top: 18px;
  padding: 14px;
  border-radius: 14px;
  background: rgba(184, 107, 53, 0.08);
  color: #78563e;
  font-size: 11.5px;
  line-height: 1.8;
}

.fit-section {
  border-top: 1px solid rgba(234, 223, 215, 0.72);
  border-bottom: 1px solid rgba(234, 223, 215, 0.72);
  background: rgba(255, 255, 255, 0.48);
}

.fit-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.fit-card {
  min-height: 240px;
  padding: 24px 20px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--surface);
  text-align: right;
  box-shadow: 0 10px 30px rgba(16, 28, 50, 0.04);
}

.fit-card h3 {
  margin: 18px 0 8px;
  color: var(--text);
  font-size: 17px;
  line-height: 1.6;
}

.fit-card p {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.9;
}

.next-step-section {
  background: rgba(255, 255, 255, 0.48);
}

.step-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.step-list::before {
  content: "";
  position: absolute;
  top: 27px;
  right: 9%;
  left: 9%;
  height: 1px;
  background: var(--line);
}

.step-item {
  position: relative;
  z-index: 1;
  padding: 0 8px;
  text-align: center;
}

.step-number {
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

.step-item h3 {
  margin: 18px 0 7px;
  color: var(--text);
  font-size: 17px;
}

.step-item p {
  margin: 0;
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.85;
}

.contact-links-section {
  padding: 18px 0 78px;
  background: rgba(255, 255, 255, 0.48);
}

.contact-links-panel {
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

.links-kicker {
  color: #e2a06f;
  font-size: 12px;
  font-weight: 700;
}

.contact-links-panel h2 {
  margin: 7px 0 6px;
  color: #fff;
  font-size: clamp(25px, 3vw, 34px);
}

.contact-links-panel p {
  max-width: 660px;
  margin: 0;
  color: #c8d0dc;
  font-size: 13px;
  line-height: 1.8;
}

.light-action {
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

@media (max-width: 1080px) {
  .contact-hero-inner {
    gap: 36px;
  }

  .brief-layout {
    grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  }

  .fit-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .contact-hero {
    padding: 56px 0 62px;
  }

  .contact-hero-inner {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .hero-copy {
    max-width: 720px;
  }

  .hero-visual {
    width: min(100%, 650px);
    margin: 0 auto;
  }

  .brief-layout {
    grid-template-columns: 1fr;
  }

  .brief-guide {
    order: -1;
  }

  .step-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px 16px;
  }

  .step-list::before {
    display: none;
  }
}

@media (max-width: 600px) {
  .contact-hero {
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

  .hero-visual {
    border-radius: 20px;
  }

  .project-brief-section,
  .fit-section,
  .next-step-section {
    padding: 56px 0;
  }

  .section-heading {
    margin-bottom: 26px;
  }

  .section-heading h2 {
    font-size: 28px;
  }

  .section-heading p {
    font-size: 14px;
  }

  .project-form,
  .brief-guide {
    border-radius: 20px;
  }

  .project-form {
    gap: 16px;
    padding: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-footer {
    align-items: stretch;
    flex-direction: column;
  }

  .form-footer button {
    width: 100%;
  }

  .brief-guide {
    padding: 20px;
  }

  .fit-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .fit-card {
    min-height: 0;
    padding: 20px;
  }

  .step-list {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .step-item {
    display: grid;
    grid-template-columns: 50px minmax(0, 1fr);
    gap: 14px;
    padding: 0 0 28px;
    text-align: right;
  }

  .step-item:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 46px;
    right: 24px;
    bottom: 0;
    width: 1px;
    background: var(--line);
  }

  .step-number {
    width: 48px;
    height: 48px;
    grid-row: 1 / span 2;
    box-shadow: none;
  }

  .step-item h3 {
    margin: 2px 0 5px;
  }

  .contact-links-section {
    padding: 18px 0 56px;
  }

  .contact-links-panel {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    padding: 26px 22px;
    border-radius: 22px;
  }

  .contact-links-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 390px) {
  .hero-actions,
  .contact-links-actions {
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
