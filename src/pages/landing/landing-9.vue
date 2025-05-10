<route lang="yaml">
meta:
  navbar:
    props:
      inverted: true
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  mentorBoxCarousel,
  mentorStats,
  mentorTestimonials,
  mentorsFaq,
} from '/@src/data/pages/mentors'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroI />

    <Section>
      <template #background>
        <SectionMap light />
      </template>
      <Container>
        <CompanyGrid
          title="مربیان کسب و کار ما چه کسانی هستند؟"
          subtitle="همکاری با شرکت‌های موفق و آشنا"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <Section tongue="tongue-1">
      <Container>
        <BoxCarousel :slides="mentorBoxCarousel" />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="مربیان"
          title="مطابقت مربی خود را با فیلترها پیدا کنید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/advisors-feature-1.png"
          dark-image="/assets/illustrations/features/advisors-feature-1-dark.png"
          image-width="776"
          image-height="647"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="یک به یک"
          title="یک تماس را خیلی سریع برنامه ریزی کنید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/advisors-feature-2.png"
          dark-image="/assets/illustrations/features/advisors-feature-2-dark.png"
          image-width="776"
          image-height="647"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="رسیدگی"
          title="مربیان برای کمک به شما درخواست خواهند کرد"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/advisors-feature-3.png"
          dark-image="/assets/illustrations/features/advisors-feature-3-dark.png"
          image-width="776"
          image-height="647"
          blob
        />
      </Container>
    </Section>

    <Section
      wave="wave-2"
      shape-color="darker"
    >
      <Container>
        <SideSection
          subtitle="اشتراک ها"
          title="فراتر از تماس ها و سمینارهای یکباره بروید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/advisors-feature-4.png"
          dark-image="/assets/illustrations/features/advisors-feature-4-dark.png"
          image-width="776"
          image-height="647"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section color="darker">
      <Container>
        <SpinnerSection
          inverted
          subtitle="نتایج محور"
          title="آموزش کسب و کار مبتنی بر نتایج و مقرون به صرفه"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/chart/vulk-chart.png"
          layer-base="/assets/illustrations/chart/vulk-chart"
          layer-extension="svg"
          bordered
        />

        <NumbersSection
          inverted
          subtitle="راه موفقیت"
          title="مربیان ما به موفقیت شما کمک می‌کنند"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          :numbers="mentorStats"
          animated
        />
      </Container>
    </Section>

    <Section
      tongue="tongue-2"
      wave="wave-1"
    >
      <Container>
        <SectionTitle
          title="آنچه اعضای ما می‌گویند"
          subtitle="داستان های مشتری"
        />

        <TestimonialsTabbed
          :trainees="mentorTestimonials.trainees"
          :mentors="mentorTestimonials.mentors"
        />
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-2"
      shape-color="footer-dark"
    >
      <Container>
        <SectionTitle
          title="ما می‌توانیم در این زمینه به شما کمک کنیم"
          subtitle="آیا شما در حال مبارزه هستید؟"
        />

        <PricingAction
          :monthly-price="75"
          :quarterly-price="225"
          :yearly-price="600"
          :discount="30"
        />

        <FaqList :items="mentorsFaq" />

        <CtaBlockH
          small-text="به راحتی رشد کنید"
          title="شروع کنید"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          background="/assets/demo/img/gallery/49.jpg"
        >
          <Buttons>
            <Button
              to="/"
              color="primary"
              :long="2"
              bold
              raised
            >
              شروع کنید
            </Button>
            <Button
              to="/"
              :long="2"
              bold
              raised
            >
              اطلاعات بیشتر
            </Button>
          </Buttons>
        </CtaBlockH>
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
