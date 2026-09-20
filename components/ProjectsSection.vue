<template>
  <section class="projects">
    <h2>محصولات واقعی، نتایج واقعی</h2>
    <div class="projects-grid">
      <article class="project-card shidane"><img src="/images/projects/shidane.webp" alt="Shidane project" /></article>
      <article class="project-card hevix"><img src="/images/projects/hevix.webp" alt="HEVIX project" /></article>
    </div>
  </section>
</template>
<style scoped>
.projects{padding:70px 7%;text-align:center;direction:rtl}
.projects-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.project-card{background:#fff;border:1px solid #eee;border-radius:28px;overflow:hidden;min-width:0}
.project-card img{display:block;width:100%;height:300px;object-fit:cover;border-radius:28px}
@media(max-width:1023px){.projects{padding:55px 5%}.projects-grid{gap:20px}}
@media(max-width:900px){.projects{padding:45px 20px}.projects-grid{grid-template-columns:1fr;gap:18px}.project-card img{height:240px}}
@media(max-width:480px){.project-card img{height:190px;border-radius:20px}.project-card{border-radius:20px}}
</style>