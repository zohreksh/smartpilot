<script setup lang="ts">
import { computed, ref } from "vue";

const route = useRoute();
const isEnglish = computed(() => route.path.startsWith("/en/"));
const language = computed(() => isEnglish.value ? "en" : "fa");
const industry = ref<"beauty" | "fashion">("beauty");
const sellerMode = ref<"website" | "social">("website");
const view = ref<"assistant" | "catalogue">("assistant");
const question = ref("");
const activePrompt = ref("");
const selectedProduct = ref<number | null>(null);
const submitted = ref(false);

const copy = computed(() => isEnglish.value ? {
  brand: "atelier / smartpilot",
  eyebrow: "A concept you can try",
  title: "A more helpful way to shop.",
  subtitle: "Explore how a tailored shopping assistant could help customers find the right product — while giving independent sellers a better way to present their catalogue.",
  demo: "Interactive concept demo",
  sample: "Sample experience · No live AI or store connection",
  language: "فارسی",
  beauty: "Beauty & skincare",
  fashion: "Fashion",
  website: "I have an online store",
  social: "I sell through social media",
  assistant: "Shopping assistant",
  catalogue: "Seller view",
  storeLabel: sellerMode.value === "website" ? "Website assistant" : "Social-first shop",
  welcome: industry.value === "beauty" ? "Hi there! Tell me what you're looking for, and I'll help you explore the sample collection." : "Welcome! Tell me your style, preferred colour or budget and let's explore the sample collection.",
  prompts: industry.value === "beauty" ? ["A gentle daily moisturiser", "Something fragrance-free", "Help me compare products"] : ["An everyday neutral outfit", "Show me items under £60", "What sizes are available?"],
  input: "Ask about products…",
  send: "Explore",
  suggestions: "Try asking",
  why: "Why this might fit",
  details: "View details",
  contact: "Contact seller",
  detailTitle: "Product details",
  close: "Close",
  ownerTitle: "Your sample catalogue",
  ownerSubtitle: "A preview of the simple tools a seller could use to organise product information and common questions.",
  products: "Sample products",
  faqs: "Common questions",
  faq1: "What should I know before choosing?",
  faq2: "How can I check availability?",
  faqAnswer: "In a real setup, this answer would be based on the seller's approved product information. This demo uses sample content only.",
  disclosure: "Concept demo",
  disclosureText: "Products, prices and assistant replies are illustrative. No orders are placed and no live store, social account or AI service is connected.",
  priceUnit: "GBP",
  match: "Suggested for your request",
  sellerAction: "Seller contact is a demonstration only.",
  beautyCaution: "For skin concerns, allergies or medical questions, please speak with a qualified professional or the seller. This demo does not provide medical advice.",
  noMatch: "Try another prompt to explore a different sample recommendation.",
} : {
  brand: "atelier / smartpilot",
  eyebrow: "یک تجربه برای امتحان‌کردن",
  title: "خریدی با راهنمایی بهتر.",
  subtitle: "ببینید دستیار خرید اختصاصی چطور می‌تواند به مشتری برای پیدا کردن محصول مناسب کمک کند و معرفی محصولات را برای فروشنده‌های مستقل ساده‌تر کند.",
  demo: "دموی تعاملی مفهومی",
  sample: "تجربه نمونه · بدون هوش مصنوعی زنده یا اتصال به فروشگاه",
  language: "English",
  beauty: "آرایشی و مراقبت پوست",
  fashion: "پوشاک",
  website: "فروشگاه اینترنتی دارم",
  social: "از شبکه‌های اجتماعی می‌فروشم",
  assistant: "دستیار خرید",
  catalogue: "نمای فروشنده",
  storeLabel: sellerMode.value === "website" ? "دستیار کنار فروشگاه" : "فروشگاه اجتماعی",
  welcome: industry.value === "beauty" ? "سلام! بگویید دنبال چه محصولی هستید تا در مجموعه نمونه راهنمایی‌تان کنم." : "خوش آمدید! از سبک، رنگ یا بودجه موردنظرتان بگویید تا محصولات نمونه را بررسی کنیم.",
  prompts: industry.value === "beauty" ? ["یک مرطوب‌کننده روزانه ملایم", "محصول بدون عطر می‌خواهم", "مقایسه محصولات"] : ["یک استایل روزمره و خنثی", "محصولات زیر ۳ میلیون تومان", "چه سایزهایی موجود است؟"],
  input: "درباره محصولات بپرسید…",
  send: "بررسی پیشنهادها",
  suggestions: "برای شروع انتخاب کنید",
  why: "دلیل این پیشنهاد",
  details: "جزئیات محصول",
  contact: "تماس با فروشنده",
  detailTitle: "جزئیات محصول",
  close: "بستن",
  ownerTitle: "کاتالوگ نمونه شما",
  ownerSubtitle: "پیش‌نمایشی از ابزارهای ساده‌ای که فروشنده می‌تواند برای سامان‌دهی اطلاعات محصول و پرسش‌های رایج استفاده کند.",
  products: "محصولات نمونه",
  faqs: "پرسش‌های پرتکرار",
  faq1: "پیش از انتخاب چه نکاتی مهم است؟",
  faq2: "چطور موجودی را بررسی کنم؟",
  faqAnswer: "در نسخه واقعی، پاسخ بر اساس اطلاعات تأییدشده فروشنده ارائه می‌شود. این دمو فقط از محتوای نمونه استفاده می‌کند.",
  disclosure: "دموی مفهومی",
  disclosureText: "محصولات، قیمت‌ها و پاسخ‌های دستیار نمایشی هستند. سفارشی ثبت نمی‌شود و هیچ فروشگاه، حساب اجتماعی یا سرویس هوش مصنوعی زنده‌ای متصل نیست.",
  priceUnit: "تومان",
  match: "پیشنهاد برای درخواست شما",
  sellerAction: "تماس با فروشنده در این نسخه صرفاً نمایشی است.",
  beautyCaution: "برای مشکلات پوستی، حساسیت یا پرسش پزشکی با متخصص واجد صلاحیت یا فروشنده مشورت کنید. این دمو توصیه پزشکی ارائه نمی‌کند.",
  noMatch: "برای دیدن پیشنهاد نمونه دیگر، یکی از پرسش‌های پیشنهادی را انتخاب کنید.",
});

const products = computed(() => {
  if (industry.value === "beauty") {
    return isEnglish.value ? [
      { name: "Cloudveil Daily Moisturiser", kind: "Hydration · 50 ml", price: "£24", tone: "rose", reason: "A simple daily hydration option with clearly listed sample ingredients.", tags: "Fragrance-free · Daily care" },
      { name: "Soft Current Cleansing Gel", kind: "Gentle cleanser · 150 ml", price: "£18", tone: "sand", reason: "A straightforward cleanser to explore as part of a basic routine.", tags: "Gentle cleanse · 150 ml" },
      { name: "Daylight Barrier Cream", kind: "Barrier care · 40 ml", price: "£29", tone: "sage", reason: "A richer sample texture for shoppers comparing moisturising options.", tags: "Moisture · Comfort" },
    ] : [
      { name: "مرطوب‌کننده روزانه کلاودویل", kind: "آبرسانی · ۵۰ میلی‌لیتر", price: "۱٬۲۰۰٬۰۰۰ تومان", tone: "rose", reason: "گزینه‌ای ساده برای آبرسانی روزانه با ترکیبات نمونه و شفاف.", tags: "بدون عطر · مراقبت روزانه" },
      { name: "ژل شست‌وشوی سافت‌کارنت", kind: "پاک‌کننده ملایم · ۱۵۰ میلی‌لیتر", price: "۸۹۰٬۰۰۰ تومان", tone: "sand", reason: "پاک‌کننده‌ای ساده برای بررسی در یک روتین پایه.", tags: "پاک‌کنندگی ملایم · ۱۵۰ میلی‌لیتر" },
      { name: "کرم محافظ دِیلی‌لایت", kind: "مراقبت از سد پوستی · ۴۰ میلی‌لیتر", price: "۱٬۵۰۰٬۰۰۰ تومان", tone: "sage", reason: "بافتی غنی‌تر برای مقایسه گزینه‌های مرطوب‌کننده.", tags: "رطوبت‌رسانی · لطافت" },
    ];
  }
  return isEnglish.value ? [
    { name: "The Everyday Overshirt", kind: "Relaxed fit · Sizes XS–XL", price: "£48", tone: "sand", reason: "A versatile neutral layer that can work across casual everyday outfits.", tags: "Stone · Relaxed fit" },
    { name: "Studio Straight-Leg Trouser", kind: "Straight leg · Sizes S–XL", price: "£56", tone: "sage", reason: "A clean silhouette that pairs easily with simple tops and layers.", tags: "Olive · Straight leg" },
    { name: "Soft Form Cotton Tee", kind: "Organic cotton · Sizes XS–XL", price: "£22", tone: "rose", reason: "A simple base layer for a practical capsule wardrobe.", tags: "Cream · Regular fit" },
  ] : [
    { name: "اورشرت روزمره", kind: "آزاد · سایز XS تا XL", price: "۲٬۴۰۰٬۰۰۰ تومان", tone: "sand", reason: "لایه‌ای خنثی و کاربردی برای استایل روزمره.", tags: "سنگی · برش آزاد" },
    { name: "شلوار راسته استودیو", kind: "برش راسته · سایز S تا XL", price: "۲٬۸۰۰٬۰۰۰ تومان", tone: "sage", reason: "فرمی ساده که با بالاپوش‌ها و لایه‌های مختلف هماهنگ می‌شود.", tags: "زیتونی · راسته" },
    { name: "تی‌شرت نخی سافت‌فرم", kind: "پنبه‌ای · سایز XS تا XL", price: "۱٬۱۰۰٬۰۰۰ تومان", tone: "rose", reason: "یک لایه پایه ساده برای کمد لباس کاربردی.", tags: "کرم · برش معمولی" },
  ];
});

const activeProduct = computed(() => selectedProduct.value === null ? null : products.value[selectedProduct.value]);
const response = computed(() => {
  if (!submitted.value) return "";
  const q = question.value.trim().toLocaleLowerCase();
  if (industry.value === "beauty" && /(حساسیت|درمان|بیماری|allerg|medical|treat|diagnos)/i.test(q)) return isEnglish.value
    ? "I can’t assess medical or allergy concerns. Please check with a qualified professional or the seller before choosing a product."
    : "من نمی‌توانم درباره حساسیت یا مشکلات پزشکی ارزیابی ارائه کنم. پیش از انتخاب محصول با متخصص واجد صلاحیت یا فروشنده مشورت کنید.";
  if (industry.value === "fashion" && /(سایز|size|موجود|available)/i.test(q)) return isEnglish.value
    ? "Here are the sample sizes listed in this catalogue. Availability in a real shop would need to be confirmed by the seller."
    : "سایزهای نمونه در همین کاتالوگ درج شده‌اند. موجودی فروشگاه واقعی باید از فروشنده تأیید شود.";
  return isEnglish.value
    ? "Based on your request, here are a few options from this illustrative catalogue. The reasons below are generated from sample product descriptions, not a live AI service."
    : "بر اساس درخواست شما، چند گزینه از کاتالوگ نمایشی را ببینید. دلیل پیشنهادها از توضیحات نمونه محصولات می‌آید، نه از سرویس هوش مصنوعی زنده.";
});

function ask(prompt?: string) {
  if (prompt) question.value = prompt;
  if (!question.value.trim()) return;
  activePrompt.value = question.value;
  submitted.value = true;
  selectedProduct.value = null;
}
function switchLanguage() {
  navigateTo(isEnglish.value ? "/demo" : "/en/demo");
}
function resetDemo() {
  industry.value = "beauty";
  sellerMode.value = "website";
  view.value = "assistant";
  question.value = "";
  submitted.value = false;
  selectedProduct.value = null;
}
</script>

<template>
  <main class="retail-demo" :class="{ 'retail-demo--en': isEnglish }">
    <header class="demo-topbar">
      <NuxtLink class="demo-brand" :to="isEnglish ? '/en' : '/'"><span class="brand-mark">S</span><span>{{ copy.brand }}</span></NuxtLink>
      <div class="demo-top-actions">
        <span class="demo-status"><i></i>{{ copy.demo }}</span>
        <button class="demo-language" type="button" @click="switchLanguage">{{ copy.language }} <span aria-hidden="true">↗</span></button>
      </div>
    </header>

    <section class="demo-intro">
      <p class="demo-eyebrow"><span></span>{{ copy.eyebrow }}</p>
      <h1>{{ copy.title }}</h1>
      <p class="demo-lede">{{ copy.subtitle }}</p>
      <p class="demo-disclosure-line"><span aria-hidden="true">✳</span>{{ copy.sample }}</p>
    </section>

    <section class="demo-workspace" aria-label="Interactive retail assistant demo">
      <aside class="demo-sidebar">
        <div class="sidebar-step">
          <span class="step-number">01</span>
          <div><h2>{{ isEnglish ? "Choose an industry" : "حوزه را انتخاب کنید" }}</h2><p>{{ isEnglish ? "What do you sell?" : "چه چیزی می‌فروشید؟" }}</p></div>
        </div>
        <div class="choice-stack">
          <button type="button" class="choice-card" :class="{ selected: industry === 'beauty' }" @click="industry = 'beauty'; submitted = false; selectedProduct = null">
            <span class="choice-icon beauty-icon" aria-hidden="true">✳</span><span class="choice-copy"><strong>{{ copy.beauty }}</strong><small>{{ isEnglish ? "Care, texture & routine" : "مراقبت، بافت و روتین" }}</small></span><span class="choice-check">{{ industry === 'beauty' ? "✓" : "＋" }}</span>
          </button>
          <button type="button" class="choice-card" :class="{ selected: industry === 'fashion' }" @click="industry = 'fashion'; submitted = false; selectedProduct = null">
            <span class="choice-icon fashion-icon" aria-hidden="true">◈</span><span class="choice-copy"><strong>{{ copy.fashion }}</strong><small>{{ isEnglish ? "Style, colour & fit" : "استایل، رنگ و اندازه" }}</small></span><span class="choice-check">{{ industry === 'fashion' ? "✓" : "＋" }}</span>
          </button>
        </div>

        <div class="sidebar-step step-two">
          <span class="step-number">02</span>
          <div><h2>{{ isEnglish ? "How do you sell?" : "چطور می‌فروشید؟" }}</h2><p>{{ isEnglish ? "Try either setup" : "هر دو حالت را امتحان کنید" }}</p></div>
        </div>
        <div class="mode-options">
          <button type="button" :class="{ active: sellerMode === 'website' }" @click="sellerMode = 'website'"><span>▣</span><span>{{ copy.website }}</span><b>{{ sellerMode === 'website' ? "✓" : "" }}</b></button>
          <button type="button" :class="{ active: sellerMode === 'social' }" @click="sellerMode = 'social'"><span>↗</span><span>{{ copy.social }}</span><b>{{ sellerMode === 'social' ? "✓" : "" }}</b></button>
        </div>
        <div class="sidebar-note"><span aria-hidden="true">⌁</span><p>{{ isEnglish ? "Switch any option to see how the same core can adapt to different sellers." : "گزینه‌ها را تغییر دهید تا ببینید یک هسته مشترک چطور با فروشنده‌های مختلف سازگار می‌شود." }}</p></div>
      </aside>

      <section class="demo-main-panel">
        <div class="store-preview-bar">
          <div class="store-preview-label"><span class="store-avatar">{{ industry === 'beauty' ? "a" : "m" }}</span><div><strong>{{ industry === 'beauty' ? (isEnglish ? "Aster & Form" : "اَستر و فرم") : (isEnglish ? "Morrow Studio" : "استودیو مورو") }}</strong><small>{{ copy.storeLabel }}</small></div></div>
          <div class="preview-tabs"><button type="button" :class="{ active: view === 'assistant' }" @click="view = 'assistant'">{{ copy.assistant }}</button><button type="button" :class="{ active: view === 'catalogue' }" @click="view = 'catalogue'">{{ copy.catalogue }}</button></div>
        </div>

        <div v-if="view === 'assistant'" class="assistant-content">
          <div class="assistant-welcome"><span class="assistant-orb">✳</span><div><p class="assistant-kicker">{{ isEnglish ? "YOUR SHOPPING COMPANION" : "همراه خرید شما" }}</p><h2>{{ copy.welcome }}</h2></div></div>
          <div class="prompt-area"><p class="field-label">{{ copy.suggestions }}</p><div class="prompt-chips"><button v-for="prompt in copy.prompts" :key="prompt" type="button" @click="ask(prompt)">{{ prompt }} <span>↗</span></button></div></div>
          <form class="question-form" @submit.prevent="ask()"><label class="sr-only" for="demo-question">{{ copy.input }}</label><input id="demo-question" v-model="question" :placeholder="copy.input" autocomplete="off" /><button type="submit">{{ copy.send }} <span aria-hidden="true">↗</span></button></form>
          <div v-if="submitted" class="answer-panel" aria-live="polite"><div class="answer-heading"><span class="mini-orb">✳</span><strong>{{ isEnglish ? "A sample response" : "پاسخ نمایشی" }}</strong><span class="sample-pill">{{ isEnglish ? "SAMPLE" : "نمونه" }}</span></div><p>{{ response }}</p><p v-if="industry === 'beauty'" class="caution-note">ⓘ {{ copy.beautyCaution }}</p><p class="recommendation-label">{{ copy.match }}</p><div class="product-grid"><article v-for="(product, index) in products" :key="product.name" class="product-card"><div class="product-art" :class="'art-' + product.tone"><span class="art-sun"></span><span class="product-shape" :class="industry === 'beauty' ? 'bottle-shape' : 'cloth-shape'"></span><span class="art-caption">{{ industry === 'beauty' ? 'FORM / 0' + (index + 1) : 'STUDIO / 0' + (index + 1) }}</span></div><div class="product-info"><div class="product-name-row"><h3>{{ product.name }}</h3><span class="product-price">{{ product.price }}</span></div><p class="product-kind">{{ product.kind }}</p><p class="product-reason">{{ product.reason }}</p><div class="product-bottom"><span>{{ product.tags }}</span><button type="button" @click="selectedProduct = index">{{ copy.details }} <span>↗</span></button></div></div></article></div><p class="no-live-note">{{ copy.noMatch }}</p></div>
          <div v-else class="empty-products"><div class="empty-sparkle">✳</div><p>{{ isEnglish ? "Your product suggestions will appear here." : "پیشنهاد محصولات در این بخش نمایش داده می‌شود." }}</p><span>{{ isEnglish ? "Choose a prompt above to begin." : "برای شروع، یکی از پرسش‌های بالا را انتخاب کنید." }}</span></div>
        </div>

        <div v-else class="owner-view">
          <div class="owner-heading"><span class="owner-icon">▤</span><div><p class="assistant-kicker">{{ isEnglish ? "SELLER SPACE / PREVIEW" : "فضای فروشنده / پیش‌نمایش" }}</p><h2>{{ copy.ownerTitle }}</h2><p>{{ copy.ownerSubtitle }}</p></div></div>
          <div class="owner-stats"><div><span>{{ isEnglish ? "Catalogue items" : "محصولات کاتالوگ" }}</span><strong>03</strong></div><div><span>{{ isEnglish ? "FAQs" : "پرسش‌های متداول" }}</span><strong>02</strong></div><div><span>{{ isEnglish ? "Connection" : "وضعیت اتصال" }}</span><strong class="offline-state">{{ isEnglish ? "Demo only" : "نمایشی" }}</strong></div></div>
          <h3 class="owner-section-title">{{ copy.products }}</h3><div class="owner-product-list"><div v-for="(product, index) in products" :key="product.name" class="owner-product"><span class="owner-product-dot" :class="'art-' + product.tone"></span><div><strong>{{ product.name }}</strong><small>{{ product.kind }}</small></div><b>{{ product.price }}</b></div></div>
          <h3 class="owner-section-title">{{ copy.faqs }}</h3><details class="sample-faq"><summary>{{ copy.faq1 }}</summary><p>{{ copy.faqAnswer }}</p></details><details class="sample-faq"><summary>{{ copy.faq2 }}</summary><p>{{ copy.faqAnswer }}</p></details>
          <div class="owner-footer-note">ⓘ {{ isEnglish ? "This is a static preview. Editing and saving are not enabled in this concept demo." : "این پیش‌نمایش ثابت است؛ ویرایش و ذخیره‌سازی در این دموی مفهومی فعال نیست." }}</div>
        </div>
        <footer class="workspace-footer"><span><i></i>{{ isEnglish ? "Illustrative sample data" : "داده‌های نمونه و نمایشی" }}</span><button type="button" @click="resetDemo">{{ isEnglish ? "Reset demo" : "شروع دوباره" }} ↺</button></footer>
      </section>
    </section>

    <section class="demo-bottom-note"><div class="note-symbol">i</div><div><strong>{{ copy.disclosure }}</strong><p>{{ copy.disclosureText }}</p></div></section>
    <footer class="demo-page-footer"><NuxtLink :to="isEnglish ? '/en' : '/'">SmartPilot</NuxtLink><span>{{ isEnglish ? "A concept for independent retail." : "مفهومی برای فروشندگان مستقل." }}</span><NuxtLink :to="isEnglish ? '/en/contact' : '/contact'">{{ isEnglish ? "Talk to us" : "گفت‌وگو با ما" }} ↗</NuxtLink></footer>

    <div v-if="activeProduct" class="product-modal-backdrop" role="presentation" @click.self="selectedProduct = null">
      <section class="product-modal" role="dialog" aria-modal="true" :aria-label="copy.detailTitle">
        <button class="modal-close" type="button" :aria-label="copy.close" @click="selectedProduct = null">×</button>
        <div class="modal-art" :class="'art-' + activeProduct.tone"><span class="product-shape" :class="industry === 'beauty' ? 'bottle-shape' : 'cloth-shape'"></span></div>
        <p class="assistant-kicker">{{ copy.detailTitle }}</p><h2>{{ activeProduct.name }}</h2><p class="modal-kind">{{ activeProduct.kind }}</p><strong class="modal-price">{{ activeProduct.price }}</strong><p>{{ activeProduct.reason }}</p><p class="modal-tags">{{ activeProduct.tags }}</p><button class="modal-contact" type="button" @click="selectedProduct = null">{{ copy.contact }} <span>↗</span></button><small>{{ copy.sellerAction }}</small>
      </section>
    </div>
  </main>
</template>

<style scoped>
.retail-demo{--ink:#20231f;--muted:#77796f;--line:#e9e6de;--paper:#fbfaf7;--accent:#a65d42;min-height:100vh;background:var(--paper);color:var(--ink);font-family:Vazirmatn, sans-serif;padding:0 clamp(18px,4.5vw,72px) 24px}
.retail-demo--en{font-family:Inter,system-ui,sans-serif}
.retail-demo button,.retail-demo input{font:inherit}
.retail-demo button{cursor:pointer}
.demo-topbar{height:76px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);gap:20px}
.demo-brand{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:750;letter-spacing:-.03em}
.brand-mark{display:grid;place-items:center;width:31px;height:31px;border-radius:10px;background:#242923;color:#fff;font-family:Inter,sans-serif;font-size:15px}
.demo-top-actions{display:flex;align-items:center;gap:18px}
.demo-status{font-size:11px;color:#77796f;display:flex;align-items:center;gap:7px}
.demo-status i,.workspace-footer i{width:7px;height:7px;background:#779a79;border-radius:50%;display:inline-block}
.demo-language{border:1px solid var(--line);border-radius:9px;background:#fff;padding:7px 12px;font-size:12px;color:var(--ink)}
.demo-intro{max-width:820px;margin:56px auto 38px;text-align:center}
.demo-eyebrow{display:flex;justify-content:center;align-items:center;gap:8px;font-size:11px;color:var(--accent);font-weight:700;letter-spacing:.03em}
.demo-eyebrow span{width:6px;height:6px;border-radius:50%;background:var(--accent)}
.demo-intro h1{font-size:clamp(32px,4.5vw,53px);line-height:1.18;letter-spacing:-.055em;margin:15px 0 14px;font-weight:680}
.demo-lede{max-width:670px;margin:0 auto;color:#696d64;font-size:14px;line-height:1.9}
.demo-disclosure-line{display:flex;justify-content:center;align-items:center;gap:7px;margin-top:20px;font-size:10px;color:#7b7c73}
.demo-disclosure-line span{color:var(--accent);font-size:15px}
.demo-workspace{max-width:1240px;margin:0 auto;display:grid;grid-template-columns:minmax(250px,300px) minmax(0,1fr);border:1px solid #e7e4dc;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 20px 70px #29271e0a;direction:ltr}
.retail-demo:not(.retail-demo--en) .demo-workspace{direction:rtl}
.demo-sidebar{padding:28px 22px;background:#f8f7f2;border-inline-end:1px solid var(--line)}
.sidebar-step{display:flex;gap:12px;align-items:flex-start}
.step-number{font-family:Inter,sans-serif;font-size:11px;color:var(--accent);border:1px solid #e5cfc4;background:#fff9f5;padding:5px 7px;border-radius:7px}
.sidebar-step h2{font-size:13px;margin:0 0 3px;font-weight:750}
.sidebar-step p{font-size:11px;color:var(--muted);margin:0}
.choice-stack{display:grid;gap:9px;margin-top:17px}
.choice-card{width:100%;display:flex;align-items:center;text-align:start;gap:10px;padding:11px 10px;border:1px solid #e6e3dc;background:#fff;border-radius:11px;color:var(--ink);transition:border-color .16s,background .16s}
.choice-card.selected{border-color:#c98c71;background:#fffaf7;box-shadow:0 0 0 2px #a65d4210}
.choice-icon{width:35px;height:35px;border-radius:10px;display:grid;place-items:center;font-size:17px;flex:none}
.beauty-icon{background:#f3e3df;color:#9c5d53}.fashion-icon{background:#e3e9dd;color:#586c54}
.choice-copy{display:grid;gap:2px;flex:1;min-width:0}.choice-copy strong{font-size:11px;font-weight:700}.choice-copy small{font-size:10px;color:var(--muted)}
.choice-check{font-size:12px;color:var(--accent)}
.step-two{margin-top:28px}
.mode-options{display:grid;gap:8px;margin-top:14px}
.mode-options button{display:flex;align-items:center;gap:9px;padding:10px;border:1px solid transparent;border-radius:9px;background:transparent;color:#65685f;text-align:start;font-size:11px}
.mode-options button.active{background:#fff;border-color:#e7e3db;color:var(--ink)}
.mode-options button>span:first-child{font-size:15px;color:#8a8b80}
.mode-options button>span:nth-child(2){flex:1}
.mode-options button b{color:var(--accent);font-size:12px}
.sidebar-note{display:flex;gap:9px;align-items:flex-start;margin-top:28px;border-top:1px solid #e8e5dd;padding-top:17px;color:#7d7e74}
.sidebar-note>span{color:var(--accent);font-size:17px}.sidebar-note p{font-size:10px;line-height:1.8;margin:0}
.demo-main-panel{min-width:0;direction:ltr}
.retail-demo:not(.retail-demo--en) .demo-main-panel{text-align:right;direction:rtl}
.store-preview-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:15px 22px;border-bottom:1px solid var(--line);min-height:70px}
.store-preview-label{display:flex;align-items:center;gap:10px;min-width:0}
.store-avatar{width:35px;height:35px;display:grid;place-items:center;border-radius:11px;background:#e9e5dc;color:#55584c;font-family:Georgia,serif;font-size:21px;font-style:italic}
.store-preview-label div{display:grid;gap:2px}.store-preview-label strong{font-size:12px}.store-preview-label small{font-size:10px;color:var(--muted)}
.preview-tabs{display:flex;gap:3px;background:#f4f3ee;padding:4px;border-radius:9px;flex:none}
.preview-tabs button{border:0;border-radius:6px;background:transparent;padding:7px 10px;color:#74766c;font-size:10px}
.preview-tabs button.active{background:#fff;color:#252720;box-shadow:0 1px 4px #0000000b}
.assistant-content,.owner-view{padding:27px clamp(16px,3vw,34px) 25px;min-height:430px}
.assistant-welcome{display:flex;gap:13px;align-items:flex-start;max-width:620px;margin-bottom:28px}
.assistant-orb{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:13px;background:#f2e4db;color:#a65d42;font-size:18px}
.assistant-kicker{font-family:Inter,sans-serif;font-size:9px;font-weight:750;letter-spacing:.12em;color:#a65d42;margin:0 0 7px}
.assistant-welcome h2{font-size:16px;line-height:1.65;letter-spacing:-.025em;margin:0;font-weight:650}
.field-label{font-size:10px;color:#77796f;margin:0 0 10px}
.prompt-chips{display:flex;flex-wrap:wrap;gap:7px}
.prompt-chips button{border:1px solid #e7e4dc;border-radius:999px;background:#fff;padding:8px 11px;color:#5f6259;font-size:10px}
.prompt-chips button span{color:var(--accent);margin-inline-start:5px}
.question-form{display:flex;gap:8px;margin-top:19px;padding:6px;border:1px solid #e3e0d8;border-radius:11px;background:#fff;box-shadow:0 4px 16px #27251b06}
.question-form:focus-within{border-color:#c99a83}
.question-form input{min-width:0;flex:1;border:0;outline:0;background:transparent;padding:8px 10px;color:var(--ink);font-size:12px}
.question-form input::placeholder{color:#a0a095}
.question-form button,.modal-contact{border:0;border-radius:8px;background:#292e27;color:#fff;padding:9px 13px;font-size:11px;white-space:nowrap}
.question-form button span,.modal-contact span{margin-inline-start:7px}
.empty-products{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-height:180px;color:#77796f}
.empty-sparkle{display:grid;place-items:center;width:39px;height:39px;border-radius:13px;background:#f7f4ed;color:#a65d42;font-size:20px}
.empty-products p{font-size:12px;margin:12px 0 3px}.empty-products span{font-size:10px;color:#9b9c92}
.answer-panel{margin-top:24px;border-top:1px solid #efede7;padding-top:18px}
.answer-heading{display:flex;align-items:center;gap:8px;font-size:11px}
.mini-orb{display:grid;place-items:center;width:24px;height:24px;background:#f2e4db;border-radius:8px;color:#a65d42}
.sample-pill{font-size:8px;letter-spacing:.08em;color:#8c8d83;background:#f5f4ef;padding:4px 6px;border-radius:4px}
.answer-panel>p:not(.recommendation-label):not(.caution-note):not(.no-live-note){font-size:11px;line-height:1.8;color:#686b62;max-width:760px;margin:10px 0 15px}
.caution-note{background:#fbf6ee;border-inline-start:2px solid #c69a6e;padding:9px 11px;color:#7b6b56;font-size:10px;line-height:1.8;margin:12px 0}
.recommendation-label{font-size:10px;font-weight:750;margin:20px 0 10px}
.product-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.product-card{border:1px solid #ebe8e0;border-radius:10px;overflow:hidden;min-width:0;background:#fff}
.product-art,.modal-art{height:116px;position:relative;overflow:hidden;display:grid;place-items:center}
.art-rose{background:#f1e2dc}.art-sand{background:#e9e3d7}.art-sage{background:#e0e5d9}
.art-sun{position:absolute;width:96px;height:96px;border-radius:50%;background:#ffffff45;top:-33px;right:-12px}
.product-shape{position:relative;z-index:1;display:block;filter:drop-shadow(0 7px 5px #3e32231b)}
.bottle-shape{width:35px;height:58px;border-radius:9px 9px 11px 11px;background:linear-gradient(90deg,#c2a28a,#e9d4c1 45%,#b48b70);border:1px solid #b99a82}
.bottle-shape:before{content:"";position:absolute;width:15px;height:9px;top:-9px;left:9px;border-radius:3px 3px 0 0;background:#8d7c68}
.bottle-shape:after{content:"A / F";position:absolute;left:0;right:0;top:24px;text-align:center;font:6px Inter,sans-serif;color:#735b48}
.cloth-shape{width:52px;height:66px;background:linear-gradient(110deg,#b5a18b,#e3d3bc 50%,#a99178);clip-path:polygon(28% 0,42% 8%,58% 8%,72% 0,100% 16%,83% 40%,73% 31%,78% 100%,22% 100%,27% 31%,17% 40%,0 16%);filter:drop-shadow(0 6px 5px #3e32231b)}
.art-caption{position:absolute;bottom:9px;left:9px;font:7px Inter,sans-serif;letter-spacing:.08em;color:#756d5e;opacity:.8}
.product-info{padding:10px}
.product-name-row{display:flex;align-items:flex-start;justify-content:space-between;gap:6px}
.product-name-row h3{font-size:10px;line-height:1.55;margin:0;font-weight:750}
.product-price{font-family:Inter,sans-serif;font-size:9px;font-weight:750;white-space:nowrap;color:#4d5946}
.product-kind{font-size:9px;color:#8b8b80;margin:4px 0 8px}
.product-reason{font-size:9px;line-height:1.7;color:#686b62;min-height:46px;margin:0}
.product-bottom{display:grid;gap:8px;margin-top:9px;padding-top:8px;border-top:1px solid #f0eee8}
.product-bottom>span{font-size:8px;color:#898b80}
.product-bottom button{display:flex;justify-content:space-between;align-items:center;border:0;background:transparent;color:#9c5d43;font-size:9px;padding:0;text-align:start}
.no-live-note{font-size:9px;color:#99998f;margin:12px 0 0}
.workspace-footer{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 22px;border-top:1px solid var(--line);background:#fdfcf9}
.workspace-footer>span{display:flex;align-items:center;gap:7px;color:#818277;font-size:9px}
.workspace-footer i{width:6px;height:6px}
.workspace-footer button{border:0;background:transparent;color:#7c7d73;font-size:10px}
.owner-heading{display:flex;gap:13px;align-items:flex-start;margin-bottom:22px}
.owner-icon{display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:#e6e9df;color:#61705a;font-size:19px;flex:none}
.owner-heading h2{font-size:17px;margin:0 0 7px}
.owner-heading>div>p:last-child{font-size:11px;line-height:1.8;color:#77796f;margin:0;max-width:570px}
.owner-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:22px 0 25px}
.owner-stats>div{padding:13px;border:1px solid #e9e6de;border-radius:10px;background:#fdfcf9;display:grid;gap:8px}
.owner-stats span{font-size:9px;color:#77796f}.owner-stats strong{font:700 22px Inter,sans-serif}.owner-stats .offline-state{font:700 11px Vazirmatn,sans-serif;color:#8c795b}
.owner-section-title{font-size:12px;margin:22px 0 9px}
.owner-product-list{border:1px solid #e9e6de;border-radius:10px;overflow:hidden}
.owner-product{display:flex;align-items:center;gap:10px;padding:10px 12px;border-bottom:1px solid #efede7}
.owner-product:last-child{border-bottom:0}
.owner-product-dot{width:29px;height:29px;border-radius:8px;flex:none}
.owner-product>div{display:grid;gap:2px;flex:1;min-width:0}.owner-product>div strong{font-size:10px}.owner-product>div small{font-size:9px;color:#88897f}.owner-product>b{font-size:9px;white-space:nowrap}
.sample-faq{border:1px solid #e9e6de;border-radius:9px;padding:11px 12px;margin-top:7px;font-size:10px}
.sample-faq summary{cursor:pointer;font-weight:650}.sample-faq p{font-size:10px;line-height:1.8;color:#77796f;margin-bottom:0}
.owner-footer-note{margin-top:16px;padding:11px;background:#f8f6ef;border-radius:8px;font-size:10px;line-height:1.8;color:#7e796a}
.demo-bottom-note{max-width:1240px;margin:20px auto 0;padding:17px 20px;display:flex;align-items:flex-start;gap:12px;border:1px solid #e9e6de;border-radius:12px;background:#fff}
.note-symbol{width:23px;height:23px;border-radius:50%;display:grid;place-items:center;flex:none;background:#f4ece4;color:#a65d42;font:700 12px Inter,sans-serif}
.demo-bottom-note strong{font-size:11px}.demo-bottom-note p{font-size:10px;line-height:1.8;color:#77796f;margin:3px 0 0}
.demo-page-footer{max-width:1240px;margin:21px auto 0;display:flex;align-items:center;gap:18px;color:#8a8b81;font-size:10px}
.demo-page-footer>a:first-child{font-weight:800;color:#34372f}.demo-page-footer span{flex:1}
.product-modal-backdrop{position:fixed;inset:0;z-index:1000;background:#1f211dc9;display:grid;place-items:center;padding:20px}
.product-modal{position:relative;width:min(430px,100%);max-height:90vh;overflow:auto;border-radius:16px;background:#fff;padding:24px;text-align:start;box-shadow:0 30px 90px #0003}
.modal-close{position:absolute;z-index:2;top:13px;right:13px;width:30px;height:30px;border:1px solid #e8e5dd;border-radius:8px;background:#fff;font-size:20px;color:#5c5e55}
.retail-demo--en .modal-close{right:auto;left:13px}
.modal-art{height:150px;border-radius:11px;margin-bottom:20px}.modal-art .bottle-shape{transform:scale(1.3)}.modal-art .cloth-shape{transform:scale(1.2)}
.product-modal h2{font-size:20px;margin:0 0 4px}.modal-kind{font-size:11px;color:#85867c;margin:0 0 10px}.modal-price{font-size:15px;color:#4d5946}.product-modal>p:not(.assistant-kicker):not(.modal-kind):not(.modal-tags){font-size:12px;line-height:1.9;color:#686b62}
.modal-tags{font-size:10px;color:#898b80}.modal-contact{width:100%;margin:9px 0 10px;padding:12px}.product-modal>small{font-size:9px;color:#88897f;display:block;text-align:center}
@media(min-width:1000px){.demo-sidebar{padding:30px 24px}.assistant-content,.owner-view{padding-top:32px;padding-bottom:30px}.product-art{height:130px}}
@media(max-width:760px){.retail-demo{padding:0 14px 18px}.demo-topbar{height:64px}.demo-status{display:none}.demo-intro{margin:39px auto 27px}.demo-intro h1{font-size:34px}.demo-lede{font-size:12px}.demo-workspace{grid-template-columns:1fr}.demo-sidebar{padding:18px;border-inline-end:0;border-bottom:1px solid var(--line)}.sidebar-step{align-items:center}.choice-stack{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.choice-card{padding:9px 7px;gap:7px}.choice-icon{width:29px;height:29px}.choice-copy strong{font-size:10px}.choice-copy small{font-size:9px}.choice-check{display:none}.step-two{margin-top:17px}.mode-options{grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.mode-options button{font-size:10px;padding:8px}.sidebar-note{margin-top:12px;padding-top:10px}.store-preview-bar{padding:12px;align-items:flex-start;flex-direction:column}.preview-tabs{width:100%}.preview-tabs button{flex:1}.assistant-content,.owner-view{padding:21px 13px}.assistant-welcome h2{font-size:14px}.product-grid{grid-template-columns:1fr;gap:10px}.product-card{display:grid;grid-template-columns:95px minmax(0,1fr)}.product-art{height:100%;min-height:145px}.product-info{padding:11px}.product-reason{min-height:0}.product-name-row{flex-wrap:wrap}.product-name-row h3{font-size:11px}.product-price{font-size:10px}.product-kind{font-size:9px}.product-bottom{grid-template-columns:1fr auto;align-items:center}.product-bottom>span{font-size:8px}.product-bottom button{white-space:nowrap}.workspace-footer{padding:11px 13px}.owner-stats{gap:6px}.owner-stats>div{padding:9px}.owner-stats span{font-size:8px}.owner-stats strong{font-size:17px}.owner-stats .offline-state{font-size:9px}.demo-page-footer{gap:10px;font-size:9px;flex-wrap:wrap}.demo-bottom-note{padding:13px}.question-form button{padding:8px 10px;font-size:10px}}
@media(max-width:390px){.demo-intro h1{font-size:29px}.choice-stack{grid-template-columns:1fr}.choice-card{padding:8px}.mode-options button{font-size:9px}.product-card{grid-template-columns:82px minmax(0,1fr)}.product-info{padding:9px}.product-name-row h3{font-size:10px}.product-price{font-size:9px}.product-bottom{grid-template-columns:1fr}.demo-page-footer span{flex-basis:100%;order:3}}
</style>