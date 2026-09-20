<template>
  <main class="contact-page">
    <SiteHeader />

    <section class="contact-hero container-fluid">
      <div class="hero-banner">
        <img
          src="/images/hero/contact-hero.webp"
          alt="شروع همکاری و تبدیل ایده به محصول"
        />
      </div>
    </section>

    <section class="contact-section container">
      <div class="contact-grid">
        <article class="contact-card message-card">
          <h2>برای ما پیام بگذارید</h2>
          <p>چند خط درباره نیاز یا ایده‌تان بنویسید. به‌زودی با شما تماس می‌گیریم.</p>

          <form class="contact-form">
            <div class="form-row">
              <input placeholder="نام و نام خانوادگی" />
              <input placeholder="ایمیل" />
            </div>
            <input placeholder="نام شرکت (اختیاری)" />
            <textarea placeholder="محتوای پیام شما"></textarea>
            <button type="button">ارسال پیام</button>
          </form>
        </article>

        <article class="contact-card info-card">
          <h2>راه‌های ارتباط با ما</h2>
          <p>از هر راهی که راحت‌تر هستید با ما در ارتباط باشید.</p>

          <div class="contact-item">
            <strong>ایمیل</strong>
            <span>hello@studio.com</span>
          </div>

          <div class="contact-item">
            <strong>تلفن</strong>
            <span>+98 21 0000 0000</span>
          </div>

          <div class="contact-item">
            <strong>ساعات پاسخگویی</strong>
            <span>شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر</span>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  direction: rtl;
  background: #f7f2eb;
  min-height: 100vh;
  color: #111827;
}

.container {
  max-width: 1120px;
  margin: auto;
  padding: 0 28px;
}

.contact-hero {
  padding: 0 28px 45px;
}

.hero-banner {
  width: 100%;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(80, 50, 20, 0.08);
}

.hero-banner img {
  display: block;
  width: 100%;
  height: auto;
}

.contact-section {
  padding-bottom: 50px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.85fr;
  gap: 24px;
}

.contact-card {
  background: #fffaf5;
  border: 1px solid #ead8c7;
  border-radius: 28px;
  padding: 34px;
}

.contact-card h2 {
  color: #243044;
  font-size: 28px;
  margin-bottom: 12px;
}

.contact-card p {
  color: #667085;
  line-height: 2;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

input,
textarea {
  border: 1px solid #e5ddd4;
  background: #fff;
  border-radius: 14px;
  padding: 15px;
  font-family: inherit;
}

textarea {
  min-height: 130px;
  resize: vertical;
}

button {
  background: #d95f00;
  color: #fff;
  border: 0;
  border-radius: 14px;
  padding: 16px;
  font-family: inherit;
  cursor: pointer;
}

.contact-item {
  padding: 18px 0;
  border-bottom: 1px solid #ead8c7;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-item strong {
  color: #243044;
}

.contact-item span {
  color: #667085;
}

@media (max-width: 800px) {
  .contact-grid,
  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-hero {
    padding: 0 16px 30px;
  }

  .contact-card {
    padding: 24px;
  }
}
</style>
