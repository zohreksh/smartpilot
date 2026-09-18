<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="brand">
        <h2>NexaStudio</h2>
        <p>طراحی و توسعه محصولات دیجیتال برای کسب‌وکارهای آینده‌نگر</p>
        <button>شروع همکاری</button>
      </div>

      <div class="col">
        <h3>خدمات ما</h3>
        <span>طراحی وب سایت</span>
        <span>توسعه اختصاصی</span>
        <span>هوش مصنوعی</span>
        <span>سئو</span>
      </div>

      <div class="col">
        <h3>دسترسی سریع</h3>
        <span>خانه</span>
        <span>نمونه کارها</span>
        <span>تیم ما</span>
        <span>تماس با ما</span>
      </div>

      <div class="col contact">
        <h3>ارتباط با ما</h3>
        <span>شروع پروژه</span>
        <span>مشاوره رایگان</span>
        <span>info@nexastudio.ir</span>
      </div>
    </div>

    <div class="line"></div>
    <div class="copy">NexaStudio © تمامی حقوق محفوظ است</div>
  </footer>
</template>

<style scoped>
.footer{background:#091522;color:white;padding:70px 24px 25px;direction:rtl}
.footer-inner{max-width:1200px;margin:auto;display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:55px}
.brand h2{font-size:36px;margin:0 0 18px}
.brand p{color:#b8c0cb;line-height:2;margin:0}
.brand button{margin-top:25px;background:#d86b4a;color:white;border:0;padding:13px 32px;border-radius:30px;font-family:inherit}
.col{display:flex;flex-direction:column;gap:15px}
.col h3{color:#d86b4a;font-size:18px;margin:0 0 10px}
.col span{color:#c8ced7;font-size:15px}
.line{max-width:1200px;margin:45px auto 20px;border-top:1px solid rgba(255,255,255,.15)}
.copy{text-align:center;color:#9da8b6;font-size:14px}
@media(max-width:900px){.footer-inner{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.footer-inner{grid-template-columns:1fr}}
</style>