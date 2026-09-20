<template>
  <footer class="site-footer">
    <div class="footer-glow footer-glow-one" aria-hidden="true"></div>
    <div class="footer-glow footer-glow-two" aria-hidden="true"></div>

    <div class="container footer-shell">
      <section class="footer-cta">
        <div class="footer-cta-copy">
          <span class="footer-eyebrow">یک پروژه، یک مسئله، یا فقط یک ایده اولیه</span>
          <h2>بیایید درباره چیزی که می‌خواهید بسازید صحبت کنیم.</h2>
          <p>
            از بررسی اولیه تا طراحی مسیر فنی، قبل از شروع توسعه تصویر روشنی از
            مسئله و قدم بعدی می‌سازیم.
          </p>
        </div>

        <div class="footer-cta-actions">
          <NuxtLink class="footer-primary-action" to="/contact">
            شروع گفتگو
            <span aria-hidden="true">←</span>
          </NuxtLink>
          <a
            class="footer-secondary-action"
            href="https://wa.me/989379407868"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
              <path d="M8.7 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 1.9 2.6 2.5.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.4-.8 2-.6.6-1.5.8-2.4.6-1-.2-2.3-.7-3.9-2.1-1.4-1.2-2.3-2.7-2.6-3.7-.3-.9 0-2 .3-2.5l.8-1.6Z" />
            </svg>
            پیام در واتساپ
          </a>
        </div>
      </section>

      <div class="footer-divider"></div>

      <div class="footer-main">
        <div class="footer-brand-column">
          <NuxtLink class="footer-brand" to="/" aria-label="NexaStudio - صفحه اصلی">
            <span class="footer-brand-symbol" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M10.5 28.5V11.5L20 22l9.5-10.5v17" />
                <path d="M13.5 31h13" />
              </svg>
            </span>
            <span>
              <strong>NexaStudio</strong>
              <small>Digital Product Studio</small>
            </span>
          </NuxtLink>

          <p class="footer-brand-copy">
            طراحی و توسعه محصولات دیجیتال، سامانه‌های اختصاصی و قابلیت‌های
            هوشمند با تمرکز بر رشد واقعی کسب‌وکار.
          </p>

          <div class="footer-contact-pills">
            <a href="tel:+989379407868" dir="ltr">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8.2 3.5 6.4 4.1a2 2 0 0 0-1.3 2.3c1.1 6.1 5.9 10.9 12 12a2 2 0 0 0 2.3-1.3l.6-1.8a1.5 1.5 0 0 0-.8-1.8l-2.6-1.2a1.5 1.5 0 0 0-1.8.4l-1.1 1.3a12.2 12.2 0 0 1-3.8-3.8l1.3-1.1a1.5 1.5 0 0 0 .4-1.8L10 4.3a1.5 1.5 0 0 0-1.8-.8Z" />
              </svg>
              <span>0937 940 7868</span>
            </a>
            <a
              href="https://wa.me/989379407868"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
                <path d="M8.7 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 1.9 2.6 2.5.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.4-.8 2-.6.6-1.5.8-2.4.6-1-.2-2.3-.7-3.9-2.1-1.4-1.2-2.3-2.7-2.6-3.7-.3-.9 0-2 .3-2.5l.8-1.6Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

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

        <div class="footer-social-column">
          <span class="footer-column-title">ارتباط</span>

          <a class="footer-contact-row" href="tel:+989379407868">
            <span class="footer-contact-row-head">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8.2 3.5 6.4 4.1a2 2 0 0 0-1.3 2.3c1.1 6.1 5.9 10.9 12 12a2 2 0 0 0 2.3-1.3l.6-1.8a1.5 1.5 0 0 0-.8-1.8l-2.6-1.2a1.5 1.5 0 0 0-1.8.4l-1.1 1.3a12.2 12.2 0 0 1-3.8-3.8l1.3-1.1a1.5 1.5 0 0 0 .4-1.8L10 4.3a1.5 1.5 0 0 0-1.8-.8Z" />
              </svg>
              تماس تلفنی
            </span>
            <strong dir="ltr">0937 940 7868</strong>
          </a>

          <a
            class="footer-contact-row"
            href="https://wa.me/989379407868"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="footer-contact-row-head">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
                <path d="M8.7 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 1.9 2.6 2.5.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.4-.8 2-.6.6-1.5.8-2.4.6-1-.2-2.3-.7-3.9-2.1-1.4-1.2-2.3-2.7-2.6-3.7-.3-.9 0-2 .3-2.5l.8-1.6Z" />
              </svg>
              واتساپ
            </span>
            <strong>ارسال پیام</strong>
          </a>

          <div class="footer-contact-row is-disabled" aria-disabled="true">
            <span>اینستاگرام</span>
            <strong>به‌زودی</strong>
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
  padding: 74px 0 24px;
  background:
    radial-gradient(circle at 88% 8%, rgba(184, 107, 53, 0.18), transparent 29%),
    radial-gradient(circle at 8% 100%, rgba(74, 95, 128, 0.12), transparent 30%),
    linear-gradient(155deg, #07111f 0%, #0a1828 54%, #07131f 100%);
  color: #fff;
  direction: rtl;
}

.footer-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(2px);
}

.footer-glow-one {
  width: 360px;
  height: 360px;
  top: -210px;
  right: -80px;
  border: 1px solid rgba(226, 160, 111, 0.12);
}

.footer-glow-two {
  width: 260px;
  height: 260px;
  bottom: -170px;
  left: -60px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-shell {
  position: relative;
  z-index: 1;
}

.footer-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  padding: 0 6px 42px;
}

.footer-cta-copy {
  max-width: 720px;
  text-align: right;
}

.footer-eyebrow {
  color: #dda173;
  font-size: 12.5px;
  font-weight: 800;
}

.footer-cta h2 {
  max-width: 710px;
  margin: 10px 0 8px;
  color: #fff;
  font-size: clamp(28px, 3.3vw, 42px);
  font-weight: 800;
  line-height: 1.5;
  letter-spacing: -0.015em;
}

.footer-cta p {
  max-width: 650px;
  margin: 0;
  color: #aeb9c7;
  font-size: 14.5px;
  line-height: 1.9;
}

.footer-cta-actions {
  display: flex;
  flex: none;
  flex-direction: column;
  gap: 9px;
  min-width: 185px;
}

.footer-primary-action,
.footer-secondary-action {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 999px;
  font-size: 14.5px;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.footer-primary-action {
  border: 1px solid rgba(255, 190, 140, 0.28);
  background: linear-gradient(135deg, #c17a42, #96502d);
  color: #fff;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.footer-secondary-action {
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.035);
  color: #d4dbe4;
}

.footer-primary-action:hover,
.footer-secondary-action:hover {
  transform: translateY(-2px);
}

.footer-secondary-action:hover {
  border-color: rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.06);
}

.footer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.14) 18%,
    rgba(255, 255, 255, 0.14) 82%,
    transparent
  );
}

.footer-main {
  display: grid;
  grid-template-columns: minmax(300px, 1.5fr) repeat(3, minmax(145px, 0.65fr));
  gap: 42px;
  padding: 42px 6px 36px;
}

.footer-brand-column {
  max-width: 390px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.footer-brand-symbol {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(221, 161, 115, 0.25);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.055);
  color: #dda173;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);
}

.footer-brand-symbol svg {
  width: 31px;
  height: 31px;
  stroke: currentColor;
  stroke-width: 1.9;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.footer-brand > span:last-child {
  display: flex;
  flex-direction: column;
  gap: 1px;
  direction: ltr;
  text-align: left;
}

.footer-brand strong {
  color: #fff;
  font-size: 18px;
  font-weight: 800;
}

.footer-brand small {
  color: #8492a3;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.footer-brand-copy {
  max-width: 360px;
  margin: 18px 0 0;
  color: #929faf;
  font-size: 13.5px;
  line-height: 1.9;
}


.contact-icon {
  width: 16px;
  height: 16px;
  flex: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.footer-contact-pills a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.footer-contact-pills .contact-icon {
  color: #dda173;
}

.footer-contact-row-head {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.footer-contact-row-head .contact-icon {
  width: 15px;
  height: 15px;
  color: #dda173;
}

.footer-contact-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 18px;
}

.footer-contact-pills a {
  padding: 6px 10px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.035);
  color: #c4ccd6;
  font-size: 11.5px;
}

.footer-nav-column,
.footer-social-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
}

.footer-column-title {
  margin-bottom: 5px;
  color: #dda173;
  font-size: 12.5px;
  font-weight: 800;
}

.footer-nav-column a {
  color: #aeb8c5;
  font-size: 13.5px;
  line-height: 1.6;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.footer-nav-column a:hover {
  color: #fff;
  transform: translateX(-3px);
}

.footer-contact-row {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2px;
  padding: 9px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.075);
}

.footer-contact-row span {
  color: #788698;
  font-size: 10.5px;
}

.footer-contact-row strong {
  color: #cbd3dd;
  font-size: 12.5px;
  font-weight: 650;
}

.footer-contact-row.is-disabled {
  opacity: 0.55;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 18px 6px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.075);
  color: #697789;
  font-size: 11.5px;
}

.footer-bottom-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #a6653d;
}

@media (max-width: 980px) {
  .footer-main {
    grid-template-columns: 1.3fr repeat(2, 0.7fr);
  }

  .footer-social-column {
    grid-column: 2 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: end;
  }

  .footer-social-column .footer-column-title {
    grid-column: 1 / -1;
  }
}

@media (max-width: 720px) {
  .site-footer {
    padding-top: 56px;
  }

  .footer-cta {
    flex-direction: column;
    align-items: stretch;
    gap: 26px;
    padding-bottom: 34px;
  }

  .footer-cta-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-width: 0;
  }

  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 34px 24px;
    padding-top: 34px;
  }

  .footer-brand-column {
    grid-column: 1 / -1;
  }

  .footer-social-column {
    grid-column: 1 / -1;
    grid-template-columns: repeat(3, 1fr);
  }

  .footer-bottom {
    flex-wrap: wrap;
    text-align: center;
  }
}

@media (max-width: 460px) {
  .site-footer {
    padding-top: 48px;
  }

  .footer-cta h2 {
    font-size: 27px;
  }

  .footer-cta-actions {
    grid-template-columns: 1fr;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-brand-column,
  .footer-social-column {
    grid-column: auto;
  }

  .footer-social-column {
    display: flex;
  }

  .footer-bottom-dot {
    display: none;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
