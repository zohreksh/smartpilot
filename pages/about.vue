<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <div class="hero-copy">
        <span class="eyebrow">درباره NexaStudio</span>
        <h1>ما محصول‌های دیجیتال می‌سازیم،<br /><strong>نه فقط نرم‌افزار</strong></h1>
        <p>
          ترکیبی از معماری نرم‌افزار، مهندسی محصول و فناوری هوشمند برای ساخت
          سیستم‌هایی که در دنیای واقعی رشد می‌کنند.
        </p>
        <div class="hero-meta">
          <span>20+ سال تجربه مهندسی</span>
          <span>سازندگان Sheedaneh و Hevix</span>
        </div>
      </div>

      <div class="hero-canvas">
        <div class="product-layer main">
          <small>PRODUCT STUDIO</small>
          <h2>Idea<br />→ Product<br />→ Impact</h2>
          <div class="divider"></div>
          <div class="product-links">
            <span>Sheedaneh</span>
            <span>Hevix</span>
          </div>
        </div>
        <div class="floating-note">Architecture<br />AI<br />Search</div>
      </div>
    </section>

    <section class="story container">
      <div class="story-number">20+</div>
      <div>
        <span class="eyebrow">داستان ما</span>
        <h2>از ساخت سیستم‌های واقعی تا ساخت محصولات دیجیتال</h2>
        <p>تجربه ما در مهندسی نرم‌افزار به ما یاد داد که محصول موفق فقط با کد ساخته نمی‌شود؛ با شناخت مسئله، معماری درست و تصمیم‌های دقیق ساخته می‌شود.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#111827;overflow:hidden}
.container{max-width:1180px;margin:auto;padding:0 28px}
.hero{min-height:720px;display:grid;grid-template-columns:1fr .95fr;gap:70px;align-items:center}
.eyebrow{display:inline-block;color:#d95f00;background:#fff0e6;border-radius:30px;padding:8px 18px;font-size:14px}
.hero h1{font-size:clamp(40px,4.5vw,58px);line-height:1.4;margin:28px 0}.hero h1 strong{color:#d95f00}
.hero p{max-width:560px;color:#667085;font-size:18px;line-height:2}
.hero-meta{display:flex;flex-wrap:wrap;gap:12px;margin-top:36px}.hero-meta span{background:#fff;border:1px solid #eadfd7;border-radius:24px;padding:11px 18px}
.hero-canvas{position:relative;height:470px;display:flex;align-items:center;justify-content:center}
.product-layer{width:380px;height:380px;background:#101828;color:white;border-radius:40px;padding:45px;box-shadow:0 30px 80px rgba(16,24,40,.16)}
.product-layer small{color:#f97316}.product-layer h2{font-size:46px;line-height:1.15;margin:45px 0 35px}.divider{height:1px;background:#ffffff30}.product-links{display:flex;gap:12px;margin-top:30px}.product-links span{background:white;color:#111827;border-radius:20px;padding:9px 16px}
.floating-note{position:absolute;left:25px;bottom:55px;background:#fff;border:1px solid #eadfd7;border-radius:24px;padding:20px;line-height:1.8;font-weight:600}
.story{display:grid;grid-template-columns:.35fr 1fr;gap:60px;padding:80px 28px}.story-number{font-size:110px;font-weight:800;color:#d95f00}.story h2{font-size:42px;line-height:1.5}.story p{color:#667085;font-size:18px;line-height:2}
@media(max-width:800px){.hero,.story{grid-template-columns:1fr;gap:35px}.hero{padding-top:70px}.hero h1,.story h2{font-size:34px}.hero-canvas{height:360px}.product-layer{width:100%;height:auto}.product-layer h2{font-size:34px}.floating-note{left:0}.story-number{font-size:80px}}
</style>