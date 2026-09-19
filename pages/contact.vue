<template>
  <main class="contact-page">
    <SiteHeader />

    <section class="contact-hero container">
      <div class="contact-content">
        <h1>بیایید درباره پروژه شما صحبت کنیم</h1>
        <p>
          اگر ایده‌ای برای ساخت یک محصول دیجیتال، توسعه یک سیستم اختصاصی یا
          اضافه کردن قابلیت‌های هوشمند دارید، خوشحال می‌شویم درباره آن با شما گفتگو کنیم.
        </p>
      </div>
    </section>

    <section class="contact-grid container">
      <article class="contact-card">
        <h2>شروع همکاری</h2>
        <p>
          مسئله، هدف و نیازهای کسب‌وکار خود را با ما در میان بگذارید تا مسیر مناسب
          برای طراحی و توسعه محصول را بررسی کنیم.
        </p>
        <a href="mailto:info@nexastudio.ir">info@nexastudio.ir</a>
      </article>

      <article class="contact-card accent">
        <h2>خدمات ما</h2>
        <p>
          از طراحی وب‌سایت و توسعه اختصاصی تا هوش مصنوعی، جستجوی هوشمند و پشتیبانی
          مداوم، در کنار شما هستیم.
        </p>
        <NuxtLink to="/services">مشاهده خدمات</NuxtLink>
      </article>
    </section>
  </main>
</template>

<style scoped>
.contact-page{direction:rtl;background:#f7f2eb;min-height:100vh;color:#111827}
.container{max-width:1180px;margin:auto;padding:0 28px}
.contact-hero{padding:70px 28px 45px;text-align:center}
.contact-content{max-width:760px;margin:auto}
h1{font-size:clamp(32px,4vw,52px);line-height:1.5;color:#2f3a45;margin:0 0 24px}
.contact-content p{font-size:18px;line-height:2;color:#667085}
.contact-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px;padding-bottom:100px}
.contact-card{background:#fff;border:1px solid #ead8c7;border-radius:28px;padding:38px;min-height:240px;box-shadow:0 10px 30px rgba(170,120,70,.08)}
.contact-card.accent{background:#fff3ed;border-color:#f4d5c2}
h2{font-size:26px;margin-bottom:18px}
.contact-card p{color:#667085;line-height:2;font-size:16px}
a{display:inline-block;margin-top:20px;color:#d95f00;font-weight:700;text-decoration:none}
@media(max-width:800px){.contact-hero{padding-top:45px}.contact-grid{grid-template-columns:1fr}.contact-card{padding:28px}}
</style>