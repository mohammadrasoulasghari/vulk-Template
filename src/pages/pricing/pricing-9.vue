<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { content } from '/@src/data/blocks/content'
import { customerLogos } from '/@src/data/pages/logos'
import { pricingDuoPlans } from '/@src/data/blocks/advanced/pricing'
import { testimonials } from '/@src/data/blocks/advanced/testimonials'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="رایگان شروع کنید"
          subtitle="ساده و رقابتی"
          text="روش کار خود را بهبود بخشید، یک ابزار کاملاً جدید را کشف کنید و یک بار برای همیشه دردسر را کنار بگذارید."
        />

        <PricingSoloCentered
          :features="[
            'بی نهایت پروژه',
            'اپ موبایل و دسکتاپ',
            'بی نهایت تسک',
            'پشتیبانی از ایمیل',
            'بی نهایت رکورد زمان',
          ]"
          :price="0"
          link-label="همین حالا شروع کنید"
          link="/"
        />

        <ContentBlockA
          :title="content.title"
          :text="content.text"
          link="index"
          :images="content.images"
        />

        <LogoMarquee
          :logos="customerLogos"
          compact
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <PricingDuo
          title="پلن‌های ما"
          subtitle="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من می‌بینم تو به‌ندرت دلسرد شده‌ای."
          :plans="pricingDuoPlans"
          rounded
          polka-dots
        />
      </Container>
    </Section>

    <TestimonialsMarquee
      :testimonials="testimonials"
      color="grey"
    />

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <ValuesSection
          :values="plantValues"
          image-height="150px"
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
