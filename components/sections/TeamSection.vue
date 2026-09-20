<template>
  <section class="section team-section seciton-padding">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">تیم ما</span>
        <h2>پشت هر نتیجه خوب، یک تیم خوب است</h2>
        <p>
          ما با ترکیب تخصص، تجربه و نگاه آینده‌نگر، زیرساخت محصولات ماندگار
          می‌سازیم.
        </p>
      </div>
      <div class="team-grid">
        <article class="team-card intro-card">
          <div class="team-icon">✦</div>
          <h3>پشت این محصولات...</h3>
          <p>
            ترکیبی از تجربه و تخصص، در کنار همکاری با متخصصان برای ساخت محصولات
            دیجیتال بهتر.
          </p>
          <strong
            >ما فقط توسعه‌دهنده نیستیم؛ همراه شما در مسیر رشد هستیم.</strong
          >
        </article>
        <article class="team-card member-card">
          <div class="member-layout">
            <div class="team-image-wrap">
              <img src="/images/team/zohreh.webp" alt="زهره کشاورز" />
            </div>
            <div class="member-content">
              <h3>زهره کشاورز</h3>
              <span class="job-title">معمار و توسعه‌دهنده</span>
              <div class="skills-list">
                <span>✓ تجربه کاربری و محصول</span
                ><span>✓ طراحی مسیر محصول</span
                ><span>✓ استراتژی رشد دیجیتال</span>
              </div>
              <span class="profile-link">مشاهده پروفایل</span>
            </div>
          </div>
        </article>
        <article class="team-card member-card">
          <div class="member-layout">
            <div class="team-image-wrap">
              <img src="/images/team/hossein.webp" alt="حسین کولانی" />
            </div>
            <div class="member-content">
              <h3>حسین کولانی</h3>
              <span class="job-title">معمار و توسعه‌دهنده</span>
              <div class="skills-list">
                <span>✓ معماری نرم‌افزار</span
                ><span>✓ هوش مصنوعی</span
                ><span>✓ توسعه سیستم‌های تخصصی</span>
              </div>
              <span class="profile-link">مشاهده پروفایل</span>
            </div>
          </div>
        </article>
        <article class="team-card specialists-card">
          <div class="team-icon">👥</div>
          <h3>شبکه متخصصان</h3>
          <p>
            برای پروژه‌های بزرگ‌تر، متخصصان موردنیاز را کنار هم قرار می‌دهیم.
          </p>
          <div class="specialties">
            <span>UI/UX</span><span>Frontend</span><span>Backend</span
            ><span>DevOps</span><span>SEO</span><span>AI</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped>
.seciton-padding {
  padding-bottom: 20px;
}
.section-header {
  text-align: center;
  margin-bottom: 28px;
}
.section-badge {
  display: inline-block;
  border: 1px solid #d86b4a;
  color: #d86b4a;
  border-radius: 999px;
  padding: 5px 20px;
}
.section-header h2 {
  font-size: 32px;
  margin: 16px 0;
}
.section-header p {
  color: #6c7588;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  direction: rtl;
}
.team-card {
  position: relative;
  overflow: hidden;
  min-height: 270px;
  padding: 20px;
  border: 1px solid rgba(226, 211, 199, 0.92);
  border-radius: 24px;
  background:
    radial-gradient(circle at 100% 0%, rgba(184, 107, 53, 0.07), transparent 32%),
    linear-gradient(150deg, #fff 0%, #fffaf6 100%);
  box-shadow:
    0 14px 34px rgba(16, 28, 50, 0.055),
    inset 0 1px 0 rgba(255, 255, 255, 0.94);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
}
.team-card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 24px;
  left: 24px;
  height: 3px;
  border-radius: 0 0 999px 999px;
  background: linear-gradient(90deg, transparent, rgba(184, 107, 53, 0.48), transparent);
}
.team-card:hover {
  transform: translateY(-5px);
  border-color: rgba(184, 107, 53, 0.28);
  box-shadow:
    0 22px 46px rgba(16, 28, 50, 0.085),
    inset 0 1px 0 rgba(255, 255, 255, 0.96);
}
.team-icon {
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border: 1px solid rgba(184, 107, 53, 0.18);
  border-radius: 15px;
  background: linear-gradient(145deg, #fff8f3, #f2ded0);
  color: #a75c32;
  box-shadow:
    inset 0 1px 0 #fff,
    0 8px 18px rgba(184, 107, 53, 0.07);
}

.intro-card {
  border-color: rgba(184, 107, 53, 0.28);
  background:
    radial-gradient(circle at 50% 0%, rgba(184, 107, 53, 0.11), transparent 36%),
    linear-gradient(150deg, #fffaf6 0%, #fff 100%);
  text-align: center;
}

.specialists-card {
  background:
    radial-gradient(circle at 50% 0%, rgba(112, 136, 164, 0.08), transparent 35%),
    linear-gradient(150deg, #fff 0%, #f8fafc 100%);
  text-align: center;
}

.intro-card .team-icon,
.specialists-card .team-icon {
  margin-left: auto;
  margin-right: auto;
}
.team-card h3 {
  font-size: 20px;
  margin: 4px 0 6px;
}
.team-card p {
  font-size: 14px;
  line-height: 1.8;
  color: #6c7588;
}
.intro-card strong {
  display: block;
  color: #d86b4a;
  line-height: 1.8;
  margin-top: 12px;
}
.member-card {
  padding: 24px 20px 20px;
  background:
    radial-gradient(circle at 50% 18%, rgba(184, 107, 53, 0.09), transparent 31%),
    linear-gradient(160deg, #fff 0%, #fffaf7 100%);
}

.member-card:nth-child(3) {
  background:
    radial-gradient(circle at 50% 18%, rgba(112, 136, 164, 0.09), transparent 31%),
    linear-gradient(160deg, #fff 0%, #f9fbfd 100%);
}

.member-layout {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
}

.member-content {
  display: flex;
  width: 100%;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
}

.team-image-wrap {
  position: relative;
  display: flex;
  width: 128px;
  height: 128px;
  flex: none;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(221, 204, 191, 0.96);
  border-radius: 30px;
  background: #f8f3ef;
  box-shadow:
    0 16px 30px rgba(16, 28, 50, 0.09),
    0 0 0 7px rgba(255, 255, 255, 0.68);
}

.member-card:nth-child(3) .team-image-wrap {
  border-color: rgba(190, 204, 218, 0.96);
}

.team-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-content h3 {
  margin: 0 0 6px;
  color: #101c32;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.job-title {
  display: inline-flex;
  margin: 0;
  padding: 5px 11px;
  border: 1px solid rgba(189, 116, 72, 0.14);
  border-radius: 999px;
  background: rgba(255, 243, 237, 0.88);
  color: #bd7448 !important;
  font-size: 11px;
  font-weight: 700;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  width: 100%;
  margin: 13px 0 12px;
  padding: 0;
  list-style: none;
}

.skills-list span {
  padding: 5px 9px;
  border: 1px solid rgba(232, 221, 213, 0.92);
  border-radius: 999px;
  background: rgba(250, 247, 244, 0.88);
  color: #667085;
  font-size: 10.5px;
  line-height: 1.4;
}

.profile-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: auto;
  padding-top: 11px;
  color: #0f2240;
  font-size: 11px;
  font-weight: 700;
}

.profile-link::after {
  content: "←";
  color: #b86b35;
  font-size: 13px;
}
.specialties {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.specialties span {
  padding: 5px 10px;
  border: 1px solid rgba(189, 116, 72, 0.14);
  border-radius: 999px;
  background: rgba(255, 243, 237, 0.8);
  color: #a9653d;
  font-size: 10.5px;
  font-weight: 700;
}
@media (max-width: 1023px) {
  .team-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 767px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  .member-card {
    min-height: 0;
    padding: 22px 18px 18px;
  }

  .member-layout {
    gap: 13px;
  }

  .team-image-wrap {
    width: 118px;
    height: 118px;
    border-radius: 26px;
  }

  .member-content h3 {
    font-size: 18px;
  }

  .skills-list {
    gap: 5px;
    margin: 11px 0 10px;
  }

  .skills-list span {
    font-size: 10.5px;
    padding: 4px 8px;
  }
  .section-header h2 {
    font-size: 26px;
  }
}
</style>
