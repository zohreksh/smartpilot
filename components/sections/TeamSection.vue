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
.member-layout {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.member-content {
  padding-top: 0;
}
.team-image-wrap {
  display: flex;
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(226, 211, 199, 0.9);
  border-radius: 20px;
  background: #f8f3ef;
  box-shadow: 0 10px 24px rgba(16, 28, 50, 0.07);
}
.team-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.job-title {
  display: inline-flex;
  margin: 0 0 6px;
  padding: 4px 10px;
  border: 1px solid rgba(189, 116, 72, 0.14);
  border-radius: 999px;
  background: rgba(255, 243, 237, 0.86);
  color: #bd7448 !important;
  font-size: 11.5px;
  font-weight: 700;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  padding: 0;
  margin: 8px 0;
}
.skills-list span {
  padding: 4px 9px;
  border: 1px solid rgba(232, 221, 213, 0.92);
  border-radius: 999px;
  background: rgba(250, 247, 244, 0.86);
  color: #667085;
  font-size: 11.5px;
  line-height: 1.4;
}
.profile-link {
  font-size: 12px;
  color: #0f2240;
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
  .member-layout {
    align-items: center;
    gap: 30px;
  }
  .team-image-wrap {
    flex: 0 0 40%;
    width: 40%;
    height: auto;
    aspect-ratio: 1 / 1;
    border-radius: 16px;
  }
  .member-content {
    flex: 0 0 60%;
    width: 60%;
    min-width: 0;
    padding-top: 15px;
  }
  .member-content h3 {
    font-size: 17px;
    white-space: nowrap;
  }
  .job-title {
    font-size: 11px;
    padding: 3px 8px;
  }
  .skills-list {
    gap: 4px;
    margin: 6px 0;
  }
  .skills-list span {
    font-size: 11px;
    padding: 3px 7px;
  }
  .profile-link {
    font-size: 11px;
  }
  .section-header h2 {
    font-size: 26px;
  }
}
</style>
