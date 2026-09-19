<template>
  <main class="contact-page">
    <SiteHeader />

    <section class="contact-hero container">
      <div class="hero-grid">
        <div class="contact-intro">
          <span class="eyebrow">شروع یک همکاری جدید</span>
          <h1>ایده‌ای دارید؟<br />بیایید آن را به یک محصول واقعی تبدیل کنیم.</h1>
          <p>
            ما به کسب‌وکارها کمک می‌کنیم محصولات دیجیتال، سیستم‌های اختصاصی و
            قابلیت‌های هوشمند بسازند؛ از شناخت مسئله تا طراحی و توسعه همراه شما هستیم.
          </p>
          <a class="primary-action" href="mailto:info@nexastudio.ir">شروع گفتگو</a>
        </div>

        <aside class="contact-card">
          <span>ارتباط مستقیم</span>
          <strong>info@nexastudio.ir</strong>
          <p>برای بررسی ایده، نیازمندی‌ها و مسیر مناسب توسعه با ما در تماس باشید.</p>
        </aside>
      </div>
    </section>

    <section class="process container">
      <div class="section-heading">
        <h2>مسیر همکاری ما</h2>
        <p>فرآیندی شفاف برای تبدیل یک ایده به محصول.</p>
      </div>
      <div class="steps">
        <article><span>01</span><h3>ارسال مسئله</h3><p>نیازها و اهداف کسب‌وکار را بررسی می‌کنیم.</p></article>
        <article><span>02</span><h3>طراحی مسیر</h3><p>راهکار، معماری و مسیر اجرای مناسب مشخص می‌شود.</p></article>
        <article><span>03</span><h3>ساخت محصول</h3><p>توسعه با تمرکز روی کیفیت و رشدپذیری انجام می‌شود.</p></article>
      </div>
    </section>

    <section class="contact-final container">
      <h2>آماده شروع هستید؟</h2>
      <a href="mailto:info@nexastudio.ir">info@nexastudio.ir</a>
    </section>
  </main>
</template>

<style scoped>
.contact-page{direction:rtl;background:#f7f2eb;min-height:100vh;color:#111827}
.container{max-width:1120px;margin:auto;padding:0 28px}
.contact-hero{padding:42px 28px 55px}
.hero-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:45px;align-items:center}
.contact-intro{max-width:680px}
.eyebrow{color:#d95f00;font-size:14px;font-weight:700}
h1{font-size:clamp(32px,4vw,44px);line-height:1.5;color:#2f3a45;margin:18px 0}
.contact-intro p{font-size:17px;line-height:2;color:#667085}
.primary-action{display:inline-block;margin-top:22px;background:#d95f00;color:#fff;padding:13px 30px;border-radius:14px;text-decoration:none;font-weight:700}
.contact-card{background:#fff;border:1px solid #ead8c7;border-radius:26px;padding:30px;box-shadow:0 12px 30px rgba(80,50,20,.06)}
.contact-card span{color:#d95f00;font-weight:700}
.contact-card strong{display:block;font-size:22px;margin:20px 0;color:#2f3a45}
.contact-card p{color:#667085;line-height:2}
.process{padding-bottom:45px}
.section-heading{margin-bottom:25px}.section-heading h2{font-size:30px;color:#2f3a45}.section-heading p{color:#667085}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.steps article{background:#fff;border:1px solid #ead8c7;border-radius:24px;padding:24px}
.steps span{color:#d95f00;font-size:25px;font-weight:800}.steps h3{color:#2f3a45}.steps p{color:#667085;line-height:2}
.contact-final{background:#222a33;border-radius:30px;padding:30px 38px;margin-bottom:45px;display:flex;justify-content:space-between;align-items:center}
.contact-final h2{color:#fff}.contact-final a{color:#ffb27a;font-weight:700}
@media(max-width:800px){.hero-grid{grid-template-columns:1fr;gap:25px}.steps{grid-template-columns:1fr}.contact-final{flex-direction:column;align-items:flex-start}}
</style>