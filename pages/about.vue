<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <span class="eyebrow">درباره NexaStudio</span>
      <h1>ما محصولاتی می‌سازیم که<br />برای رشد طراحی شده‌اند.</h1>
      <p>
        ما تیمی از معماران و توسعه‌دهندگان هستیم که تجربه مهندسی نرم‌افزار را
        با تفکر محصول ترکیب می‌کنیم؛ از شکل‌گیری ایده تا ساخت سیستم‌های واقعی.
      </p>
      <div class="proof">
        <span>Sheedaneh</span>
        <span>Hevix</span>
        <span>Product Engineering</span>
      </div>
    </section>

    <section class="story container">
      <div>
        <span class="label">داستان ما</span>
        <h2>ساخت محصول، فراتر از نوشتن کد است.</h2>
        <p>
          تجربه ما در توسعه نرم‌افزار به ما یاد داد که موفقیت یک محصول فقط به
          انتخاب تکنولوژی وابسته نیست؛ معماری، شناخت مسئله و تصمیم‌های درست
          مهندسی هستند که آینده یک محصول را می‌سازند.
        </p>
        <p>
          NexaStudio با همین نگاه شکل گرفت؛ ساخت راهکارهای دیجیتال که هم از نظر
          فنی قدرتمند باشند و هم برای کسب‌وکار ارزش واقعی ایجاد کنند.
        </p>
      </div>
      <aside>
        <div><strong>01</strong><h3>Architecture First</h3><p>طراحی پایه‌ای که آماده رشد باشد.</p></div>
        <div><strong>02</strong><h3>Product Thinking</h3><p>حل مسئله قبل از انتخاب راهکار.</p></div>
        <div><strong>03</strong><h3>Real Experience</h3><p>تجربه حاصل از ساخت محصولات واقعی.</p></div>
      </aside>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#111827;min-height:100vh}
.container{max-width:1200px;margin:auto;padding:0 24px}
.hero{text-align:center;padding:140px 24px 110px;position:relative}
.eyebrow,.label{color:#d95f00;background:#fff0e6;border-radius:999px;padding:8px 18px;display:inline-block}
.hero h1{font-size:clamp(42px,6vw,72px);line-height:1.25;letter-spacing:-1px;margin:35px 0 25px}
.hero p{max-width:760px;margin:auto;color:#667085;font-size:20px;line-height:2}
.proof{display:flex;justify-content:center;gap:14px;flex-wrap:wrap;margin-top:45px}
.proof span{background:#fff;border:1px solid #eadfd7;border-radius:999px;padding:12px 24px}
.story{display:grid;grid-template-columns:1.5fr .8fr;gap:50px;padding-bottom:120px}
.story h2{font-size:44px;line-height:1.4;margin:30px 0}
.story p{color:#667085;font-size:18px;line-height:2.1}
aside{display:flex;flex-direction:column;gap:18px}
aside div{background:#111827;color:#fff;border-radius:28px;padding:28px}
aside strong{color:#f97316;font-size:32px}
aside p{color:#d0d5dd!important;font-size:15px!important}
@media(max-width:767px){.story{grid-template-columns:1fr}.hero h1{font-size:36px}.story h2{font-size:30px}}
</style>