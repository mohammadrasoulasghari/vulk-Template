<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { pricingTabbedPlans } from '/@src/data/blocks/advanced/pricing'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { boxedTestimonials } from '/@src/data/blocks/testimonials'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section>
      <Container>
        <PageTitle
          title="هرکسی باید بتواند به قدر نیاز پرداخت کند"
          subtitle="منصفانه پرداخت کن"
          text="روش کار خود را بهبود بخشید، یک ابزار کاملاً جدید را کشف کنید و یک بار برای همیشه دردسر را کنار بگذارید."
        />

        <PricingTabbed
          :plans="pricingTabbedPlans.allPlans"
          :personal-plans="pricingTabbedPlans.personalPlans"
          :premium-plans="pricingTabbedPlans.premiumPlans"
        />

        <ValuesSection
          :values="plantValues"
          image-height="150px"
        />

        <TestimonialBlockC :testimonials="boxedTestimonials" />
      </Container>
    </Section>

    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="خواندن سوالات پرتکرار"
          subtitle="سوالی دارید؟"
        />

        <FaqListBoxed :items="genericFaq" />

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
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      :social-links="socialLinks"
    />
  </div>
</template>
