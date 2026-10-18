<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

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

// The hero artwork has its CTAs baked into the image. Hotspot anchors are
// declared in image coordinates and re-projected to the rendered box on
// every resize, so "cover"-cropping can never detach them from the real
// buttons inside the artwork (1672×941 native size).
const HOTSPOTS = {
  primary: { x: 0.0525, y: 0.758, w: 0.174, h: 0.074 },
  secondary: { x: 0.234, y: 0.758, w: 0.11, h: 0.074 },
};
const heroBox = ref<HTMLElement | null>(null);
const spotPrimary = ref<HTMLElement | InstanceType<any> | null>(null);
const spotSecondary = ref<HTMLElement | InstanceType<any> | null>(null);

const elementOf = (value: HTMLElement | { $el: Element } | null | undefined) =>
  value instanceof HTMLElement ? value : (value?.$el as HTMLElement | null) ?? null;

const syncHotspots = () => {
  const box = heroBox.value;
  if (!box || box.clientWidth === 0) return;
  const width = box.clientWidth;
  const height = box.clientHeight;
  const scale = Math.max(width / 1672, height / 941);
  const renderedWidth = 1672 * scale;
  const renderedHeight = 941 * scale;
  const offsetX = (width - renderedWidth) / 2;
  const offsetY = (height - renderedHeight) / 2;
  const place = (node: HTMLElement | { $el: Element } | null, spot: { x: number; y: number; w: number; h: number }) => {
    const element = elementOf(node);
    if (!element) return;
    element.style.left = `${spot.x * renderedWidth - offsetX}px`;
    element.style.top = `${spot.y * renderedHeight - offsetY}px`;
    element.style.width = `${spot.w * renderedWidth}px`;
    element.style.height = `${spot.h * renderedHeight}px`;
  };
  place(spotPrimary.value, HOTSPOTS.primary);
  place(spotSecondary.value, HOTSPOTS.secondary);
};

let resizeObserver: ResizeObserver | null = null;
onMounted(() => {
  syncHotspots();
  resizeObserver = new ResizeObserver(syncHotspots);
  if (heroBox.value) resizeObserver.observe(heroBox.value);
});
onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
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

      <div ref="heroBox" class="en-hero-visual">
        <img
          src="/images/en/smartpilot_digital_product_studio.webp"
          alt="SmartPilot studio showcase with premium desktop and mobile interfaces for commerce, intelligent search and product engineering"
          width="1672"
          height="941"
          decoding="async"
          fetchpriority="high"
        />
        <NuxtLink ref="spotPrimary" class="en-hero-hotspot en-hero-hotspot-primary" to="/en/contact" aria-label="Let's Build Together — contact SmartPilot">
          <span class="visually-hidden">Contact SmartPilot</span>
        </NuxtLink>
        <NuxtLink ref="spotSecondary" class="en-hero-hotspot en-hero-hotspot-secondary" to="/en/projects" aria-label="Watch our work — explore SmartPilot projects">
          <span class="visually-hidden">Explore our projects</span>
        </NuxtLink>
      </div>

      <div class="container en-hero-mobile-actions">
        <NuxtLink class="en-primary" to="/en/projects">Explore our work <span aria-hidden="true">→</span></NuxtLink>
        <NuxtLink class="en-secondary" to="/en/contact">Talk to us <span aria-hidden="true">→</span></NuxtLink>
      </div>
    </section>

    <section class="en-strip" aria-label="SmartPilot at a glance">
      <div class="container en-strip-grid">
        <article class="en-strip-card">
          <span class="en-strip-icon" aria-hidden="true">◈</span>
          <div class="en-strip-copy"><h3>Shidaneh — live</h3><p>Beauty commerce in production, engineered to keep evolving.</p></div>
        </article>
        <article class="en-strip-card">
          <span class="en-strip-icon" aria-hidden="true">⬡</span>
          <div class="en-strip-copy"><h3>HEVIX — live</h3><p>Industrial parts intelligence with structured product data.</p></div>
        </article>
        <article class="en-strip-card">
          <span class="en-strip-icon" aria-hidden="true">✶</span>
          <div class="en-strip-copy"><h3>London-ready delivery</h3><p>English-first communication, sessions around European hours.</p></div>
        </article>
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
        <article class="en-card"><h3>Design for change</h3><p>Favour systems that can grow without expensive rebuilds.</p></article>
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
.en-hero { position: relative; background: #f8f1e8; }
.en-hero::after { content: ""; position: absolute; inset: auto 0 0; height: 110px; background: linear-gradient(180deg, rgba(248,241,232,0), #f8f1e8); pointer-events: none; }
.en-hero-mobile-intro,
.en-hero-mobile-actions { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.en-hero-visual { position: relative; width: 100%; margin-inline: auto; line-height: 0; overflow: hidden; height: clamp(520px, calc(100vh - 118px), 1150px); height: clamp(520px, calc(100svh - 118px), 1150px); animation: en-rise .8s ease both; z-index: 1; }
.en-hero-visual img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; }
.en-hero-hotspot { position: absolute; display: block; z-index: 2; border-radius: 14px; cursor: pointer; }
.en-hero-hotspot-primary { left: 5.25%; top: 75.8%; width: 17.4%; height: 7.4%; }
.en-hero-hotspot-secondary { left: 23.4%; top: 75.8%; width: 11%; height: 7.4%; }
.en-hero-hotspot::after { content: ""; position: absolute; inset: -9px; border: 1px solid rgba(150,87,46,.28); border-radius: 18px; opacity: 0; transition: opacity .22s ease; }
.en-hero-hotspot:hover::after,
.en-hero-hotspot:focus-visible::after { opacity: 1; background: rgba(255,255,255,.18); }
.en-hero-hotspot:focus-visible { outline: 3px solid #96572e; outline-offset: 2px; }
.en-strip { position: relative; z-index: 20; margin-top: -74px; padding-bottom: 14px; }
.en-strip-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.en-strip-card { position: relative; overflow: hidden; display: grid; grid-template-columns: 44px minmax(0,1fr); gap: 14px; align-items: center; padding: 15px 18px; border: 1px solid rgba(226,211,199,.92); border-radius: 20px; background: radial-gradient(circle at 0% 0%, rgba(184,107,53,.08), transparent 34%), linear-gradient(145deg, rgba(255,255,255,.98), rgba(255,250,246,.95)); box-shadow: 0 16px 36px rgba(16,28,50,.08), inset 0 1px 0 rgba(255,255,255,.9); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; animation: en-rise .7s ease both; }
.en-strip-card:nth-child(2) { animation-delay: .1s; }
.en-strip-card:nth-child(3) { animation-delay: .2s; }
.en-strip-card::after { content: ""; position: absolute; inset: auto 16px 0; height: 2px; border-radius: 999px; background: linear-gradient(90deg, transparent, rgba(184,107,53,.5), transparent); opacity: .55; }
.en-strip-card:hover { transform: translateY(-4px); border-color: rgba(184,107,53,.32); box-shadow: 0 22px 46px rgba(16,28,50,.11), inset 0 1px 0 rgba(255,255,255,.92); }
.en-strip-icon { width: 44px; height: 44px; flex: none; display: flex; align-items: center; justify-content: center; font-size: 19px; color: #a75c32; border: 1px solid rgba(184,107,53,.2); border-radius: 14px; background: linear-gradient(145deg,#fff8f3,#f3dfd1); box-shadow: inset 0 1px 0 #fff, 0 8px 18px rgba(184,107,53,.08); }
.en-strip-copy { min-width: 0; }
.en-strip-copy h3 { margin: 0 0 3px; font-size: 15.5px; font-weight: 800; color: #101c32; letter-spacing: -.01em; }
.en-strip-copy p { margin: 0; color: #647185; font-size: 13.5px; line-height: 1.6; }
@keyframes en-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.en-eyebrow { display: inline-flex; align-items: center; gap: 8px; justify-content: center; padding: 5px 16px; border: 1px solid rgba(184,107,53,.38); border-radius: 999px; background: rgba(255,249,245,.9); color: #ad6037; font-size: 12px; font-weight: 800; letter-spacing: .14em; box-shadow: inset 0 1px 0 rgba(255,255,255,.9); }
.en-eyebrow::before { content: ""; width: 6px; height: 6px; border-radius: 999px; background: linear-gradient(145deg,#d99a63,#b06a35); box-shadow: 0 0 8px rgba(184,107,53,.45); }
.en-primary, .en-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 21px; border-radius: 12px; font-weight: 750; font-size: 14px; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease; }
.en-primary { background: linear-gradient(145deg,#16293e,#101c2f); color: #fff; box-shadow: 0 10px 24px rgba(16,28,50,.16), inset 0 1px 0 rgba(255,255,255,.12); }
.en-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(16,28,50,.2); }
.en-secondary { border: 1px solid #c2a998; color: #13283c; background: rgba(255,255,255,.55); }
.en-secondary:hover { transform: translateY(-2px); border-color: #a67f60; background: #fff; }
@media (max-width: 760px) {
  .en-hero { padding: 0 0 34px; }
  .en-hero-mobile-intro { position: static; width: auto; height: auto; overflow: visible; clip-path: none; white-space: normal; padding-top: 38px; padding-bottom: 24px; }
  .en-hero-mobile-intro h1 { max-width: 650px; margin: 13px 0; color: #102339; font-size: clamp(30px, 7vw, 48px); line-height: 1.16; letter-spacing: -.03em; }
  .en-hero-mobile-intro p { margin: 0; color: #566575; font-size: 16px; line-height: 1.7; }
  .en-hero-visual { height: clamp(285px, 87vw, 480px); }
  .en-hero-visual img { width: 100%; height: 100%; object-fit: cover; object-position: 96% center; }
  .en-hero-hotspot { display: none; }
  .en-hero-mobile-actions { position: static; width: auto; height: auto; display: flex; flex-wrap: wrap; gap: 12px; overflow: visible; clip-path: none; white-space: normal; padding-top: 22px; }
  .en-strip { margin-top: 6px; }
  .en-strip-grid { grid-template-columns: 1fr; }
}
@media (max-width: 490px) {
  .en-hero-mobile-actions a { flex: 1 1 100%; }
}
.en-section { padding-top: 84px; padding-bottom: 90px; }
.en-heading { margin: 0 auto 35px; max-width: 780px; text-align: center; }
.en-heading h2 { margin: 14px auto 9px; font-size: clamp(30px, 4vw, 43px); line-height: 1.25; letter-spacing: -.02em; }
.en-heading::after { content: ""; display: block; width: 74px; height: 2px; margin: 14px auto 0; border-radius: 999px; background: linear-gradient(90deg, transparent, rgba(184,107,53,.68), transparent); }
.en-heading p { color: #647185; font-size: 16px; line-height: 1.75; }
.en-grid { display: grid; gap: 20px; }
.en-grid-three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.en-grid-two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.en-card { position: relative; overflow: hidden; padding: 30px; border: 1px solid #eadfd7; border-radius: 22px; background: radial-gradient(circle at 0% 0%, rgba(184,107,53,.06), transparent 30%), linear-gradient(150deg,#fff 0%,#fffaf6 100%); box-shadow: 0 14px 34px rgba(16,28,50,.055), inset 0 1px 0 rgba(255,255,255,.92); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
.en-card::before { content: ""; position: absolute; top: 0; right: 28px; left: 28px; height: 3px; border-radius: 0 0 999px 999px; background: linear-gradient(90deg, rgba(184,107,53,0), rgba(184,107,53,.5), rgba(184,107,53,0)); }
.en-card:hover { transform: translateY(-5px); border-color: rgba(184,107,53,.32); box-shadow: 0 22px 46px rgba(16,28,50,.09), inset 0 1px 0 rgba(255,255,255,.95); }
.en-card h3 { font-size: 20px; margin: 10px 0; }
.en-card p { font-size: 15px; color: #647185; line-height: 1.75; margin: 0; }
.en-card-icon { position: relative; display: inline-flex; width: 50px; height: 50px; align-items: center; justify-content: center; font-size: 21px; color: #a75c32; border: 1px solid rgba(184,107,53,.2); border-radius: 16px; background: linear-gradient(145deg,#fff8f3,#f2ded0); box-shadow: inset 0 1px 0 #fff, 0 8px 18px rgba(184,107,53,.08); }
.en-projects { padding: 82px 0; background:
    radial-gradient(circle at 50% 0%, rgba(184,107,53,.05), transparent 26%),
    linear-gradient(180deg, #f7fafc 0%, #fdfaf7 100%); }
.en-project { min-width: 0; overflow: hidden; border-radius: 23px; background: linear-gradient(150deg,#fff 0%,#fffaf6 100%); border: 1px solid #e5e8ed; box-shadow: 0 14px 34px rgba(16,28,50,.055); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
.en-project:hover { transform: translateY(-5px); border-color: rgba(184,107,53,.3); box-shadow: 0 24px 50px rgba(16,28,50,.1); }
.en-project img { display: block; width: 100%; height: auto; }
.en-project-copy { padding: 18px 24px 24px; }
.en-project h3 { margin: 0 0 4px; font-size: 20px; }
.en-project p { margin: 0; color: #647185; line-height: 1.65; }
.en-project-copy a { display: inline-flex; align-items: center; gap: 6px; color: #ad633a; font-weight: 800; font-size: 13px; margin-top: 14px; }
.en-project-copy a::after { content: "→"; transition: transform .2s ease; }
.en-project-copy a:hover::after { transform: translateX(3px); }
.en-contact { position: relative; padding: 86px 0; background:
    radial-gradient(circle at 85% 10%, rgba(184,107,53,.09), transparent 34%),
    radial-gradient(circle at 8% 95%, rgba(74,95,128,.07), transparent 30%),
    linear-gradient(155deg,#f4ebe3 0%,#f8f1e8 100%); }
.en-contact-inner { text-align: center; }
.en-contact h2 { font-size: clamp(30px,4vw,44px); margin: 12px 0; letter-spacing: -.02em; }
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
