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
  sections: ContentSection[];
}>(), { heroImage: "", heroImageAlt: "" });
</script>

<template>
  <main id="main-content" class="en-content-page" tabindex="-1">
    <section class="en-content-hero">
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
        <div v-if="heroImage" class="en-content-hero-image">
          <img :src="heroImage" :alt="heroImageAlt" width="1100" height="720" decoding="async" loading="eager" />
        </div>
        <div v-else class="en-content-hero-art" aria-hidden="true">
          <span class="en-content-orbit one"></span>
          <span class="en-content-orbit two"></span>
          <span class="en-content-art-mark">SP<span>↗</span></span>
          <span class="en-content-art-tag">DESIGN · ENGINEERING · AI</span>
        </div>
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
.en-content-hero { padding: clamp(55px, 7vw, 100px) 0; color: #fff; background: radial-gradient(circle at 78% 22%, rgba(210,144,100,.18), transparent 40%), linear-gradient(125deg,#07111f,#172a43); }
.en-content-hero-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); align-items: center; gap: clamp(24px, 5vw, 70px); }
.en-content-hero h1 { max-width: 760px; font-size: clamp(34px, 4vw, 56px); line-height: 1.2; letter-spacing: -.035em; margin: 16px 0; }
.en-content-hero-copy > p { color: #cbd5e0; font-size: 17px; line-height: 1.85; max-width: 680px; }
.en-content-kicker { color: #c99066; font: 800 12px/1.5 system-ui,sans-serif; letter-spacing: .15em; }
.en-content-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 27px; align-items: center; }
.en-content-primary,.en-content-outline { display: inline-flex; justify-content: center; align-items: center; gap: 9px; border-radius: 12px; padding: 13px 21px; font-size: 14px; font-weight: 750; min-height: 48px; }
.en-content-primary { color: #112034; background: #d6a078; }
.en-content-outline { color: #fff; border: 1px solid rgba(255,255,255,.32); }
.en-content-hero-image { border-radius: 24px; overflow: hidden; aspect-ratio: 1659 / 948; background: #1b324d; box-shadow: 0 20px 60px rgba(0,0,0,.25); }
.en-content-hero-image img { width: 100%; height: 100%; display: block; object-fit: contain; }
.en-content-hero-art { position: relative; display: grid; place-items: center; min-height: 310px; border-radius: 28px; isolation: isolate; overflow: hidden; border: 1px solid rgba(255,255,255,.18); background: radial-gradient(circle at 40% 40%,rgba(189,117,75,.23),transparent 40%),linear-gradient(145deg,#1f3650,#0e1c2d); }
.en-content-orbit { position: absolute; border: 1px solid rgba(240,201,168,.26); border-radius: 50%; width: 330px; aspect-ratio: 1; }
.en-content-orbit.one { transform: translate(-80px,10px); }
.en-content-orbit.two { transform: translate(85px,65px) scale(.74); }
.en-content-art-mark { position: relative; z-index: 1; font: 800 clamp(58px,8vw,110px)/1 system-ui,sans-serif; letter-spacing: -.1em; color: #faf4ee; }
.en-content-art-mark span { font-size: .5em; color: #d6a078; letter-spacing: 0; }
.en-content-art-tag { position: absolute; bottom: 26px; left: 20px; right: 20px; z-index: 1; text-align: center; font: 700 10px/1.5 system-ui,sans-serif; letter-spacing: .21em; color: #d1ac8f; }
.en-content-section { padding: 76px 0 84px; background: #fffdfb; }
.en-content-muted { background: #f7f9fb; }
.en-content-section-heading { max-width: 810px; text-align: center; margin: 0 auto 32px; }
.en-content-section-heading h2 { margin: 13px auto; font-size: clamp(28px,3.4vw,41px); line-height: 1.25; letter-spacing: -.02em; }
.en-content-section-heading p { margin: 0 auto; color: #66748a; font-size: 16px; line-height: 1.85; }
.en-content-cards { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,260px),1fr)); gap: 19px; }
.en-content-card { min-width: 0; overflow: hidden; border-radius: 21px; border: 1px solid #e8ded7; background: #fff; box-shadow: 0 12px 31px rgba(16,28,50,.045); }
.en-content-card-copy { padding: 24px; }
.en-content-card h3 { font-size: 19px; line-height: 1.35; margin: 0 0 11px; }
.en-content-card p { margin: 0; color: #657186; font-size: 14.5px; line-height: 1.8; }
.en-content-card-link { display: inline-block; margin-top: 16px; color: #a75f35; font-weight: 800; font-size: 13px; }
.en-content-card-image { display: block; width: 100%; height: auto; aspect-ratio: 1.7; object-fit: cover; }
.en-content-cta { padding: 75px 0; background: #f5eae1; }
.en-content-cta-inner { text-align: center; max-width: 760px; }
.en-content-cta h2 { font-size: clamp(29px,3.7vw,42px); margin: 13px 0; }
.en-content-cta p { color: #5b6a7c; font-size: 16px; line-height: 1.8; }
.en-content-cta .en-content-primary { margin-top: 12px; }
@media(max-width:860px) {
 .en-content-hero-grid { grid-template-columns: 1fr; }
 .en-content-hero-art { min-height: 190px; }
 .en-content-hero h1 { font-size: clamp(32px,6vw,47px); }
 .en-content-section { padding: 54px 0; }
}
@media(max-width:560px) {
 .en-content-hero { padding: 45px 0 60px; }
 .en-content-hero-art { min-height: 165px; }
 .en-content-actions a { width: 100%; }
 .en-content-card-copy { padding: 20px; }
 .en-content-cta { padding: 60px 0; }
}
</style>
