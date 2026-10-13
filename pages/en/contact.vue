<script setup lang="ts">
import { reactive, ref } from "vue";

usePageSeo({
  title: "Contact SmartPilot | Discuss Your Digital Product",
  description: "Contact SmartPilot to discuss custom software, applied AI, e-commerce, intelligent search or improving an existing digital product.",
  path: "/en/contact",
  locale: "en",
  image: "/images/og/nexastudio-og.webp",
});

const brief = reactive({
  fullName: "",
  contactWay: "",
  businessName: "",
  projectType: "",
  message: "",
});
const errors = reactive({
  fullName: "",
  contactWay: "",
  projectType: "",
  message: "",
});
const status = ref("Your details are not stored on the site. Submitting opens a prefilled WhatsApp message.");

const validate = () => {
  errors.fullName = brief.fullName.trim() ? "" : "Please enter your full name.";
  errors.contactWay = brief.contactWay.trim() ? "" : "Please enter an email address or phone number.";
  errors.projectType = brief.projectType ? "" : "Please select a project type.";
  errors.message = brief.message.trim() ? "" : "Please describe your project or goal.";
  return !Object.values(errors).some(Boolean);
};

const submitProjectBrief = () => {
  if (!validate()) {
    status.value = "Please correct the required fields below.";
    return;
  }
  const lines = [
    "Hello, I'd like to discuss a project with SmartPilot.",
    "",
    `Name: ${brief.fullName.trim()}`,
    `Contact: ${brief.contactWay.trim()}`,
    brief.businessName.trim() ? `Business: ${brief.businessName.trim()}` : null,
    `Project type: ${brief.projectType}`,
    "",
    "Problem / objective:",
    brief.message.trim(),
  ].filter(Boolean);
  const url = `https://wa.me/989379407868?text=${encodeURIComponent(lines.join("\n"))}`;
  if (import.meta.client) {
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    // Some browsers return null with noopener even when the tab was opened.
    status.value = "If WhatsApp did not open, please allow pop-ups and try again.";
  }
};

useBreadcrumbSchema([{"name":"Home","path":"/en"},{"name":"Contact","path":"/en/contact"}]);

</script>

<template>
  <main id="main-content" class="en-contact-page" tabindex="-1">
    <section class="en-contact-hero">
      <div class="container">
        <span class="en-label">LET'S TALK</span>
        <h1>Let's make your next product useful.</h1>
        <p>Planning a new platform, improving an existing product or exploring an AI use case? Share the challenge and we can discuss a sensible next step.</p>
      </div>
    </section>

    <section class="container en-contact-channels" aria-labelledby="contact-channels-title">
      <div class="en-heading">
        <span class="en-label">DIRECT CONTACT</span>
        <h2 id="contact-channels-title">Choose the channel that works for you</h2>
      </div>
      <div class="en-contact-grid">
        <a href="tel:+989379407868" class="en-contact-card">
          <span aria-hidden="true">☎</span>
          <strong>Phone</strong>
          <span dir="ltr">+98 937 940 7868</span>
        </a>
        <a href="https://wa.me/989379407868" target="_blank" rel="noopener noreferrer" class="en-contact-card">
          <span aria-hidden="true">✉</span>
          <strong>WhatsApp</strong>
          <span>Start a conversation</span>
        </a>
        <a href="mailto:zhr.keshavarz@gmail.com" class="en-contact-card">
          <span aria-hidden="true">@</span>
          <strong>Email</strong>
          <span>zhr.keshavarz@gmail.com</span>
        </a>
      </div>
    </section>

    <section class="en-contact-form-section">
      <div class="container en-contact-form-grid">
        <div class="en-form-wrap">
          <span class="en-label">PROJECT BRIEF</span>
          <h2>A few details are enough to get started</h2>
          <p class="en-form-intro">Your answers are used only to prepare a WhatsApp message. There is no account, backend submission or database storage.</p>
          <form class="en-project-form" novalidate @submit.prevent="submitProjectBrief" aria-describedby="form-status">
            <div class="en-form-row">
              <div class="en-field">
                <label for="en-full-name">Full name <span aria-hidden="true">*</span></label>
                <input id="en-full-name" v-model.trim="brief.fullName" name="full-name" type="text" autocomplete="name" required placeholder="Your name" :aria-invalid="!!errors.fullName" aria-describedby="en-full-name-error" />
                <small id="en-full-name-error" class="en-field-error" role="alert">{{ errors.fullName }}</small>
              </div>
              <div class="en-field">
                <label for="en-contact-way">Contact details <span aria-hidden="true">*</span></label>
                <input id="en-contact-way" v-model.trim="brief.contactWay" name="contact-way" type="text" required placeholder="Email or phone number" :aria-invalid="!!errors.contactWay" aria-describedby="en-contact-way-error" />
                <small id="en-contact-way-error" class="en-field-error" role="alert">{{ errors.contactWay }}</small>
              </div>
            </div>
            <div class="en-form-row">
              <div class="en-field">
                <label for="en-business-name">Business name (optional)</label>
                <input id="en-business-name" v-model.trim="brief.businessName" name="business-name" type="text" autocomplete="organization" placeholder="Company or brand" />
              </div>
              <div class="en-field">
                <label for="en-project-type">Project type <span aria-hidden="true">*</span></label>
                <select id="en-project-type" v-model="brief.projectType" name="project-type" required :aria-invalid="!!errors.projectType" aria-describedby="en-project-type-error">
                  <option value="">Select a project type</option>
                  <option>Website or online store</option>
                  <option>Custom software platform</option>
                  <option>Artificial intelligence</option>
                  <option>SEO and organic growth</option>
                  <option>Improving an existing product</option>
                  <option>Maintenance and ongoing development</option>
                  <option>Other</option>
                </select>
                <small id="en-project-type-error" class="en-field-error" role="alert">{{ errors.projectType }}</small>
              </div>
            </div>
            <div class="en-field">
              <label for="en-message">Your problem or goal <span aria-hidden="true">*</span></label>
              <textarea id="en-message" v-model.trim="brief.message" name="message" rows="6" required placeholder="What would you like to build or improve?" :aria-invalid="!!errors.message" aria-describedby="en-message-error"></textarea>
              <small id="en-message-error" class="en-field-error" role="alert">{{ errors.message }}</small>
            </div>
            <div class="en-form-actions">
              <button type="submit">Continue in WhatsApp <span aria-hidden="true">→</span></button>
              <p id="form-status" role="status">{{ status }}</p>
            </div>
          </form>
        </div>
        <aside class="en-contact-guide">
          <span class="en-label">A HELPFUL BRIEF</span>
          <h2>What should you share?</h2>
          <ul>
            <li><strong>Current situation</strong><span>What exists today—an idea, website or working product?</span></li>
            <li><strong>Main challenge</strong><span>What is slow, costly or not working?</span></li>
            <li><strong>Expected result</strong><span>What should improve after this work?</span></li>
            <li><strong>Important constraints</strong><span>Timeline, budget, integrations, data or team capacity?</span></li>
          </ul>
          <p>You do not need a formal specification. A clear description is enough for an initial conversation.</p>
        </aside>
      </div>
    </section>

    <section class="container en-contact-next">
      <span class="en-label">NEXT STEPS</span>
      <h2>How a collaboration begins</h2>
      <div class="en-contact-grid">
        <article v-for="step in [
          ['01','Initial review','We review the problem and your current situation.'],
          ['02','Short conversation','We clarify goals, important uncertainties and constraints.'],
          ['03','Suggested direction','We suggest a sensible scope and priorities.'],
          ['04','Phased delivery','After agreement, design and development start incrementally.']
        ]" :key="step[0]" class="en-contact-step">
          <span>{{ step[0] }}</span><h3>{{ step[1] }}</h3><p>{{ step[2] }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.en-contact-page { direction: ltr; color: #101c32; }
.en-contact-hero { padding: clamp(70px,9vw,135px) 0; color: white; background: radial-gradient(circle at 80% 15%,rgba(208,142,89,.22),transparent 40%),linear-gradient(125deg,#07111f,#1b314e); }
.en-contact-hero h1 { font-size: clamp(36px,5vw,60px); letter-spacing: -.035em; margin: 16px 0; line-height: 1.18; max-width: 800px; }
.en-contact-hero p { max-width: 730px; color: #cbd5e0; font-size: 18px; line-height: 1.8; }
.en-label { display: inline-block; color: #b57547; letter-spacing: .14em; font: 800 12px/1.5 system-ui,sans-serif; }
.en-contact-channels,.en-contact-next { padding-top: 75px; padding-bottom: 80px; }
.en-heading { text-align: center; margin-bottom: 28px; }
.en-heading h2,.en-contact-next h2 { font-size: clamp(28px,3.4vw,40px); margin: 12px 0 24px; }
.en-contact-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,230px),1fr)); gap: 18px; }
.en-contact-card,.en-contact-step { display: flex; flex-direction: column; gap: 10px; padding: 24px; border: 1px solid #e6dcd4; border-radius: 19px; background: white; box-shadow: 0 10px 26px rgba(16,28,50,.045); min-width: 0; overflow-wrap: anywhere; }
.en-contact-card > span:first-child { font-size: 27px; color: #ad633a; }
.en-contact-card strong { font-size: 18px; }
.en-contact-card > span:last-child { color: #647186; font-size: 14px; }
.en-contact-form-section { padding: 75px 0; background: #f7f9fb; }
.en-contact-form-grid { display: grid; grid-template-columns: minmax(0,1.6fr) minmax(260px,.8fr); align-items: start; gap: 34px; }
.en-form-wrap,.en-contact-guide { padding: 28px; background: #fff; border: 1px solid #e8ded7; border-radius: 23px; min-width: 0; }
.en-form-wrap h2,.en-contact-guide h2 { font-size: clamp(25px,3vw,34px); line-height: 1.3; margin: 10px 0; }
.en-form-intro { color: #687487; line-height: 1.75; }
.en-project-form { margin-top: 26px; display: grid; gap: 15px; }
.en-form-row { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 15px; }
.en-field { min-width: 0; display: flex; flex-direction: column; gap: 6px; }
.en-field label { font-weight: 700; font-size: 14px; }
.en-field input,.en-field select,.en-field textarea { width: 100%; font: inherit; color: #18263b; padding: 12px 14px; border: 1px solid #d3d9df; border-radius: 12px; background: #fff; }
.en-field [aria-invalid="true"] { border-color: #c43b3b; }
.en-field-error { min-height: 16px; font-size: 12px; color: #b12e2e; }
.en-form-actions { display: flex; align-items: flex-start; gap: 16px; flex-wrap: wrap; }
.en-form-actions button { border: none; background: #12253e; color: white; padding: 13px 20px; min-height: 48px; border-radius: 12px; cursor: pointer; font: 700 14px/1.5 inherit; }
.en-form-actions p { color: #667185; line-height: 1.7; font-size: 13px; margin: 0; flex: 1; }
.en-contact-guide ul { padding: 0; list-style: none; }
.en-contact-guide li { display: flex; flex-direction: column; gap: 5px; margin: 19px 0; }
.en-contact-guide li span,.en-contact-guide > p { color: #687487; line-height: 1.7; font-size: 14px; }
.en-contact-next > h2 { margin-bottom: 32px; }
.en-contact-step > span { color: #ad633a; font-weight: 800; }
.en-contact-step h3 { margin: 0; font-size: 19px; }
.en-contact-step p { color: #667185; line-height: 1.75; margin: 0; }
@media(max-width:820px) { .en-contact-form-grid { grid-template-columns: 1fr; } .en-contact-channels,.en-contact-next,.en-contact-form-section { padding-top: 50px; padding-bottom: 55px; } }
@media(max-width:570px) { .en-form-row { grid-template-columns: 1fr; } .en-form-wrap,.en-contact-guide { padding: 19px; } .en-contact-hero { padding: 65px 0; } .en-contact-hero p { font-size: 16px; } }
</style>
