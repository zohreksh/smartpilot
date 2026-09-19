<template>
  <main class="about-page">
    <SiteHeader />

    <section class="about-hero">
      <div class="hero-glow"></div>
      <div class="container hero-content">
        <span class="about-badge">درباره NexaStudio</span>
        <h1>
          ما فقط نرم‌افزار نمی‌سازیم؛<br />
          محصولات دیجیتال خلق می‌کنیم
        </h1>
        <p>
          ترکیبی از تجربه مهندسی نرم‌افزار، معماری سیستم و تفکر محصول برای
          تبدیل ایده‌های کسب‌وکار به راهکارهای دیجیتال واقعی و قابل رشد.
        </p>
        <div class="hero-meta">
          <div>
            <strong>20+</strong>
            <span>سال تجربه مهندسی</span>
          </div>
          <div>
            <strong>2</strong>
            <span>محصول واقعی ساخته شده</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>مسیرهای قابل ساخت</span>
          </div>
        </div>
      </div>
    </section>

    <section class="about-story container">
      <div class="story-panel">
        <span class="section-label">داستان ما</span>
        <h2>از توسعه نرم‌افزار تا ساخت محصول</h2>
        <p>
          مسیر ما از مهندسی نرم‌افزار شروع شد، اما تجربه پروژه‌های واقعی به ما
          یاد داد که موفقیت یک محصول فقط با کدنویسی اتفاق نمی‌افتد.
        </p>
        <p>
          یک محصول موفق نیازمند شناخت مسئله، معماری درست، تجربه کاربری مناسب و
          نگاهی بلندمدت برای رشد است.
        </p>
        <p>
          NexaStudio حاصل همین نگاه است؛ جایی که مهندسی دقیق با تفکر محصول
          ترکیب می‌شود تا راهکارهایی ساخته شوند که ارزش واقعی ایجاد کنند.
        </p>
      </div>
      <div class="principles-panel">
        <div class="principle">
          <span>01</span>
          <h3>معماری درست</h3>
          <p>ساخت پایه‌ای که برای توسعه آینده آماده باشد.</p>
        </div>
        <div class="principle">
          <span>02</span>
          <h3>تفکر محصول</h3>
          <p>تمرکز روی حل مسئله، نه فقط اجرای درخواست.</p>
        </div>
        <div class="principle">
          <span>03</span>
          <h3>فناوری هدفمند</h3>
          <p>استفاده از تکنولوژی برای ایجاد ارزش واقعی.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  direction: rtl;
  min-height: 100vh;
  background: #fbf8f3;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.about-hero {
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
}
.hero-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  background: rgba(217,95,0,.12);
  filter: blur(80px);
  top: -120px;
  left: 10%;
}
.hero-content {
  position: relative;
  text-align: center;
}
.about-badge,
.section-label {
  display: inline-flex;
  padding: 7px 18px;
  border-radius: 999px;
  color: #d95f00;
  background: rgba(217,95,0,.08);
}
.about-hero h1 {
  margin: 28px auto;
  color: #101828;
  font-size: clamp(38px,5vw,64px);
  line-height: 1.35;
}
.about-hero p {
  max-width: 760px;
  margin: auto;
  color: #667085;
  font-size: 18px;
  line-height: 2;
}
.hero-meta {
  margin-top: 55px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.hero-meta div {
  min-width: 180px;
  padding: 24px;
  background: white;
  border: 1px solid #eadfd7;
  border-radius: 24px;
}
.hero-meta strong {
  display: block;
  color: #d95f00;
  font-size: 40px;
}
.hero-meta span,
.story-panel p,
.principle p {
  color: #667085;
  line-height: 1.9;
}
.about-story {
  display: grid;
  grid-template-columns: 1.4fr .9fr;
  gap: 30px;
  padding-bottom: 100px;
}
.story-panel,
.principles-panel {
  background: white;
  border: 1px solid #eadfd7;
  border-radius: 32px;
  padding: 42px;
  box-shadow: 0 25px 60px rgba(16,24,40,.06);
}
.story-panel h2 {
  font-size: 38px;
  color: #101828;
}
.principles-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.principle {
  padding-bottom: 20px;
  border-bottom: 1px solid #eee4dc;
}
.principle:last-child { border:0; }
.principle span { color:#d95f00; }
.principle h3 { color:#101828; }
@media(max-width:767px){
 .hero-meta,.about-story{grid-template-columns:1fr;display:grid}
 .about-hero h1{font-size:34px}
 .story-panel,.principles-panel{padding:24px}
}
</style>