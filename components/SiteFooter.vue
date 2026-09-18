<template>
  <footer class="footer">
    <div class="footer-wrap">
      <div class="footer-top">
        <div class="brand">
          <h2>NexaStudio</h2>
          <p>ما در NexaStudio با طراحی، توسعه و هوش مصنوعی، ایده‌ها را به محصولات دیجیتال واقعی تبدیل می‌کنیم.</p>
          <button>شروع همکاری</button>
        </div>

        <div class="col">
          <h3>خدمات ما</h3>
          <span>طراحی وب سایت</span>
          <span>توسعه اختصاصی</span>
          <span>هوش مصنوعی</span>
          <span>سئو و رشد دیجیتال</span>
        </div>

        <div class="col">
          <h3>دسترسی سریع</h3>
          <span>خانه</span>
          <span>نمونه کارها</span>
          <span>تیم ما</span>
          <span>تماس با ما</span>
        </div>

        <div class="col">
          <h3>ارتباط با ما</h3>
          <span>شروع پروژه</span>
          <span>مشاوره رایگان</span>
          <span>ایمیل</span>
          <span>شبکه‌های اجتماعی</span>
        </div>
      </div>

      <div class="line"></div>
      <div class="bottom">
        <span>NexaStudio © تمامی حقوق محفوظ است</span>
        <span>Digital Product Studio</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer{background:#0b1424;color:white;padding:80px 24px 25px;direction:rtl}
.footer-wrap{max-width:1200px;margin:auto}
.footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:50px}
.brand h2{font-size:38px;margin:0 0 18px}
.brand p{color:#b9c1cc;line-height:2;font-size:15px}
.brand button{margin-top:25px;background:#d86b4a;border:0;color:white;padding:14px 35px;border-radius:30px;font-family:inherit;cursor:pointer}
.col{display:flex;flex-direction:column;gap:16px}
.col h3{color:#d86b4a;font-size:18px;margin:0 0 10px}
.col span{color:#c7ced8;font-size:15px}
.line{height:1px;background:rgba(255,255,255,.15);margin:45px 0 20px}
.bottom{display:flex;justify-content:space-between;color:#9da7b5;font-size:14px}
@media(max-width:900px){.footer-top{grid-template-columns:1fr 1fr}.bottom{flex-direction:column;gap:15px}}
@media(max-width:600px){.footer-top{grid-template-columns:1fr}}
</style>