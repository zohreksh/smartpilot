<template>
  <footer class="site-footer">
    <div class="footer-glow footer-glow-one" aria-hidden="true"></div>
    <div class="footer-glow footer-glow-two" aria-hidden="true"></div>

    <div class="container footer-shell">
      <div class="footer-main">
        <div class="footer-brand-column">
          <NuxtLink class="footer-brand" to="/" aria-label="NexaStudio - صفحه اصلی">
            <span class="footer-brand-symbol" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M10.5 28.5V11.5L20 22l9.5-10.5v17" />
                <path d="M13.5 31h13" />
              </svg>
            </span>

            <span class="footer-brand-text">
              <strong>NexaStudio</strong>
              <small>Digital Product Studio</small>
            </span>
          </NuxtLink>

          <p class="footer-brand-copy">
            طراحی و توسعه محصولات دیجیتال، سامانه‌های اختصاصی و قابلیت‌های
            هوشمند با تمرکز بر رشد واقعی کسب‌وکار.
          </p>

          <div class="footer-contact-icons" aria-label="راه‌های ارتباط">
            <a
              class="footer-icon-action"
              href="tel:+989379407868"
              aria-label="تماس تلفنی با NexaStudio"
              title="تماس تلفنی"
            >
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8.2 3.5 6.4 4.1a2 2 0 0 0-1.3 2.3c1.1 6.1 5.9 10.9 12 12a2 2 0 0 0 2.3-1.3l.6-1.8a1.5 1.5 0 0 0-.8-1.8l-2.6-1.2a1.5 1.5 0 0 0-1.8.4l-1.1 1.3a12.2 12.2 0 0 1-3.8-3.8l1.3-1.1a1.5 1.5 0 0 0 .4-1.8L10 4.3a1.5 1.5 0 0 0-1.8-.8Z" />
              </svg>
            </a>

            <a
              class="footer-icon-action"
              href="https://wa.me/989379407868"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ارسال پیام در واتساپ"
              title="واتساپ"
            >
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
                <path d="M8.7 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 1.9 2.6 2.5.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.4-.8 2-.6.6-1.5.8-2.4.6-1-.2-2.3-.7-3.9-2.1-1.4-1.2-2.3-2.7-2.6-3.7-.3-.9 0-2 .3-2.5l.8-1.6Z" />
              </svg>
            </a>

            <a
              class="footer-icon-action"
              href="mailto:zhr.keshavarz@gmail.com"
              aria-label="ارسال ایمیل به NexaStudio"
              title="ایمیل"
            >
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
                <path d="m5 7 7 5.2L19 7" />
              </svg>
            </a>

            <span
              class="footer-icon-action is-disabled"
              aria-label="اینستاگرام، به‌زودی"
              title="اینستاگرام - به‌زودی"
            >
              <svg class="contact-icon instagram-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </span>
          </div>
        </div>

        <div class="footer-links">
          <nav class="footer-nav-column" aria-label="دسترسی سریع">
            <span class="footer-column-title">دسترسی سریع</span>
            <NuxtLink to="/">خانه</NuxtLink>
            <NuxtLink to="/services">خدمات ما</NuxtLink>
            <NuxtLink to="/projects">نمونه کارها</NuxtLink>
            <NuxtLink to="/about">درباره ما</NuxtLink>
            <NuxtLink to="/contact">تماس با ما</NuxtLink>
          </nav>

          <div class="footer-nav-column">
            <span class="footer-column-title">تمرکز ما</span>
            <NuxtLink to="/services">طراحی محصول دیجیتال</NuxtLink>
            <NuxtLink to="/services">توسعه اختصاصی</NuxtLink>
            <NuxtLink to="/services">هوش مصنوعی</NuxtLink>
            <NuxtLink to="/services">سئو و رشد</NuxtLink>
            <NuxtLink to="/services">پشتیبانی مستمر</NuxtLink>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 NexaStudio</span>
        <span class="footer-bottom-dot" aria-hidden="true"></span>
        <span>محصول دیجیتال، مهندسی‌شده برای رشد</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 54px 0 24px;
  background:
    radial-gradient(circle at 88% 8%, rgba(184, 107, 53, 0.17), transparent 29%),
    radial-gradient(circle at 8% 100%, rgba(74, 95, 128, 0.11), transparent 30%),
    linear-gradient(155deg, #07111f 0%, #0a1828 54%, #07131f 100%);
  color: #fff;
  direction: rtl;
}

.footer-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.footer-glow-one {
  width: 360px;
  height: 360px;
  top: -220px;
  right: -90px;
  border: 1px solid rgba(226, 160, 111, 0.11);
}

.footer-glow-two {
  width: 260px;
  height: 260px;
  bottom: -175px;
  left: -65px;
  border: 1px solid rgba(255, 255, 255, 0.055);
}

.footer-shell {
  position: relative;
  z-index: 1;
}

.footer-main {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(380px, 0.85fr);
  align-items: start;
  gap: 88px;
  padding: 0 8px 40px;
}

.footer-brand-column {
  max-width: 540px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 13px;
}

.footer-brand-symbol {
  display: inline-flex;
  width: 50px;
  height: 50px;
  flex: none;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(221, 161, 115, 0.24);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.05);
  color: #dda173;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.footer-brand-symbol svg {
  width: 32px;
  height: 32px;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.footer-brand-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  direction: ltr;
  text-align: left;
}

.footer-brand strong {
  color: #fff;
  font-size: 19px;
  font-weight: 800;
}

.footer-brand small {
  color: #8492a3;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.footer-brand-copy {
  max-width: 500px;
  margin: 19px 0 0;
  color: #9ba7b6;
  font-size: 14px;
  line-height: 1.95;
}

.footer-contact-icons {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 9px;
  margin-top: 22px;
}

.footer-icon-action {
  display: inline-flex;
  width: 44px;
  height: 44px;
  flex: none;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  color: #d9a06f;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.055);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;
}

.footer-icon-action:hover {
  transform: translateY(-2px);
  border-color: rgba(221, 161, 115, 0.38);
  background: rgba(221, 161, 115, 0.1);
  color: #fff;
}

.footer-icon-action.is-disabled {
  cursor: default;
  opacity: 0.42;
}

.footer-icon-action.is-disabled:hover {
  transform: none;
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: #d9a06f;
}

.contact-icon {
  width: 20px;
  height: 20px;
  flex: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  gap: 54px;
  padding-top: 4px;
}

.footer-nav-column {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
}

.footer-column-title {
  position: relative;
  display: block;
  margin-bottom: 8px;
  padding-bottom: 9px;
  color: #dda173;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.5;
}

.footer-column-title::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 1px;
  background: rgba(221, 161, 115, 0.42);
}

.footer-nav-column a {
  display: inline-flex;
  color: #aeb8c5;
  font-size: 14px;
  line-height: 1.75;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.footer-nav-column a:hover {
  color: #fff;
  transform: translateX(-3px);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 19px 8px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.075);
  color: #6f7c8d;
  font-size: 11.5px;
}

.footer-bottom-dot {
  display: none;
}

@media (max-width: 980px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .footer-brand-column {
    max-width: 680px;
  }

  .footer-links {
    width: min(100%, 620px);
    gap: 38px;
  }
}

@media (max-width: 720px) {
  .site-footer {
    padding-top: 46px;
  }

  .footer-main {
    gap: 34px;
    padding-bottom: 34px;
  }

  .footer-links {
    grid-template-columns: 1fr 1fr;
    gap: 30px 24px;
  }

  .footer-bottom {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 460px) {
  .site-footer {
    padding-top: 42px;
  }

  .footer-main {
    gap: 30px;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 26px;
  }

  .footer-contact-icons {
    gap: 8px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
