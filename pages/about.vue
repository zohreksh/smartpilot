<template>
  <main class="about-page">
    <SiteHeader />

    <section class="hero container">
      <div class="hero-glow"></div>
      <span class="eyebrow">NexaStudio</span>
      <h1>
        جایی که مهندسی نرم‌افزار
        <br />
        با تفکر محصول ترکیب می‌شود
      </h1>
      <p>
        ما تیمی از معماران و توسعه‌دهندگان هستیم که سیستم‌های دیجیتال پیچیده را
        از ایده تا محصول واقعی طراحی و اجرا می‌کنیم؛ با تمرکز بر معماری درست،
        تجربه کاربر و ساخت راهکارهای قابل رشد.
      </p>
      <div class="pill-list">
        <span>Product Architecture</span>
        <span>Full Stack Engineering</span>
        <span>AI Powered Solutions</span>
      </div>
    </section>

    <section class="story container">
      <div class="story-main">
        <span class="section-label">داستان ما</span>
        <h2>ما فقط کد نمی‌نویسیم؛ مسیر ساخت محصول را طراحی می‌کنیم.</h2>
        <p>
          تجربه سال‌ها توسعه نرم‌افزار به ما نشان داد تفاوت بین یک پروژه معمولی
          و یک محصول موفق، در تصمیم‌های پشت صحنه است؛ معماری، انتخاب فناوری،
          شناخت مسئله و نگاه بلندمدت.
        </p>
        <p>
          NexaStudio با همین نگاه شکل گرفت؛ ترکیبی از مهندسی دقیق و تفکر محصول
          برای ساخت سیستم‌هایی که امروز ارزش ایجاد می‌کنند و فردا قابلیت رشد
          دارند.
        </p>
      </div>

      <aside class="principles">
        <div>
          <strong>01</strong>
          <h3>معماری درست</h3>
          <p>ساخت پایه‌ای که برای توسعه آینده آماده باشد.</p>
        </div>
        <div>
          <strong>02</strong>
          <h3>تفکر محصول</h3>
          <p>حل مسئله واقعی قبل از انتخاب تکنولوژی.</p>
        </div>
        <div>
          <strong>03</strong>
          <h3>فناوری هدفمند</h3>
          <p>استفاده از تکنولوژی برای ایجاد ارزش واقعی.</p>
        </div>
      </aside>
    </section>
  </main>
</template>

<style scoped>
.about-page { direction: rtl; background: #fbfaf8; color: #101828; min-height: 100vh; }
.container { max-width: 1200px; margin: auto; padding: 0 24px; }
.hero { position: relative; text-align: center; padding: 130px 24px 100px; overflow: hidden; }
.hero-glow { position:absolute; width:420px; height:420px; background:rgba(217,95,0,.08); filter:blur(90px); top:20px; left:50%; transform:translateX(-50%); }
.eyebrow,.section-label { position:relative; display:inline-flex; padding:8px 18px; border-radius:999px; background:#fff0e6; color:#d95f00; font-size:14px; }
.hero h1 { position:relative; font-size:clamp(38px,5vw,68px); line-height:1.3; margin:30px auto 24px; letter-spacing:-1px; }
.hero p { max-width:760px; margin:auto; font-size:20px; line-height:2; color:#667085; }
.pill-list { display:flex; justify-content:center; gap:12px; flex-wrap:wrap; margin-top:40px; }
.pill-list span { border:1px solid #e7ddd5; background:white; padding:12px 20px; border-radius:999px; color:#344054; }
.story { display:grid; grid-template-columns:1.5fr .8fr; gap:40px; padding-bottom:100px; }
.story-main { background:white; border:1px solid #eee4db; border-radius:36px; padding:50px; box-shadow:0 30px 80px rgba(16,24,40,.06); }
.story-main h2 { font-size:40px; line-height:1.45; margin:25px 0; }
.story-main p { color:#667085; line-height:2.1; font-size:18px; }
.principles { display:flex; flex-direction:column; gap:18px; }
.principles div { background:#111827; color:white; border-radius:28px; padding:28px; }
.principles strong { color:#f97316; font-size:32px; }
.principles h3 { margin:12px 0; }
.principles p { color:#d0d5dd; line-height:1.8; }
@media(max-width:767px){ .story{grid-template-columns:1fr;} .story-main{padding:28px;} .story-main h2{font-size:28px;} .hero p{font-size:17px;} }
</style>
