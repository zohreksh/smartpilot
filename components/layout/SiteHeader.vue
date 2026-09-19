<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand-mark" href="#" @click="closeMenu">
        <span class="brand-icon"></span>
        <span class="brand-copy">
          <strong>NexaStudio</strong>
        </span>
      </a>

      <nav class="header-nav desktop-nav">
        <a class="active" href="#">خانه</a>
        <a href="#services">خدمات ما</a>
        <a href="#projects">نمونه کارها</a>
        <a href="#about">درباره ما</a>
        <a href="#">وبلاگ</a>
        <a href="#contact">تماس با ما</a>
      </nav>

      <span class="header-spacer" aria-hidden="true"></span>

      <button class="mobile-menu-button" type="button" aria-label="باز کردن منو" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav v-if="isMenuOpen" class="mobile-nav">
      <a class="active" href="#" @click="closeMenu">خانه</a>
      <a href="#services" @click="closeMenu">خدمات ما</a>
      <a href="#projects" @click="closeMenu">نمونه کارها</a>
      <a href="#about" @click="closeMenu">درباره ما</a>
      <a href="#" @click="closeMenu">وبلاگ</a>
      <a href="#contact" @click="closeMenu">تماس با ما</a>
    </nav>
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

.mobile-menu-button,
.mobile-nav {
  display: none;
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
  .desktop-nav,
  .header-spacer {
    display: none;
  }

  .header-inner {
    justify-content: space-between;
    padding: 12px 0;
  }

  .mobile-menu-button {
    display: flex;
    width: 44px;
    height: 44px;
    border: 0;
    background: transparent;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
  }

  .mobile-menu-button span {
    width: 22px;
    height: 2px;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 16px;
  }
}
</style>
