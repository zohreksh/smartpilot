<template>
  <section class="section team-section">
    <div class="container">
      <div class="team-grid">
        <article class="team-card specialists-card">
          <div class="team-icon">👥</div>
          <h3>همراه با شبکه‌ای از متخصصان</h3>
          <p>برای پروژه‌های بزرگ‌تر، شبکه‌ای از متخصصان را کنار هم قرار می‌دهیم تا بهترین نتیجه را برای شما بسازیم.</p>
          <div class="specialties">
            <span>UI/UX</span><span>Frontend</span><span>Backend</span><span>DevOps</span><span>Content</span><span>SEO</span>
          </div>
        </article>
        <article class="team-card member-card"><div class="team-image-wrap"><img src="/images/team/hossein.webp" alt="حسین کولانی" /></div><h3>حسین کلانی</h3><p class="job-title">مدیر فنی و توسعه محصول</p><ul class="skills-list"><li>معماری نرم‌افزار</li><li>هوش مصنوعی و جستجوی هوشمند</li><li>توسعه سیستم‌های تخصصی</li></ul></article>
        <article class="team-card member-card"><div class="team-image-wrap"><img src="/images/team/zohreh.webp" alt="زهره کشاورز" /></div><h3>زهره کشاورز</h3><p class="job-title">مدیریت محصول و تجربه کاربر</p><ul class="skills-list"><li>تحلیل نیاز محصول</li><li>طراحی مسیر محصول</li><li>استراتژی رشد و تجربه دیجیتال</li></ul></article>
        <article class="team-card"><div class="team-icon">✦</div><h3 class="team-headline"><span>پشت این محصولات،</span><span class="accent">یک تیم واقعی قرار دارد</span></h3><p>در NexaStudio ترکیبی از تفکر محصول، تخصص فنی و درک کسب‌وکار را کنار هم قرار می‌دهیم.</p></article>
      </div>
    </div>
  </section>
</template>
<style scoped>
.team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;direction:rtl}.team-card{background:#fff;border:1px solid #eadfd7;border-radius:20px;padding:18px;text-align:right;min-height:220px;box-shadow:0 10px 25px rgba(16,24,40,.05)}
.team-icon{width:48px;height:48px;border-radius:50%;background:#faece4;display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 22px;color:#d86b4a}
.specialists-card{text-align:right}.specialists-card h3{text-align:center;margin-top:16px}.specialists-card p{line-height:1.9;margin-top:18px;margin-bottom:26px}.specialties{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.specialties span{border:1px solid #efb8a5;color:#bd7448;border-radius:999px;padding:5px 12px;font-size:12px}
.team-card h3{font-size:20px;margin:6px 0}.team-headline span{display:block}.team-headline .accent{color:#d86b4a}.team-card p{line-height:1.5;color:#6c7588;margin:6px 0}.job-title{color:#bd7448!important}.skills-list{list-style:none;padding:0;margin:6px 0 0}.skills-list li{color:#6c7588;line-height:1.5}.skills-list li::before{content:'•';color:#bd7448;margin-left:8px}.team-image-wrap{overflow:hidden;border-radius:14px;margin:-18px -18px 10px}.team-image-wrap img{width:100%;aspect-ratio:1;object-fit:cover;display:block;border-radius:20px;padding:6px}@media(max-width:900px){.team-grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.team-grid{grid-template-columns:1fr}}
</style>