<template>
  <section class="section team-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">تیم ما</span>
        <h2>پشت هر نتیجه خوب، یک تیم خوب است</h2>
        <p>ما با ترکیب تخصص، تجربه و نگاه آینده‌نگر، زیرساخت محصولات ماندگار می‌سازیم.</p>
      </div>
      <div class="team-grid">
        <article class="team-card intro-card"><div class="team-icon">✦</div><h3>پشت این محصولات...</h3><p>ترکیبی از تجربه و تخصص، در کنار همکاری با متخصصان برای ساخت محصولات دیجیتال بهتر.</p><strong>ما فقط توسعه‌دهنده نیستیم؛ همراه شما در مسیر رشد هستیم.</strong></article>
        <article class="team-card member-card"><div class="member-layout"><div class="team-image-wrap"><img src="/images/team/zohreh.webp" alt="زهره کشاورز" /></div><div class="member-content"><h3>زهره کشاورز</h3><p class="job-title">معمار و توسعه‌دهنده</p><ul class="skills-list"><li>تجربه کاربری و محصول</li><li>طراحی مسیر محصول</li><li>استراتژی رشد دیجیتال</li></ul><span class="profile-link">مشاهده پروفایل</span></div></div></article>
        <article class="team-card member-card"><div class="member-layout"><div class="team-image-wrap"><img src="/images/team/hossein.webp" alt="حسین کولانی" /></div><div class="member-content"><h3>حسین کولانی</h3><p class="job-title">معمار و توسعه‌دهنده</p><ul class="skills-list"><li>معماری نرم‌افزار</li><li>هوش مصنوعی و جستجوی هوشمند</li><li>توسعه سیستم‌های تخصصی</li></ul><span class="profile-link">مشاهده پروفایل</span></div></div></article>
        <article class="team-card specialists-card"><div class="team-icon">👥</div><h3>شبکه متخصصان</h3><p>برای پروژه‌های بزرگ‌تر، متخصصان موردنیاز را کنار هم قرار می‌دهیم.</p><div class="specialties"><span>UI/UX</span><span>Frontend</span><span>Backend</span><span>DevOps</span><span>SEO</span><span>AI</span></div></article>
      </div>
    </div>
  </section>
</template>
<style scoped>
.section-header{text-align:center;margin-bottom:28px}.section-badge{display:inline-block;border:1px solid #d86b4a;color:#d86b4a;border-radius:999px;padding:5px 20px}.section-header h2{font-size:32px;margin:16px 0}.section-header p{color:#6c7588}
.team-grid{display:grid;grid-template-columns:1fr 1.2fr 1.2fr 1fr;gap:16px;direction:rtl}.team-card{background:#fff;border:1px solid #eadfd7;border-radius:22px;padding:18px;min-height:250px;box-shadow:0 8px 20px rgba(16,24,40,.04)}
.team-icon{width:42px;height:42px;border-radius:50%;background:#faece4;display:flex;align-items:center;justify-content:center;margin-bottom:14px}.team-card h3{font-size:20px;margin:4px 0 6px}.team-card p{font-size:14px;line-height:1.8;color:#6c7588}.intro-card strong{display:block;color:#d86b4a;line-height:1.8;margin-top:12px}
.member-layout{display:flex;gap:12px;align-items:flex-start}.member-content{padding-top:0}.team-image-wrap{width:110px;height:110px;flex-shrink:0;border-radius:18px;overflow:hidden;background:#f8f3ef;display:flex;align-items:center;justify-content:center}.team-image-wrap img{width:100%;height:100%;object-fit:cover}.job-title{color:#bd7448!important;margin:0 0 6px!important;font-size:13px!important}.skills-list{display:flex;flex-wrap:wrap;gap:6px;list-style:none;padding:0;margin:8px 0}.skills-list li{font-size:12px;color:#667085;background:#fff3ed;border-radius:999px;padding:4px 9px;line-height:1.4}.skills-list li:before{display:none}.profile-link{font-size:12px;color:#0f2240}.specialties{display:flex;flex-wrap:wrap;gap:6px}.specialties span{padding:4px 10px;border-radius:999px;background:#fff3ed;color:#bd7448;font-size:11px}
@media(max-width:1023px){.team-grid{grid-template-columns:1fr 1fr}}@media(max-width:767px){.team-grid{grid-template-columns:1fr}.member-layout{align-items:flex-start}.team-image-wrap{width:90px;height:90px}.section-header h2{font-size:26px}}
</style>