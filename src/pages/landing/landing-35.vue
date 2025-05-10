<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  mobileAppFeatures,
  runningFeature,
  reportFeature,
  dashboardFeature,
  workoutTimeline,
  workoutPricingPlans,
  workoutTestimonials,
  workoutFaq,
} from '/@src/data/pages/workout'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroE1 />

    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <FeatureBlockA
          alignment="centered"
          :features="mobileAppFeatures"
          :columns="3"
          :limit="8"
          size="medium"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle="پرفورمنس"
          title="پتانسیل‌های خود را پیدا کنید"
          content="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این‌ها را باید با دقت و توجه به تو بسپارم."
          :features="runningFeature"
          image="/assets/illustrations/features/workout-feature-1.png"
          dark-image="/assets/illustrations/features/workout-feature-1-dark.png"
          blob
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle="ترکینگ"
          title="روند خود را دنبال کنید"
          content="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این‌ها را باید با دقت و توجه به تو بسپارم."
          :features="reportFeature"
          image="/assets/illustrations/features/workout-feature-2.png"
          dark-image="/assets/illustrations/features/workout-feature-2-dark.png"
          blob
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="داشبورد سبک زندگی"
          subtitle="زندگی کنید"
        />

        <AppSectionShapes
          :features="dashboardFeature"
          image="/assets/illustrations/apps/personal-dashboard.png"
          dark-image="/assets/illustrations/apps/personal-dashboard-dark.png"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="لایف استایل خود را ارتقا دهید"
          subtitle="یک روند ساده"
        />

        <TimelineFeatures :items="workoutTimeline" />
      </Container>
    </Section>

    <Section tongue="tongue-1">
      <Container>
        <PricingDuo
          title="پلن‌های ما"
          subtitle="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من می‌بینم تو به‌ندرت دلسرد شده‌ای."
          :plans="workoutPricingPlans"
          rounded
          polka-dots
        />
      </Container>
    </Section>

    <TestimonialsCarouselColor :slides="workoutTestimonials" />

    <Section
      tongue="tongue-2"
      bottom-narrow
    >
      <Container>
        <SectionTitle
          title="برای خواندن سوالات متداول ما وقت بگذارید"
          subtitle="سوالات اغلب پرسیده شده"
        />

        <DoubleFaqCollapse
          :left="workoutFaq.left"
          :right="workoutFaq.right"
          chevrons
        />

        <CtaBlockB
          title-primary="الان شروع کنید!"
          content-primary="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-primary="دسترسی آزمایشی"
          cta-primary-link="/"
          title-secondary="اطلاعات بیشتر"
          content-secondary="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-secondary="تماس با ما"
          cta-secondary-link="/"
          boxed
          shapes
          animated
        />

        <DownloadCta
          apple-url="https://apple.com"
          google-url="https://google.com"
        />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="default"
      :social-links="socialLinks"
    />
  </div>
</template>
