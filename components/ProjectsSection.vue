<template>
  <section class="projects">
    <h2>محصولات واقعی، نتایج واقعی</h2>
    <div class="projects-grid">
      <article class="project-card shidane">
        <div class="project-content">
          <h3>شیدانه</h3>
          <p>فروشگاه آنلاین زیبایی با تجربه کاربری مدرن و مسیر خرید ساده</p>
        </div>
        <img src="/images/projects/shidane.webp" alt="Shidane project" />
      </article>
      <article class="project-card hevix">
        <div class="project-content">
          <h3>HEVIX</h3>
          <p>بازار تخصصی قطعات صنعتی با جستجوی هوشمند و تجربه حرفه‌ای</p>
        </div>
        <img src="/images/projects/hevix.webp" alt="HEVIX project" />
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 60px 7%;
  text-align: center;
}
.projects h2 {
  font-size: 34px;
  color: #101c32;
  margin-bottom: 32px;
}
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.project-card {
  min-height: 280px;
  overflow: hidden;
  border-radius: 28px;
  background: #fff;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  text-align: right;
}
.project-card img {
  width: 52%;
  height: 230px;
  object-fit: cover;
  border-radius: 20px;
}
.project-content {
  width: 42%;
}
.project-content h3 {
  font-size: 32px;
  margin: 0 0 14px;
  color: #101c32;
}
.project-content p {
  font-size: 15px;
  line-height: 2;
}
.hevix {
  direction: rtl;
}
.shidane {
  direction: rtl;
}
</style>