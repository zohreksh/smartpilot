<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.valueSmartPilotOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="container premium-header">
      <NuxtLink
        class="brand-mark"
        to="/"
        aria-label="SmartPilot - صفحه اصلی"
        @click="closeMenu"
      >
        <span class="brand-symbol" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="none">
            <path d="M10.5 28.5V11.5L20 22l9.5-10.5v17" />
            <path d="M13.5 31h13" />
          </svg>
        </span>
        <span class="brand-copy">
          <strong>SmartPilot</strong>
          <small>Digital Product Studio</small>
        </span>
      </NuxtLink>

      <nav class="header-nav desktop-nav" aria-label="ناوبری اصلی">
        <NuxtLink to="/">خانه</NuxtLink>
        <NuxtLink to="/services">خدمات ما</NuxtLink>
        <NuxtLink to="/projects">نمونه کارها</NuxtLink>
        <NuxtLink to="/about">درباره ما</NuxtLink>
        <NuxtLink to="/contact">تماس با ما</NuxtLink>
      </nav>

      <button
        class="mobile-menu-button"
        type="button"
        :class="{ 'is-open': isMenuOpen }"
        :aria-label="isMenuOpen ? 'بستن منو' : 'باز کردن منو'"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <div v-if="isMenuOpen" class="mobile-menu-shell">
      <nav
        id="mobile-navigation"
        class="mobile-nav container"
        aria-label="ناوبری موبایل"
        @keydown.esc="closeMenu"
      >
        <NuxtLink to="/" @click="closeMenu">خانه</NuxtLink>
        <NuxtLink to="/services" @click="closeMenu">خدمات ما</NuxtLink>
        <NuxtLink to="/projects" @click="closeMenu">نمونه کارها</NuxtLink>
        <NuxtLink to="/about" @click="closeMenu">درباره ما</NuxtLink>
        <NuxtLink to="/contact" @click="closeMenu">تماس با ما</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 60;
  width: 100%;
  padding: 10px 0;
  border-bottom: 0;
  background: rgba(252, 248, 244, 0.78);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.premium-header {
  display: grid;
  grid-template-columns: minmax(190px, 1fr) auto minmax(190px, 1fr);
  align-items: center;
  gap: 28px;
  min-width: 0;
  min-height: 68px;
  padding: 8px 10px 8px 12px;
  border: 1px solid rgba(226, 211, 199, 0.88);
  border-radius: 22px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.94),
    rgba(255, 250, 246, 0.9)
  );
  box-shadow:
    0 14px 40px rgba(16, 28, 50, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.brand-mark {
  display: inline-flex;
  width: fit-content;
  min-width: 0;
  align-items: center;
  gap: 11px;
}

.brand-symbol {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(184, 107, 53, 0.3);
  border-radius: 15px;
  background: linear-gradient(145deg, #fffaf6 0%, #f5e4d7 100%);
  color: #9e542d;
  box-shadow:
    0 8px 20px rgba(155, 84, 45, 0.1),
    inset 0 1px 0 #fff;
}

.brand-symbol svg {
  width: 30px;
  height: 30px;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.brand-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 1px;
  direction: ltr;
  text-align: left;
}

.brand-copy strong {
  color: #101c32;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.brand-copy small {
  color: #8a7769;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.header-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  border: 1px solid rgba(234, 223, 215, 0.72);
  border-radius: 999px;
  background: rgba(250, 246, 242, 0.76);
}

.header-nav a {
  position: relative;
  padding: 9px 13px;
  border-radius: 999px;
  color: #566174;
  font-size: 14px;
  font-weight: 650;
  line-height: 1;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.header-nav a:hover {
  color: #101c32;
  background: rgba(255, 255, 255, 0.86);
}

.header-nav a.router-link-active {
  color: #9b542d;
  background: #fff;
  box-shadow: 0 3px 12px rgba(16, 28, 50, 0.06);
}

.mobile-menu-button,
.mobile-menu-shell {
  display: none;
}

@media (max-width: 1050px) {
  .premium-header {
    grid-template-columns: minmax(175px, 1fr) auto minmax(175px, 1fr);
    gap: 14px;
  }

  .header-nav a {
    padding-inline: 10px;
    font-size: 13.5px;
  }
}

@media (max-width: 820px) {
  .site-header {
    padding: 8px 0;
  }

  .premium-header {
    display: flex;
    justify-content: space-between;
    min-height: 62px;
    padding: 7px 9px 7px 10px;
    border-radius: 19px;
  }

  .desktop-nav {
    display: none;
  }

  .brand-symbol {
    width: 42px;
    height: 42px;
    border-radius: 13px;
  }

  .brand-copy strong {
    font-size: 16px;
  }

  .brand-copy small {
    font-size: 10px;
  }

  .mobile-menu-button {
    position: relative;
    display: inline-flex;
    flex: none;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(234, 223, 215, 0.94);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.86);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
  }

  .mobile-menu-button span {
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: #101c32;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }

  .mobile-menu-button.is-open span:first-child {
    transform: translateY(4px) rotate(45deg);
  }

  .mobile-menu-button.is-open span:last-child {
    transform: translateY(-4px) rotate(-45deg);
  }

  .mobile-menu-shell {
    display: block;
    padding-top: 7px;
  }

  .mobile-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7px;
    padding: 12px;
    border: 1px solid rgba(226, 211, 199, 0.9);
    border-radius: 20px;
    background: rgba(255, 252, 249, 0.98);
    box-shadow: 0 18px 38px rgba(16, 28, 50, 0.1);
  }

  .mobile-nav > a {
    padding: 11px 12px;
    border-radius: 12px;
    color: #566174;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }

  .mobile-nav > a.router-link-active {
    background: #fff2e9;
    color: #9b542d;
  }
}

@media (max-width: 430px) {
  .brand-copy small {
    display: none;
  }

  .brand-symbol {
    width: 40px;
    height: 40px;
  }

  .mobile-nav {
    grid-template-columns: 1fr;
  }
}
</style>
