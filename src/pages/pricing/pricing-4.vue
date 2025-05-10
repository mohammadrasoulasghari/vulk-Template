<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  pricingSplit,
  comparisonTable,
} from '/@src/data/blocks/advanced/pricing'
import { customerLogos } from '/@src/data/pages/logos'
import { boxedTestimonials } from '/@src/data/blocks/testimonials'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="قیمت گذاری بر اساس شرایط شما"
          subtitle="قیمت گذاری مقیاس پذیر"
          text="روش کار خود را بهبود بخشید، یک ابزار کاملاً جدید را کشف کنید و یک بار برای همیشه دردسر را کنار بگذارید."
        />

        <PricingSplit
          :regular-plans="pricingSplit.regularPlans"
          :premium-plan="pricingSplit.premiumPlan"
          regular-label="نسخه آزمایشی رایگان خود را شر،ع کنید"
          premium-label="تماس با ما"
          regular-sublabel="بدون تعهد / کارت اعتباری لازم نیست"
          premium-sublabel="تعهد سالانه - با ما تماس بگیرید"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="مقایسه همه طرح ها"
          subtitle="نحوه محاسبه قیمت"
        />

        <ComparisonTable
          :labels="comparisonTable.labels"
          :plans="comparisonTable.plans"
        />

        <CompanyGrid
          title="آنها از محصول ما استفاده می‌کنند"
          subtitle="همکاری با شرکت‌های موفق و آشنا"
          :logos="customerLogos"
          :limit="20"
        />

        <CtaBlockF
          title="شروع کنید"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          background="/assets/demo/img/color/13.png"
          cta="شروع کنید"
          cta-link="/"
          :alignment="rtl ? 'right' : 'left'"
        />

        <TestimonialBlockC
          :testimonials="boxedTestimonials"
          squared
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
