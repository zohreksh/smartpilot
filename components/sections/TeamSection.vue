<template>
  <section class="section team-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">تیم ما</span>
        <h2>پشت هر نتیجه خوب، یک تیم خوب است</h2>
        <p>ما با ترکیب تخصص، تجربه و نگاه آینده‌نگر، زیرساخت محصولات ماندگار می‌سازیم.</p>
      </div>

      <div class="team-grid">
        <article class="team-card specialists-card">
          <div class="team-icon">👥</div>
          <h3>شبکه متخصصان</h3>
          <p>برای پروژه‌های بزرگ‌تر، متخصصان موردنیاز را کنار هم قرار می‌دهیم.</p>
          <div class="specialties">
            <span>UI/UX</span><span>Frontend</span><span>Backend</span><span>DevOps</span><span>SEO</span><span>AI</span>
          </div>
        </article>

        <article class="team-card member-card">
          <div class="team-image-wrap"><img src="/images/team/hossein.webp" alt="حسین کولانی" /></div>
          <h3>حسین کولانی</h3>
          <p class="job-title">معمار و توسعه‌دهنده</p>
          <ul class="skills-list"><li>معماری نرم‌افزار</li><li>هوش مصنوعی و جستجوی هوشمند</li><li>توسعه سیستم‌های تخصصی</li></ul>
        </article>

        <article class="team-card member-card">
          <div class="team-image-wrap"><img src="/images/team/zohreh.webp" alt="زهره کشاورز" /></div>
          <h3>زهره کشاورز</h3>
          <p class="job-title">معمار و توسعه‌دهنده</p>
          <ul class="skills-list"><li>تجربه کاربری و محصول</li><li>طراحی مسیر محصول</li><li>استراتژی رشد دیجیتال</li></ul>
        </article>

        <article class="team-card brand-card">
          <div class="team-icon">✦</div>
          <h3>پشت این محصولات...</h3>
          <p>تجربه، همکاری و راهکارهای بهتر برای ساخت محصولات دیجیتال.</p>
          <strong>ما فقط توسعه‌دهنده نیستیم؛ همراه شما در مسیر رشد هستیم.</strong>
        </article>
      </div>

      <div class="team-stats">
        <div><b>20+</b><span>سال تجربه</span></div>
        <div><b>50+</b><span>پروژه موفق</span></div>
        <div><b>2</b><span>هم‌بنیان‌گذار</span></div>
        <div><b>∞</b><span>تعهد به آینده</span></div>
      </div>

      <div class="team-quote">ما به تکنولوژی ایمان داریم، اما بیشتر به انسان‌ها.</div>
    </div>
  </section>
</template>

<style scoped>
.section-header{text-align:center;margin-bottom:40px}.section-badge{display:inline-block;border:1px solid #d86b4a;color:#d86b4a;border-radius:999px;padding:6px 24px}.section-header h2{font-size:34px;margin:20px 0}.section-header p{color:#6c7588}.team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;direction:rtl}.team-card{background:#fff;border:1px solid #eadfd7;border-radius:24px;padding:24px;text-align:right;box-shadow:0 10px 25px rgba(16,24,40,.05)}.team-icon{width:48px;height:48px;border-radius:50%;background:#faece4;display:flex;align-items:center;justify-content:center;margin:auto;font-size:22px}.team-card h3{font-size:20px;margin:16px 0 8px}.team-card p{line-height:1.8;color:#6c7588}.job-title{color:#bd7448!important}.specialties{display:flex;flex-wrap:wrap;gap:8px}.specialties span{padding:5px 12px;border-radius:999px;background:#fff3ed;color:#bd7448;font-size:12px}.team-image-wrap{overflow:hidden;border-radius:16px}.team-image-wrap img{width:100%;aspect-ratio:1;object-fit:cover}.skills-list{list-style:none;padding:0}.skills-list li{color:#6c7588;line-height:1.8}.skills-list li:before{content:'•';color:#bd7448;margin-left:8px}.brand-card strong{display:block;color:#d86b4a;margin-top:20px;line-height:1.8}.team-stats{display:grid;grid-template-columns:repeat(4,1fr);margin:40px 0;text-align:center}.team-stats b{display:block;font-size:32px;color:#182235}.team-stats span{color:#6c7588}.team-quote{background:#101827;color:#fff;border-radius:28px;padding:40px;text-align:center;font-size:28px}@media(max-width:900px){.team-grid{grid-template-columns:1fr 1fr}.team-stats{grid-template-columns:1fr 1fr;gap:20px}}@media(max-width:600px){.section-header h2{font-size:26px}.team-grid{grid-template-columns:1fr}.team-stats{grid-template-columns:1fr 1fr}.team-quote{font-size:20px;padding:28px}}
</style>