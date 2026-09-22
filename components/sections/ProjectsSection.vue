<template>
  <section class="section projects-section" id="projects">
    <div class="home-section-heading projects-heading container">
      <span class="home-section-kicker">نمونه‌کارها</span>
      <h2 class="home-section-title">محصولات واقعی؛ طراحی‌شده برای استفاده و توسعه</h2>
      <p class="home-section-description">
        شیدانه و HEVIX از دو بازار متفاوت‌اند، اما هر دو با معماری اختصاصی، تجربه کاربری واقعی و مسیر توسعه مستمر ساخته شده‌اند.
      </p>
      <span class="home-section-rule" aria-hidden="true"></span>
    </div>

    <div class="projects-grid">
      <NuxtLink
        class="project-link shidane-project"
        to="/projects/shidaneh"
        aria-label="مطالعه Case Study پروژه شیدانه"
      >
        <div class="project-image">
          <img
            src="/images/projects/shidane.webp"
            alt="پروژه شیدانه"
            width="1659"
            height="948"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span>مطالعه Case Study شیدانه</span>
      </NuxtLink>

      <NuxtLink
        class="project-link hevix-project"
        to="/projects/hevix"
        aria-label="مطالعه Case Study پروژه HEVIX"
      >
        <div class="project-image">
          <img
            src="/images/projects/hevix.webp"
            alt="پروژه HEVIX"
            width="1659"
            height="948"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span>مطالعه Case Study هویکس</span>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  position: relative;
  overflow: hidden;
  padding: 78px 0 82px;
  border-bottom: 1px solid rgba(220, 226, 232, 0.78);
  background:
    radial-gradient(circle at 12% 12%, rgba(112, 136, 164, 0.07), transparent 24%),
    linear-gradient(180deg, #fff 0%, #fbfcfd 100%);
  text-align: center;
}

.projects-heading {
  margin-bottom: 34px;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  direction: ltr;
  width: min(100%, 1320px);
  margin: 0 auto;
  padding-inline: 18px;
}

.project-link {
  display: block;
  min-width: 0;
  color: #9f5a34;
  font-size: 13.5px;
  font-weight: 800;
  text-align: center;
}

.project-link > span {
  display: inline-flex;
  margin-top: 12px;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.project-image {
  overflow: hidden;
  border-radius: 28px;
  width: 100%;
  min-width: 0;
}

.project-image img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0;
  transition: transform 0.25s ease;
}

.project-link:hover .project-image img {
  transform: scale(1.012);
}

.shidane-project {
  order: 1;
}

.hevix-project {
  order: 2;
}

@media (max-width: 1023px) {
  .projects-grid {
    gap: 18px;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 60px 0 64px;
  }

  .projects-heading {
    margin-bottom: 28px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .project-image {
    border-radius: 20px;
  }
}

@media (max-width: 430px) {
  .project-image {
    border-radius: 16px;
  }
}
</style>
