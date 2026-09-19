<template>
  <main class="contact-page">
    <SiteHeader />

    <section class="contact-hero container">
      <div class="contact-intro">
        <span class="eyebrow">شروع یک همکاری جدید</span>
        <h1>
          ایده‌ای برای ساخت<br />
          یک محصول دیجیتال دارید؟
        </h1>
        <p>
          ما به کسب‌وکارها کمک می‌کنیم تا ایده‌های خود را به محصولات دیجیتال،
          سیستم‌های اختصاصی و تجربه‌های هوشمند تبدیل کنند. از شناخت مسئله تا
          طراحی و توسعه، همراه شما برای ساخت راهکارهای واقعی هستیم.
        </p>
        <a class="primary-action" href="mailto:info@nexastudio.ir">شروع گفتگو</a>
      </div>
    </section>

    <section class="process container">
      <div class="section-heading">
        <h2>مسیر همکاری ما</h2>
        <p>یک مسیر شفاف برای تبدیل ایده به محصول.</p>
      </div>

      <div class="steps">
        <article><span>01</span><h3>ارسال مسئله</h3><p>نیازها، اهداف و چالش‌های کسب‌وکار خود را با ما مطرح می‌کنید.</p></article>
        <article><span>02</span><h3>بررسی مسیر</h3><p>راهکار مناسب، معماری و مسیر اجرای پروژه را بررسی می‌کنیم.</p></article>
        <article><span>03</span><h3>ساخت محصول</h3><p>محصول را با تمرکز روی کیفیت، توسعه‌پذیری و ارزش واقعی می‌سازیم.</p></article>
      </div>
    </section>

    <section class="contact-final container">
      <div>
        <h2>آماده شروع هستید؟</h2>
        <p>درباره ایده یا پروژه خود با ما صحبت کنید.</p>
      </div>
      <a href="mailto:info@nexastudio.ir">info@nexastudio.ir</a>
    </section>
  </main>
</template>

<style scoped>
.contact-page{direction:rtl;background:#f7f2eb;min-height:100vh;color:#111827}
.container{max-width:1180px;margin:auto;padding:0 28px}
.contact-hero{padding:42px 28px 72px;display:flex;justify-content:center}
.contact-intro{max-width:760px;text-align:center}
.eyebrow{color:#d95f00;font-size:14px;font-weight:700}
h1{font-size:clamp(30px,3.8vw,46px);line-height:1.55;color:#2f3a45;margin:18px 0 22px;font-weight:800}
.contact-intro p{font-size:18px;line-height:2;color:#667085;max-width:700px;margin:auto}
.primary-action{display:inline-block;margin-top:28px;background:#d95f00;color:#fff;padding:14px 34px;border-radius:16px;text-decoration:none;font-weight:700}
.process{padding-bottom:80px}
.section-heading{margin-bottom:36px}
.section-heading h2,.contact-final h2{font-size:32px;color:#2f3a45}
.section-heading p,.contact-final p{color:#667085;font-size:17px;line-height:2}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.steps article{background:#fff;border:1px solid #ead8c7;border-radius:28px;padding:32px;min-height:210px}
.steps span{color:#d95f00;font-size:28px;font-weight:800}
.steps h3{margin:16px 0;font-size:22px;color:#2f3a45}
.steps p{color:#667085;line-height:2}
.contact-final{background:#222a33;border-radius:36px;padding:42px;margin-bottom:70px;color:white;display:flex;align-items:center;justify-content:space-between;gap:30px}
.contact-final h2{color:white;margin:0}
.contact-final p{color:#d0d5dd}
.contact-final a{color:#ffb27a;font-weight:700;text-decoration:none;font-size:19px}
@media(max-width:800px){.contact-hero{padding-top:35px}.steps{grid-template-columns:1fr}.contact-final{flex-direction:column;align-items:flex-start}.section-heading h2,.contact-final h2{font-size:27px}}
</style>