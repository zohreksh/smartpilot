<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand-mark" href="#">
        <span class="brand-icon"></span>
        <span class="brand-copy">
          <strong>NexaStudio</strong>
        </span>
      </a>

      <nav class="header-nav">
        <a class="active" href="#">خانه</a>
        <a href="#services">خدمات ما</a>
        <a href="#projects">نمونه کارها</a>
        <a href="#about">درباره ما</a>
        <a href="#">وبلاگ</a>
        <a href="#contact">تماس با ما</a>
      </nav>

      <span class="header-spacer" aria-hidden="true"></span>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  width: 100%;
}

.header-inner {
  min-width: 0;
}

.brand-mark,
.header-spacer {
  flex-shrink: 0;
}

.header-spacer {
  width: 150px;
}

.header-nav {
  min-width: 0;
}

@media (max-width: 1023px) {
  .header-inner {
    gap: 18px;
  }

  .header-nav {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .header-inner {
    flex-wrap: wrap;
    justify-content: center;
    padding: 12px 0;
    gap: 12px;
  }

  .header-nav {
    order: 3;
    width: 100%;
    gap: 12px;
    justify-content: center;
    font-size: 13px;
  }
}

@media (max-width: 430px) {
  .header-inner {
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .header-nav {
    display: none;
  }

  .header-spacer {
    width: 0;
  }
}
</style>
