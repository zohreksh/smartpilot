<script setup lang="ts">
import { computed } from "vue";

const config = useRuntimeConfig();

usePageSeo({
  title: "سیاست حریم خصوصی | SmartPilot",
  description:
    "این سایت چگونه رفتار می‌کند: کوکی زبان، تشخیص ناشناس کشور و فرم بریف پروژه. بدون اکانت، بدون تحلیلگر ترافیک و بدون ذخیره پیام‌ها.",
  path: "/privacy",
  image: `${config.app.baseURL}images/hero/desktop-hero.webp`,
});

useBreadcrumbSchema([{ name: "خانه", path: "/" }, { name: "حریم خصوصی", path: "/privacy" }]);

const contactEmail = "zhr.keshavarz@gmail.com";

const signalCards = computed(() => [
  {
    title: "ترجیح زبان (کوکی)",
    text: "اگر از سوییچ FA/EN استفاده کنید، کوکی smartpilot_language فقط حروف «fa» یا «en» را برای ۱۲ ماه نگه می‌دارد تا انتخاب شما به خاطر بماند. هیچ داده شخصی داخل آن نیست.",
  },
  {
    title: "تشخیص کشور (فقط بازدید اول)",
    text: "در نخستین بازدید به آدرس اصلی سایت، یک درخواست یک‌باره به سرویس api.country.is فرستاده می‌شود تا برای انتخاب زبان فارسی یا انگلیسی، کشور اتصال تشخیص داده شود. این درخواست کوکی ندارد و فقط یک کد کشور دو حرفی برای همین سشن مرورگر نگه‌داری می‌شود.",
  },
  {
    title: "بریف پروژه (فرم تماس)",
    text: "متن فرم فقط در مرورگر شما برای ساخت یک پیام آماده واتس‌اپ استفاده می‌شود. هیچ‌چیز به سرور این سایت ارسال یا در آن ذخیره نمی‌شود.",
  },
]);

const rules = computed(() => [
  {
    title: "بدون اکانت و ثبت‌نام",
    text: "سایت هیچ‌وقت از شما ثبت‌نام نمی‌خواهد و بازدیدهایی که می‌کنید به هویت مشخصی گره نمی‌خورد.",
  },
  {
    title: "بدون ابزار تحلیل و ردیابی",
    text: "هیچ ابزار آماری، پیکسل تبلیغاتی یا ردیاب شبکه اجتماعی روی سایت اجرا نمی‌شود؛ پروفایل‌سازی بین‌سایتی وجود ندارد.",
  },
  {
    title: "بدون ذخیره پیام‌ها",
    text: "پیامی که می‌نویسید جز در پیام‌رسانی که خودتان انتخاب می‌کنید، هیچ‌جای دیگر ذخیره نمی‌شود.",
  },
]);

const thirdParties = computed(() => [
  {
    title: "country.is (انتخاب زبان)",
    text: "این سرویس برای تشخیص یک‌باره کشور، به‌ناچار آدرس IP بازدیدکننده را می‌گیرد. طبق اعلام خودش درخواست‌ها را لاگ نمی‌کند. این تنها درخواست شخص ثالثی است که سایت خودش انجام می‌دهد.",
  },
  {
    title: "واتس‌اپ و ایمیل",
    text: "اگر بعد از این با ما تماس بگیرید، مکاتبه در واتس‌اپ یا ایمیل شما انجام می‌شود که شرایط استفاده از آن‌ها خودشان دارد. پیام شما را فقط وقتی می‌بینیم که خودتان ارسالش کرده باشید.",
  },
]);

useHead({
  htmlAttrs: { lang: "fa-IR", dir: "rtl" },
  bodyAttrs: { dir: "rtl" },
});
</script>

<template>
  <main id="main-content" class="privacy-fa" tabindex="-1">
    <section class="privacy-hero">
      <div class="container">
        <span class="privacy-kicker">سیاست حریم خصوصی</span>
        <h1>این سایت با داده شما چه می‌کند و چه نمی‌کند</h1>
        <p>
          SmartPilot روی صفحات استاتیک منتشر می‌شود: نه اکانت دارد، نه تحلیلگر ترافیک و نه پایگاه پیام.
          تنها سیگنال‌ها یک کوکی زبان و یک تشخیص ناشناس کشور است؛ در ادامه دقیقاً می‌گوییم چگونه.
        </p>
      </div>
    </section>

    <section class="container privacy-section">
      <h2>سه سیگنالی که این سایت استفاده می‌کند</h2>
      <p class="privacy-lead">همه موارد زیر در مرورگر شما انجام می‌شود و هر زمان می‌توانید پاکشان کنید.</p>
      <div class="privacy-card-grid">
        <article v-for="signal in signalCards" :key="signal.title" class="privacy-card">
          <h3>{{ signal.title }}</h3>
          <p>{{ signal.text }}</p>
        </article>
      </div>
    </section>

    <section class="container privacy-section privacy-muted">
      <h2>چه چیزی جمع نمی‌شود</h2>
      <div class="privacy-card-grid three">
        <article v-for="rule in rules" :key="rule.title" class="privacy-card">
          <h3>{{ rule.title }}</h3>
          <p>{{ rule.text }}</p>
        </article>
      </div>
    </section>

    <section class="container privacy-section">
      <h2>سرویس‌هایی که بازدیدتان ممکن است لمس کند</h2>
      <div class="privacy-card-grid two">
        <article v-for="item in thirdParties" :key="item.title" class="privacy-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="container privacy-section privacy-muted">
      <h2>حقوق شما و راه ارتباط</h2>
      <div class="privacy-inner">
        <p>برای بازدیدکنندگان بریتانیا و اروپا، حقوق استاندارد GDPR روی هر داده شخصی‌ای که در اختیار ماست اعمال می‌شود.</p>
        <ul>
          <li>پس از آنکه با ما تماس بگیرید، ردپای داده ما به‌طور معمول همان گفت‌وگو است: نام، راه ارتباطی، نام کسب‌وکار و شرح پروژه‌ای که فرستاده‌اید؛ فقط تا زمانی که گفت‌وگو فعال است نگه داشته می‌شود.</li>
          <li>هر وقت بخواهید می‌توانید بپرسید چه چیزی در اختیار داریم، اصلاحاتش کنیم یا کپی گفت‌وگو را حذف کنیم. سایت به خودی خود نمی‌تواند بازدیدی را به یک شخص مرتبط کند.</li>
          <li>
            برای درخواست، به <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a> ایمیل بزنید؛ معمولاً حداکثر ظرف یک روز کاری پاسخ می‌دهیم. با ذکر عبارت «درخواست حریم خصوصی» سریع‌تر دیده می‌شود.
          </li>
        </ul>
        <p class="privacy-note">شفافیت در همین جزئیات، پایه اعتماد ما با مشتریان است: پیش از هر فروش و بازاریابی، روشن و در دسترس می‌ماند.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.privacy-fa { direction: rtl; color: #10203a; }
.privacy-hero { padding: clamp(60px, 8vw, 110px) 0; color: #fff; background:
  radial-gradient(circle at 20% 20%, rgba(210, 144, 100, .2), transparent 42%),
  linear-gradient(125deg, #07111f, #172a43); }
.privacy-kicker { display: inline-block; color: #c99066; letter-spacing: .12em; font: 800 12px/1.6 system-ui, sans-serif; }
.privacy-hero h1 { margin: 14px 0; font-size: clamp(30px, 4vw, 46px); letter-spacing: -.02em; line-height: 1.35; max-width: 820px; }
.privacy-hero p { margin: 0; max-width: 760px; color: #cbd5e0; font-size: 17px; line-height: 1.9; }
.privacy-section { padding: 66px 0 72px; }
.privacy-section.privacy-muted { background: #f7f9fb; }
.privacy-section h2 { margin: 0 0 10px; font-size: clamp(26px, 3vw, 36px); color: #10203a; }
.privacy-lead { margin: 0 0 26px; color: #65758a; line-height: 1.85; }
.privacy-card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr)); gap: 18px; }
.privacy-card { padding: 24px 26px; background: #fff; border: 1px solid #e6dcd4; border-radius: 19px; box-shadow: 0 10px 26px rgba(16, 28, 50, .05); }
.privacy-card h3 { margin: 0 0 9px; font-size: 19px; color: #10203a; }
.privacy-card p { margin: 0; color: #65758a; font-size: 14.5px; line-height: 1.85; }
.privacy-inner { max-width: 860px; }
.privacy-inner p { color: #4b5a70; line-height: 1.95; margin: 0 0 14px; }
.privacy-inner ul { margin: 0 0 10px; padding-right: 20px; color: #65758a; line-height: 1.95; display: grid; gap: 10px; }
.privacy-inner a { color: #9b542d; font-weight: 700; }
.privacy-note { color: #8a7769; font-size: 13px; margin: 12px 0 0; }
@media (max-width: 720px) { .privacy-section { padding: 46px 0 52px; } .privacy-inner ul { padding-right: 18px; } }
</style>
