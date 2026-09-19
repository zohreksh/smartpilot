<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand-mark" href="#">
        <span class="brand-icon"></span>
        <span class="brand-copy">
          <strong>NexaStudio</strong>
          <small>ساخت آینده دیجیتال</small>
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

      <a class="header-button" href="#contact">شروع همکاری <span>←</span></a>
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
.header-button {
  flex-shrink: 0;
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
  }

  .brand-copy strong {
    font-size: 20px;
  }

  .header-nav {
    order: 3;
    width: 100%;
    gap: 12px;
    justify-content: center;
    font-size: 13px;
  }

  .header-button {
    padding: 12px 18px;
    min-height: 44px;
  }
}

@media (max-width: 430px) {
  .header-nav {
    display: none;
  }

  .header-inner {
    justify-content: space-between;
  }

  .header-button {
    padding: 11px 16px;
  }
}
</style>
