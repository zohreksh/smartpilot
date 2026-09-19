<template>
  <main class="services-page">
    <SiteHeader />

    <section class="hero container">
      <span class="eyebrow">خدمات ما</span>
      <h1>راهکارهای دیجیتال برای ساخت و رشد محصولات واقعی</h1>
      <p>
        از طراحی یک محصول جدید تا توسعه قابلیت‌های اختصاصی و بهبود مداوم سیستم‌های موجود،
        ما در کنار کسب‌وکارها هستیم تا ایده‌ها را به تجربه‌های دیجیتال قابل رشد تبدیل کنیم.
      </p>
    </section>

    <section class="services-grid container">
      <article class="service-card">
        <h2>طراحی وب‌سایت و محصولات دیجیتال</h2>
        <p>
          طراحی تجربه‌های کاربری مدرن و ساختارهای حرفه‌ای برای وب‌سایت‌ها و محصولات دیجیتال؛
          با تمرکز روی نیاز کاربر، هویت برند و اهداف کسب‌وکار.
        </p>
      </article>

      <article class="service-card">
        <h2>توسعه اختصاصی نرم‌افزار</h2>
        <p>
          پیاده‌سازی سیستم‌های اختصاصی، پنل‌های مدیریتی، فروشگاه‌ها و پلتفرم‌هایی که
          متناسب با فرآیند واقعی کسب‌وکار شما ساخته می‌شوند.
        </p>
      </article>

      <article class="service-card">
        <h2>هوش مصنوعی و قابلیت‌های هوشمند</h2>
        <p>
          اضافه کردن قابلیت‌های هوشمند مانند دستیارهای AI، جستجوی هوشمند، تحلیل داده و
          اتوماسیون فرآیندها برای افزایش بهره‌وری محصول.
        </p>
      </article>

      <article class="service-card">
        <h2>سئو، توسعه محتوا و رشد محصول</h2>
        <p>
          ایجاد زیرساخت‌های فنی و محتوایی برای دیده‌شدن بهتر، جذب کاربر و تبدیل بازدیدکننده
          به مشتری واقعی.
        </p>
      </article>

      <article class="service-card">
        <h2>ورود اطلاعات و مدیریت محصول</h2>
        <p>
          آماده‌سازی و مدیریت داده‌های محصول، کاتالوگ‌ها و اطلاعات مورد نیاز برای راه‌اندازی
          سریع‌تر و دقیق‌تر پلتفرم‌های دیجیتال.
        </p>
      </article>

      <article class="service-card">
        <h2>پشتیبانی و توسعه مداوم</h2>
        <p>
          همراهی پس از انتشار محصول، نگهداری، بهینه‌سازی و توسعه قابلیت‌های جدید متناسب با
          رشد کسب‌وکار.
        </p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.services-page{direction:rtl;background:#faf8f5;color:#111827;min-height:100vh}
.container{max-width:1180px;margin:auto;padding:0 28px}
.hero{text-align:center;padding:110px 28px 70px}
.eyebrow{display:inline-block;background:#fff0e6;color:#d95f00;padding:8px 18px;border-radius:999px}
.hero h1{font-size:clamp(36px,5vw,58px);line-height:1.45;margin:30px auto;max-width:850px}
.hero p{max-width:760px;margin:auto;color:#667085;font-size:18px;line-height:2}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;padding-bottom:100px}
.service-card{background:#fff;border:1px solid #eee7df;border-radius:28px;padding:34px;min-height:250px;transition:.25s}
.service-card:hover{transform:translateY(-6px)}
.service-card h2{font-size:25px;line-height:1.5;margin-bottom:18px}
.service-card p{color:#667085;line-height:2;font-size:16px}
@media(max-width:900px){.services-grid{grid-template-columns:1fr}.hero{padding-top:80px}.service-card{padding:26px}}
</style>