<script setup lang="ts">
usePageSeo({
  title: "SmartPilot | Digital Products, Custom Software & AI",
  description: "SmartPilot designs and builds digital products, custom software and practical AI capabilities, from product architecture to continuous improvement.",
  path: "/en",
  locale: "en",
  image: "/images/en/smartpilot_digital_studio_showcase.webp",
  imageAlt: "SmartPilot digital product studio",
});

useHead({
  htmlAttrs: { lang: "en", dir: "ltr" },
  bodyAttrs: { dir: "ltr" },
});
</script>

<template>
  <main id="main-content" class="english-home" tabindex="-1">
    <section class="en-hero" aria-labelledby="english-home-title">
      <div class="container en-hero-mobile-intro">
        <span class="en-eyebrow">SMARTPILOT · DIGITAL PRODUCT STUDIO</span>
        <h1 id="english-home-title">Digital products engineered for meaningful growth.</h1>
        <p>Custom platforms, intelligent search and practical AI for ambitious businesses.</p>
      </div>

      <div class="en-hero-visual">
        <img
          src="/images/en/smartpilot_digital_product_studio.webp"
          alt="SmartPilot studio showcase with premium desktop and mobile interfaces for commerce, intelligent search and product engineering"
          width="1672"
          height="941"
          decoding="async"
          fetchpriority="high"
        />
        <NuxtLink class="en-hero-hotspot en-hero-hotspot-work" to="/en/projects" aria-label="Explore SmartPilot projects">
          <span class="visually-hidden">Explore our projects</span>
        </NuxtLink>
        <NuxtLink class="en-hero-hotspot en-hero-hotspot-contact" to="/en/contact" aria-label="Contact SmartPilot">
          <span class="visually-hidden">Contact SmartPilot</span>
        </NuxtLink>
      </div>

      <div class="container en-hero-mobile-actions">
        <NuxtLink class="en-primary" to="/en/projects">Explore our work <span aria-hidden="true">→</span></NuxtLink>
        <NuxtLink class="en-secondary" to="/en/contact">Talk to us <span aria-hidden="true">→</span></NuxtLink>
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
            <img src="/images/en/shidaneh_beauty_commerce_hero.webp" alt="Shidaneh digital platform project" width="1672" height="941" loading="lazy" />
            <div class="en-project-copy"><h3>Shidaneh</h3><p>A content and commerce platform designed for ongoing improvement.</p><NuxtLink to="/en/projects/shidaneh">Explore case study →</NuxtLink></div>
          </article>
          <article class="en-project">
            <img src="/images/en/hevix_smarter_parts_sourcing_banner.webp" alt="HEVIX industrial parts platform project" width="1672" height="941" loading="lazy" />
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
.en-hero { background: #f8f1e8; }
.en-hero-mobile-intro,
.en-hero-mobile-actions { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.en-hero-visual { position: relative; max-width: 1920px; margin-inline: auto; line-height: 0; overflow: hidden; }
.en-hero-visual img { display: block; width: 100%; height: auto; aspect-ratio: 1672 / 941; object-fit: contain; }
.en-hero-hotspot { position: absolute; display: block; z-index: 2; border-radius: 14px; }
.en-hero-hotspot-work { left: 5.25%; top: 75.8%; width: 17.4%; height: 7.4%; }
.en-hero-hotspot-contact { left: 23.4%; top: 75.8%; width: 11%; height: 7.4%; }
.en-hero-hotspot:hover { background: rgba(255,255,255,.10); }
.en-hero-hotspot:focus-visible { outline: 3px solid #96572e; outline-offset: 2px; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.en-eyebrow { font-size: 12px; font-weight: 800; color: #985b3b; letter-spacing: .14em; }
.en-primary, .en-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 21px; border-radius: 12px; font-weight: 750; font-size: 14px; }
.en-primary { background: #13283c; color: #fff; }
.en-secondary { border: 1px solid #c2a998; color: #13283c; }
@media (max-width: 760px) {
  .en-hero { padding: 0 0 34px; }
  .en-hero-mobile-intro { position: static; width: auto; height: auto; overflow: visible; clip-path: none; white-space: normal; padding-top: 38px; padding-bottom: 24px; }
  .en-hero-mobile-intro h1 { max-width: 650px; margin: 13px 0; color: #102339; font-size: clamp(30px, 7vw, 48px); line-height: 1.16; letter-spacing: -.03em; }
  .en-hero-mobile-intro p { margin: 0; color: #566575; font-size: 16px; line-height: 1.7; }
  .en-hero-visual { height: clamp(285px, 87vw, 480px); }
  .en-hero-visual img { width: 100%; height: 100%; object-fit: cover; object-position: 96% center; }
  .en-hero-hotspot { display: none; }
  .en-hero-mobile-actions { position: static; width: auto; height: auto; display: flex; flex-wrap: wrap; gap: 12px; overflow: visible; clip-path: none; white-space: normal; padding-top: 22px; }
}
@media (max-width: 490px) {
  .en-hero-mobile-actions a { flex: 1 1 100%; }
}
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
  .en-section, .en-projects { padding-top: 55px; padding-bottom: 60px; }
  .en-grid-three { grid-template-columns: 1fr; }
  .en-card { padding: 23px; }
}
@media(max-width: 640px) {
  .en-grid-two { grid-template-columns: 1fr; }
  .en-contact { padding: 62px 0; }
}
</style>
