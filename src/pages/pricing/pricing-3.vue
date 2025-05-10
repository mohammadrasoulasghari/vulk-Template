<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { comparePlans, longPlans } from '/@src/data/blocks/advanced/pricing'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section>
      <Container>
        <PageTitle
          title="ما چگونه رقابت می‌کنیم"
          subtitle="در بین بهترین‌ها"
          text="روش کار خود را بهبود بخشید، یک ابزار کاملاً جدید را کشف کنید و یک بار برای همیشه دردسر را کنار بگذارید."
          aligned
          leading
        />

        <PricingCompare
          :plans="comparePlans"
          rounded
          pulled
          shadow
          polka-dots
        />

        <TestimonialBlock
          image="/assets/demo/img/content/500x500/3.jpg"
          title="پیدا کردن یه سرویس با قیمت مناسب کار سختی بود تا اینکه با وولک آشنا شدم هم امکانات مناسب هم قیمت مناسب!"
          content="معاملات بیمه جاناتان که در پلتفرم ما یافت شد، زندگی **او** را کاملاً تغییر داد و تمام زحمات را برطرف کرد."
          link-label="داستان جاناتان را بخوانید"
          link="/about"
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="نحوه قیمت‌گذاری ما"
          subtitle="نیاز به جزئیات دارید؟"
        />

        <PricingLong
          :plans="longPlans"
          :columns="4"
          :limit="3"
          rounded
          shadow
          polka-dots
        />
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
