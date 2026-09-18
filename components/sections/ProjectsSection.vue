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
.projects-section{padding:70px 2%;text-align:center}
.projects-section .container{max-width:100%;padding:0}
.projects-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;direction:ltr;width:100%}
.project-image{overflow:hidden;border-radius:28px;width:100%}
.project-image img{display:block;width:100%;height:520px;object-fit:cover;border-radius:28px}
.shidane-project{order:1}
.hevix-project{order:2}
@media(max-width:768px){.projects-grid{grid-template-columns:1fr}.project-image img{height:320px}}
</style>