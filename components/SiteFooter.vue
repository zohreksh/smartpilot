<template>
  <footer class="site-footer">
    <div class="footer-bg"></div>
    <div class="footer-container">
      <div class="footer-cta">
        <div>
          <span>آماده ساخت آینده دیجیتال کسب‌وکار خود هستید؟</span>
          <h2>بیایید درباره پروژه شما صحبت کنیم.</h2>
        </div>
        <button>درخواست مشاوره رایگان ←</button>
      </div>

      <div class="footer-content">
        <div class="footer-brand">
          <h3>NexaStudio</h3>
          <p>راهکارهای دیجیتال برای ساخت محصولات واقعی، توسعه اختصاصی و رشد کسب‌وکار شما.</p>
        </div>

        <div class="footer-column">
          <h4>خدمات</h4>
          <a>طراحی وب سایت و فروشگاه اینترنتی</a>
          <a>توسعه سامانه‌های اختصاصی</a>
          <a>هوش مصنوعی و جستجوی هوشمند</a>
          <a>سئو و رشد ارگانیک</a>
        </div>

        <div class="footer-column">
          <h4>دسترسی سریع</h4>
          <a>خانه</a>
          <a>نمونه کارها</a>
          <a>تیم ما</a>
          <a>تماس با ما</a>
        </div>

        <div class="footer-column">
          <h4>ارتباط با ما</h4>
          <a>شروع همکاری</a>
          <a>مشاوره تخصصی</a>
          <a>شبکه‌های اجتماعی</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>NexaStudio © تمامی حقوق محفوظ است</span>
        <span>Digital Product Studio</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer{background:#101b2c;color:#fff;padding:55px 24px 25px;direction:rtl;position:relative;overflow:hidden}
.footer-container{max-width:1200px;margin:auto;position:relative}
.footer-bg{position:absolute;width:420px;height:420px;border-radius:50%;background:rgba(216,107,74,.12);left:-180px;bottom:-220px}
.footer-cta{display:flex;align-items:center;justify-content:space-between;padding-bottom:45px;border-bottom:1px solid rgba(255,255,255,.12)}
.footer-cta span{color:#d86b4a;font-size:14px}
.footer-cta h2{margin:12px 0 0;font-size:30px}
.footer-cta button{background:#b96832;color:white;border:0;border-radius:30px;padding:15px 35px;font-family:inherit;font-size:15px}
.footer-content{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:45px;padding:45px 0}
.footer-brand h3{font-size:32px;margin:0 0 15px}
.footer-brand p{color:#b8c1cd;line-height:2}
.footer-column{display:flex;flex-direction:column;gap:14px}
.footer-column h4{color:#d86b4a;margin:0 0 8px;font-size:18px}
.footer-column a{color:#c8d0da}
.footer-bottom{border-top:1px solid rgba(255,255,255,.12);padding-top:20px;display:flex;justify-content:space-between;color:#9fa9b7}
@media(max-width:900px){.footer-content{grid-template-columns:1fr 1fr}.footer-cta{flex-direction:column;align-items:flex-start;gap:25px}}
@media(max-width:600px){.footer-content{grid-template-columns:1fr}.footer-bottom{flex-direction:column;gap:10px}}
</style>