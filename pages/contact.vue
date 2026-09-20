<script setup lang="ts">
import { reactive, ref } from "vue";

usePageSeo({
  title: "تماس و شروع همکاری | NexaStudio",
  description:
    "برای طراحی و توسعه محصول دیجیتال، سامانه اختصاصی، هوش مصنوعی، جستجوی هوشمند، سئو یا توسعه محصول موجود با NexaStudio تماس بگیرید.",
  path: "/contact",
  image: "/images/hero/contact-hero.webp",
});

const heroSrc = ref("/images/hero/contact-hero.webp");
let heroRetryCount = 0;

const projectBrief = reactive({
  fullName: "",
  contactWay: "",
  businessName: "",
  projectType: "",
  message: "",
});

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/hero/contact-hero.webp",
      type: "image/webp",
      fetchpriority: "high",
    },
  ],
});

const recoverHeroImage = () => {
  if (heroRetryCount === 0) {
    heroRetryCount = 1;
    heroSrc.value = "/images/hero/contact-hero.webp?retry=1";
    return;
  }

  if (heroRetryCount === 1) {
    heroRetryCount = 2;
    heroSrc.value = "/images/hero/contact-hero1.webp";
  }
};

const submitProjectBrief = () => {
  const lines = [
    "سلام، برای بررسی یک پروژه با NexaStudio پیام می‌دهم.",
    "",
    `نام: ${projectBrief.fullName}`,
    `راه ارتباطی: ${projectBrief.contactWay}`,
    projectBrief.businessName
      ? `کسب‌وکار: ${projectBrief.businessName}`
      : null,
    `موضوع پروژه: ${projectBrief.projectType}`,
    "",
    "شرح مسئله / هدف:",
    projectBrief.message,
  ].filter(Boolean);

  const url = `https://wa.me/989379407868?text=${encodeURIComponent(
    lines.join("\n"),
  )}`;

  if (import.meta.client) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
</script>

<template>
  <main class="contact-page">
    <SiteHeader />

    <section class="contact-hero">
      <h1 class="sr-only">
        شروع همکاری با NexaStudio برای طراحی و توسعه محصول دیجیتال
      </h1>
      <img
        :src="heroSrc"
        alt="شروع همکاری و تبدیل ایده به محصول"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        @error="recoverHeroImage"
      />
    </section>

    <section class="contact-channels-section" aria-labelledby="contact-channels-title">
      <div class="container">
        <div class="contact-channels-heading">
          <span class="section-badge">راه‌های ارتباطی</span>
          <h2 id="contact-channels-title">مستقیم با ما در ارتباط باشید</h2>
          <p>برای شروع گفتگو می‌توانید تماس بگیرید، در واتساپ پیام بدهید یا ایمیل ارسال کنید.</p>
        </div>

        <div class="contact-channels-grid">
          <a class="contact-channel-card" href="tel:+989379407868">
            <span class="channel-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7.4 4.5 9.6 8c.3.5.2 1-.2 1.4l-1.2 1.2c1.2 2.4 2.8 4 5.2 5.2l1.2-1.2c.4-.4.9-.5 1.4-.2l3.5 2.2c.5.3.7.9.5 1.4-.5 1.3-1.7 2.2-3.1 2.2C10.3 20.2 3.8 13.7 3.8 7.1c0-1.4.9-2.6 2.2-3.1.5-.2 1.1 0 1.4.5Z" />
              </svg>
            </span>
            <span class="channel-copy">
              <small>تماس تلفنی</small>
              <strong dir="ltr">0937 940 7868</strong>
              <span>برای گفتگوی مستقیم درباره پروژه</span>
            </span>
            <span class="channel-action" aria-hidden="true">←</span>
          </a>

          <a
            class="contact-channel-card"
            href="https://wa.me/989379407868"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="channel-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M20 11.7A8 8 0 0 1 8.2 18.8L4 20l1.2-4.1A8 8 0 1 1 20 11.7Z" />
                <path d="M8.2 8.3c.5 2.8 2.7 5 5.5 5.5M8.3 8.2l1.4 2-1 1.1M13.7 13.8l-2-1.4-1.1 1" />
              </svg>
            </span>
            <span class="channel-copy">
              <small>واتساپ</small>
              <strong dir="ltr">0937 940 7868</strong>
              <span>برای ارسال پیام و توضیح اولیه پروژه</span>
            </span>
            <span class="channel-action" aria-hidden="true">←</span>
          </a>

          <a
            class="contact-channel-card"
            href="mailto:zhr.keshavarz@gmail.com"
          >
            <span class="channel-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
                <path d="m5 7 7 5.2L19 7" />
              </svg>
            </span>
            <span class="channel-copy">
              <small>ایمیل</small>
              <strong dir="ltr">zhr.keshavarz@gmail.com</strong>
              <span>برای ارسال شرح پروژه، فایل یا جزئیات بیشتر</span>
            </span>
            <span class="channel-action" aria-hidden="true">←</span>
          </a>
        </div>
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
          <form class="project-form" aria-describedby="form-status" @submit.prevent="submitProjectBrief">
            <div class="form-row">
              <div class="field-group">
                <label for="full-name">نام و نام خانوادگی</label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  v-model.trim="projectBrief.fullName"
                  autocomplete="name"
                  placeholder="نام شما"
                  required
                />
              </div>

              <div class="field-group">
                <label for="contact-way">راه ارتباطی</label>
                <input
                  id="contact-way"
                  name="contact-way"
                  v-model.trim="projectBrief.contactWay"
                  type="text"
                  placeholder="ایمیل یا شماره تماس"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="field-group">
                <label for="business-name">نام کسب‌وکار</label>
                <input
                  id="business-name"
                  name="business-name"
                  v-model.trim="projectBrief.businessName"
                  type="text"
                  autocomplete="organization"
                  placeholder="اختیاری"
                />
              </div>

              <div class="field-group">
                <label for="project-type">موضوع پروژه</label>
                <select id="project-type" v-model="projectBrief.projectType" name="project-type" required>
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
                v-model.trim="projectBrief.message"
                rows="7"
                placeholder="مثلاً چه چیزی می‌خواهید بسازید یا در محصول فعلی چه مسئله‌ای دارید؟"
                required
              ></textarea>
            </div>

            <div class="form-footer">
              <button type="submit">
                ارسال در واتساپ
              </button>
              <p id="form-status">
                اطلاعات فرم در سایت ذخیره نمی‌شود؛ با ارسال، پیام آماده‌شده در واتساپ باز می‌شود.
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
  padding: 0 0 25px;
}

.contact-hero img {
  display: block;
  width: 100%;
  max-height: 600px;
}

.contact-channels-section {
  padding: 26px 0 54px;
}

.contact-channels-heading {
  margin-bottom: 24px;
  text-align: center;
}

.contact-channels-heading h2 {
  margin: 12px 0 6px;
  color: var(--text);
  font-size: clamp(26px, 3vw, 36px);
  line-height: 1.5;
}

.contact-channels-heading p {
  margin: 0;
  color: var(--muted);
  font-size: 15.5px;
  line-height: 1.8;
}

.contact-channels-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.contact-channel-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  min-width: 0;
  min-height: 128px;
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--surface);
  box-shadow: 0 12px 32px rgba(16, 28, 50, 0.045);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

a.contact-channel-card:hover {
  transform: translateY(-3px);
  border-color: rgba(184, 107, 53, 0.36);
  box-shadow: 0 16px 38px rgba(16, 28, 50, 0.07);
}

.channel-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #faece4;
  color: var(--accent);
}

.channel-icon svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.channel-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 3px;
  text-align: right;
}

.channel-copy small {
  color: var(--accent);
  font-size: 14px;
  font-weight: 800;
}

.channel-copy strong {
  color: var(--text);
  font-size: 18px;
  line-height: 1.5;
}

.channel-copy strong[dir="ltr"] {
  width: fit-content;
  direction: ltr;
  unicode-bidi: isolate;
  letter-spacing: 0.02em;
}

.channel-copy span {
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.7;
}

.channel-action {
  color: var(--accent);
  font-size: 20px;
  font-weight: 700;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 5px 18px;
  border: 1px solid #d86b4a;
  border-radius: 999px;
  background: #fff7f4;
  color: #c56839;
  font-size: 15.5px;
  font-weight: 700;
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
  font-size: 16px;
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
  font-size: 14.5px;
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
  font-size: 14.5px;
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
  min-width: 168px;
  min-height: 48px;
  border: 1px solid rgba(126, 66, 35, 0.24);
  border-radius: 999px;
  background: linear-gradient(135deg, #c17a42, #96502d);
  color: #fff;
  font: inherit;
  font-size: 15.5px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(155, 84, 45, 0.16);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.form-footer button:hover {
  transform: translateY(-1px);
  box-shadow: 0 13px 28px rgba(155, 84, 45, 0.22);
}

.form-footer button:focus-visible {
  outline: 3px solid rgba(184, 107, 53, 0.24);
  outline-offset: 3px;
}

.form-footer p {
  margin: 0;
  color: #8a7769;
  font-size: 14.5px;
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
  font-size: 14px;
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
  font-size: 14.5px;
}

.guide-list span {
  display: block;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.75;
}

.guide-note {
  margin-top: 18px;
  padding: 14px;
  border-radius: 14px;
  background: rgba(184, 107, 53, 0.08);
  color: #78563e;
  font-size: 14.5px;
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
  font-size: 14px;
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
  font-size: 14.5px;
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
  font-size: 14px;
  line-height: 1.85;
}


@media (max-width: 1080px) {
  .brief-layout {
    grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  }

  .fit-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .contact-channels-grid {
    gap: 12px;
  }

  .contact-channel-card {
    grid-template-columns: auto minmax(0, 1fr);
    min-height: 0;
    padding: 17px;
  }

  .channel-action,
  .channel-status {
    grid-column: 2;
    justify-self: start;
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
  .contact-channels-section {
    padding: 20px 0 46px;
  }

  .contact-channels-heading {
    margin-bottom: 20px;
  }

  .contact-channels-heading h2 {
    font-size: 26px;
  }

  .contact-channels-grid {
    grid-template-columns: 1fr;
  }

  .contact-channel-card {
    grid-template-columns: auto minmax(0, 1fr) auto;
    padding: 18px;
  }

  .channel-action,
  .channel-status {
    grid-column: auto;
    justify-self: auto;
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
    font-size: 15.5px;
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

}

</style>
