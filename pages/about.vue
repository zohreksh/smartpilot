<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <div class="hero-visual">
        <div class="visual-frame">
          <div class="visual-label">NexaStudio</div>
          <div class="visual-title">People<br />Products<br />Progress</div>
          <div class="visual-line"></div>
          <div class="visual-products">
            <span>Sheedaneh</span>
            <span>Hevix</span>
          </div>
        </div>
      </div>

      <div class="hero-copy">
        <span class="eyebrow">درباره ما</span>
        <h1>ما سازنده<br /><strong>محصولات دیجیتال</strong> هستیم</h1>
        <p>
          ترکیبی از تجربه مهندسی نرم‌افزار، معماری سیستم و نگاه محصول؛
          برای ساخت راهکارهایی که در دنیای واقعی ارزش ایجاد می‌کنند.
        </p>
        <div class="signature">BETTER PRODUCTS<br />BRIGHTER BUSINESS</div>
      </div>
    </section>

    <section class="story container">
      <div class="story-number">20+</div>
      <div>
        <span class="eyebrow">داستان ما</span>
        <h2>از ساخت سیستم‌های واقعی تا ساختن محصول</h2>
        <p>تجربه ما در مهندسی نرم‌افزار به ما یاد داد که محصول موفق فقط با کد ساخته نمی‌شود؛ با شناخت مسئله، معماری درست و تصمیم‌های دقیق ساخته می‌شود.</p>
        <p>NexaStudio برای تبدیل این تجربه به محصولات دیجیتال ماندگار شکل گرفت.</p>
      </div>
    </section>

    <section class="manifest container">
      <h2>چیزی که به آن باور داریم</h2>
      <div class="manifest-list">
        <p>Architecture before code</p>
        <p>Product before features</p>
        <p>Technology with purpose</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#111827;overflow:hidden}
.container{max-width:1180px;margin:auto;padding:0 28px}
.hero{min-height:700px;display:grid;grid-template-columns:.95fr 1fr;gap:90px;align-items:center}
.eyebrow{display:inline-block;color:#d95f00;background:#fff0e6;border-radius:30px;padding:7px 18px;font-size:14px}
.hero h1{font-size:clamp(42px,5vw,64px);line-height:1.35;margin:28px 0}.hero h1 strong{color:#d95f00}
.hero p,.story p{color:#667085;font-size:18px;line-height:2;max-width:600px}
.hero-visual{display:flex;justify-content:center}.visual-frame{width:430px;height:430px;background:#101828;border-radius:44px;padding:55px;color:white;position:relative;box-shadow:0 30px 70px rgba(16,24,40,.15)}
.visual-label{color:#f97316;font-size:14px}.visual-title{font-size:54px;font-weight:800;line-height:1.15;margin-top:55px}.visual-line{height:1px;background:#ffffff33;margin-top:45px}.visual-products{position:absolute;bottom:40px;display:flex;gap:12px}.visual-products span{background:white;color:#111827;border-radius:20px;padding:10px 18px}
.signature{margin-top:45px;color:#98a2b3;letter-spacing:5px;font-size:12px}
.story{display:grid;grid-template-columns:.35fr 1fr;gap:60px;padding:80px 28px}.story-number{font-size:120px;font-weight:800;color:#d95f00}.story h2{font-size:44px;line-height:1.45}
.manifest{padding:80px 28px}.manifest h2{text-align:center;font-size:40px}.manifest-list{display:flex;justify-content:center;gap:50px;flex-wrap:wrap;margin-top:40px}.manifest-list p{font-size:26px;font-weight:700}
@media(max-width:800px){.hero,.story{grid-template-columns:1fr;gap:35px}.hero{padding-top:70px}.hero h1,.story h2{font-size:34px}.visual-frame{width:100%;height:360px}.visual-title{font-size:42px}.story-number{font-size:80px}.manifest-list{display:block;text-align:center}}
</style>