<template><header class="header"><strong>NexaStudio</strong><nav><a>خانه</a><a>خدمات ما</a><a>نمونه کارها</a><a>درباره ما</a><a>وبلاگ</a><a>تماس</a></nav><button>شروع همکاری</button></header></template>
<style scoped>
.header{height:76px;display:flex;align-items:center;justify-content:space-between;padding:0 7%;background:#fff;direction:rtl}
.header strong{font-size:26px;white-space:nowrap}
.header nav{display:flex;gap:28px;font-size:15px;align-items:center}
.header button{border:0;border-radius:30px;padding:14px 30px;background:#a85d28;color:#fff;white-space:nowrap;min-height:44px}
@media(max-width:1023px){
.header{padding:14px 4%;gap:18px}
.header nav{gap:16px;font-size:14px}
}
@media(max-width:768px){
.header{height:auto;min-height:72px;padding:14px 18px;flex-wrap:wrap;gap:14px}
.header strong{font-size:20px}
.header nav{order:3;width:100%;justify-content:center;gap:12px;flex-wrap:wrap;font-size:12px}
.header button{padding:10px 16px;font-size:12px}
}
@media(max-width:420px){
.header nav{display:none}
.header button{margin-right:auto}
}
</style>