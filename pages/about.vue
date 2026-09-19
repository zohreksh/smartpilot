<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <div class="hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">NexaStudio</span>
          <h1>ما فقط نرم‌افزار نمی‌سازیم؛<br />محصولاتی می‌سازیم که رشد می‌کنند.</h1>
          <p>
            ما یک استودیوی مهندسی محصول هستیم که تجربه معماری نرم‌افزار، توسعه
            Full Stack و فناوری‌های هوشمند را برای ساخت سیستم‌های دیجیتال واقعی
            ترکیب می‌کند.
          </p>
          <div class="signature">
            <span>حسین کولانی</span>
            <span>زهره کشاورز</span>
            <small>Product Engineering Studio</small>
          </div>
        </div>
        <div class="hero-panel">
          <span>Built Experience</span>
          <strong>Sheedaneh</strong>
          <strong>Hevix</strong>
          <p>محصولات واقعی ساخته شده با معماری اختصاصی، جستجوی هوشمند و سیستم‌های قابل توسعه.</p>
        </div>
      </div>
    </section>

    <section class="story container">
      <div class="story-intro">
        <span>داستان ما</span>
        <h2>تجربه ما از ساخت سیستم‌ها، به ساخت محصول تبدیل شد.</h2>
        <p>
          سال‌ها فعالیت در مهندسی نرم‌افزار به ما آموخت که تفاوت یک محصول موفق
          فقط در کد نیست؛ در تصمیم‌های معماری، شناخت مسئله و طراحی برای آینده است.
        </p>
        <p>
          NexaStudio برای ساخت راهکارهایی شکل گرفت که هم از نظر فنی قدرتمند باشند
          و هم برای کسب‌وکار ارزش قابل اندازه‌گیری ایجاد کنند.
        </p>
      </div>
      <div class="principles">
        <article><b>01</b><h3>Architecture First</h3><p>ساخت پایه‌ای که محدود به امروز نباشد.</p></article>
        <article><b>02</b><h3>Product Thinking</h3><p>حل مسئله کسب‌وکار قبل از انتخاب تکنولوژی.</p></article>
        <article><b>03</b><h3>Real Experience</h3><p>تجربه عملی از ساخت محصولات واقعی.</p></article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#111827;min-height:100vh}
.container{max-width:1240px;margin:auto;padding:0 32px}
.hero{padding:120px 32px}
.hero-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:70px;align-items:center}
.eyebrow,.story-intro>span{display:inline-block;color:#d95f00;background:#fff0e6;border-radius:999px;padding:8px 20px}
.hero h1{font-size:clamp(42px,5vw,70px);line-height:1.25;letter-spacing:-2px;margin:32px 0}
.hero p,.story p{color:#667085;font-size:19px;line-height:2}
.signature{display:flex;gap:14px;flex-wrap:wrap;margin-top:40px;align-items:center}
.signature span{font-weight:600}.signature small{color:#d95f00}
.hero-panel{background:#111827;color:white;border-radius:36px;padding:45px;display:flex;flex-direction:column;gap:18px;box-shadow:0 30px 80px rgba(0,0,0,.12)}
.hero-panel span{color:#f97316}.hero-panel strong{font-size:38px}.hero-panel p{color:#d0d5dd;font-size:16px}
.story{display:grid;grid-template-columns:1.4fr .8fr;gap:60px;padding-bottom:120px}
.story h2{font-size:46px;line-height:1.4;margin:30px 0}
.principles{display:flex;flex-direction:column;gap:20px}
.principles article{padding:30px;border:1px solid #eadfd7;border-radius:28px;background:white}
.principles b{color:#d95f00;font-size:30px}.principles h3{margin:12px 0}.principles p{font-size:15px}
@media(max-width:767px){.hero-grid,.story{grid-template-columns:1fr}.hero h1{font-size:36px}.story h2{font-size:30px}.container{padding:0 20px}}
</style>