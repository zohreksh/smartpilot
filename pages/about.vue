<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <span class="eyebrow">ABOUT NEXASTUDIO</span>
      <h1>ما فقط نرم‌افزار نمی‌سازیم؛<br />محصولات دیجیتال خلق می‌کنیم.</h1>
      <p>
        NexaStudio یک استودیوی توسعه محصول است؛ جایی که معماری نرم‌افزار،
        مهندسی Full Stack و نگاه محصول کنار هم قرار می‌گیرند تا ایده‌ها به
        سیستم‌های واقعی، مقیاس‌پذیر و ارزشمند تبدیل شوند.
      </p>
      <div class="metrics">
        <div><strong>20+</strong><span>سال تجربه مهندسی</span></div>
        <div><strong>2</strong><span>محصول واقعی ساخته شده</span></div>
        <div><strong>∞</strong><span>مسیر برای خلق محصول</span></div>
      </div>
    </section>

    <section class="story container">
      <div class="story-content">
        <span class="label">داستان ما</span>
        <h2>از نوشتن کد تا ساختن محصول</h2>
        <p>
          تجربه سال‌ها توسعه نرم‌افزار به ما آموخت که موفقیت یک محصول فقط به
          اجرای فنی وابسته نیست. تصمیم‌های معماری، شناخت مسئله و درک مسیر رشد
          کسب‌وکار هستند که یک محصول ماندگار را شکل می‌دهند.
        </p>
        <p>
          NexaStudio با همین دیدگاه شکل گرفت؛ ترکیبی از تفکر مهندسی و نگاه
          محصول برای ساخت راهکارهایی که امروز کاربردی و فردا قابل توسعه باشند.
        </p>
      </div>

      <div class="principles">
        <article><b>01</b><h3>Architecture First</h3><p>طراحی پایه‌ای که برای رشد آینده آماده باشد.</p></article>
        <article><b>02</b><h3>Product Thinking</h3><p>تمرکز روی مسئله واقعی، نه فقط پیاده‌سازی.</p></article>
        <article><b>03</b><h3>Engineering Quality</h3><p>ساخت سیستم‌هایی پایدار، تمیز و قابل نگهداری.</p></article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#101828;min-height:100vh}
.container{max-width:1180px;margin:auto;padding:0 24px}
.hero{text-align:center;padding:150px 24px 100px;position:relative}
.eyebrow,.label{display:inline-block;color:#d95f00;background:#fff1e8;padding:8px 18px;border-radius:999px;font-size:13px;letter-spacing:.5px}
.hero h1{font-size:clamp(42px,6vw,76px);line-height:1.25;letter-spacing:-2px;margin:32px 0;color:#0b1220}
.hero p{max-width:760px;margin:auto;font-size:20px;line-height:2;color:#667085}
.metrics{display:flex;justify-content:center;gap:20px;margin-top:60px;flex-wrap:wrap}
.metrics div{background:white;border:1px solid #eee4db;border-radius:24px;padding:28px 42px;box-shadow:0 20px 50px rgba(16,24,40,.05)}
.metrics strong{display:block;font-size:42px;color:#d95f00}.metrics span{color:#667085}
.story{display:grid;grid-template-columns:1.5fr .8fr;gap:36px;padding-bottom:120px}
.story-content{background:white;border-radius:40px;padding:56px;border:1px solid #eee4db}
.story-content h2{font-size:46px;line-height:1.4;margin:24px 0}
.story-content p{font-size:18px;line-height:2.1;color:#667085}
.principles{display:flex;flex-direction:column;gap:18px}
.principles article{background:#111827;color:white;border-radius:28px;padding:30px}
.principles b{font-size:34px;color:#f97316}.principles h3{margin:14px 0}.principles p{color:#d0d5dd;line-height:1.8}
@media(max-width:767px){.hero{padding-top:100px}.hero h1{font-size:36px}.story{grid-template-columns:1fr}.story-content{padding:28px}.story-content h2{font-size:30px}}
</style>