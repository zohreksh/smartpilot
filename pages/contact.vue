<template>
  <main class="contact-page">
    <SiteHeader />

    <section class="contact-hero">
      <img src="/images/hero/contact-hero.webp" alt="شروع همکاری و تبدیل ایده به محصول" />
    </section>

    <section class="contact-section container">
      <div class="contact-grid">
        <article class="contact-card info-card">
          <h2>راه‌های ارتباط با ما</h2>
          <p>از طریق راه‌های زیر می‌توانید با ما در ارتباط باشید.</p>
          <div class="contact-item"><strong>ایمیل</strong><span>hello@studio.com</span></div>
          <div class="contact-item"><strong>تلفن</strong><span>+98 21 0000 0000</span></div>
          <div class="contact-item"><strong>ساعات پاسخگویی</strong><span>شنبه تا پنجشنبه، ۹ صبح تا ۶ عصر</span></div>
        </article>

        <article class="contact-card message-card">
          <h2>برای ما پیام بگذارید</h2>
          <p>چند خط درباره نیاز یا ایده‌تان بنویسید.</p>
          <form class="contact-form">
            <input placeholder="نام و نام خانوادگی" />
            <input placeholder="ایمیل" />
            <textarea placeholder="محتوای پیام شما"></textarea>
            <button type="button">ارسال پیام</button>
          </form>
        </article>

        <article class="contact-card process-card">
          <h2>فرآیند همکاری</h2>
          <p>مسیر ساده و شفاف برای شروع یک پروژه.</p>
          <div class="process-item"><span>01</span><strong>گفتگو</strong><small>شناخت نیازها و اهداف پروژه</small></div>
          <div class="process-item"><span>02</span><strong>طراحی مسیر</strong><small>انتخاب راهکار و برنامه اجرا</small></div>
          <div class="process-item"><span>03</span><strong>ساخت محصول</strong><small>توسعه و تحویل با تمرکز روی کیفیت</small></div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page{direction:rtl;background:#f7f2eb;min-height:100vh;color:#111827}.contact-hero{padding:0 28px 45px}.contact-hero img{width:100%;display:block}.container{max-width:1120px;margin:auto;padding:0 28px}.contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.contact-card{background:#fffaf5;border:1px solid #ead8c7;border-radius:28px;padding:30px;min-height:380px}.contact-card h2{color:#243044;font-size:26px}.contact-card p{color:#667085;line-height:2}.contact-form{display:flex;flex-direction:column;gap:14px;margin-top:24px}input,textarea{border:1px solid #e5ddd4;background:#fff;border-radius:14px;padding:15px;font-family:inherit}textarea{min-height:110px}button{background:#d95f00;color:white;border:0;border-radius:14px;padding:16px;font-family:inherit}.contact-item{padding:18px 0;border-bottom:1px solid #ead8c7;display:flex;flex-direction:column;gap:6px}.contact-item strong,.process-item strong{color:#243044}.contact-item span,.process-item small{color:#667085}.process-item{display:flex;flex-direction:column;gap:6px;padding:16px 0;border-bottom:1px solid #ead8c7}.process-item span{color:#d95f00;font-weight:800;font-size:22px}@media(max-width:1000px){.contact-grid{grid-template-columns:1fr 1fr}}@media(max-width:800px){.contact-grid{grid-template-columns:1fr}.contact-hero{padding:0 16px 30px}.contact-card{padding:24px}}
</style>
