<template>
  <section class="section why-section">
    <div class="container">
      <div class="home-section-heading why-heading">
        <span class="home-section-kicker">چرا NexaStudio</span>
        <h2 class="home-section-title">مهندسی محصول، فراتر از تحویل یک پروژه</h2>
        <p class="home-section-description">
          تصمیم‌های فنی، تجربه کاربر و مسیر رشد را کنار هم می‌بینیم تا محصول بعد از انتشار هم قابل توسعه بماند.
        </p>
        <span class="home-section-rule" aria-hidden="true"></span>
      </div>
      <div class="why-grid">
        <article class="why-card">
          <div class="why-icon">♧</div>
          <h3>تفکر محصول محور</h3>
          <p>ما فقط کدنویسی نمی‌کنیم؛ برای رشد کسب‌وکار شما محصول می‌سازیم.</p>
        </article>
        <article class="why-card">
          <div class="why-icon">▰</div>
          <h3>تمرکز بر نتایج واقعی</h3>
          <p>
            افزایش فروش، بهبود بهره‌وری و تجربه کاربری بهتر، معیار موفقیت ماست.
          </p>
        </article>
        <article class="why-card">
          <div class="why-icon">◆</div>
          <h3>معماری مقیاس‌پذیر</h3>
          <p>زیرساختی پایدار و توسعه‌پذیر برای امروز و فردای کسب‌وکار شما.</p>
        </article>
        <article class="why-card">
          <div class="why-icon">✦</div>
          <h3>همراهی بلندمدت</h3>
          <p>از راه‌اندازی تا رشد، در کنار شما هستیم.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  position: relative;
  padding: 78px 0 82px;
  border-bottom: 1px solid rgba(215, 223, 230, 0.82);
  background:
    radial-gradient(circle at 86% 12%, rgba(112, 136, 164, 0.08), transparent 23%),
    linear-gradient(180deg, #f7fafc 0%, #f9fbfd 100%);
  text-align: center;
}

.why-heading {
  margin-bottom: 34px;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.why-card {
  position: relative;
  overflow: hidden;
  display: flex;
  min-height: 205px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 20px 22px;
  border: 1px solid rgba(226, 211, 199, 0.92);
  border-radius: 22px;
  background:
    radial-gradient(circle at 50% 0%, rgba(184, 107, 53, 0.07), transparent 32%),
    linear-gradient(150deg, #fff 0%, #fffaf6 100%);
  box-shadow:
    0 14px 34px rgba(16, 28, 50, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.94);
  direction: rtl;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
}

.why-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 28px;
  left: 28px;
  height: 3px;
  border-radius: 0 0 999px 999px;
  background: linear-gradient(90deg, transparent, rgba(184, 107, 53, 0.5), transparent);
}

.why-card:nth-child(2)::before {
  background: linear-gradient(90deg, transparent, rgba(112, 136, 164, 0.55), transparent);
}

.why-card:nth-child(3)::before {
  background: linear-gradient(90deg, transparent, rgba(118, 104, 144, 0.5), transparent);
}

.why-card:nth-child(4)::before {
  background: linear-gradient(90deg, transparent, rgba(92, 130, 104, 0.5), transparent);
}

.why-card:hover {
  transform: translateY(-5px);
  border-color: rgba(184, 107, 53, 0.28);
  box-shadow:
    0 22px 46px rgba(16, 28, 50, 0.085),
    inset 0 1px 0 rgba(255, 255, 255, 0.96);
}

.why-icon {
  display: flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  border: 1px solid rgba(184, 107, 53, 0.17);
  border-radius: 16px;
  background: linear-gradient(145deg, #fff8f3, #f3dfd1);
  color: #a75c32;
  font-size: 23px;
  box-shadow:
    inset 0 1px 0 #fff,
    0 8px 18px rgba(184, 107, 53, 0.07);
}

.why-card:nth-child(2) .why-icon {
  border-color: rgba(112, 136, 164, 0.18);
  background: linear-gradient(145deg, #f9fbfd, #e9f0f6);
  color: #657f9c;
}

.why-card:nth-child(3) .why-icon {
  border-color: rgba(118, 104, 144, 0.18);
  background: linear-gradient(145deg, #fbfafd, #eeeaf5);
  color: #766890;
}

.why-card:nth-child(4) .why-icon {
  border-color: rgba(92, 130, 104, 0.18);
  background: linear-gradient(145deg, #f9fcfa, #e9f3ec);
  color: #5c8268;
}

.why-card h3 {
  margin: 0 0 9px;
  color: #101b35;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.why-card p {
  margin: 0;
  color: #697386;
  font-size: 13px;
  line-height: 1.95;
}

@media (max-width: 900px) {
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .why-section {
    padding: 60px 0 64px;
  }

  .why-heading {
    margin-bottom: 28px;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .why-card {
    min-height: 0;
  }
}
</style>
