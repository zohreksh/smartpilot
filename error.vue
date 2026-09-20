<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number;
    statusMessage?: string;
    message?: string;
  };
}>();

const statusCode = computed(() => props.error?.statusCode || 500);
const title = computed(() =>
  statusCode.value === 404 ? "این صفحه پیدا نشد" : "مشکلی پیش آمده است",
);
const description = computed(() =>
  statusCode.value === 404
    ? "ممکن است آدرس تغییر کرده باشد یا صفحه دیگر در دسترس نباشد."
    : "لطفاً دوباره تلاش کنید یا به صفحه اصلی برگردید.",
);

const goHome = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="error-page">
    <SiteHeader />
    <main class="error-main">
      <section class="error-card" aria-labelledby="error-title">
        <span class="error-code">{{ statusCode }}</span>
        <h1 id="error-title">{{ title }}</h1>
        <p>{{ description }}</p>
        <button type="button" @click="goHome">بازگشت به صفحه اصلی</button>
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  background: #fcf8f4;
}

.error-main {
  display: grid;
  min-height: 62vh;
  place-items: center;
  padding: 72px 20px;
}

.error-card {
  width: min(620px, 100%);
  padding: 42px 32px;
  border: 1px solid #eadfd7;
  border-radius: 28px;
  background: #fff;
  text-align: center;
  box-shadow: 0 20px 56px rgba(16, 28, 50, 0.08);
}

.error-code {
  display: inline-flex;
  min-width: 68px;
  min-height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #fff2e9;
  color: #9b542d;
  font-weight: 800;
}

.error-card h1 {
  margin: 18px 0 10px;
  color: #101c32;
  font-size: clamp(30px, 5vw, 46px);
  line-height: 1.45;
}

.error-card p {
  margin: 0 auto;
  color: #697386;
  font-size: 16px;
  line-height: 1.9;
}

.error-card button {
  min-height: 46px;
  margin-top: 24px;
  padding: 10px 20px;
  border: 1px solid rgba(126, 66, 35, 0.24);
  border-radius: 999px;
  background: linear-gradient(135deg, #c17a42, #96502d);
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
}

@media (max-width: 600px) {
  .error-main {
    min-height: 56vh;
    padding: 48px 16px;
  }

  .error-card {
    padding: 34px 20px;
    border-radius: 22px;
  }
}
</style>
