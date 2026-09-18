<template>
  <footer class="site-footer">
    <div class="footer-orb orb-one"></div>
    <div class="footer-orb orb-two"></div>

    <div class="footer-container">
      <section class="footer-cta">
        <div class="cta-copy">
          <span>آماده ساختن آینده دیجیتال کسب‌وکار خود هستید؟</span>
          <h2>بیایید درباره پروژه شما صحبت کنیم.</h2>
          <p>مشاوره رایگان، بررسی نیازها و ارائه پیشنهاد اختصاصی</p>
        </div>

        <button class="cta-button">درخواست مشاوره رایگان <span>←</span></button>
      </section>

      <section class="footer-meta">
        <div class="footer-items">
          <div class="footer-item">پاسخ‌گویی و پشتیبانی</div>
          <i></i>
          <div class="footer-item">مشاوره تخصصی</div>
          <i></i>
          <div class="footer-item">شروع سریع</div>
          <i></i>
          <div class="footer-item">بدون تعهد</div>
        </div>

        <div class="footer-copy">NexaStudio © Digital Product Studio</div>
      </section>
    </div>
  </footer>
</template>

<style scoped>
.site-footer{
  position:relative;
  overflow:hidden;
  width:100%;
  background:#091522;
  color:#fff;
  direction:rtl;
  padding:22px 40px 24px;
}

.footer-container{
  max-width:1200px;
  margin:auto;
  position:relative;
  z-index:2;
}

.footer-orb{
  position:absolute;
  border-radius:50%;
  background:rgba(255,255,255,.035);
}

.orb-one{
  width:330px;
  height:330px;
  top:-180px;
  left:-80px;
}

.orb-two{
  width:250px;
  height:250px;
  right:-80px;
  bottom:-140px;
  background:rgba(216,107,74,.12);
}

.footer-cta{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:40px;
}

.cta-copy span{
  color:#d98745;
  font-size:14px;
}

.cta-copy h2{
  margin:7px 0;
  font-size:28px;
  font-weight:800;
}

.cta-copy p{
  margin:0;
  color:#b5bec9;
  font-size:13px;
}

.cta-button{
  flex-shrink:0;
  border:1px solid rgba(255,190,130,.4);
  background:#ad6232;
  color:white;
  border-radius:999px;
  padding:14px 30px;
  font-family:inherit;
  font-size:15px;
}

.cta-button span{
  margin-right:8px;
}

.footer-meta{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:22px;
  padding-top:18px;
  border-top:1px solid rgba(255,255,255,.12);
}

.footer-items{
  display:flex;
  align-items:center;
  gap:16px;
  color:#c5ccd5;
  font-size:13px;
}

.footer-items i{
  width:1px;
  height:15px;
  background:rgba(255,255,255,.25);
}

.footer-copy{
  color:#8d98a8;
  font-size:12px;
}

@media(max-width:800px){
  .site-footer{padding:35px 20px}
  .footer-cta,.footer-meta{flex-direction:column;align-items:flex-start}
  .cta-copy h2{font-size:22px}
  .footer-items{flex-wrap:wrap}
}
</style>