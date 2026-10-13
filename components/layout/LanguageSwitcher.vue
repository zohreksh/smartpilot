<script setup lang="ts">
import { computed } from "vue";

const route = useRoute();
const isEnglish = computed(() => /^\/en(?:\/|$)/.test(route.path));
const preferredLanguage = useCookie<"fa" | "en">("smartpilot_language", {
  path: "/",
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 365,
});

const savePreference = (locale: "fa" | "en") => {
  preferredLanguage.value = locale;
};
</script>

<template>
  <nav class="language-switcher" aria-label="Language / زبان">
    <NuxtLink to="/" hreflang="fa" lang="fa" :aria-current="!isEnglish ? 'page' : undefined" :class="{ active: !isEnglish }" @click="savePreference('fa')">FA</NuxtLink>
    <span class="language-divider" aria-hidden="true">/</span>
    <!-- Subpages will get equivalent English routes in the translation phase. -->
    <NuxtLink to="/en/" hreflang="en" lang="en" :aria-current="isEnglish ? 'page' : undefined" :class="{ active: isEnglish }" @click="savePreference('en')">EN</NuxtLink>
  </nav>
</template>

<style scoped>
.language-switcher {
  display: inline-flex;
  align-items: center;
  flex: none;
  gap: 4px;
  padding: 5px 8px;
  border: 1px solid rgba(226, 211, 199, 0.88);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.88);
  direction: ltr;
  white-space: nowrap;
}
.language-switcher a { padding: 3px 4px; color: #637083; font: 700 12px/1.5 system-ui, sans-serif; border-radius: 5px; }
.language-switcher a.active { color: #9b542d; background: #fff2e9; }
.language-switcher a:focus-visible { outline: 2px solid #b86b35; outline-offset: 2px; }
.language-divider { color: #aeb4bc; font-size: 12px; }
@media (max-width: 430px) {
  .language-switcher { gap: 2px; padding: 4px 5px; }
  .language-switcher a { font-size: 11px; padding: 3px; }
}
</style>
