# SmartPilot Retail Assistant Demo — Phase 1 Scope
**Version:** 0.1  
**Status:** Initial scope for review  
**Working title:** SmartPilot Retail Assistant (not a finalized product name)

---

## فارسی

### ۱. هدف
تعریف محدوده یک دموی تعاملی و قابل ارائه برای کسب‌وکارهای کوچک آرایشی، مراقبت پوست و پوشاک؛ به‌گونه‌ای که هم برای بازار بریتانیا و هم بازار ایران قابل استفاده باشد. این دمو برای معرفی توانمندی و سنجش علاقه مشتری است، نه ادعای آماده‌بودن یک محصول تجاری کامل.

### ۲. مخاطبان
- برندها و فروشندگان کوچک آرایشی و مراقبت پوست
- برندها و فروشندگان کوچک پوشاک
- کسب‌وکارهای دارای فروشگاه اینترنتی
- کسب‌وکارهای بدون سایت که بیشتر از شبکه‌های اجتماعی یا پیام‌رسان‌ها فروش دارند

### ۳. تصمیم اصلی معماری
یک هسته مشترک، با دو صنعت، دو مدل فروش و دو زبان:

| بُعد | گزینه‌ها |
|---|---|
| صنعت | آرایشی و مراقبت پوست؛ پوشاک |
| مدل فروش | فروشگاه دارای سایت؛ فروشنده اجتماعی بدون سایت |
| زبان | فارسی؛ انگلیسی |
| رابط | فارسی راست‌به‌چپ (RTL)؛ انگلیسی چپ‌به‌راست (LTR) |
| قیمت نمونه | تومان در تجربه فارسی؛ پوند در تجربه انگلیسی |

کاتالوگ و قیمت‌های فارسی و انگلیسی داده‌های نمایشی مستقل خواهند داشت؛ نرخ تبدیل ارز زنده استفاده نمی‌شود. متن‌ها و اطلاعات نمونه باید از نام‌ها و برندهای واقعی که اجازه استفاده از آن‌ها را نداریم، اجتناب کنند.

### ۴. جریان اصلی دمو
1. کاربر وارد نسخه فارسی یا انگلیسی می‌شود و می‌تواند زبان را دستی تغییر دهد.
2. صنعت را انتخاب می‌کند: آرایشی یا پوشاک.
3. مدل کسب‌وکار را انتخاب می‌کند: دارای سایت یا فروش مبتنی بر شبکه‌های اجتماعی.
4. در نقش مشتری، سؤال می‌پرسد یا از پرسش‌های پیشنهادی استفاده می‌کند.
5. دستیار نمایشی، با تکیه بر داده‌های نمونه، محصولات مرتبط را نشان می‌دهد و دلیل پیشنهاد را توضیح می‌دهد.
6. کاربر می‌تواند کارت محصول و جزئیات آن را باز کند و یک اقدام نمایشی مثل مشاهده جزئیات یا تماس با فروشنده را تجربه کند.
7. یک نمای ساده و نمایشی برای صاحب کسب‌وکار، کاتالوگ نمونه، اطلاعات محصول و سؤالات متداول را نشان می‌دهد.

#### تفاوت دو صنعت
- **آرایشی و مراقبت پوست:** پیشنهاد محصول بر اساس نیاز اعلام‌شده و اطلاعات تأییدشده نمونه؛ پاسخ‌گویی محتاطانه به پرسش‌های متداول؛ ارجاع پرسش‌های حساس یا نامطمئن به فروشنده. دمو نباید تشخیص پزشکی یا ادعای درمانی ارائه کند.
- **پوشاک:** پیشنهاد محصول بر اساس سبک، رنگ، بودجه و سایز موجود در کاتالوگ نمونه.

#### تفاوت دو مدل فروش
- **دارای سایت:** نمایش تجربه‌ای شبیه دستیار کنار کاتالوگ یا صفحه محصول فروشگاه.
- **بدون سایت:** نمایش یک صفحه فروشگاهی ساده و برندشده که از طریق لینک قابل اشتراک‌گذاری باشد.

این‌ها دو حالت نمایشی در یک دمو هستند؛ در این فاز هیچ اتصال واقعی به فروشگاه یا شبکه اجتماعی انجام نمی‌شود.

### ۵. محدوده نسخه اول
**شامل می‌شود:**
- رابط واکنش‌گرا برای موبایل و دسکتاپ
- دو سناریوی صنعت و دو مدل فروش
- مسیرهای فارسی و انگلیسی و تعویض دستی زبان
- چیدمان و جهت متن صحیح RTL/LTR
- داده‌های آزمایشی و پاسخ‌های شبیه‌سازی‌شده با منطق محلی و قابل پیش‌بینی
- کارت و جزئیات محصول، پرسش‌های پیشنهادی و نمای ساده صاحب کسب‌وکار
- پیام روشن که این نسخه دمو و دارای داده‌های نمونه است

**شامل نمی‌شود:**
- مدل زبانی زنده، سرویس پولی یا هزینه API
- اتصال به Shopify، WooCommerce، Instagram، WhatsApp یا سیستم واقعی دیگر
- ورود و احراز هویت، پایگاه داده یا ذخیره‌سازی دائمی
- سفارش واقعی، پرداخت، موجودی زنده یا ارسال سفارش
- استفاده از اطلاعات واقعی مشتری یا فروشنده بدون مجوز
- ادعای افزایش فروش، کاهش هزینه یا انطباق حقوقی بدون شواهد
- تولید متن پزشکی یا توصیه درمانی

هرگونه API زنده یا سرویس پولی نیازمند تأیید جداگانه مالک پروژه است.

### ۶. خروجی PDF
پس از تأیید و ساخت دمو، از همان رابط واقعی اسکرین‌شات می‌گیریم و بروشورهای کوتاه و حرفه‌ای می‌سازیم:
- نسخه اختصاصی آرایشی و مراقبت پوست به انگلیسی
- نسخه اختصاصی آرایشی و مراقبت پوست به فارسی
- نسخه اختصاصی پوشاک به انگلیسی
- نسخه اختصاصی پوشاک به فارسی

چهار خروجی از یک قالب طراحی مشترک استفاده می‌کنند، اما متن، نمونه‌ها، ارز و جهت نوشتار هر بازار متناسب خواهد بود. PDF باید قابلیت‌های دمو را دقیق نشان دهد و دمو را به‌عنوان نمونه مفهومی قابل سفارشی‌سازی معرفی کند، نه محصول آماده خرید.

### ۷. مسیرهای پیشنهادی
- دمو فارسی: `/demo`
- دمو انگلیسی: `/en/demo`

این مسیرها پیشنهادی‌اند و قبل از پیاده‌سازی با ساختار فعلی Nuxt و قواعد SEO بررسی می‌شوند.

### ۸. معیارهای پذیرش فاز دمو
- تمام مسیر اصلی در هر دو زبان قابل اجرا باشد.
- تغییر زبان، RTL/LTR و محتوای متناسب با زبان درست کار کند.
- هر دو صنعت و هر دو مدل فروش در دمو قابل مشاهده باشند.
- کنترل‌های اصلی واقعاً واکنش نشان دهند؛ دکمه تزئینی و بی‌عملکرد باقی نماند.
- در نسخه اول هیچ درخواست شبکه‌ای برای AI یا سرویس پولی انجام نشود.
- رابط در موبایل و دسکتاپ قابل استفاده باشد.
- داده‌های نمایشی و محدودیت‌های نمونه اولیه واضح باشند.
- build و تست‌های موجود پروژه بدون افتادن تست‌ها پاس شوند و مسیرهای فعلی سایت آسیب نبینند.

### ۹. فازهای اجرایی
1. **فاز ۱ — محدوده و تأیید:** همین سند؛ مشخص‌کردن تجربه، محدودیت‌ها و معیارهای پذیرش.
2. **فاز ۲ — دمو:** ساخت رابط تعاملی دو‌زبانه با هسته مشترک و داده‌های نمایشی.
3. **فاز ۳ — PDF:** تولید چهار خروجی فارسی/انگلیسی برای دو صنعت بر اساس اسکرین‌شات‌های واقعی دمو.
4. **فاز ۴ — سایت:** هماهنگ‌کردن صفحات معرفی فارسی و انگلیسی با دمو و افزودن مسیرهای واضح برای مشاهده آن.
5. **فاز ۵ — کنترل کیفیت و تحویل:** تست موبایل/دسکتاپ، زبان، لینک‌ها، محتوا و فایل‌های PDF.

**خارج از محدوده:** نگارش ایمیل بازاریابی؛ طبق تصمیم فعلی فقط دمو، PDF و تغییرات لازم سایت دنبال می‌شوند.

---

## English

### 1. Objective
Define a clickable, presentation-ready concept demo for small beauty, skincare and fashion businesses. It must support both the UK and Iranian markets. The demo is intended to explain the concept and validate customer interest—not to imply that a complete commercial product is already available.

### 2. Target users
- Independent beauty and skincare brands
- Small fashion and clothing brands
- Businesses with an existing ecommerce website
- Social-first sellers without a website

### 3. Shared product concept
Build one reusable core with two industries, two selling models and two languages:

| Dimension | Options |
|---|---|
| Industry | Beauty & skincare; fashion |
| Selling model | Existing website; social-first / no website |
| Language | English; Persian |
| Direction | English LTR; Persian RTL |
| Sample currency | GBP for English; toman for Persian |

The two locales will use separate sample catalogues and prices. No live foreign-exchange conversion is needed. Sample content must not imply endorsement by, or use unauthorized data from, real brands.

### 4. Main demo flow
1. Enter the Persian or English experience and allow manual language switching.
2. Choose Beauty & Skincare or Fashion.
3. Choose an existing-store or social-first business setup.
4. Act as a shopper by entering a question or choosing a suggested prompt.
5. See deterministic, simulated product suggestions based on sample data, including an explanation for each match.
6. Open product cards and try a demo-only action such as viewing details or contacting the seller.
7. Open a simplified owner view showing sample catalogue information and FAQs.

**Beauty & skincare:** use sample, brand-approved-style information; route sensitive or uncertain questions to a human. No diagnosis or treatment claims.  
**Fashion:** recommend sample products by style, colour, budget and available size.

**Existing website:** demonstrate an assistant alongside a product catalogue or product page.  
**Social-first seller:** demonstrate a simple branded product page that could be shared by link.

These are simulated modes in one demo; no real store or social-platform integration is included.

### 5. Version-one scope
**Included:** responsive desktop/mobile UI, both industries and selling models, Persian and English routes, manual language switch, correct RTL/LTR, sample data, deterministic simulated responses, product cards/details, suggested prompts, a simplified owner view, and a clear demo/sample-data disclosure.

**Excluded:** live LLM or paid API, Shopify/WooCommerce/Instagram/WhatsApp integration, authentication, database or persistent storage, real checkout/payments/inventory/orders, unauthorized real customer data, unsubstantiated performance or compliance claims, and medical advice.

Any live API or paid service requires the project owner's separate approval.

### 6. PDF deliverables
After the demo is built, create four concise PDFs using screenshots of the actual demo:
- Beauty & skincare — English
- Beauty & skincare — Persian
- Fashion — English
- Fashion — Persian

All four share one visual template, while copy, sample products, currency and writing direction are localized. The PDFs must describe the demo honestly as a customizable concept, not a ready-to-buy product.

### 7. Proposed routes
- Persian demo: `/demo`
- English demo: `/en/demo`

Confirm these against the current Nuxt routing and SEO setup before implementation.

### 8. Demo acceptance criteria
- The core flow works in both languages.
- Language switching, RTL/LTR and localized content work correctly.
- Both industries and both selling models are demonstrable.
- All primary controls respond; no decorative, inert primary buttons.
- No AI or paid-service network calls in version one.
- Usable on mobile and desktop.
- Sample data and prototype limitations are clearly disclosed.
- The existing build and tests pass, with no regression to current site routes.

### 9. Delivery phases
1. **Phase 1 — Scope and approval:** this document.
2. **Phase 2 — Demo:** implement the bilingual clickable prototype with a shared core and sample data.
3. **Phase 3 — PDFs:** produce the four localized, industry-specific PDFs from actual demo screenshots.
4. **Phase 4 — Website:** align Persian and English marketing pages and add clear paths to the demo.
5. **Phase 5 — QA and handoff:** verify responsive UI, language behavior, links, copy and PDF exports.

**Out of scope:** marketing email copy. The current deliverables are the demo, PDFs and necessary website changes.
