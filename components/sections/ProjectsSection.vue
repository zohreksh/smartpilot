<template>
  <section class="section projects-section" id="projects">
    <div class="container">
      <h2>محصولات واقعی، نتایج واقعی</h2>
      <div class="projects-grid">
        <div class="project-image shidane-project">
          <img src="/images/projects/shidane.webp" alt="پروژه شیدانه" loading="lazy" />
        </div>
        <div class="project-image hevix-project">
          <img src="/images/projects/hevix.webp" alt="پروژه HEVIX" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section{padding:70px 7%;text-align:center}
.projects-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:center}
.project-image{overflow:hidden;border-radius:28px}
.project-image img{display:block;width:100%;height:360px;object-fit:cover;border-radius:28px}
.shidane-project{grid-column:1}
.hevix-project{grid-column:2}
@media(max-width:768px){.projects-grid{grid-template-columns:1fr}.project-image img{height:260px}}
</style>