<template>
  <main class="about-page">
    <SiteHeader />

    <section class="about-hero container">
      <div class="hero-stage">
        <div class="hero-copy">
          <span class="eyebrow">NexaStudio / Digital Product Studio</span>
          <h1>
            ما فقط نرم‌افزار نمی‌سازیم؛
            <br />
            مسیر ساخت محصول را طراحی می‌کنیم.
          </h1>
          <p>
            ترکیب تجربه مهندسی نرم‌افزار، معماری سیستم و تفکر محصول برای ساخت
            راهکارهای دیجیتالی که برای رشد واقعی کسب‌وکارها ساخته می‌شوند.
          </p>
          <div class="hero-meta">
            <span>20+ سال تجربه مهندسی</span>
            <span>سازندگان Sheedaneh و Hevix</span>
          </div>
        </div>

        <div class="hero-art">
          <div class="core-panel">
            <small>BUILDING DIGITAL SYSTEMS</small>
            <strong>Idea → Product → Growth</strong>
            <div class="line"></div>
            <p>Architecture · AI · Product Engineering</p>
          </div>
          <div class="floating-panel">
            <b>Sheedaneh</b>
            <span>Commerce Platform</span>
            <b>Hevix</b>
            <span>B2B Platform</span>
          </div>
        </div>
      </div>
    </section>

    <section class="story container">
      <div class="story-text">
        <span>Who We Are</span>
        <h2>تجربه ساخت سیستم‌های واقعی، نگاه ما به محصول را شکل داد.</h2>
        <p>
          ما باور داریم محصول موفق قبل از اولین خط کد ساخته می‌شود؛ با شناخت
          مسئله، تصمیم‌های معماری درست و طراحی برای آینده.
        </p>
        <p>
          NexaStudio حاصل سال‌ها تجربه توسعه نرم‌افزار و ساخت محصولاتی است که
          باید هم پایدار باشند و هم برای کسب‌وکار ارزش ایجاد کنند.
        </p>
      </div>

      <div class="manifesto">
        <div><strong>01</strong><h3>Build with purpose</h3></div>
        <div><strong>02</strong><h3>Product before features</h3></div>
        <div><strong>03</strong><h3>Technology with meaning</h3></div>
      </div>
    </section>

    <section class="closing container">
      <h2>ایده‌ای دارید که باید به یک محصول واقعی تبدیل شود؟</h2>
      <p>بیایید درباره ساخت مسیر دیجیتال آینده شما صحبت کنیم.</p>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#101828;overflow:hidden}
.container{max-width:1240px;margin:auto;padding:0 32px}
.about-hero{padding:110px 32px 90px}
.hero-stage{display:grid;grid-template-columns:1fr .9fr;gap:70px;align-items:center}
.eyebrow,.story-text>span{display:inline-block;color:#c65b16;background:#fff0e6;padding:8px 18px;border-radius:999px}
.hero-copy h1{font-size:clamp(42px,5.8vw,78px);line-height:1.25;letter-spacing:-2px;margin:35px 0}
.hero-copy p{font-size:20px;line-height:2;color:#667085;max-width:650px}
.hero-meta{display:flex;gap:14px;flex-wrap:wrap;margin-top:42px}
.hero-meta span{background:#fff;border:1px solid #eadfd7;border-radius:999px;padding:12px 22px}
.hero-art{position:relative;height:520px}
.core-panel{position:absolute;inset:30px 20px 80px 0;background:#101828;color:white;border-radius:42px;padding:50px;box-shadow:0 35px 90px rgba(16,24,40,.18)}
.core-panel strong{display:block;font-size:42px;line-height:1.2;margin:50px 0 30px}
.core-panel small{color:#f97316}.core-panel p{color:#d0d5dd}
.line{height:1px;background:#344054}
.floating-panel{position:absolute;left:0;bottom:20px;background:#fff;border:1px solid #eadfd7;border-radius:30px;padding:25px 35px;display:grid;gap:8px;box-shadow:0 20px 50px rgba(0,0,0,.08)}
.floating-panel b{font-size:22px}.floating-panel span{color:#667085}
.story{display:grid;grid-template-columns:1.2fr .8fr;gap:70px;padding-bottom:100px}
.story-text h2{font-size:48px;line-height:1.4;margin:30px 0}
.story-text p{font-size:18px;line-height:2;color:#667085}
.manifesto{display:flex;flex-direction:column;gap:20px}
.manifesto div{background:#fff;border:1px solid #eadfd7;border-radius:30px;padding:30px}
.manifesto strong{font-size:34px;color:#d95f00}
.manifesto h3{margin:15px 0 0}
.closing{background:#101828;color:white;border-radius:40px;padding:70px;margin-bottom:80px;text-align:center}
.closing h2{font-size:42px}.closing p{color:#d0d5dd}
@media(max-width:767px){.hero-stage,.story{grid-template-columns:1fr}.container{padding:0 20px}.hero-copy h1{font-size:36px}.hero-art{height:390px}.core-panel{padding:30px}.core-panel strong{font-size:30px}.story-text h2,.closing h2{font-size:32px}}
</style>