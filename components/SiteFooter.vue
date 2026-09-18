<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h3>NexaStudio</h3>
        <p>ساخت محصولات دیجیتال واقعی برای رشد کسب‌وکار شما</p>
      </div>
      <div class="footer-links">
        <div>
          <h4>دسترسی سریع</h4>
          <a href="#">خانه</a>
          <a href="#">خدمات ما</a>
          <a href="#">نمونه کارها</a>
        </div>
        <div>
          <h4>ارتباط با ما</h4>
          <a href="#">تماس با ما</a>
          <a href="#">شروع همکاری</a>
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
  padding: 55px 24px 20px;
  direction: rtl;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
.footer-brand h3 {
  font-size: 32px;
  margin: 0 0 12px;
}
.footer-brand p,
.footer-links a {
  color: #d8dde5;
}
.footer-links {
  display: flex;
  gap: 70px;
}
.footer-links div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-links h4 {
  color: #d86b4a;
  margin: 0 0 8px;
}
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.15);
  margin-top: 35px;
  padding-top: 18px;
  text-align: center;
  color: #bfc6d1;
}
@media(max-width:700px){
 .footer-inner{flex-direction:column}
 .footer-links{gap:30px}
}
</style>