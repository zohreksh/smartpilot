<template>
  <section class="section why-section">
    <div class="container">
      <h2>چرا NexaStudio؟</h2>
      <div class="why-grid">
        <article class="why-card">
          <div class="why-icon">♧</div>
          <h3>تفکر محصول محور</h3>
          <p>ما فقط کدنویسی نمی‌کنیم؛ برای رشد کسب‌وکار شما محصول می‌سازیم.</p>
        </article>
        <article class="why-card">
          <div class="why-icon">▰</div>
          <h3>تمرکز بر نتایج واقعی</h3>
          <p>افزایش فروش، بهبود بهره‌وری و تجربه کاربری بهتر، معیار موفقیت ماست.</p>
        </article>
        <article class="why-card">
          <div class="why-icon">◆</div>
          <h3>معماری مقیاس‌پذیر</h3>
          <p>زیرساختی پایدار و توسعه‌پذیر برای امروز و فردای کسب‌وکار شما.</p>
        </article>
        <article class="why-card">
          <div class="why-icon">✦</div>
          <h3>همراهی بلندمدت</h3>
          <p>از راه‌اندازی تا رشد، در کنار شما هستیم.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-section{text-align:center;padding:70px 0}
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:35px}
.why-card{background:#fff;border:1px solid #eadfd7;border-radius:16px;padding:22px 18px;min-height:160px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;direction:rtl}
.why-icon{width:48px;height:48px;border-radius:50%;background:#fae9df;color:#b65b2a;display:flex;align-items:flex-start;justify-content:center;font-size:25px;margin-bottom:14px}
.why-card h3{font-size:18px;margin:0 0 10px;color:#101b35}
.why-card p{font-size:14px;line-height:2;color:#697386;margin:0}
@media(max-width:900px){.why-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.why-grid{grid-template-columns:1fr}}
</style>