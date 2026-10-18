<script setup lang="ts">
usePageSeo({
  title: "Custom Software & Applied AI Services | SmartPilot",
  description: "SmartPilot develops AI capabilities, custom platforms, online stores, smart search, technical SEO and integrated operational software.",
  path: "/en/services",
  locale: "en",
  image: "/images/en/smartpilot_digital_studio_showcase.webp",
});
const sections = [
  {
    "kicker": "AI THAT WORKS",
    "title": "Intelligent capabilities tied to real data",
    "description": "Not a decorative chatbot: useful AI should save time, reduce friction and support better decisions.",
    "items": [
      {
        "title": "AI advisors",
        "description": "Grounded support based on catalogs, documents and business rules.",
        "link": "/en/services/ai-development"
      },
      {
        "title": "Semantic search",
        "description": "Product and knowledge discovery beyond exact keyword matching.",
        "link": "/en/services/ai-development"
      },
      {
        "title": "Agent automation",
        "description": "Multi-step workflows with controlled tools and human oversight.",
        "link": "/en/services/ai-development"
      },
      {
        "title": "Decision support",
        "description": "Use operational data to produce valuable reports and insights."
      }
    ]
  },
  {
    "kicker": "ENGINEERING",
    "title": "Build, integrate and improve",
    "description": "Each service can stand alone or form part of a practical delivery plan.",
    "items": [
      {
        "title": "Custom platforms",
        "description": "Operational dashboards and specialized software built around your workflows."
      },
      {
        "title": "E-commerce development",
        "description": "Tailored shopping experiences, catalogs and conversion journeys.",
        "link": "/en/services/ecommerce-development"
      },
      {
        "title": "Technical SEO",
        "description": "Indexability, structured data, metadata and performance integrated in the product."
      },
      {
        "title": "Data preparation",
        "description": "Structure catalogs and prepare initial data imports."
      },
      {
        "title": "APIs and integrations",
        "description": "Connect systems and simplify operations."
      },
      {
        "title": "Continuous support",
        "description": "Monitoring, maintenance and iterative development after launch."
      }
    ]
  },
  {
    "kicker": "APPROACH",
    "title": "Start with the real problem",
    "description": "An existing product can often be improved without a costly rebuild.",
    "items": [
      {
        "title": "Discover",
        "description": "Clarify the goals, users and constraints."
      },
      {
        "title": "Architect and deliver",
        "description": "Build in testable increments."
      },
      {
        "title": "Measure and iterate",
        "description": "Use evidence to prioritize what comes next."
      }
    ]
  }
];

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"Services","path":"/en/services"}]);

</script>

<template>
  <EnContentPage
    kicker="SERVICES"
    title="Software, AI and digital products built for business"
    introduction="From intelligent search and automation to custom software, e-commerce and growth, we connect useful technology to real operations."
    :sections="sections"
  >
    <template #hero>
      <section class="en-services-hero" aria-labelledby="en-services-title">
        <div class="container en-services-hero-frame">
          <div class="en-services-hero-copy">
            <span class="en-services-eyebrow">SERVICES <span aria-hidden="true">/</span> PRODUCT ENGINEERING</span>
            <h1 id="en-services-title">Software, AI and digital products built for <em>business.</em></h1>
            <p>From intelligent search and automation to custom software, e-commerce and growth, we connect useful technology to real operations.</p>
            <div class="en-services-actions">
              <NuxtLink class="en-services-primary" to="/en/contact">Discuss your project <span aria-hidden="true">↗</span></NuxtLink>
              <NuxtLink class="en-services-secondary" to="/en/projects">Explore selected work <span aria-hidden="true">→</span></NuxtLink>
            </div>
            <div class="en-services-disciplines" aria-label="SmartPilot service areas">
              <span>Applied AI</span><i aria-hidden="true"></i>
              <span>Custom platforms</span><i aria-hidden="true"></i>
              <span>Technical SEO</span>
            </div>
          </div>
          <div class="en-services-visual" aria-label="Examples of SmartPilot service capabilities">
            <article class="en-service-visual-card en-service-visual-card-ai">
              <div class="en-service-card-head"><span>01 / INTELLIGENCE</span><b aria-hidden="true">AI</b></div>
              <h2>Intelligent search</h2>
              <p>Useful answers grounded in your business data.</p>
              <div class="en-service-card-signal" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
            </article>
            <article class="en-service-visual-card en-service-visual-card-platform">
              <div class="en-service-card-head"><span>02 / ENGINEERING</span><b aria-hidden="true">WEB</b></div>
              <h2>Custom platforms</h2>
              <p>Products shaped around real workflows.</p>
              <div class="en-service-card-footer"><span>DESIGN</span><i></i><span>BUILD</span><i></i><span>IMPROVE</span></div>
            </article>
            <article class="en-service-visual-card en-service-visual-card-growth">
              <div class="en-service-card-head"><span>03 / GROWTH</span><b aria-hidden="true">SEO</b></div>
              <h2>SEO &amp; performance</h2>
              <p>Findability and speed built into the product.</p>
            </article>
          </div>
        </div>
      </section>
    </template>
  </EnContentPage>
</template>

<style scoped>
.en-services-hero { position: relative; isolation: isolate; overflow: hidden; padding: 20px 0 58px; color: #14243a; background: #fffdfb; }
.en-services-hero::before { content: ""; position: absolute; z-index: 0; width: 56vw; max-width: 850px; aspect-ratio: 1; right: -12vw; top: -24%; border-radius: 50%; background: radial-gradient(circle, rgba(210,166,128,.2), rgba(210,166,128,0) 68%); pointer-events: none; }
.en-services-hero-frame { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(340px, .95fr); align-items: center; gap: clamp(30px, 4.2vw, 58px); min-height: 570px; padding: clamp(30px, 4.2vw, 54px); overflow: hidden; border: 1px solid rgba(226,211,199,.92); border-radius: 32px; background: radial-gradient(circle at 82% 18%, rgba(184,107,53,.11), transparent 27%), linear-gradient(135deg, rgba(255,255,255,.97), rgba(255,249,245,.95)); box-shadow: 0 24px 58px rgba(16,28,50,.08), inset 0 1px 0 rgba(255,255,255,.9); }
.en-services-hero-copy { max-width: 680px; }
.en-services-eyebrow { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 9px; color: #925b3b; font: 800 11px/1.6 system-ui, sans-serif; letter-spacing: .15em; }
.en-services-eyebrow > span { color: #c5a48b; }
.en-services-hero h1 { margin: 21px 0 22px; max-width: 680px; color: #12233a; font-size: clamp(42px, 5vw, 69px); line-height: 1.04; letter-spacing: -.055em; font-weight: 750; }
.en-services-hero h1 em { color: #a86640; font-style: normal; }
.en-services-hero-copy > p { max-width: 570px; margin: 0; color: #5e6877; font-size: clamp(16px, 1.25vw, 18px); line-height: 1.85; }
.en-services-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.en-services-primary,.en-services-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 15px; min-height: 50px; padding: 0 20px; border-radius: 12px; font-size: 14px; font-weight: 750; transition: transform .18s ease, background .18s ease; }
.en-services-primary { color: #fffaf5; background: #14253b; box-shadow: 0 8px 20px rgba(20,37,59,.14); }
.en-services-primary:hover { transform: translateY(-2px); background: #203a58; }
.en-services-secondary { color: #283b50; border: 1px solid #d8c9bb; background: rgba(255,255,255,.42); }
.en-services-secondary:hover { transform: translateY(-2px); background: #fff; }
.en-services-disciplines { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 30px; color: #697484; font-size: 11px; font-weight: 700; letter-spacing: .045em; }
.en-services-disciplines i { width: 4px; height: 4px; border-radius: 50%; background: #bc8b68; }
.en-services-visual { position: relative; min-width: 0; min-height: 480px; }
.en-services-visual::before { content: ""; position: absolute; inset: 5% -3% 13% 8%; border: 1px solid rgba(171,118,82,.2); border-radius: 28px; transform: rotate(3deg); pointer-events: none; }
.en-service-visual-card { position: absolute; z-index: 1; overflow: hidden; width: min(86%, 430px); padding: 21px 22px; border: 1px solid rgba(226,211,199,.95); border-radius: 18px; color: #17263b; background: rgba(255,255,255,.97); box-shadow: 0 18px 44px rgba(39,38,34,.13); }
.en-service-visual-card-ai { top: 3%; right: 0; transform: rotate(1.5deg); }
.en-service-visual-card-platform { left: 0; bottom: 13%; width: min(80%, 400px); z-index: 2; transform: rotate(-2deg); }
.en-service-visual-card-growth { right: 3%; bottom: 0; width: min(65%, 325px); z-index: 3; transform: rotate(1deg); }
.en-service-card-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: #9a7259; font: 800 9px/1.5 system-ui, sans-serif; letter-spacing: .13em; }
.en-service-card-head b { display: grid; place-items: center; flex: 0 0 36px; width: 36px; height: 36px; border-radius: 11px; color: #a86640; background: #f5eae0; font-size: 10px; letter-spacing: 0; }
.en-service-visual-card h2 { margin: 14px 0 5px; color: #17263b; font-size: clamp(17px, 1.6vw, 22px); line-height: 1.25; letter-spacing: -.025em; }
.en-service-visual-card p { margin: 0; color: #6a7585; font-size: 12px; line-height: 1.7; }
.en-service-card-signal { display: flex; align-items: end; gap: 5px; height: 22px; margin-top: 14px; }
.en-service-card-signal i { display: block; width: 22%; border-radius: 4px 4px 2px 2px; background: linear-gradient(180deg,#dfb08a,#f2e2d3); }
.en-service-card-signal i:nth-child(1) { height: 45%; }
.en-service-card-signal i:nth-child(2) { height: 78%; }
.en-service-card-signal i:nth-child(3) { height: 60%; }
.en-service-card-signal i:nth-child(4) { height: 100%; }
.en-service-card-footer { display: flex; align-items: center; flex-wrap: wrap; gap: 7px; margin-top: 15px; color: #9a7259; font: 800 8px/1.5 system-ui,sans-serif; letter-spacing: .08em; }
.en-service-card-footer i { width: 3px; height: 3px; border-radius: 50%; background: #bc8b68; }
@media(max-width: 960px) { .en-services-hero-frame { grid-template-columns: minmax(0, 1fr) minmax(280px, .85fr); gap: 24px; min-height: 520px; padding: 32px; } .en-services-hero h1 { font-size: clamp(38px, 5.2vw, 53px); } .en-services-visual { min-height: 440px; } .en-service-visual-card { padding: 18px; } }
@media(max-width: 760px) { .en-services-hero { padding: 24px 0 42px; } .en-services-hero-frame { grid-template-columns: 1fr; gap: 30px; min-height: 0; padding: 28px 24px 34px; border-radius: 26px; } .en-services-hero h1 { max-width: 650px; font-size: clamp(40px, 9vw, 59px); } .en-services-hero-copy > p { font-size: 16px; } .en-services-visual { width: min(100%, 560px); min-height: clamp(345px, 70vw, 420px); margin-inline: auto; } .en-service-visual-card-ai { top: 3%; right: 0; width: 90%; } .en-service-visual-card-platform { left: 0; bottom: 5%; width: 83%; } .en-service-visual-card-growth { right: 0; bottom: 0; width: 58%; } }
@media(max-width: 480px) { .en-services-hero-frame { padding: 24px 18px 30px; border-radius: 22px; } .en-services-eyebrow { font-size: 9px; } .en-services-hero h1 { font-size: clamp(36px, 10vw, 46px); } .en-services-actions { align-items: stretch; flex-direction: column; } .en-services-actions a { width: 100%; } .en-services-disciplines { gap: 7px; font-size: 9px; } .en-services-visual { min-height: 320px; } .en-service-visual-card { padding: 15px; } .en-service-visual-card h2 { font-size: 16px; } .en-service-visual-card p { font-size: 11px; } .en-service-visual-card-growth { display: none; } }
@media(prefers-reduced-motion: reduce) { .en-services-primary,.en-services-secondary { transition: none; } }
</style>
