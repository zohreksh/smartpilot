<template>
  <main class="about-page">
    <SiteHeader />

    <section class="about-hero container">
      <div class="about-content">
        <span class="eyebrow">درباره NexaStudio</span>
        <h1>
          ما محصولات دیجیتال می‌سازیم؛
          <strong>از ایده تا محصول واقعی</strong>
        </h1>

        <p>
          NexaStudio یک استودیو مهندسی محصول است که به کسب‌وکارها کمک می‌کند
          ایده‌های خود را به محصولات دیجیتال حرفه‌ای، قابل توسعه و متناسب با
          نیاز واقعی کاربران تبدیل کنند.
        </p>

        <p>
          ما فقط توسعه‌دهنده نرم‌افزار نیستیم؛ از معماری سیستم، طراحی تجربه کاربر
          و توسعه اختصاصی تا استفاده هدفمند از هوش مصنوعی، جستجوی هوشمند و
          تحلیل داده در کنار کسب‌وکارها هستیم تا محصولاتی بسازیم که در دنیای
          واقعی ارزش ایجاد کنند.
        </p>

        <p>
          تجربه ساخت محصولاتی مانند شیدانه و هویکس به ما نشان داده است که یک
          محصول موفق نتیجه ترکیب نگاه محصول، مهندسی دقیق و شناخت عمیق مسئله است.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page{direction:rtl;background:#faf8f5;color:#111827;overflow:hidden}
.container{max-width:1180px;margin:auto;padding:0 28px}
.about-hero{min-height:720px;display:flex;align-items:center;justify-content:center;text-align:center}
.about-content{max-width:850px}
.eyebrow{display:inline-block;color:#d95f00;background:#fff0e6;border-radius:30px;padding:8px 18px;font-size:14px}
h1{font-size:clamp(38px,4.5vw,58px);line-height:1.45;margin:32px 0}h1 strong{color:#d95f00;display:block}
p{color:#667085;font-size:18px;line-height:2.1;max-width:800px;margin:22px auto}
@media(max-width:800px){.about-hero{min-height:auto;padding:90px 28px}h1{font-size:34px}p{font-size:16px;line-height:2}}
</style>