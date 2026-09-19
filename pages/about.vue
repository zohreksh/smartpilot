<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <div class="hero-copy">
        <span class="eyebrow">درباره NexaStudio</span>
        <h1>ما محصولات دیجیتال می‌سازیم؛<br /><strong>از ایده تا محصول واقعی</strong></h1>
        <p>
          ما یک استودیو مهندسی محصول هستیم که به کسب‌وکارها کمک می‌کنیم
          ایده‌های خود را به محصولات دیجیتال قابل توسعه تبدیل کنند.
        </p>
        <p>
          تمرکز ما فقط روی نوشتن کد نیست؛ بلکه ترکیبی از معماری نرم‌افزار،
          تجربه کاربری، توسعه اختصاصی و فناوری‌های هوشمند است تا محصولاتی
          بسازیم که در دنیای واقعی ارزش ایجاد کنند.
        </p>
      </div>
    </section>

    <section class="story container">
      <div class="story-number">20+</div>
      <div>
        <span class="eyebrow">داستان ما</span>
        <h2>سال‌ها تجربه مهندسی، امروز تبدیل به ساخت محصولات دیجیتال شده است.</h2>
        <p>
          تجربه ما در ساخت سیستم‌های نرم‌افزاری به ما یاد داده است که یک محصول
          موفق نتیجه تصمیم‌های درست از همان ابتداست؛ از شناخت مسئله و طراحی
          معماری تا اجرای دقیق و توسعه مداوم.
        </p>
        <p>
          شیدانه و هویکس نمونه‌ای از همین نگاه هستند؛ محصولاتی که با تمرکز بر
          نیاز واقعی کاربران، معماری قابل توسعه و استفاده هدفمند از فناوری ساخته شده‌اند.
        </p>
      </div>
    </section>

    <section class="approach container">
      <span class="eyebrow">نگاه ما</span>
      <h2>فناوری زمانی ارزشمند است که یک مسئله واقعی را حل کند.</h2>
      <div class="approach-grid">
        <p>طراحی دقیق قبل از توسعه</p>
        <p>معماری قابل رشد برای آینده</p>
        <p>تمرکز روی ارزش واقعی کسب‌وکار</p>
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
.hero p,.story p{color:#667085;font-size:18px;line-height:2;max-width:760px;margin:18px auto}
.story{display:grid;grid-template-columns:.35fr 1fr;gap:60px;padding:80px 28px;align-items:center}
.story-number{font-size:110px;font-weight:800;color:#d95f00}
.story h2,.approach h2{font-size:42px;line-height:1.5}
.approach{padding:80px 28px;text-align:center}
.approach h2{max-width:760px;margin:30px auto}
.approach-grid{display:flex;justify-content:center;gap:40px;flex-wrap:wrap;margin-top:50px}
.approach-grid p{font-size:24px;font-weight:700;color:#111827}
@media(max-width:800px){.hero{min-height:auto;padding:90px 28px}.hero h1{font-size:34px}.hero p,.story p{font-size:16px}.story{grid-template-columns:1fr;gap:20px}.story-number{font-size:80px}.story h2,.approach h2{font-size:30px}.approach-grid{display:block}.approach-grid p{font-size:20px;margin:30px 0}}
</style>