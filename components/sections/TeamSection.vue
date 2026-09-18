<template>
  <section class="section team-section">
    <div class="container">
      <div class="section-title">
        <span class="badge">OUR TEAM</span>
        <h2>پشت این محصولات، یک تیم واقعی قرار دارد</h2>
        <p>ترکیبی از تخصص محصول، تکنولوژی و تجربه برای ساخت محصولات دیجیتال.</p>
      </div>

      <div class="team-grid">
        <article class="team-card">
          <div class="team-icon">👥</div>
          <h3>همراه با شبکه‌ای از متخصصان</h3>
          <p>برای پروژه‌های بزرگ‌تر، شبکه‌ای از متخصصان را کنار هم قرار می‌دهیم تا بهترین نتیجه را برای شما بسازیم.</p>
        </article>

        <article class="team-card member-card">
          <div class="team-image-wrap">
            <img src="/images/team/hossein.webp" alt="حسین کلانی" />
          </div>
          <h3>حسین کلانی</h3>
          <p>مدیر فنی و توسعه محصول</p>
          <span>معماری نرم‌افزار · هوش مصنوعی و جستجوی هوشمند · توسعه سیستم‌های تخصصی</span>
        </article>

        <article class="team-card member-card">
          <div class="team-image-wrap">
            <img src="/images/team/zohreh.webp" alt="زهره کشاورز" />
          </div>
          <h3>زهره کشاورز</h3>
          <p>مدیریت محصول و تجربه کاربر</p>
          <span>تحلیل نیاز محصول · طراحی مسیر محصول · استراتژی رشد و تجربه دیجیتال</span>
        </article>

        <article class="team-card">
          <div class="team-icon">✦</div>
          <h3>پشت این محصولات، یک تیم واقعی قرار دارد</h3>
          <p>در NexaStudio ترکیبی از تفکر محصول، تخصص فنی و درک کسب‌وکار را کنار هم قرار می‌دهیم تا محصولات دیجیتال موثر و ماندگار خلق کنیم.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section h2{text-align:center;font-size:38px;margin-bottom:12px}
.section-title{text-align:center;margin-bottom:42px}
.badge{display:inline-flex;border:1px solid #d86b4a;color:#d86b4a;border-radius:999px;padding:5px 18px;margin-bottom:14px}
.section-title p{color:#6c7588}
.team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;direction:rtl}
.team-card{background:#fff;border:1px solid #eadfd7;border-radius:20px;padding:24px;text-align:right;min-height:280px;box-shadow:0 10px 25px rgba(16,24,40,.05)}
.team-icon{width:54px;height:54px;border-radius:50%;background:#faece4;display:flex;align-items:center;justify-content:center;font-size:26px;margin:0 0 22px}
.team-card h3{font-size:21px;margin:12px 0}
.team-card p{line-height:2;color:#6c7588}
.team-card span{color:#bd7448;font-size:14px}
.team-image-wrap{overflow:hidden;border-radius:16px;margin-bottom:16px}
.team-image-wrap img{width:100%;aspect-ratio:1;object-fit:cover;display:block}
@media(max-width:900px){.team-grid{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.team-grid{grid-template-columns:1fr}}
</style>
