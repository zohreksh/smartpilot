<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <div class="hero-copy">
        <span class="eyebrow">NexaStudio</span>
        <h1>ما فقط نرم‌افزار نمی‌سازیم؛<br />مسیر ساخت محصول را طراحی می‌کنیم.</h1>
        <p>ترکیبی از مهندسی نرم‌افزار، معماری سیستم و نگاه محصول برای ساخت راهکارهای دیجیتال قابل توسعه.</p>
        <div class="stats">
          <span>20+ سال تجربه مهندسی</span>
          <span>سازندگان Sheedaneh و Hevix</span>
        </div>
      </div>
      <div class="hero-art">
        <div class="system-card">
          <small>PRODUCT ENGINEERING</small>
          <strong>Idea<br />→ Product<br />→ Growth</strong>
          <div class="line"></div>
          <p>Architecture · AI · Product Thinking</p>
        </div>
      </div>
    </section>

    <section class="story container">
      <div class="story-number">20+</div>
      <div>
        <span class="eyebrow">داستان ما</span>
        <h2>از ساخت سیستم‌های واقعی، نگاه ما به محصول شکل گرفت.</h2>
        <p>سال‌ها تجربه در مهندسی نرم‌افزار به ما آموخت که تفاوت یک محصول موفق فقط در کد نیست؛ در شناخت مسئله، معماری درست و تصمیم‌های بلندمدت است.</p>
        <p>NexaStudio برای ساخت محصولاتی شکل گرفت که هم از نظر فنی قدرتمند باشند و هم برای کسب‌وکار ارزش واقعی ایجاد کنند.</p>
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
.hero{min-height:760px;display:grid;grid-template-columns:1fr .9fr;gap:80px;align-items:center}
.eyebrow{color:#d95f00;background:#fff0e6;border-radius:30px;padding:7px 18px;display:inline-block;font-size:14px}
.hero h1{font-size:clamp(42px,5vw,62px);line-height:1.45;letter-spacing:-1px;margin:32px 0}
.hero p,.story p{color:#667085;font-size:18px;line-height:2}
.stats{display:flex;gap:14px;flex-wrap:wrap;margin-top:35px}.stats span{border:1px solid #eadfd7;background:white;border-radius:30px;padding:12px 20px}
.hero-art{display:flex;justify-content:center}.system-card{width:390px;height:390px;background:#101828;color:white;border-radius:40px;padding:45px;box-shadow:0 35px 80px rgba(16,24,40,.16)}
.system-card strong{display:block;font-size:46px;line-height:1.25;margin-top:45px}.system-card small{color:#f97316}.line{height:1px;background:#ffffff33;margin:35px 0}.system-card p{color:#d0d5dd;font-size:15px}
.story{display:grid;grid-template-columns:.4fr 1fr;gap:60px;padding:80px 28px}.story-number{font-size:130px;font-weight:800;color:#d95f00}.story h2{font-size:46px;line-height:1.45}
.manifest{padding:80px 28px}.manifest h2{text-align:center;font-size:42px}.manifest-list{display:flex;justify-content:center;gap:40px;flex-wrap:wrap;margin-top:50px}.manifest-list p{font-size:28px;font-weight:700}
@media(max-width:800px){.hero,.story{grid-template-columns:1fr;gap:35px}.hero{min-height:auto;padding-top:80px}.hero h1,.story h2{font-size:34px}.system-card{width:100%;height:auto}.system-card strong{font-size:34px}.story-number{font-size:80px}.manifest-list{display:block;text-align:center}}
</style>