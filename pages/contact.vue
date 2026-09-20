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

    <section class="process container">
      <div class="section-heading">
        <h2>مسیر همکاری ما</h2>
        <p>فرآیندی شفاف برای تبدیل یک ایده به محصول.</p>
      </div>
      <div class="steps">
        <article>
          <span>01</span>
          <h3>ارسال مسئله</h3>
          <p>نیازها و اهداف کسب‌وکار را بررسی می‌کنیم.</p>
        </article>
        <article>
          <span>02</span>
          <h3>طراحی مسیر</h3>
          <p>راهکار، معماری و مسیر اجرای مناسب مشخص می‌شود.</p>
        </article>
        <article>
          <span>03</span>
          <h3>ساخت محصول</h3>
          <p>توسعه با تمرکز روی کیفیت و رشدپذیری انجام می‌شود.</p>
        </article>
      </div>
    </section>

    <section class="contact-final container">
      <h2>آماده شروع هستید؟</h2>
      <a href="mailto:info@nexastudio.ir">info@nexastudio.ir</a>
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
  /* padding: 32px 28px 50px; */
}
.hero-banner {
  width: 100%;
  overflow: hidden;
  /* border-radius: 30px; */
  box-shadow: 0 18px 45px rgba(80, 50, 20, 0.08);
}
.hero-banner img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 550px;
}
.process {
  padding-bottom: 45px;
}
.section-heading {
  margin-bottom: 25px;
}
.section-heading h2 {
  font-size: 30px;
  color: #2f3a45;
}
.section-heading p {
  color: #667085;
}
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.steps article {
  background: #fff;
  border: 1px solid #ead8c7;
  border-radius: 24px;
  padding: 24px;
}
.steps span {
  color: #d95f00;
  font-size: 25px;
  font-weight: 800;
}
.steps h3 {
  color: #2f3a45;
}
.steps p {
  color: #667085;
  line-height: 2;
}
.contact-final {
  background: #222a33;
  border-radius: 30px;
  padding: 30px 38px;
  margin-bottom: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact-final h2 {
  color: #fff;
}
.contact-final a {
  color: #ffb27a;
  font-weight: 700;
}
@media (max-width: 800px) {
  .contact-hero {
    padding: 20px 16px 35px;
  }
  .hero-banner {
    border-radius: 20px;
  }
  .steps {
    grid-template-columns: 1fr;
  }
  .contact-final {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
