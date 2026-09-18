<template>
  <section class="section projects-section" id="projects">
    <div class="container">
      <h2>محصولات واقعی، نتایج واقعی</h2>
      <div class="projects-grid">
        <article class="project-card shidane-project">
          <div class="project-content">
            <h3>شیدانه</h3>
            <p>فروشگاه هوشمند لوازم آرایشی و بهداشتی با تجربه خرید مدرن، جستجوی هوشمند و معماری SEO محور.</p>
            <a href="#contact">مشاهده پروژه</a>
          </div>
          <img src="/images/projects/shidane.webp" alt="پروژه شیدانه" loading="lazy" />
        </article>
        <article class="project-card hevix-project">
          <div class="project-content">
            <h3>HEVIX</h3>
            <p>پلتفرم تخصصی قطعات ماشین‌آلات سنگین با معماری مقیاس‌پذیر و جستجوی پیشرفته.</p>
            <a href="#contact">مشاهده پروژه</a>
          </div>
          <img src="/images/projects/hevix.webp" alt="پروژه HEVIX" loading="lazy" />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section{padding:70px 7%;text-align:center}
.projects-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.project-card{display:flex;align-items:center;gap:24px;background:#fff;border:1px solid #eee;border-radius:28px;padding:24px;direction:rtl;text-align:right;min-height:260px}
.project-card img{width:48%;height:210px;object-fit:cover;border-radius:22px}
.project-content{flex:1}
.project-content h3{font-size:32px;color:#101c32;margin:0 0 12px}
.project-content p{line-height:2;font-size:15px}
.project-content a{color:#c57a42;font-weight:700}
@media(max-width:768px){.projects-grid{grid-template-columns:1fr}.project-card{flex-direction:column}.project-card img{width:100%}}
</style>