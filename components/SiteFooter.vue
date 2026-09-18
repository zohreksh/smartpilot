<template>
  <footer class="site-footer">
    <div class="footer-glow"></div>
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <h2>NexaStudio</h2>
          <p>ساخت آینده دیجیتال کسب‌وکارها با طراحی محصول، توسعه اختصاصی و هوش مصنوعی</p>
          <button>درخواست مشاوره رایگان ←</button>
        </div>

        <div class="footer-column">
          <h4>خدمات</h4>
          <a>طراحی وب‌سایت و فروشگاه اینترنتی</a>
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
          <h4>ارتباط</h4>
          <a>شروع همکاری</a>
          <a>درخواست پروژه</a>
          <a>مشاوره تخصصی</a>
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
.site-footer{
 background:#0b1626;
 color:#fff;
 padding:70px 24px 25px;
 direction:rtl;
 position:relative;
 overflow:hidden;
}
.footer-container{max-width:1200px;margin:auto;position:relative}
.footer-main{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:45px}
.footer-brand h2{font-size:34px;margin:0 0 15px}
.footer-brand p{color:#cbd2dc;line-height:2}
.footer-brand button{margin-top:25px;background:#b96832;color:#fff;border:0;border-radius:30px;padding:14px 28px;font-family:inherit}
.footer-column{display:flex;flex-direction:column;gap:14px}
.footer-column h4{color:#d86b4a;margin:0 0 10px;font-size:18px}
.footer-column a{color:#d3d8df}
.footer-bottom{margin-top:45px;padding-top:20px;border-top:1px solid rgba(255,255,255,.15);display:flex;justify-content:space-between;color:#aeb7c4}
.footer-glow{position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(216,107,74,.12);left:-100px;bottom:-120px}
@media(max-width:900px){.footer-main{grid-template-columns:1fr 1fr}.footer-bottom{flex-direction:column;gap:10px}}
@media(max-width:600px){.footer-main{grid-template-columns:1fr}}
</style>