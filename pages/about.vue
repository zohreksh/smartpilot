<template>
  <main class="about-page">
    <SiteHeader />

    <section class="about-hero container">
      <span class="about-badge">درباره NexaStudio</span>
      <h1>ما محصول دیجیتال می‌سازیم، نه فقط نرم‌افزار</h1>
      <p>
        ما ترکیبی از تجربه مهندسی نرم‌افزار، معماری سیستم و تفکر محصول هستیم؛
        کمک می‌کنیم کسب‌وکارها ایده‌های خود را به محصولات دیجیتال واقعی،
        قابل توسعه و ماندگار تبدیل کنند.
      </p>
      <button>شروع گفتگو</button>
    </section>

    <section class="about-story container">
      <div class="story-card">
        <span>داستان ما</span>
        <h2>از مهندسی نرم‌افزار تا ساخت محصولات دیجیتال</h2>
        <p>
          مسیر ما با توسعه نرم‌افزار شروع شد، اما تجربه ساخت پروژه‌های واقعی
          به ما نشان داد که یک محصول موفق فقط با کدنویسی ساخته نمی‌شود.
        </p>
        <p>
          شناخت مسئله، معماری درست، تجربه کاربری و نگاه بلندمدت عواملی هستند
          که یک محصول را از یک پروژه معمولی جدا می‌کنند.
        </p>
        <p>
          NexaStudio حاصل همین نگاه است؛ ترکیبی از مهندسی دقیق و تفکر محصول
          برای ساخت راهکارهای دیجیتال ماندگار.
        </p>
      </div>
      <div class="story-stats">
        <strong>20+</strong>
        <span>سال تجربه توسعه</span>
        <strong>2</strong>
        <span>محصول دیجیتال واقعی</span>
        <strong>∞</strong>
        <span>ایده برای ساختن</span>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  direction: rtl;
  background: #fcfaf7;
  min-height: 100vh;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.about-hero {
  text-align: center;
  padding: 110px 24px 80px;
}
.about-badge,
.about-story span {
  display: inline-block;
  color: #d95f00;
  background: rgba(217, 95, 0, 0.08);
  border-radius: 999px;
  padding: 8px 18px;
}
.about-hero h1 {
  max-width: 850px;
  margin: 28px auto 20px;
  font-size: clamp(34px, 5vw, 56px);
  color: #101828;
  line-height: 1.35;
}
.about-hero p {
  max-width: 700px;
  margin: auto;
  color: #667085;
  line-height: 2;
  font-size: 18px;
}
.about-hero button {
  margin-top: 32px;
  border: 0;
  background: #d95f00;
  color: white;
  border-radius: 999px;
  padding: 14px 34px;
  font-size: 16px;
}
.about-story {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  padding-bottom: 90px;
}
.story-card,
.story-stats {
  background: white;
  border: 1px solid #eadfd7;
  border-radius: 32px;
  padding: 40px;
  box-shadow: 0 20px 50px rgba(16,24,40,.05);
}
.story-card h2 {
  font-size: 34px;
  color: #101828;
}
.story-card p {
  color: #667085;
  line-height: 2;
}
.story-stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  text-align: center;
}
.story-stats strong {
  color: #d95f00;
  font-size: 42px;
}
.story-stats span {
  color: #667085;
  background: none;
  padding: 0;
}
@media (max-width: 767px) {
  .about-story {
    grid-template-columns: 1fr;
  }
  .story-card,
  .story-stats {
    padding: 24px;
  }
  .story-card h2 {
    font-size: 26px;
  }
}
</style>
