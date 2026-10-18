<script setup lang="ts">
type ContentCard = {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  image?: string;
  imageAlt?: string;
};
type ContentSection = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  items?: ContentCard[];
};
withDefaults(defineProps<{
  kicker: string;
  title: string;
  introduction: string;
  heroImage?: string;
  heroImageAlt?: string;
  chips?: string[];
  /** "art" = orbit placeholder panel, "orbit" = animated capability orbit panel,
   *  "team" = founder cards panel built from the real team photos. */
  heroVariant?: "art" | "orbit" | "team";
  teamCards?: Array<{ name: string; role: string; image: string }>;
  /** Clickable overlays aligned with CTAs baked into heroImage (percent box, natural ratio). */
  heroHotspots?: Array<{ label: string; to: string; left: string; top: string; width: string; height: string }>;
  /** "stack" = artwork full-bleed on top, band below. "split" = copy left, clean cropped image right, full height. */
  heroLayout?: "stack" | "split";
  /** object-position for the split hero image (validated against the source composition). */
  heroPosition?: string;
  sections: ContentSection[];
}>(), { heroImage: "", heroImageAlt: "", chips: () => [], heroVariant: "art", teamCards: () => [], heroHotspots: () => [], heroLayout: "stack", heroPosition: "" });
</script>

<template>
  <main id="main-content" class="en-content-page" tabindex="-1">
    <!-- Artwork-led hero. Stack: full-bleed artwork on top, slim band below.
         Split: editorial copy left, clean cropped real image right at full height. -->
    <template v-if="heroImage">
      <section v-if="heroLayout === 'split'" class="en-split-hero">
        <div class="en-split-copy">
          <span class="en-content-kicker en-kicker-light">{{ kicker }}</span>
          <h1>{{ title }}</h1>
          <p>{{ introduction }}</p>
          <div class="en-content-actions en-split-actions">
            <NuxtLink class="en-content-primary" to="/en/contact">Discuss your project <span aria-hidden="true">→</span></NuxtLink>
            <NuxtLink class="en-content-outline en-outline-light" to="/en/projects">Explore our work</NuxtLink>
          </div>
        </div>
        <div class="en-split-art">
          <img :src="heroImage" :alt="heroImageAlt || title" width="1672" height="941" decoding="async" fetchpriority="high" :style="heroPosition ? { objectPosition: heroPosition } : undefined" />
          <span class="en-split-tag">LIVE PRODUCTS — SHIDANEH &amp; HEVIX</span>
        </div>
      </section>
      <template v-else>
        <div class="en-content-artwork">
          <img :src="heroImage" :alt="heroImageAlt || title" width="1672" height="941" decoding="async" fetchpriority="high" />
          <NuxtLink
            v-for="spot in heroHotspots"
            :key="spot.label"
            class="en-art-hotspot"
            :to="spot.to"
            :aria-label="spot.label"
            :style="{ left: spot.left, top: spot.top, width: spot.width, height: spot.height }"
          ></NuxtLink>
        </div>
        <section class="en-content-band">
          <div class="container en-band-inner">
            <span class="en-content-kicker en-kicker-light">{{ kicker }}</span>
            <h1>{{ title }}</h1>
            <p>{{ introduction }}</p>
            <div class="en-content-actions en-band-actions">
              <NuxtLink class="en-content-primary" to="/en/contact">Discuss your project <span aria-hidden="true">→</span></NuxtLink>
              <NuxtLink class="en-content-outline en-outline-light" to="/en/projects">Explore our work</NuxtLink>
            </div>
          </div>
        </section>
      </template>
    </template>

    <!-- Typographic hero for pages without dedicated artwork: brand panel
         with orbit rings and a chip row that carries real page highlights. -->
    <section v-else class="en-content-hero" :class="{ 'en-hero-orbit': heroVariant === 'orbit', 'en-hero-team': heroVariant === 'team' }">
      <div class="container en-content-hero-grid">
        <div class="en-content-hero-copy">
          <span class="en-content-kicker">{{ kicker }}</span>
          <h1>{{ title }}</h1>
          <p>{{ introduction }}</p>
          <div class="en-content-actions">
            <NuxtLink class="en-content-primary" to="/en/contact">Discuss your project <span aria-hidden="true">→</span></NuxtLink>
            <NuxtLink class="en-content-outline" to="/en/projects">Explore our work</NuxtLink>
          </div>
        </div>
        <div class="en-content-hero-art" aria-hidden="true">
          <template v-if="heroVariant === 'orbit'">
            <span class="en-orbit-ring one"></span>
            <span class="en-orbit-ring two"></span>
            <span class="en-orbit-core">SP<span>↗</span></span>
            <span class="en-orbit-node one"><i>✦</i>Semantic search</span>
            <span class="en-orbit-node two"><i>⌘</i>Custom platforms</span>
            <span class="en-orbit-node three"><i>◉</i>Technical SEO</span>
            <span class="en-orbit-node four"><i>⌁</i>AI agents</span>
            <span class="en-content-art-tag">AI · PLATFORMS · COMMERCE · SEO</span>
          </template>
          <template v-else-if="heroVariant === 'team'">
            <div
              v-for="(member, memberIndex) in teamCards"
              :key="member.name"
              class="en-team-card"
              :style="{ '--in': `${0.4 + memberIndex * 0.2}s` }"
            >
              <img :src="member.image" :alt="member.name" width="360" height="360" loading="lazy" decoding="async" />
              <strong>{{ member.name }}</strong>
              <span>{{ member.role }}</span>
            </div>
            <div class="en-team-card en-team-more" style="--in: 1s">
              <span class="en-team-plus" aria-hidden="true">+</span>
              <strong>Complementary specialists</strong>
              <span>UI/UX · infrastructure · SEO — as required</span>
            </div>
            <span class="en-content-art-tag">OWNERSHIP · ARCHITECTURE · AI</span>
          </template>
          <template v-else>
            <span class="en-content-orbit one"></span>
            <span class="en-content-orbit two"></span>
            <span class="en-content-art-mark">SP<span>↗</span></span>
            <span class="en-content-art-tag">DESIGN · ENGINEERING · AI</span>
          </template>
        </div>
      </div>
      <div v-if="chips?.length" class="container en-content-chips">
        <span v-for="chip in chips" :key="chip" class="en-content-chip">{{ chip }}</span>
      </div>
    </section>
    <section v-for="(section, sectionIndex) in sections" :id="section.id" :key="section.title" class="en-content-section" :class="{ 'en-content-muted': sectionIndex % 2 === 1 }">
      <div class="container">
        <header class="en-content-section-heading">
          <span v-if="section.kicker" class="en-content-kicker">{{ section.kicker }}</span>
          <h2>{{ section.title }}</h2>
          <p v-if="section.description">{{ section.description }}</p>
        </header>
        <div v-if="section.items?.length" class="en-content-cards">
          <article v-for="item in section.items" :key="item.title" class="en-content-card">
            <img v-if="item.image" class="en-content-card-image" :src="item.image" :alt="item.imageAlt || item.title" loading="lazy" decoding="async" />
            <div class="en-content-card-copy">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <NuxtLink v-if="item.link" :to="item.link" class="en-content-card-link">{{ item.linkText || 'Read more' }} <span aria-hidden="true">→</span></NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="en-content-cta">
      <div class="container en-content-cta-inner">
        <span class="en-content-kicker">START A CONVERSATION</span>
        <h2>Have a project or a problem worth solving?</h2>
        <p>Share your goals, current constraints and what a useful outcome would look like.</p>
        <NuxtLink class="en-content-primary" to="/en/contact">Contact SmartPilot <span aria-hidden="true">→</span></NuxtLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.en-content-page { direction: ltr; color: #101c32; }
.en-content-band { position: relative; padding: clamp(44px, 6vw, 80px) 0 clamp(34px, 4.5vw, 56px); background:
  radial-gradient(circle at 88% 0%, rgba(184,107,53,.07), transparent 30%),
  linear-gradient(180deg, #fdfaf6 0%, #f9f2ea 100%); overflow: hidden; }
.en-band-inner { position: relative; z-index: 1; max-width: 880px; margin-inline: auto; text-align: center; }
.en-band-inner h1 { margin: 16px 0 13px; color: #13283c; font-size: clamp(32px, 4.4vw, 52px); line-height: 1.18; letter-spacing: -.035em; }
.en-band-inner p { margin: 0; color: #5b6a7c; font-size: 17px; line-height: 1.85; max-width: 700px; margin-inline: auto; }
.en-band-actions { justify-content: center; }
.en-kicker-light { border-color: rgba(184,107,53,.4); background: rgba(255,255,255,.75); color: #ad6037; box-shadow: inset 0 1px 0 #fff; }
.en-outline-light { color: #13283c !important; border-color: rgba(19,40,60,.3) !important; }
.en-outline-light:hover { border-color: #b86b35 !important; background: #fff !important; }
.en-content-artwork { position: relative; width: 100%; line-height: 0; background: #f6ede3; box-shadow: inset 0 1px 0 rgba(255,255,255,.8); }
.en-art-hotspot { position: absolute; z-index: 2; display: block; border-radius: 14px; cursor: pointer; }
.en-art-hotspot::after { content: ""; position: absolute; inset: -9px; border: 1px solid rgba(150,87,46,.28); border-radius: 18px; opacity: 0; transition: opacity .22s ease; }
.en-art-hotspot:hover::after,
.en-art-hotspot:focus-visible::after { opacity: 1; background: rgba(255,255,255,.18); }
.en-art-hotspot:focus-visible { outline: 3px solid #96572e; outline-offset: 2px; }
@media(max-width:640px) { .en-art-hotspot { display: none; } }
.en-split-hero { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(0, .96fr); min-height: min(calc(100svh - 118px), 940px); background: linear-gradient(118deg, #fdfaf4 0%, #f8efe3 58%, #f3e3d0 100%); }
.en-split-copy { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 16px; padding: clamp(52px, 6.5vw, 92px) clamp(24px, 5vw, 80px); }
.en-split-copy h1 { margin: 0; color: #13283c; font-size: clamp(36px, 4.5vw, 58px); line-height: 1.14; letter-spacing: -.038em; }
.en-split-copy p { margin: 0; color: #5b6a7c; font-size: clamp(15.5px, 1.35vw, 18px); line-height: 1.85; max-width: 560px; }
.en-split-actions { margin-top: 12px; }
.en-split-art { position: relative; overflow: hidden; min-height: 340px; }
.en-split-art img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.en-split-art::before { content: ""; position: absolute; inset: 0; z-index: 1; background: linear-gradient(200deg, transparent 62%, rgba(11,23,38,.28) 100%); pointer-events: none; }
.en-split-tag { position: absolute; left: clamp(18px, 2.2vw, 30px); bottom: clamp(16px, 2vw, 24px); z-index: 2; padding: 9px 16px; border-radius: 999px; border: 1px solid rgba(214,160,120,.45); background: rgba(253,249,243,.88); color: #ad6037; font: 800 10.5px/1 system-ui,sans-serif; letter-spacing: .15em; backdrop-filter: blur(6px); box-shadow: 0 14px 32px rgba(14,28,45,.22); }
.en-content-artwork img { display: block; width: 100%; height: 100%; object-fit: contain; }
.en-content-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; position: relative; z-index: 1; margin-top: 26px; }
.en-content-chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 15px; border: 1px solid rgba(214,160,120,.4); border-radius: 999px; background: rgba(255,250,246,.08); color: #ecd6bf; font: 700 12.5px/1.6 system-ui,sans-serif; letter-spacing: .04em; }
.en-content-chip::before { content: ""; width: 6px; height: 6px; border-radius: 999px; background: linear-gradient(145deg,#e2b183,#c67f4d); box-shadow: 0 0 8px rgba(214,160,120,.5); }
@media(max-width:640px) { .en-content-band { padding: 40px 0 34px; } .en-band-inner p { font-size: 15.5px; } }
.en-content-hero { position: relative; padding: clamp(55px, 7vw, 100px) 0; color: #fff; background: radial-gradient(circle at 78% 22%, rgba(210,144,100,.18), transparent 40%), linear-gradient(125deg,#07111f,#172a43); overflow: hidden; }
.en-content-hero::before,
.en-content-hero::after { content: ""; position: absolute; border-radius: 50%; pointer-events: none; }
.en-content-hero::before { width: 420px; height: 420px; top: -190px; right: -110px; border: 1px solid rgba(233,177,128,.16); background: radial-gradient(circle, rgba(210,144,100,.10), transparent 68%); }
.en-content-hero::after { width: 300px; height: 300px; bottom: -150px; left: -70px; border: 1px solid rgba(255,255,255,.07); background: radial-gradient(circle, rgba(120,150,190,.10), transparent 66%); }
.en-content-hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); align-items: center; gap: clamp(24px, 5vw, 70px); }
.en-content-hero h1 { max-width: 760px; font-size: clamp(34px, 4vw, 56px); line-height: 1.2; letter-spacing: -.035em; margin: 16px 0; }
.en-content-hero-copy > p { color: #cbd5e0; font-size: 17px; line-height: 1.85; max-width: 680px; }
.en-content-kicker { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border: 1px solid rgba(214,160,120,.42); border-radius: 999px; background: rgba(255,246,239,.07); color: #d8a47b; font: 800 12px/1.5 system-ui,sans-serif; letter-spacing: .15em; }
.en-content-kicker::before { content: ""; width: 6px; height: 6px; flex: none; border-radius: 999px; background: linear-gradient(145deg,#e2b183,#c67f4d); box-shadow: 0 0 10px rgba(214,160,120,.55); }
.en-content-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 27px; align-items: center; }
.en-content-primary,.en-content-outline { display: inline-flex; justify-content: center; align-items: center; gap: 9px; border-radius: 12px; padding: 13px 21px; font-size: 14px; font-weight: 750; min-height: 48px; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease; }
.en-content-primary { color: #112034; background: linear-gradient(145deg,#e0b391,#d09c72); box-shadow: 0 10px 26px rgba(214,160,120,.24), inset 0 1px 0 rgba(255,255,255,.55); }
.en-content-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(214,160,120,.32), inset 0 1px 0 rgba(255,255,255,.6); }
.en-content-outline { color: #fff; border: 1px solid rgba(255,255,255,.32); }
.en-content-outline:hover { border-color: rgba(224,179,145,.6); background: rgba(255,255,255,.06); }
.en-content-hero-image { border-radius: 24px; overflow: hidden; aspect-ratio: 1672 / 941; background: #1b324d; box-shadow: 0 20px 60px rgba(0,0,0,.25), 0 0 0 1px rgba(214,160,120,.14); }
.en-content-hero-image img { width: 100%; height: 100%; display: block; object-fit: contain; }
.en-content-hero-art { position: relative; display: grid; place-items: center; min-height: 310px; border-radius: 28px; isolation: isolate; overflow: hidden; border: 1px solid rgba(255,255,255,.18); background: radial-gradient(circle at 40% 40%,rgba(189,117,75,.23),transparent 40%),linear-gradient(145deg,#1f3650,#0e1c2d); }
.en-hero-orbit .en-content-hero-art { min-height: 380px; background:
  radial-gradient(1px 1px at 18% 30%, rgba(255,240,225,.5), transparent 100%),
  radial-gradient(1px 1px at 74% 18%, rgba(255,240,225,.4), transparent 100%),
  radial-gradient(1.5px 1.5px at 60% 76%, rgba(255,240,225,.35), transparent 100%),
  radial-gradient(1px 1px at 30% 84%, rgba(255,240,225,.4), transparent 100%),
  radial-gradient(circle at 40% 40%, rgba(189,117,75,.23), transparent 42%),
  linear-gradient(145deg, #1f3650, #0b1929); }
.en-orbit-ring { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); border-radius: 50%; border: 1px solid rgba(240,201,168,.24); }
.en-orbit-ring.one { width: min(360px, 78%); aspect-ratio: 1; animation: en-orbit-fade 1s ease .15s both, en-ring-spin 26s linear 1.15s infinite; }
.en-orbit-ring.two { width: min(224px, 52%); aspect-ratio: 1; border-style: dashed; border-color: rgba(240,201,168,.18); animation: en-orbit-fade 1s ease .3s both, en-ring-spin 38s linear 1.3s infinite reverse; }
.en-orbit-ring.one::after { content: ""; position: absolute; top: -5px; left: 50%; width: 9px; height: 9px; border-radius: 999px; background: linear-gradient(145deg,#e2b183,#c67f4d); box-shadow: 0 0 12px rgba(214,160,120,.65); }
.en-orbit-ring.two::after { content: ""; position: absolute; bottom: 18px; left: 12px; width: 6px; height: 6px; border-radius: 999px; background: #d9a06f; box-shadow: 0 0 10px rgba(214,160,120,.55); }
.en-orbit-core { position: relative; z-index: 2; display: inline-flex; align-items: baseline; gap: 3px; padding: 19px 21px; border-radius: 22px; border: 1px solid rgba(214,160,120,.34); color: #faf4ee; font: 800 clamp(30px, 3vw, 42px)/1 system-ui,sans-serif; letter-spacing: -.08em; background: radial-gradient(circle at 30% 20%, rgba(214,160,120,.2), transparent 55%), rgba(10,24,40,.72); box-shadow: 0 0 42px rgba(214,160,120,.22), inset 0 1px 0 rgba(255,255,255,.1); backdrop-filter: blur(6px); }
.en-orbit-core::before { content: ""; position: absolute; z-index: -1; inset: -26px; border-radius: 999px; background: radial-gradient(circle, rgba(214,160,120,.3), transparent 62%); opacity: .4; animation: en-core-pulse 3.6s ease-in-out infinite; pointer-events: none; }
.en-orbit-core span { font-size: .52em; color: #d6a078; letter-spacing: 0; }
.en-orbit-node { position: absolute; z-index: 3; display: inline-flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 999px; border: 1px solid rgba(214,160,120,.36); background: rgba(255,246,239,.09); color: #f3e2d0; font: 700 12px/1.4 system-ui,sans-serif; letter-spacing: .02em; white-space: nowrap; backdrop-filter: blur(6px); box-shadow: 0 12px 28px rgba(2,10,20,.35); animation:
    en-orbit-in .55s cubic-bezier(.2,.7,.3,1.4) var(--in, .3s) both,
    en-node-float 6s ease-in-out calc(var(--in, .3s) + .9s) infinite; }
.en-orbit-node i { font-style: normal; color: #d9a06f; font-size: 13px; }
.en-orbit-node.one { --in: .35s; left: 5%; top: 13%; }
.en-orbit-node.two { --in: .55s; right: 3%; top: 26%; }
.en-orbit-node.three { --in: .75s; left: 9%; bottom: 17%; }
.en-orbit-node.four { --in: .95s; right: 7%; bottom: 9%; }
@keyframes en-orbit-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes en-ring-spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
@keyframes en-core-pulse { 0%, 100% { opacity: .28; transform: scale(.92); } 50% { opacity: .55; transform: scale(1.06); } }
@keyframes en-orbit-in { from { opacity: 0; transform: scale(.82) translateY(8px); } to { opacity: 1; transform: scale(1) translateY(0); } }
@keyframes en-node-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
.en-hero-orbit .en-content-art-tag { bottom: 16px; }
.en-hero-team .en-content-hero-art { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 16px; padding: 30px 26px 44px; min-height: 400px; }
.en-team-card { width: min(196px, 44%); padding: 12px 12px 16px; border-radius: 20px; border: 1px solid rgba(214,160,120,.34); background: rgba(255,246,239,.08); backdrop-filter: blur(6px); box-shadow: 0 14px 30px rgba(2,10,20,.35); animation:
    en-orbit-in .55s cubic-bezier(.2,.7,.3,1.4) var(--in, .4s) both,
    en-node-float 7s ease-in-out calc(var(--in, .4s) + .8s) infinite; }
.en-team-card img { display: block; width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 14px; }
.en-team-card strong { display: block; margin-top: 10px; color: #faf4ee; font: 800 15px/1.3 system-ui,sans-serif; letter-spacing: .01em; }
.en-team-card span { display: block; margin-top: 4px; color: #c9b6a2; font: 600 11.5px/1.45 system-ui,sans-serif; }
.en-team-more { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-style: dashed; background: rgba(255,246,239,.05); min-height: 170px; }
.en-team-plus { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 999px; background: #f3e2d0; color: #a8642f; font-size: 24px; font-weight: 800; margin-bottom: 8px; }
.en-content-orbit { position: absolute; border: 1px solid rgba(240,201,168,.26); border-radius: 50%; width: 330px; aspect-ratio: 1; }
.en-content-orbit.one { transform: translate(-80px,10px); }
.en-content-orbit.two { transform: translate(85px,65px) scale(.74); }
.en-content-art-mark { position: relative; z-index: 1; font: 800 clamp(58px,8vw,110px)/1 system-ui,sans-serif; letter-spacing: -.1em; color: #faf4ee; }
.en-content-art-mark span { font-size: .5em; color: #d6a078; letter-spacing: 0; }
.en-content-art-tag { position: absolute; bottom: 26px; left: 20px; right: 20px; z-index: 1; text-align: center; font: 700 10px/1.5 system-ui,sans-serif; letter-spacing: .21em; color: #d1ac8f; }
.en-content-section { position: relative; padding: 76px 0 84px; background: #fffdfb; }
.en-content-muted { background: #f7f9fb; }
.en-content-section-heading { max-width: 810px; text-align: center; margin: 0 auto 32px; }
.en-content-section-heading h2 { margin: 13px auto 9px; font-size: clamp(28px,3.4vw,41px); line-height: 1.25; letter-spacing: -.02em; }
.en-content-section-heading::after { content: ""; display: block; width: 74px; height: 2px; margin: 14px auto 0; border-radius: 999px; background: linear-gradient(90deg, transparent, rgba(184,107,53,.68), transparent); }
.en-content-section-heading p { margin: 0 auto; color: #66748a; font-size: 16px; line-height: 1.85; }
.en-content-cards { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,260px),1fr)); gap: 19px; }
.en-content-card { position: relative; min-width: 0; overflow: hidden; border-radius: 21px; border: 1px solid #e8ded7; background: radial-gradient(circle at 0% 0%, rgba(184,107,53,.06), transparent 30%), linear-gradient(150deg,#fff 0%,#fffaf6 100%); box-shadow: 0 12px 31px rgba(16,28,50,.045), inset 0 1px 0 rgba(255,255,255,.92); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
.en-content-card::before { content: ""; position: absolute; top: 0; right: 26px; left: 26px; height: 3px; border-radius: 0 0 999px 999px; background: linear-gradient(90deg, rgba(184,107,53,0), rgba(184,107,53,.5), rgba(184,107,53,0)); }
.en-content-card:hover { transform: translateY(-5px); border-color: rgba(184,107,53,.32); box-shadow: 0 22px 46px rgba(16,28,50,.09), inset 0 1px 0 rgba(255,255,255,.95); }
.en-content-card-copy { padding: 24px; position: relative; }
.en-content-card h3 { font-size: 19px; line-height: 1.35; margin: 0 0 11px; }
.en-content-card p { margin: 0; color: #657186; font-size: 14.5px; line-height: 1.8; }
.en-content-card-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; color: #a75f35; font-weight: 800; font-size: 13px; }
.en-content-card-link::after { content: "→"; font-size: 14px; transition: transform .2s ease; }
.en-content-card:hover .en-content-card-link::after { transform: translateX(3px); }
.en-content-card-image { display: block; width: 100%; height: auto; aspect-ratio: 1.7; object-fit: cover; }
.en-content-cta { position: relative; padding: 75px 0; overflow: hidden; color: #fff; background: radial-gradient(circle at 85% 12%, rgba(210,144,100,.2), transparent 40%), linear-gradient(140deg,#07111f,#152a45); }
.en-content-cta::before { content: ""; position: absolute; width: 340px; height: 340px; bottom: -170px; left: -90px; border-radius: 50%; border: 1px solid rgba(233,177,128,.14); background: radial-gradient(circle, rgba(210,144,100,.09), transparent 70%); pointer-events: none; }
.en-content-cta-inner { position: relative; z-index: 1; text-align: center; max-width: 760px; }
.en-content-cta h2 { font-size: clamp(29px,3.7vw,42px); margin: 13px 0; letter-spacing: -.02em; }
.en-content-cta p { color: #b9c5d4; font-size: 16px; line-height: 1.8; }
.en-content-cta .en-content-primary { margin-top: 16px; }
@media(max-width:860px) {
 .en-content-hero-grid { grid-template-columns: 1fr; }
 .en-content-hero-art { min-height: 190px; }
 .en-hero-orbit .en-content-hero-art { min-height: 300px; }
 .en-hero-orbit .en-orbit-node { font-size: 10.5px; padding: 6px 11px; gap: 5px; }
 .en-hero-orbit .en-orbit-core { padding: 14px 16px; font-size: 24px; }
 .en-hero-team .en-content-hero-art { gap: 12px; padding: 24px 18px 40px; }
 .en-team-card { width: min(45%, 196px); }
 .en-split-hero { grid-template-columns: 1fr; min-height: 0; }
 .en-split-art { order: -1; min-height: clamp(280px, 52vw, 420px); }
 .en-content-hero h1 { font-size: clamp(32px,6vw,47px); }
 .en-content-section { padding: 54px 0; }
}
@media(max-width:560px) {
 .en-content-hero { padding: 45px 0 60px; }
 .en-content-hero-art { min-height: 165px; }
 .en-hero-orbit .en-content-hero-art { min-height: 258px; }
 .en-hero-orbit .en-orbit-node { font-size: 9.5px; padding: 5px 9px; }
 .en-hero-team .en-content-hero-art { gap: 10px; }
 .en-split-art { min-height: 270px; }
 .en-split-copy { padding: 44px 22px 56px; }
 .en-content-actions a { width: 100%; }
 .en-content-card-copy { padding: 20px; }
 .en-content-cta { padding: 60px 0; }
}
</style>
