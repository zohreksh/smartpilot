<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink class="brand-mark" to="/" @click="closeMenu">
        <span class="brand-icon"></span>
        <span class="brand-copy">
          <strong>NexaStudio</strong>
        </span>
      </NuxtLink>

      <nav class="header-nav desktop-nav" aria-label="ناوبری اصلی">
        <NuxtLink to="/">خانه</NuxtLink>
        <NuxtLink to="/services">خدمات ما</NuxtLink>
        <NuxtLink to="/#projects">نمونه کارها</NuxtLink>
        <NuxtLink to="/about">درباره ما</NuxtLink>
        <NuxtLink to="/contact">تماس با ما</NuxtLink>
      </nav>

      <span class="header-spacer" aria-hidden="true"></span>

      <button
        class="mobile-menu-button"
        type="button"
        :aria-label="isMenuOpen ? 'بستن منو' : 'باز کردن منو'"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav
      v-if="isMenuOpen"
      id="mobile-navigation"
      class="mobile-nav"
      aria-label="ناوبری موبایل"
    >
      <NuxtLink to="/" @click="closeMenu">خانه</NuxtLink>
      <NuxtLink to="/services" @click="closeMenu">خدمات ما</NuxtLink>
      <NuxtLink to="/#projects" @click="closeMenu">نمونه کارها</NuxtLink>
      <NuxtLink to="/about" @click="closeMenu">درباره ما</NuxtLink>
      <NuxtLink to="/contact" @click="closeMenu">تماس با ما</NuxtLink>
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
.header-spacer {
  width: 150px;
  flex-shrink: 0;
}
.mobile-menu-button,
.mobile-nav {
  display: none;
}

.header-nav :deep(.router-link-active),
.mobile-nav :deep(.router-link-active) {
  color: var(--accent);
}

.mobile-menu-button span {
  display: block;
  width: 24px;
  height: 3px;
  background: #111827;
  border-radius: 3px;
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
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 16px max(4%, 20px) 20px;
    border-top: 1px solid rgba(234, 223, 215, 0.7);
    background: rgba(252, 248, 244, 0.98);
  }
}
</style>
