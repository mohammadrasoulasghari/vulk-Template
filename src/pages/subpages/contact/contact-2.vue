<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { contactInfo } from '/@src/data/pages/contact'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { plantValues } from '/@src/data/blocks/advanced/values'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="تماس با ما"
          subtitle="ملاقات کنیم"
        />

        <BlockContact
          title="تماس با ما"
          subtitle="برای تماس با ما فرم زیر را پر کنید"
          :lng="12.550343"
          :lat="55.665957"
          :zoom="16"
        />

        <ContactInfo :infos="contactInfo" />

        <ValuesSection
          :values="plantValues"
          image-height="120px"
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
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
