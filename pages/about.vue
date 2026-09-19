<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <div class="hero-copy">
        <span class="eyebrow">درباره NexaStudio</span>
        <h1>ما محصول دیجیتال می‌سازیم،<br />نه فقط نرم‌افزار.</h1>
        <p>
          ترکیبی از معماری نرم‌افزار، توسعه محصول و فناوری هوشمند برای ساخت
          سیستم‌های دیجیتالی که برای رشد طراحی شده‌اند.
        </p>
        <div class="proof-line">
          <span>20+ سال تجربه مهندسی</span>
          <span>سازندگان Sheedaneh و Hevix</span>
        </div>
      </div>
      <div class="hero-visual">
        <div class="visual-card main-card">
          <small>Product Engineering Studio</small>
          <strong>Build.<br />Scale.<br />Improve.</strong>
        </div>
        <div class="visual-card accent-card">
          <span>Built Experience</span>
          <b>Sheedaneh</b>
          <b>Hevix</b>
        </div>
      </div>
    </section>

    <section class="story container">
      <div>
        <span class="label">Who We Are</span>
        <h2>تجربه ما از ساخت سیستم‌ها، مسیر ساخت محصول را شکل داد.</h2>
        <p>
          سال‌ها فعالیت در مهندسی نرم‌افزار به ما یاد داد که محصول موفق فقط با
          کدنویسی ساخته نمی‌شود؛ تصمیم‌های معماری، شناخت مسئله و طراحی برای
          آینده هستند که تفاوت ایجاد می‌کنند.
        </p>
        <p>
          NexaStudio برای تبدیل ایده‌های پیچیده به محصولات واقعی شکل گرفت؛
          محصولاتی که هم از نظر فنی قابل اتکا باشند و هم برای کسب‌وکار ارزش
          واقعی ایجاد کنند.
        </p>
      </div>
      <div class="principles">
        <article><b>01</b><h3>Build with purpose</h3><p>هر تصمیم فنی باید یک هدف واقعی را دنبال کند.</p></article>
        <article><b>02</b><h3>Simplicity matters</h3><p>راهکارهای ساده و قابل توسعه، ماندگارتر هستند.</p></article>
        <article><b>03</b><h3>Technology creates value</h3><p>فناوری زمانی مهم است که مسئله‌ای واقعی را حل کند.</p></article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#111827;min-height:100vh}
.container{max-width:1240px;margin:auto;padding:0 32px}
.hero{display:grid;grid-template-columns:1fr .85fr;gap:70px;align-items:center;padding:120px 32px 100px}
.eyebrow,.label{display:inline-block;background:#fff0e6;color:#d95f00;border-radius:999px;padding:8px 18px}
.hero h1{font-size:clamp(42px,6vw,76px);line-height:1.25;letter-spacing:-2px;margin:30px 0}
.hero p{max-width:650px;color:#667085;font-size:20px;line-height:2}
.proof-line{display:flex;flex-wrap:wrap;gap:12px;margin-top:40px}
.proof-line span{background:white;border:1px solid #eadfd7;border-radius:999px;padding:12px 20px}
.hero-visual{position:relative;min-height:420px}
.visual-card{border-radius:36px;padding:40px;position:absolute;box-shadow:0 25px 70px rgba(16,24,40,.1)}
.main-card{background:#111827;color:white;inset:0 30px 60px 0}
.main-card strong{display:block;font-size:48px;line-height:1.15;margin-top:35px}
.accent-card{background:white;border:1px solid #eadfd7;bottom:0;left:20px;display:flex;flex-direction:column;gap:12px}
.accent-card span{color:#d95f00}.accent-card b{font-size:22px}
.story{display:grid;grid-template-columns:1.35fr .8fr;gap:60px;padding-bottom:120px}
.story h2{font-size:46px;line-height:1.4;margin:30px 0}
.story p{color:#667085;font-size:18px;line-height:2}
.principles{display:flex;flex-direction:column;gap:18px}
.principles article{background:white;border:1px solid #eadfd7;border-radius:28px;padding:28px}
.principles b{color:#d95f00;font-size:32px}
.principles h3{margin:12px 0}
@media(max-width:767px){.hero,.story{grid-template-columns:1fr}.container{padding:0 20px}.hero h1,.story h2{font-size:34px}.hero-visual{min-height:360px}.main-card strong{font-size:36px}}
</style>