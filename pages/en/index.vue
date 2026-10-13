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
        <span class="en-eyebrow">SMARTPILOT · DIGITAL PRODUCT STUDIO</span>
        <h1>Digital products, custom software and AI — built for real business needs.</h1>
        <p>From product strategy and architecture to intelligent features and ongoing improvements, we turn complex ideas into practical solutions.</p>
        <div class="en-actions">
          <a class="en-primary" href="#services">Explore our services</a>
          <a class="en-secondary" href="#contact">Let's talk</a>
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
            <div class="en-project-copy"><h3>Shidaneh</h3><p>A content and commerce platform designed for ongoing improvement.</p></div>
          </article>
          <article class="en-project">
            <img src="/images/projects/hevix.webp" alt="HEVIX industrial parts platform project" width="1659" height="948" loading="lazy" />
            <div class="en-project-copy"><h3>HEVIX</h3><p>An industrial parts platform with product intelligence and research workflows.</p></div>
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
.en-hero-inner { max-width: 1080px; }
.en-eyebrow { font-size: 12px; font-weight: 800; color: #c99066; letter-spacing: .14em; }
.en-hero h1 { max-width: 920px; margin: 18px 0 20px; font-size: clamp(35px, 5.3vw, 68px); line-height: 1.17; letter-spacing: -.035em; }
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
.en-contact { padding: 86px 0; background: #f4ebe3; }
.en-contact-inner { text-align: center; }
.en-contact h2 { font-size: clamp(30px,4vw,44px); margin: 12px 0; }
.en-contact p { color: #596879; }
.en-contact-actions { justify-content: center; }
.en-contact .en-secondary { border-color: #a89484; color: #17263b; }
@media(max-width: 820px) {
  .en-hero { padding: 68px 0 76px; }
  .en-section, .en-projects { padding-top: 55px; padding-bottom: 60px; }
  .en-grid-three { grid-template-columns: 1fr; }
  .en-card { padding: 23px; }
}
@media(max-width: 640px) {
  .en-grid-two { grid-template-columns: 1fr; }
  .en-hero h1 { font-size: clamp(33px, 9vw, 46px); }
  .en-hero p { font-size: 16px; }
  .en-actions a { width: 100%; text-align: center; }
  .en-contact { padding: 62px 0; }
}
</style>
