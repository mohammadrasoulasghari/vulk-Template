<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  commerceAppFeatures,
  salesFeatures,
  growthFeatures,
  businessFeatures,
  managementFeatures,
  testimonials,
  posts,
  customerLogos,
  faq,
} from '/@src/data/pages/commerce'

import { socialLinks } from '/@src/data/blocks/advanced/social'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div>
    <HeroR />

    <Section>
      <Container>
        <SectionTitle
          title="فروش آنلاین خود را شروع کنید"
          subtitle="بیزینس خود را تشکیل دهید"
        />

        <AppSectionShapes
          :features="commerceAppFeatures"
          image="/assets/illustrations/apps/commerce-app.png"
          dark-image="/assets/illustrations/apps/commerce-app-dark.png"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSectionIcons
          subtitle="کسب و کار خود را استارت بزنید"
          title="محصولات خود را بفروش برسانید"
          content="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این‌ها را باید با دقت و توجه به تو بسپارم."
          :features="salesFeatures"
          image="/assets/illustrations/features/commerce-feature-1.png"
          dark-image="/assets/illustrations/features/commerce-feature-1-dark.png"
          image-width="900"
          image-height="788"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSectionIcons
          subtitle="کسب و کار خود را رشد دهید"
          title="محصولات خود را بسازید"
          content="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این‌ها را باید با دقت و توجه به تو بسپارم."
          :features="growthFeatures"
          image="/assets/illustrations/features/commerce-feature-2.png"
          dark-image="/assets/illustrations/features/commerce-feature-2-dark.png"
          image-width="900"
          image-height="788"
          blob
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSectionIcons
          subtitle="کسب و کار خود را مدیریت"
          title="پلتفرمی یکپارچه برای امورات مختلف"
          content="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این‌ها را باید با دقت و توجه به تو بسپارم."
          :features="businessFeatures"
          image="/assets/illustrations/features/commerce-feature-3.png"
          dark-image="/assets/illustrations/features/commerce-feature-3-dark.png"
          image-width="900"
          image-height="788"
          blob
        />
      </Container>
    </Section>

    <Section color="gradient">
      <Container>
        <TestimonialsCarousel
          :slides="testimonials"
          inverted
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="مهارت‌های فروش خود را ارتقا دهید"
          subtitle="منابع رایگان"
        />

        <ResourceGrid
          :posts="posts"
          :limit="3"
          class="my-6"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideSectionIcons
          subtitle="پشتیبانی کسب و کار شما"
          title="ما اینجا هستیم تا کمک شما باشیم"
          content="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این‌ها را باید با دقت و توجه به تو بسپارم."
          :features="managementFeatures"
          image="/assets/illustrations/features/commerce-feature-4.png"
          image-width="900"
          image-height="788"
          :image-mirror="rtl"
          reverse
        />

        <CtaBlockA
          title="همین حالا ثبت‌نام کنید"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-primary="شروع کنید"
          cta-primary-link="/"
          cta-secondary="بیشتر بدانید"
          cta-secondary-link="/"
          :logos="customerLogos"
          boxed
          shapes
        />
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <SectionTitle
          title="برای خواندن سوالات متداول ما وقت بگذارید"
          subtitle="سوالات اغلب پرسیده شده"
        />

        <DoubleFaqCollapse
          :left="faq.left"
          :right="faq.right"
          chevrons
        />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
