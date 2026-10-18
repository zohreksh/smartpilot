<script setup lang="ts">
import { computed } from "vue";

const route = useRoute();
const isEnglish = computed(() => route.path.startsWith("/en/"));
</script>

<template>
  <section class="retail-demo-callout" :class="{ 'retail-demo-callout--en': isEnglish }" aria-labelledby="retail-demo-callout-title">
    <div class="retail-demo-callout__copy">
      <span class="retail-demo-callout__eyebrow">{{ isEnglish ? "A CONCEPT YOU CAN TRY" : "یک تجربه برای امتحان‌کردن" }}</span>
      <h2 id="retail-demo-callout-title">{{ isEnglish ? "See how a shopping assistant could work for your business." : "ببینید دستیار خرید چطور می‌تواند به کسب‌وکار شما کمک کند." }}</h2>
      <p>{{ isEnglish ? "Explore beauty and fashion scenarios for online stores and social-first sellers. No sign-up, live AI or store connection." : "سناریوهای آرایشی و پوشاک را برای فروشگاه اینترنتی و فروش در شبکه‌های اجتماعی امتحان کنید؛ بدون ثبت‌نام، هوش مصنوعی زنده یا اتصال به فروشگاه." }}</p>
    </div>
    <NuxtLink class="retail-demo-callout__action" :to="isEnglish ? '/en/demo' : '/demo'">
      {{ isEnglish ? "Try the interactive demo" : "مشاهده دموی تعاملی" }} <span aria-hidden="true">↗</span>
    </NuxtLink>
  </section>
</template>

<style scoped>
.retail-demo-callout{display:flex;align-items:center;justify-content:space-between;gap:28px;max-width:1240px;margin:28px auto;padding:clamp(24px,4vw,42px);border:1px solid #e6d5c5;border-radius:22px;background:radial-gradient(circle at 90% 0%,rgba(199,143,103,.17),transparent 32%),linear-gradient(125deg,#fffdf9,#f8f0e8);color:#182a3c}
.retail-demo-callout__copy{max-width:760px}.retail-demo-callout__eyebrow{color:#99623f;font:800 10px/1.6 system-ui,sans-serif;letter-spacing:.13em}
.retail-demo-callout h2{margin:10px 0 9px;font-size:clamp(22px,3vw,34px);line-height:1.35;letter-spacing:-.025em}
.retail-demo-callout p{max-width:690px;margin:0;color:#626a70;font-size:14px;line-height:1.9}
.retail-demo-callout__action{display:inline-flex;align-items:center;justify-content:center;gap:13px;flex:none;min-height:50px;padding:0 20px;border-radius:11px;background:#182a3c;color:#fffaf4;font-size:13px;font-weight:750;text-decoration:none;transition:transform .18s ease,background .18s ease}
.retail-demo-callout__action:hover{transform:translateY(-2px);background:#2b435b}
.retail-demo-callout--en{direction:ltr}.retail-demo-callout:not(.retail-demo-callout--en){direction:rtl}
@media(max-width:760px){.retail-demo-callout{margin:20px 14px;align-items:stretch;flex-direction:column;gap:18px;border-radius:16px}.retail-demo-callout h2{font-size:24px}.retail-demo-callout p{font-size:13px}.retail-demo-callout__action{align-self:flex-start}}
</style>
