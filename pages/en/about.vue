<script setup lang="ts">
usePageSeo({
  title: "About the SmartPilot Product Engineering Team | SmartPilot",
  description: "Meet SmartPilot, a product engineering studio focused on usable digital products, software architecture and practical AI.",
  path: "/en/about",
  locale: "en",
  image: "/images/en/smartpilot_digital_studio_showcase.webp",
});
const sections = [
  {
    "kicker": "OUR PRINCIPLES",
    "title": "How we build",
    "description": "Technology should serve the problem, not the other way around.",
    "items": [
      {
        "title": "Product thinking",
        "description": "Understand business and user needs before choosing tools."
      },
      {
        "title": "Sound architecture",
        "description": "Design for maintainability and future changes."
      },
      {
        "title": "Useful AI",
        "description": "Add intelligence only where it produces tangible value."
      },
      {
        "title": "Continuous growth",
        "description": "Use feedback and evidence to guide ongoing improvement."
      }
    ]
  },
  {
    "kicker": "TEAM",
    "id": "team",
    "title": "Clear ownership for architecture and product quality",
    "description": "We lead the core architecture and add complementary specialists as required.",
    "variant": "founders"
  },
  {
    "kicker": "PROCESS",
    "title": "From discovery to an evolving product",
    "description": "Plan deliberately and deliver in manageable stages.",
    "items": [
      {
        "title": "Discover",
        "description": "Identify problems, constraints and desired outcomes."
      },
      {
        "title": "Design",
        "description": "Align architecture with product workflows."
      },
      {
        "title": "Build and test",
        "description": "Deliver incrementally and verify quality."
      },
      {
        "title": "Improve",
        "description": "Measure, learn and refine after launch."
      }
    ]
  }
];

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"About","path":"/en/about"}]);

</script>

<template>
  <EnContentPage
    kicker="ABOUT SMARTPILOT"
    title="We build digital products around real-world complexity."
    introduction="SmartPilot brings product thinking, software engineering, intelligent search and applied AI together—so technology solves the right problem and remains useful as the business grows."
    :founders="[
      {
        name: 'Zohreh Keshavarz',
        role: 'Product architect & developer',
        image: '/images/team/zohreh.webp',
        description: 'Focused on turning business needs into user journeys, product flow and an executable growth roadmap.',
        skills: ['Experience & product flow architecture', 'Development roadmap & prioritisation', 'Growth & product optimisation'],
        linkedin: 'https://www.linkedin.com/in/zohre-keshavarz-2a3221bb'
      },
      {
        name: 'Hossein Kolani',
        role: 'Software architect & developer',
        image: '/images/team/hossein.webp',
        description: 'Focused on technical architecture, dedicated systems and bringing AI capabilities into the product.',
        skills: ['Extensible systems architecture', 'AI & intelligent capabilities', 'Specialised systems design'],
        linkedin: 'https://www.linkedin.com/in/hossien-kolani-720103bb'
      }
    ]"
    :specialists="{
      title: 'Network of complementary specialists',
      description: 'Complementary expertise joins the team only where the project really needs it.',
      chips: ['UI/UX', 'Frontend', 'Backend', 'DevOps', 'SEO', 'AI']
    }"
    :sections="sections"
  >
    <template #hero>
      <section class="en-about-hero" aria-labelledby="en-about-title">
        <div class="container en-about-hero-grid">
          <div class="en-about-copy">
            <span class="en-about-eyebrow">ABOUT SMARTPILOT <span aria-hidden="true">/</span> PRODUCT ENGINEERING</span>
            <h1 id="en-about-title">We build digital products around <em>real-world complexity.</em></h1>
            <p>From commerce experiences to specialist industrial platforms, we connect business context, thoughtful engineering and practical AI to build products made for real use.</p>
            <div class="en-about-actions">
              <NuxtLink class="en-about-primary" to="/en/projects">Explore selected work <span aria-hidden="true">↗</span></NuxtLink>
              <NuxtLink class="en-about-secondary" to="#team">Meet the team <span aria-hidden="true">↓</span></NuxtLink>
            </div>
            <div class="en-about-disciplines" aria-label="SmartPilot disciplines">
              <span>Product strategy</span><i aria-hidden="true"></i>
              <span>Software engineering</span><i aria-hidden="true"></i>
              <span>Applied AI</span>
            </div>
          </div>
          <div class="en-about-work" aria-label="Selected SmartPilot projects">
            <article class="en-about-work-card en-about-work-card-shidaneh">
              <img src="/images/en/shidaneh_beauty_commerce_hero.webp" alt="Shidaneh beauty commerce platform displayed across desktop and mobile devices" width="1672" height="941" decoding="async" fetchpriority="high" />
              <div class="en-about-work-caption">
                <div><span>01 / COMMERCE</span><h2>Shidaneh</h2></div>
                <NuxtLink to="/en/projects/shidaneh" aria-label="View the Shidaneh case study">↗</NuxtLink>
              </div>
            </article>
            <article class="en-about-work-card en-about-work-card-hevix">
              <img src="/images/en/hevix_smarter_parts_sourcing_banner.webp" alt="HEVIX industrial parts platform displayed across desktop and mobile devices" width="1672" height="941" decoding="async" />
              <div class="en-about-work-caption">
                <div><span>02 / INDUSTRIAL TECHNOLOGY</span><h2>HEVIX</h2></div>
                <NuxtLink to="/en/projects/hevix" aria-label="View the HEVIX case study">↗</NuxtLink>
              </div>
            </article>
            <div class="en-about-work-note"><span aria-hidden="true">✳</span> Real products. Practical engineering.</div>
          </div>
        </div>
      </section>
    </template>
  </EnContentPage>
</template>

<style scoped>
.en-about-hero { position: relative; isolation: isolate; overflow: hidden; padding: 20px 0 58px; color: #14243a; background: #fffdfb; }
.en-about-hero::before { content: ""; position: absolute; z-index: 0; width: 56vw; max-width: 850px; aspect-ratio: 1; right: -12vw; top: -24%; border-radius: 50%; background: radial-gradient(circle, rgba(210,166,128,.2), rgba(210,166,128,0) 68%); pointer-events: none; }
.en-about-hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(340px, .95fr); align-items: center; gap: clamp(30px, 4.2vw, 58px); min-height: 570px; padding: clamp(30px, 4.2vw, 54px); overflow: hidden; border: 1px solid rgba(226,211,199,.92); border-radius: 32px; background: radial-gradient(circle at 82% 18%, rgba(184,107,53,.11), transparent 27%), linear-gradient(135deg, rgba(255,255,255,.97), rgba(255,249,245,.95)); box-shadow: 0 24px 58px rgba(16,28,50,.08), inset 0 1px 0 rgba(255,255,255,.9); }
.en-about-copy { max-width: 680px; }
.en-about-eyebrow { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 9px; color: #925b3b; font: 800 11px/1.6 system-ui, sans-serif; letter-spacing: .15em; }
.en-about-eyebrow span { color: #c5a48b; }
.en-about-copy h1 { margin: 21px 0 22px; max-width: 680px; color: #12233a; font-size: clamp(42px, 5vw, 69px); line-height: 1.04; letter-spacing: -.055em; font-weight: 750; }
.en-about-copy h1 em { color: #a86640; font-style: normal; }
.en-about-copy > p { max-width: 570px; margin: 0; color: #5e6877; font-size: clamp(16px, 1.25vw, 18px); line-height: 1.85; }
.en-about-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.en-about-primary,.en-about-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 15px; min-height: 50px; padding: 0 20px; border-radius: 12px; font-size: 14px; font-weight: 750; transition: transform .18s ease, background .18s ease; }
.en-about-primary { color: #fffaf5; background: #14253b; box-shadow: 0 8px 20px rgba(20,37,59,.14); }
.en-about-primary:hover { transform: translateY(-2px); background: #203a58; }
.en-about-secondary { color: #283b50; border: 1px solid #d8c9bb; background: rgba(255,255,255,.42); }
.en-about-secondary:hover { transform: translateY(-2px); background: #fff; }
.en-about-disciplines { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 30px; color: #697484; font-size: 11px; font-weight: 700; letter-spacing: .045em; }
.en-about-disciplines i { width: 4px; height: 4px; border-radius: 50%; background: #bc8b68; }
.en-about-work { position: relative; min-width: 0; min-height: 500px; padding: 0; }
.en-about-work::before { content: ""; position: absolute; inset: 5% -5% 13% 9%; z-index: -1; border: 1px solid rgba(171,118,82,.2); border-radius: 28px; transform: rotate(3deg); }
.en-about-work-card { overflow: hidden; min-width: 0; border: 1px solid rgba(255,255,255,.8); border-radius: 18px; background: #fff; box-shadow: 0 18px 44px rgba(39,38,34,.13); }
.en-about-work-card-shidaneh { position: absolute; z-index: 2; top: 18px; right: 0; width: min(86%, 470px); transform: rotate(1.5deg); }
.en-about-work-card-hevix { position: absolute; z-index: 3; left: 0; bottom: 18px; width: min(68%, 360px); transform: rotate(-2deg); }
.en-about-work-card img { display: block; width: 100%; height: auto; aspect-ratio: 1672 / 941; object-fit: cover; }
.en-about-work-caption { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px 14px; }
.en-about-work-caption span { color: #9a7259; font: 800 9px/1.5 system-ui,sans-serif; letter-spacing: .13em; }
.en-about-work-caption h2 { margin: 3px 0 0; color: #17263b; font-size: 17px; line-height: 1.2; }
.en-about-work-caption a { display: grid; place-items: center; flex: 0 0 34px; width: 34px; height: 34px; border: 1px solid #e5d7cc; border-radius: 50%; color: #17263b; font-size: 18px; }
.en-about-work-caption a:hover { background: #f4e9df; }
.en-about-work-note { position: absolute; right: 2%; bottom: 0; display: inline-flex; align-items: center; gap: 8px; padding: 10px 13px; border: 1px solid rgba(230,220,210,.9); border-radius: 11px; color: #536072; background: rgba(255,253,250,.95); box-shadow: 0 8px 22px rgba(28,33,41,.08); font-size: 11px; font-weight: 700; }
.en-about-work-note span { color: #ad7049; }
@media(max-width: 960px) { .en-about-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(280px, .85fr); gap: 24px; min-height: 520px; padding: 32px; } .en-about-copy h1 { font-size: clamp(38px, 5.2vw, 53px); } .en-about-work { min-height: 440px; } .en-about-work-caption { padding: 10px 12px; } }
@media(max-width: 760px) { .en-about-hero { padding: 24px 0 42px; } .en-about-hero-grid { grid-template-columns: 1fr; gap: 30px; min-height: 0; padding: 28px 24px 34px; border-radius: 26px; } .en-about-copy h1 { max-width: 650px; font-size: clamp(40px, 9vw, 59px); } .en-about-copy > p { font-size: 16px; } .en-about-work { width: min(100%, 560px); min-height: clamp(400px, 78vw, 470px); margin-inline: auto; } .en-about-work-card-shidaneh { top: 10px; right: 0; left: auto; width: 92%; margin: 0; } .en-about-work-card-hevix { left: 0; right: auto; bottom: 18px; top: auto; width: 72%; margin: 0; } .en-about-work-note { right: 2%; bottom: -12px; } }
@media(max-width: 480px) { .en-about-hero-grid { padding: 24px 18px 30px; border-radius: 22px; } .en-about-eyebrow { font-size: 9px; } .en-about-copy h1 { font-size: clamp(36px, 10vw, 46px); } .en-about-actions { align-items: stretch; flex-direction: column; } .en-about-actions a { width: 100%; } .en-about-disciplines { gap: 7px; font-size: 9px; } .en-about-work { min-height: 345px; } .en-about-work-card-shidaneh { width: 94%; top: 6px; } .en-about-work-card-hevix { width: 74%; bottom: 20px; } .en-about-work-caption { padding: 10px 12px 11px; } .en-about-work-caption h2 { font-size: 15px; } .en-about-work-note { font-size: 10px; padding: 8px 10px; } }
@media(prefers-reduced-motion: reduce) { .en-about-primary,.en-about-secondary { transition: none; } }
</style>
