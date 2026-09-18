<template>
  <footer class="site-footer">
    <div class="decor decor-left"></div>
    <div class="decor decor-right"></div>
    <div class="footer-container">
      <div class="footer-cta">
        <div class="cta-text">
          <span>آماده ساختن آینده دیجیتال کسب‌وکار خود هستید؟</span>
          <h2>بیایید درباره پروژه شما صحبت کنیم.</h2>
          <p>مشاوره رایگان، بررسی نیازها و ارائه پیشنهاد اختصاصی</p>
        </div>
        <button>درخواست مشاوره رایگان <b>←</b></button>
      </div>
      <div class="footer-links">
        <div>پاسخ سریع</div>
        <i></i>
        <div>مشاوره تخصصی</div>
        <i></i>
        <div>شروع سریع</div>
        <i></i>
        <div>بدون تعهد</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer{position:relative;overflow:hidden;width:100%;height:170px;background:#081522;color:#fff;direction:rtl;padding:32px 7%;font-family:inherit}
.footer-container{position:relative;z-index:2;max-width:1200px;margin:auto;height:100%}
.decor{position:absolute;border-radius:50%;pointer-events:none}
.decor-left{width:300px;height:300px;left:-130px;top:-170px;background:rgba(255,255,255,.045)}
.decor-right{width:260px;height:260px;right:-80px;bottom:-150px;background:rgba(211,121,68,.12)}
.footer-cta{display:flex;align-items:center;justify-content:space-between;height:100%}
.cta-text{text-align:right;transform:translateY(6px)}
.cta-text span{font-size:12px;color:#d58a45}
.cta-text h2{margin:8px 0 6px;font-size:28px;line-height:1.5;font-weight:800;color:#fff}
.cta-text p{margin:0;color:#c1c8d0;font-size:12px}
.footer-cta button{transform:translate(-18px,-12px);background:#ad6434;color:#fff;border:1px solid rgba(255,190,130,.45);border-radius:999px;padding:13px 30px;font-size:15px;font-family:inherit}
.footer-cta button b{font-weight:400;margin-right:8px}
.footer-links{position:absolute;left:0;bottom:0;display:flex;align-items:center;gap:16px;color:#c5cbd3;font-size:12px}
.footer-links i{height:14px;width:1px;background:rgba(255,255,255,.25)}
@media(max-width:700px){.site-footer{height:auto;padding:35px 20px}.footer-cta{flex-direction:column;align-items:flex-start;gap:25px}.footer-cta button{transform:none}.footer-links{position:static;margin-top:25px;flex-wrap:wrap}.cta-text h2{font-size:22px}}
</style>