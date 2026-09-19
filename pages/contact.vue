<template>
  <main class="contact-page">
    <SiteHeader />

    <section class="contact-hero container">
      <div class="contact-intro">
        <span class="eyebrow">شروع یک همکاری جدید</span>
        <h1>یک ایده دارید؟<br />بیایید آن را به یک محصول واقعی تبدیل کنیم.</h1>
        <p>ما به کسب‌وکارها کمک می‌کنیم تا ایده‌های خود را به محصولات دیجیتال، سیستم‌های اختصاصی و تجربه‌های هوشمند تبدیل کنند. از اولین گفتگو تا توسعه و رشد محصول، همراه شما هستیم.</p>
        <a class="primary-action" href="mailto:info@nexastudio.ir">شروع گفتگو</a>
      </div>
    </section>

    <section class="process container">
      <div class="section-heading">
        <h2>مسیر همکاری ما</h2>
        <p>فرآیند را ساده و شفاف نگه می‌داریم تا از ابتدا تصویر روشنی داشته باشید.</p>
      </div>
      <div class="steps">
        <article><span>01</span><h3>ارسال مسئله</h3><p>نیازها، اهداف و چالش‌های کسب‌وکار خود را با ما مطرح می‌کنید.</p></article>
        <article><span>02</span><h3>بررسی و پیشنهاد مسیر</h3><p>راهکار مناسب، معماری و مسیر اجرای پروژه را بررسی می‌کنیم.</p></article>
        <article><span>03</span><h3>ساخت و توسعه</h3><p>محصول را با تمرکز روی کیفیت، توسعه‌پذیری و ارزش واقعی می‌سازیم.</p></article>
      </div>
    </section>

    <section class="contact-final container">
      <div><h2>آماده شروع هستید؟</h2><p>درباره ایده یا پروژه خود با ما صحبت کنید تا بهترین مسیر را پیدا کنیم.</p></div>
      <a href="mailto:info@nexastudio.ir">info@nexastudio.ir</a>
    </section>
  </main>
</template>

<style scoped>
.contact-page{direction:rtl;background:#f7f2eb;min-height:100vh;color:#111827}
.container{max-width:1120px;margin:auto;padding:0 28px}
.contact-hero{padding:48px 28px 52px;text-align:right}
.contact-intro{max-width:720px;margin-right:0}
.eyebrow{color:#d95f00;font-size:14px;font-weight:700}
h1{font-size:clamp(32px,4vw,46px);line-height:1.55;color:#2f3a45;margin:18px 0 16px;letter-spacing:-.02em}
.contact-intro p{font-size:17px;line-height:2;color:#667085;max-width:650px}
.primary-action{display:inline-block;margin-top:22px;background:#d95f00;color:#fff;padding:13px 30px;border-radius:14px;text-decoration:none;font-weight:700}
.process{padding-bottom:55px}
.section-heading{margin-bottom:28px}
.section-heading h2,.contact-final h2{font-size:30px;color:#2f3a45;margin-bottom:8px}
.section-heading p,.contact-final p{color:#667085;font-size:16px;line-height:2}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.steps article{background:#fff;border:1px solid #ead8c7;border-radius:24px;padding:26px;min-height:180px}
.steps span{color:#d95f00;font-size:26px;font-weight:800}
.steps h3{margin:12px 0;font-size:20px;color:#2f3a45}
.steps p{color:#667085;line-height:2;font-size:15px}
.contact-final{background:#222a33;border-radius:30px;padding:34px;margin-bottom:45px;color:white;display:flex;align-items:center;justify-content:space-between;gap:24px}
.contact-final h2{color:white;margin:0 0 8px}
.contact-final p{color:#d0d5dd;margin:0}
.contact-final a{color:#ffb27a;font-weight:700;text-decoration:none;font-size:18px}
@media(max-width:800px){.contact-hero{padding-top:32px;padding-bottom:36px}.steps{grid-template-columns:1fr}.contact-final{flex-direction:column;align-items:flex-start;padding:28px}.section-heading h2,.contact-final h2{font-size:26px}}
</style>