<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  creatorFeatures,
  successFeatures,
  featuredCreators,
  testimonials,
} from '/@src/data/pages/creators'

import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroO />

    <Section tongue="tongue-1">
      <Container>
        <VideoBlockA
          title="ابزار محبوب خالقان و تولیدکنندگان"
          source="/assets/video/meeting.mp4"
          poster="/assets/demo/img/posters/poster-1c.jpg"
          :features="successFeatures"
          links
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="بدونی هیچ سختی و به آسانی یک کامیونیتی ممتاز ایجاد کنید"
          subtitle="کامیونیتی‌های قدرتمند"
        />

        <FeatureBlockA
          :features="creatorFeatures"
          :columns="3"
          :limit="8"
          size="small"
        />
      </Container>
    </Section>

    <Section wave="wave-2">
      <Container>
        <CenteredMedia
          title="ابزارهایی که برای تولیدکنندگان محتوا تدارک دیده شده است"
          cta-text="کامیونیتی خود را بسازید"
          cta-link="/about"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <ContentBlockB
          :title="featuredCreators.title"
          :subtitle="featuredCreators.subtitle"
          :text="featuredCreators.text"
          :images="featuredCreators.images"
          link="index"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="سه دلیل که راه حل ما را دوست خواهید داشت"
          subtitle="چرا باید راه حل بهینه سازی ما را امتحان کنید"
        />

        <TabbedSectionCentered />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="جذابیت‌ها"
          title="بحث‌ها و ارتباطات جذاب"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/creator-feature-1.png"
          dark-image="/assets/illustrations/features/creator-feature-1-dark.png"
          image-width="800"
          image-height="714"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="تجربیات"
          title="تجربه دلنشین مشارکت در کامیونیتی مطرح"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/creator-feature-2.png"
          dark-image="/assets/illustrations/features/creator-feature-2-dark.png"
          image-width="800"
          image-height="714"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SideSection
          subtitle="ادغام ها"
          title="ارتباط‌گیری آسان با ابزارهای محبوب شما"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/creator-feature-3.svg"
          dark-image="/assets/illustrations/features/creator-feature-3-dark.svg"
          image-width="800"
          image-height="714"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="سه دلیل که راه حل ما را دوست خواهید داشت"
          subtitle="چرا باید راه حل بهینه سازی ما را امتحان کنید"
        />
      </Container>
    </Section>

    <TestimonialsMarquee
      :testimonials="testimonials"
      color="grey"
      compact
    />

    <Section
      color="grey"
      wave="wave-2"
      shape-color="footer-dark"
    >
      <Container>
        <CompanyGrid
          class="-mt-6"
          title="مربیان کسب و کار ما چه کسانی هستند؟"
          subtitle="همکاری با شرکت‌های موفق و آشنا"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
