<route lang="yaml">
meta:
  navbar:
    props:
      inverted: true
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { customerLogos, customerLogos2 } from '/@src/data/pages/logos'
import {
  itFeatures,
  itVideoFeatures,
  itContent,
  itProcess,
  testimonials,
  faq,
} from '/@src/data/pages/business'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroU />

    <LogoMarquee
      :logos="customerLogos"
      compact
    />

    <Section>
      <Container>
        <SectionTitle
          title="خدمات حرفه‌ای سطح بالا"
          subtitle="خدمات آی تی"
        />

        <FeatureBlockA
          alignment="centered"
          :features="itFeatures"
          :columns="3"
          :limit="4"
          size="medium"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="چگونه کار کنیم"
          subtitle="راه و روش ما"
        />

        <VideoBlockC
          title="روند کلی ما"
          :features="itVideoFeatures"
          source="/assets/video/meeting.mp4"
          poster="/assets/demo/img/posters/poster-3c.jpg"
          links
        />

        <ContentBlockA
          :title="itContent.title"
          :text="itContent.text"
          link="index"
          :images="itContent.images"
        />
      </Container>
    </Section>

    <Section
      v-background="{
        src: '/assets/demo/img/bg/3.jpeg',
        placeholder: 'https://dummyimage.com/1920x1080/',
      }"
      overlay
    >
      <Container>
        <div class="py-6">
          <CtaBlockA
            title="ما حرفه‌ای هستیم"
            subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
            cta-primary="شروع کنید"
            cta-primary-link="/about"
            cta-secondary="بیشتر بدانید"
            cta-secondary-link="/about"
            inverted
          />
        </div>
      </Container>
    </Section>

    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="پشتتان به ما گرم باشد"
          subtitle="روند کلی ما"
        />

        <FeatureBlockL
          :features="itProcess"
          blob
          dots
          links
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="شروع کنید &#8212; همین حالا"
          subtitle="با حرفه‌ای‌ها کار کنید"
        />

        <!--Subscribe-->
        <SubscriptionCompactBlock
          text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          label="رایگان شروع کنید"
          placeholder="ایمیل خود را وارد کنید"
        />

        <TestimonialBlockA :testimonials="testimonials" />

        <CtaBlockA
          title="همین حالا ثبت نام کنید"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-primary="شروع کنید"
          cta-primary-link="/"
          cta-secondary="بیشتر بدانید"
          cta-secondary-link="/about"
          :logos="customerLogos2"
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
