<script setup lang="ts">
usePageSeo({
  title: "SmartPilot | Digital Products, Custom Software & AI",
  description: "SmartPilot designs and builds digital products, custom software and practical AI capabilities, from product architecture to continuous improvement.",
  path: "/en",
  locale: "en",
  image: "/images/og/nexastudio-og.webp",
  imageAlt: "SmartPilot digital product studio",
});

useHead({
  htmlAttrs: { lang: "en", dir: "ltr" },
  bodyAttrs: { dir: "ltr" },
});
</script>

<template>
  <main id="main-content" class="english-home" tabindex="-1">
    <section class="en-hero">
      <div class="container en-hero-inner">
        <div class="en-hero-copy">
        <span class="en-eyebrow">SMARTPILOT · DIGITAL PRODUCT STUDIO</span>
        <h1>Digital products, custom software and AI — built for real business needs.</h1>
        <p>From product strategy and architecture to intelligent features and ongoing improvements, we turn complex ideas into practical solutions.</p>
        <div class="en-actions">
          <NuxtLink class="en-primary" to="/en/services">Explore our services</NuxtLink>
          <NuxtLink class="en-secondary" to="/en/contact">Let's talk</NuxtLink>
        </div>
        </div>
        <div class="en-hero-art" aria-hidden="true">
          <div class="en-hero-art-ring ring-one"></div>
          <div class="en-hero-art-ring ring-two"></div>
          <div class="en-hero-art-center">
            <span class="en-art-symbol">SP</span>
            <span class="en-art-arrow">↗</span>
          </div>
          <div class="en-hero-art-caption">DESIGN · BUILD · INTELLIGENCE</div>
        </div>
      </div>
    </section>

    <section id="services" class="en-section container">
      <div class="en-heading">
        <span class="en-eyebrow">WHAT WE DO</span>
        <h2>Build, launch and grow</h2>
        <p>Engineering and design for products that need to keep evolving.</p>
      </div>
      <div class="en-grid en-grid-three">
        <article class="en-card">
          <span class="en-card-icon" aria-hidden="true">⌘</span>
          <h3>Custom platforms</h3>
          <p>Web platforms, management systems and workflows designed around the way your business actually works.</p>
        </article>
        <article class="en-card">
          <span class="en-card-icon" aria-hidden="true">✦</span>
          <h3>Applied AI</h3>
          <p>Semantic search, intelligent assistants and automation connected to real product data and operations.</p>
        </article>
        <article class="en-card">
          <span class="en-card-icon" aria-hidden="true">◉</span>
          <h3>Product growth</h3>
          <p>Technical SEO, performance, maintenance and iterative improvements beyond the initial release.</p>
        </article>
      </div>
    </section>

    <section id="projects" class="en-projects">
      <div class="container">
        <div class="en-heading">
          <span class="en-eyebrow">SELECTED WORK</span>
          <h2>Products built for real use</h2>
          <p>Two products, different markets, and a shared focus on maintainable architecture and useful experiences.</p>
        </div>
        <div class="en-grid en-grid-two">
          <article class="en-project">
            <img src="/images/projects/shidane.webp" alt="Shidaneh digital platform project" width="1659" height="948" loading="lazy" />
            <div class="en-project-copy"><h3>Shidaneh</h3><p>A content and commerce platform designed for ongoing improvement.</p><NuxtLink to="/en/projects/shidaneh">Explore case study →</NuxtLink></div>
          </article>
          <article class="en-project">
            <img src="/images/projects/hevix.webp" alt="HEVIX industrial parts platform project" width="1659" height="948" loading="lazy" />
            <div class="en-project-copy"><h3>HEVIX</h3><p>An industrial parts platform with product intelligence and research workflows.</p><NuxtLink to="/en/projects/hevix">Explore case study →</NuxtLink></div>
          </article>
        </div>
      </div>
    </section>

    <section id="about" class="en-section container">
      <div class="en-heading">
        <span class="en-eyebrow">OUR APPROACH</span>
        <h2>Product thinking, not just project delivery</h2>
        <p>We connect business goals, user experience and technical decisions from the beginning.</p>
      </div>
      <div class="en-grid en-grid-three">
        <article class="en-card"><h3>Understand the problem</h3><p>Define the actual outcome before choosing tools or implementing features.</p></article>
        <article class="en-card"><h3>Design for change</h3><p>Favor systems that can grow without expensive rebuilds.</p></article>
        <article class="en-card"><h3>Keep improving</h3><p>Iterate with clear ownership of quality and long-term maintainability.</p></article>
      </div>
    </section>

    <section id="contact" class="en-contact">
      <div class="container en-contact-inner">
        <span class="en-eyebrow">WORK WITH US</span>
        <h2>Have a product in mind?</h2>
        <p>Tell us what you're building and what you're trying to achieve.</p>
        <div class="en-actions en-contact-actions">
          <a class="en-primary" href="mailto:zhr.keshavarz@gmail.com">Email SmartPilot</a>
          <a class="en-secondary" href="https://wa.me/989379407868" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.english-home { direction: ltr; color: #101c32; }
.en-hero { padding: clamp(80px, 10vw, 150px) 0; background: radial-gradient(circle at 75% 15%, rgba(184,107,53,.15), transparent 42%), linear-gradient(135deg, #07111f, #152842); color: white; }
 .en-hero-inner { display: grid; grid-template-columns: minmax(0,1.2fr) minmax(290px,.8fr); align-items: center; gap: clamp(24px,5vw,62px); }
.en-hero-copy { min-width: 0; }
.en-hero-art { position: relative; overflow: hidden; min-height: 360px; border-radius: 28px; border: 1px solid rgba(255,255,255,.19); display: grid; place-items: center; background: radial-gradient(circle at 50% 45%,rgba(202,129,78,.26),transparent 42%),linear-gradient(140deg,#213955,#0a182b); box-shadow: 0 18px 60px rgba(0,0,0,.16); isolation: isolate; }
.en-hero-art-ring { position: absolute; border: 1px solid rgba(232,190,157,.26); width: 300px; aspect-ratio: 1; border-radius: 50%; }
.ring-one { transform: translate(-55px,-14px); }
.ring-two { transform: translate(78px,56px) scale(.82); }
.en-hero-art-center { position: relative; z-index: 1; display: flex; align-items: baseline; }
.en-art-symbol { font: 900 clamp(84px,9vw,116px)/1 system-ui,sans-serif; letter-spacing: -.12em; color: #fffaf7; }
.en-art-arrow { margin-left: 12px; font: 700 65px/1 system-ui,sans-serif; color: #d7a67c; }
.en-hero-art-caption { position: absolute; bottom: 28px; z-index: 1; color: #d7bda5; font: 700 10px/1.6 system-ui,sans-serif; letter-spacing: .18em; }

.en-eyebrow { font-size: 12px; font-weight: 800; color: #c99066; letter-spacing: .14em; }
.en-hero h1 { max-width: 920px; margin: 18px 0 20px; font-size: clamp(35px, 4.4vw, 58px); line-height: 1.17; letter-spacing: -.035em; }
.en-hero p { max-width: 710px; color: #c9d2dd; font-size: clamp(16px, 2vw, 20px); line-height: 1.75; }
.en-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 26px; }
.en-actions a { padding: 13px 21px; border-radius: 12px; font-weight: 750; font-size: 14px; }
.en-primary { background: #d39b71; color: #101c32; }
.en-secondary { border: 1px solid rgba(220,225,233,.45); color: inherit; }
.en-section { padding-top: 84px; padding-bottom: 90px; }
.en-heading { margin: 0 auto 35px; max-width: 780px; text-align: center; }
.en-heading h2 { margin: 10px auto; font-size: clamp(30px, 4vw, 43px); line-height: 1.25; }
.en-heading p { color: #647185; font-size: 16px; line-height: 1.75; }
.en-grid { display: grid; gap: 20px; }
.en-grid-three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.en-grid-two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.en-card { padding: 30px; background: #fff; border: 1px solid #eadfd7; border-radius: 22px; box-shadow: 0 12px 32px rgba(16,28,50,.055); }
.en-card h3 { font-size: 20px; margin: 10px 0; }
.en-card p { font-size: 15px; color: #647185; line-height: 1.75; margin: 0; }
.en-card-icon { color: #ac6338; font-size: 26px; }
.en-projects { padding: 82px 0; background: #f7fafc; }
.en-project { min-width: 0; overflow: hidden; border-radius: 23px; background: white; border: 1px solid #e5e8ed; }
.en-project img { display: block; width: 100%; height: auto; }
.en-project-copy { padding: 18px 24px 24px; }
.en-project h3 { margin: 0 0 4px; font-size: 20px; }
.en-project p { margin: 0; color: #647185; line-height: 1.65; }
.en-project-copy a { display: inline-block; color: #ad633a; font-weight: 800; font-size: 13px; margin-top: 14px; }
.en-contact { padding: 86px 0; background: #f4ebe3; }
.en-contact-inner { text-align: center; }
.en-contact h2 { font-size: clamp(30px,4vw,44px); margin: 12px 0; }
.en-contact p { color: #596879; }
.en-contact-actions { justify-content: center; }
.en-contact .en-secondary { border-color: #a89484; color: #17263b; }
@media(max-width: 820px) {
  .en-hero { padding: 68px 0 76px; }
  .en-hero-inner { grid-template-columns: 1fr; }
  .en-hero-art { min-height: 210px; }
  .en-art-symbol { font-size: 78px; }
  .en-art-arrow { font-size: 50px; }
  .en-section, .en-projects { padding-top: 55px; padding-bottom: 60px; }
  .en-grid-three { grid-template-columns: 1fr; }
  .en-card { padding: 23px; }
}
@media(max-width: 640px) {
  .en-grid-two { grid-template-columns: 1fr; }
  .en-hero h1 { font-size: clamp(33px, 9vw, 46px); }
  .en-hero p { font-size: 16px; }
  .en-hero-art { min-height: 165px; }
  .en-hero-art-ring { width: 200px; }
  .en-hero-art-caption { bottom: 14px; font-size: 9px; }
  .en-actions a { width: 100%; text-align: center; }
  .en-contact { padding: 62px 0; }
}
</style>
