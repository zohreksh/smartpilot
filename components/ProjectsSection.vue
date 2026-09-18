<template>
  <section class="projects">
    <h2>محصولات واقعی، نتایج واقعی</h2>
    <div class="projects-grid">
      <article class="project-card shidane">
        <img src="/images/projects/shidane.webp" alt="Shidane project" />
      </article>
      <article class="project-card hevix">
        <img src="/images/projects/hevix.webp" alt="HEVIX project" />
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 70px 7%;
  text-align: center;
}
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.project-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 28px;
  padding: 0;
  overflow: hidden;
  direction: rtl;
}
.project-card img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 28px;
}
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
