<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  supportFeatures,
  coloredFeaturesFirst,
  coloredFeaturesSecond,
  testimonials,
  faq,
  customerLogos,
} from '/@src/data/pages/support'

import { socialLinks } from '/@src/data/blocks/advanced/social'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div>
    <HeroK />

    <Section>
      <Container>
        <SectionTitle
          title="کلیپ بورد خود را در محل کار قرار دهید"
          subtitle="سریع شروع کنید"
        />

        <StackedSection
          :features="supportFeatures"
          image="/assets/illustrations/features/calling.svg"
          dark-image="/assets/illustrations/features/calling.svg"
          image-width="500"
          image-height="500"
          :image-mirror="rtl"
          rounded
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="ابزارهای قدرتمند برای کمک به شما"
          subtitle="ابزارهای ما را امتحان کنید"
        />

        <ContentBlockH
          :title="coloredFeaturesFirst.title"
          :text="coloredFeaturesFirst.text"
          :images="coloredFeaturesFirst.images"
          links
        />

        <ContentBlockH
          :title="coloredFeaturesSecond.title"
          :text="coloredFeaturesSecond.text"
          :images="coloredFeaturesSecond.images"
          compact
          links
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="شروع کنید &#8212; رایگان است"
          subtitle="این فرصت را از دست ندهید"
        />

        <!--Subscribe-->
        <SubscriptionCompactBlock
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          label="رایگان شروع کنید"
          placeholder="ایمیل خود را وارد کنید"
        />

        <TestimonialBlockA :testimonials="testimonials" />

        <CtaBlockA
          title="همین حالا سابسکرایب کنید"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-primary="شروع کنید"
          cta-primary-link="index"
          cta-secondary="بیشتر بدانید"
          cta-secondary-link="index"
          :logos="customerLogos"
          boxed
          shapes
        />
      </Container>
    </Section>

    <Section color="grey">
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
