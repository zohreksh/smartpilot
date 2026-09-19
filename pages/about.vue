<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <div class="hero-copy">
        <span class="eyebrow">درباره NexaStudio</span>
        <h1>ما محصولات دیجیتال می‌سازیم؛<br /><strong>از ایده تا محصول واقعی</strong></h1>
        <p>
          ما یک استودیو مهندسی محصول هستیم که با ترکیب معماری نرم‌افزار، توسعه
          اختصاصی و فناوری‌های هوشمند، راهکارهای دیجیتالی قابل توسعه برای کسب‌وکارها می‌سازیم.
        </p>
        <p>
          تجربه ما در ساخت شیدانه و هویکس به ما آموخته است که یک محصول موفق فقط
          با کدنویسی ساخته نمی‌شود؛ بلکه نتیجه شناخت مسئله، طراحی درست و اجرای دقیق است.
        </p>
      </div>
    </section>

    <section class="story container">
      <div class="story-number">20+</div>
      <div>
        <span class="eyebrow">داستان ما</span>
        <h2>سال‌ها تجربه مهندسی، امروز تبدیل به ساخت محصولات دیجیتال شده است.</h2>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#111827;overflow:hidden}
.container{max-width:1180px;margin:auto;padding:0 28px}
.hero{min-height:650px;display:flex;align-items:center;justify-content:center;text-align:center}
.hero-copy{max-width:820px}
.eyebrow{display:inline-block;color:#d95f00;background:#fff0e6;border-radius:30px;padding:8px 18px;font-size:14px}
.hero h1{font-size:clamp(38px,4.5vw,58px);line-height:1.45;margin:30px 0}.hero h1 strong{color:#d95f00}
.hero p{color:#667085;font-size:18px;line-height:2;max-width:760px;margin:18px auto}
.story{display:grid;grid-template-columns:.35fr 1fr;gap:60px;padding:80px 28px;align-items:center}
.story-number{font-size:110px;font-weight:800;color:#d95f00}
.story h2{font-size:42px;line-height:1.5}
@media(max-width:800px){.hero{min-height:auto;padding:90px 28px}.hero h1{font-size:34px}.hero p{font-size:16px}.story{grid-template-columns:1fr;gap:20px}.story-number{font-size:80px}.story h2{font-size:30px}}
</style>