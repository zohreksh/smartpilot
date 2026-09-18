<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-cta">
        <h2>بیایید درباره پروژه شما صحبت کنیم.</h2>
        <p>مشاوره رایگان، بررسی نیازها و ارائه پیشنهاد اختصاصی</p>
        <button>درخواست مشاوره رایگان</button>
      </div>

      <div class="footer-grid">
        <div class="footer-brand">
          <h3>NexaStudio</h3>
          <p>ساخت آینده دیجیتال برای کسب‌وکارهای مدرن با طراحی محصول، توسعه اختصاصی و هوش مصنوعی.</p>
        </div>

        <div>
          <h4>خدمات</h4>
          <a href="#">طراحی سایت و فروشگاه اینترنتی</a>
          <a href="#">توسعه سامانه‌های اختصاصی</a>
          <a href="#">هوش مصنوعی و جستجوی هوشمند</a>
          <a href="#">سئو و رشد ارگانیک</a>
        </div>

        <div>
          <h4>ارتباط</h4>
          <a href="#">تماس با ما</a>
          <a href="#">شروع همکاری</a>
          <a href="#">نمونه کارها</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">NexaStudio © تمامی حقوق محفوظ است</div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #0b1626;
  color: #fff;
  direction: rtl;
  padding: 70px 24px 25px;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
}

.footer-cta {
  text-align: center;
  margin-bottom: 55px;
}

.footer-cta h2 {
  font-size: 34px;
  margin: 0 0 12px;
}

.footer-cta p,
.footer-brand p,
.footer-grid a {
  color: #c7d0dc;
}

.footer-cta button {
  margin-top: 25px;
  background: #b86b35;
  color: #fff;
  border: 0;
  border-radius: 30px;
  padding: 14px 35px;
  font-family: inherit;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 50px;
}

.footer-grid h4 {
  color: #e36d4f;
  margin-bottom: 18px;
}

.footer-grid a {
  display: block;
  margin-bottom: 12px;
}

.footer-brand h3 {
  font-size: 34px;
  margin: 0 0 15px;
}

.footer-bottom {
  max-width: 1200px;
  margin: 45px auto 0;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,.15);
  color: #aeb8c5;
}

@media(max-width:800px){
  .footer-grid{grid-template-columns:1fr}
}
</style>