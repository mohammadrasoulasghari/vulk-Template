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
import { iconValues } from '/@src/data/blocks/advanced/values'
import { gridTeam } from '/@src/data/blocks/team'
import { founders } from '/@src/data/blocks/advanced/team'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { press } from '/@src/data/blocks/advanced/press'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section
      v-background="{
        src: '/assets/shapes/lowpoly-pattern.png',
        placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
      }"
      color="darker"
    >
      <Container>
        <SpinnerSection
          inverted
          subtitle="تاپ 3%"
          title="تیمی نخبه و با عملکرد بالا"
          content="برای صرفه جویی در زمان، افزایش عملکرد و رسیدن به نقاط عطف خود در مسیر رشد خود، با کارشناسان تبلیغات ما شریک شوید."
          cta="بیشتر بدانید"
          to="/"
          image="/assets/illustrations/chart/tech-chart.png"
          layer-base="/assets/illustrations/chart/tech-chart"
          layer-extension="svg"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="ارزش‌های شرکت ما"
          subtitle="تیم متعهد"
        />

        <ValuesIconSection
          :values="iconValues"
          polka-dots
        />

        <LogoMarquee
          :logos="customerLogos"
          compact
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="درباره بنیان‌گذاران"
          subtitle="مردان بزرگ"
        />

        <FoundersSection
          :founders="founders"
          :limit="2"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="با تیم آشنا شوید"
          subtitle="و دیگر همکاران"
        />

        <TeamBlockE
          :items="gridTeam"
          :limit="12"
          shapes
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="ما در مطبوعات هستیم"
            subtitle="آنها در مورد ما صحبت می‌کنند"
          />
        </div>

        <PressSection :releases="press" />
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <ValuesSection
          :values="plantValues"
          image-height="130px"
        />

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
