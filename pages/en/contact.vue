<script setup lang="ts">
import { reactive, ref } from "vue";

usePageSeo({
  title: "Contact SmartPilot | Discuss Your Digital Product",
  description: "Contact SmartPilot to discuss custom software, applied AI, e-commerce, intelligent search or improving an existing digital product.",
  path: "/en/contact",
  locale: "en",
  image: "/images/en/smartpilot_digital_studio_showcase.webp",
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
    <section class="en-contact-hero" aria-labelledby="en-contact-title">
      <div class="container en-contact-hero-grid">
        <div class="en-contact-hero-copy">
          <div class="en-contact-hero-meta">
            <span class="en-label">CONTACT SMARTPILOT</span>
            <span class="en-contact-open"><i aria-hidden="true"></i> Project enquiries welcome</span>
          </div>
          <h1 id="en-contact-title">Let's turn your next challenge into a <em>clear plan.</em></h1>
          <p>Tell us what you want to build, improve or make more effective. We’ll help you find a practical place to start.</p>
          <div class="en-contact-hero-actions">
            <a class="en-contact-hero-primary" href="#project-brief">Tell us about your project <span aria-hidden="true">↘</span></a>
            <a class="en-contact-hero-secondary" href="mailto:zhr.keshavarz@gmail.com">Email us directly <span aria-hidden="true">↗</span></a>
          </div>
          <div class="en-contact-hero-note"><span aria-hidden="true">↳</span> A clear outline is enough to get started.</div>
        </div>

        <aside class="en-contact-hero-panel" aria-label="Direct contact options">
          <div class="en-contact-panel-top"><span>DIRECT CONTACT</span><span>YOUR WAY</span></div>
          <h2>Prefer to reach us directly?</h2>
          <p>Choose the channel that works best for you.</p>
          <a href="mailto:zhr.keshavarz@gmail.com" class="en-contact-method">
            <span class="en-contact-method-number">01</span>
            <span class="en-contact-method-copy"><strong>Email</strong><small>zhr.keshavarz@gmail.com</small></span>
            <span class="en-contact-method-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="https://wa.me/989379407868" target="_blank" rel="noopener noreferrer" class="en-contact-method">
            <span class="en-contact-method-number">02</span>
            <span class="en-contact-method-copy"><strong>WhatsApp</strong><small>Start a conversation</small></span>
            <span class="en-contact-method-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="tel:+989379407868" class="en-contact-method">
            <span class="en-contact-method-number">03</span>
            <span class="en-contact-method-copy"><strong>Phone</strong><small dir="ltr">+98 937 940 7868</small></span>
            <span class="en-contact-method-arrow" aria-hidden="true">↗</span>
          </a>
          <div class="en-contact-panel-foot"><span aria-hidden="true">✳</span> We usually reply within one business day.</div>
        </aside>
      </div>
    </section>

    <section id="project-brief" class="en-contact-form-section" aria-labelledby="en-project-brief-title">
      <div class="container en-contact-form-grid">
        <div class="en-form-wrap">
          <span class="en-label">PROJECT BRIEF</span>
          <h2 id="en-project-brief-title">A few details are enough to get started</h2>
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
.en-contact-hero { position: relative; isolation: isolate; overflow: hidden; padding: clamp(66px,8vw,112px) 0; color: #f8f6f2; background: #0a1727; }
.en-contact-hero::before { content: ""; position: absolute; inset: 0; z-index: -1; background: radial-gradient(ellipse at 86% 4%,rgba(192,126,79,.25),transparent 36%),radial-gradient(ellipse at 4% 100%,rgba(52,94,129,.23),transparent 42%),linear-gradient(120deg,#081321,#172b43); pointer-events: none; }
.en-contact-hero-grid { display: grid; grid-template-columns: minmax(0,1.06fr) minmax(340px,.78fr); align-items: center; gap: clamp(35px,6vw,88px); }
.en-contact-hero-copy { max-width: 700px; }
.en-contact-hero-meta { display: flex; align-items: center; flex-wrap: wrap; gap: 15px; }
.en-contact-hero .en-label { color: #e3b48d; letter-spacing: .16em; }
.en-contact-open { display: inline-flex; align-items: center; gap: 8px; color: #b8c6d4; font-size: 11px; font-weight: 650; }
.en-contact-open i { width: 7px; height: 7px; border-radius: 50%; background: #82c5a1; box-shadow: 0 0 0 4px rgba(130,197,161,.12); }
.en-contact-hero h1 { max-width: 700px; margin: 23px 0 20px; color: #fffaf4; font-size: clamp(43px,5.1vw,70px); letter-spacing: -.055em; line-height: 1.04; font-weight: 750; }
.en-contact-hero h1 em { color: #e0aa7f; font-style: normal; }
.en-contact-hero-copy > p { max-width: 590px; margin: 0; color: #c4ced8; font-size: clamp(16px,1.35vw,18px); line-height: 1.85; }
.en-contact-hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.en-contact-hero-primary,.en-contact-hero-secondary { display: inline-flex; align-items: center; justify-content: center; gap: 15px; min-height: 50px; padding: 0 19px; border-radius: 12px; font-size: 13px; font-weight: 750; transition: transform .18s ease, background .18s ease; }
.en-contact-hero-primary { color: #162337; background: #e4b28a; box-shadow: 0 10px 25px rgba(0,0,0,.16); }
.en-contact-hero-primary:hover { transform: translateY(-2px); background: #f0c49f; }
.en-contact-hero-secondary { color: #f6f3ef; border: 1px solid rgba(220,230,239,.3); background: rgba(255,255,255,.035); }
.en-contact-hero-secondary:hover { transform: translateY(-2px); background: rgba(255,255,255,.09); }
.en-contact-hero-note { display: flex; align-items: center; gap: 9px; margin-top: 23px; color: #aab7c5; font-size: 12px; }
.en-contact-hero-note span { color: #e2ae84; font-size: 18px; }
.en-contact-hero-panel { position: relative; min-width: 0; padding: clamp(23px,2.7vw,34px); border: 1px solid rgba(255,255,255,.72); border-radius: 23px; color: #17263b; background: rgba(255,253,249,.98); box-shadow: 0 30px 75px rgba(0,0,0,.24); }
.en-contact-panel-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; color: #a36d4a; font: 800 10px/1.5 system-ui,sans-serif; letter-spacing: .14em; }
.en-contact-panel-top span:last-child { color: #8a94a0; }
.en-contact-hero-panel h2 { margin: 18px 0 8px; font-size: clamp(23px,2.3vw,30px); line-height: 1.22; letter-spacing: -.035em; }
.en-contact-hero-panel > p { margin: 0 0 20px; color: #6a7585; font-size: 13px; line-height: 1.7; }
.en-contact-method { display: flex; align-items: center; gap: 13px; min-width: 0; padding: 15px 0; border-top: 1px solid #e9e2db; }
.en-contact-method-number { display: grid; place-items: center; flex: 0 0 35px; width: 35px; height: 35px; border-radius: 10px; color: #a76b45; background: #f5eae0; font: 800 11px/1 system-ui,sans-serif; }
.en-contact-method-copy { display: flex; flex-direction: column; min-width: 0; gap: 4px; flex: 1; }
.en-contact-method-copy strong { color: #1a2b40; font-size: 14px; }
.en-contact-method-copy small { color: #6d7887; font-size: 12px; overflow-wrap: anywhere; }
.en-contact-method-arrow { color: #9a6b4a; font-size: 17px; transition: transform .18s ease; }
.en-contact-method:hover .en-contact-method-arrow { transform: translate(2px,-2px); }
.en-contact-panel-foot { display: flex; align-items: center; gap: 9px; margin-top: 11px; padding-top: 15px; border-top: 1px solid #e9e2db; color: #6c7784; font-size: 11px; line-height: 1.6; }
.en-contact-panel-foot span { color: #a86b43; }
.en-contact-next { padding-top: 75px; padding-bottom: 80px; }
.en-contact-next h2 { font-size: clamp(28px,3.4vw,40px); margin: 12px 0 24px; }
.en-contact-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,230px),1fr)); gap: 18px; }
.en-contact-step { display: flex; flex-direction: column; gap: 10px; padding: 24px; border: 1px solid #e6dcd4; border-radius: 19px; background: white; box-shadow: 0 10px 26px rgba(16,28,50,.045); min-width: 0; overflow-wrap: anywhere; }
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
@media(max-width:900px) { .en-contact-hero-grid { grid-template-columns: minmax(0,1fr) minmax(300px,.85fr); gap: 26px; } .en-contact-hero h1 { font-size: clamp(39px,5vw,54px); } .en-contact-hero-panel { padding: 22px; } }
@media(max-width:760px) { .en-contact-hero { padding: 54px 0 62px; } .en-contact-hero-grid { grid-template-columns: 1fr; gap: 36px; } .en-contact-hero h1 { max-width: 640px; font-size: clamp(42px,8.5vw,59px); } .en-contact-hero-copy > p { font-size: 16px; } .en-contact-hero-panel { width: min(100%,560px); margin-inline: auto; } .en-contact-form-grid { grid-template-columns: 1fr; } .en-contact-next,.en-contact-form-section { padding-top: 50px; padding-bottom: 55px; } }
@media(max-width:570px) { .en-form-row { grid-template-columns: 1fr; } .en-form-wrap,.en-contact-guide { padding: 19px; } .en-contact-hero-meta { align-items: flex-start; flex-direction: column; gap: 9px; } .en-contact-hero h1 { font-size: clamp(37px,10vw,48px); } .en-contact-hero-actions { align-items: stretch; flex-direction: column; } .en-contact-hero-actions a { width: 100%; } .en-contact-hero-panel { padding: 20px; } } 
@media(prefers-reduced-motion: reduce) { .en-contact-hero-primary,.en-contact-hero-secondary,.en-contact-method-arrow { transition: none; } }
</style>
