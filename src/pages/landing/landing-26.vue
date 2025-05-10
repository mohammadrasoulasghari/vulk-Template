<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  insuranceFeatures,
  values,
  appFeatures,
  featureMatrix,
  testimonials,
} from '/@src/data/pages/insurance'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroW />

    <LogoMarquee
      :logos="customerLogos"
      compact
    />

    <Section>
      <Container>
        <SectionTitle
          title="بیمه مناسب با بهترین قیمت را پیدا کنید"
          subtitle="بهینه‌سازی"
        />

        <StackedSection
          :features="insuranceFeatures"
          image="/assets/illustrations/features/ensuring.svg"
          dark-image="/assets/illustrations/features/ensuring-dark.svg"
          rounded
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <LogoStats
          title="بیش از ۳۰۰۰۰ میلیارد تومان"
          subtitle="معاملات مشتریان ما در سال ۱۴۰۰"
          heading="به ما بپیوندید و رشد کنید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          :logos="customerLogos"
        />

        <!--Company Values-->
        <ValuesSection :values="values" />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="برای دسترسی به داشبورد مختص خود ثبت نام کنید"
          subtitle="شروع کنید"
        />

        <AppSection
          :features="appFeatures"
          image="/assets/illustrations/apps/insurance-app.png"
          dark-image="/assets/illustrations/apps/insurance-app-dark.png"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <TestimonialBlock
          image="/assets/demo/img/content/500x500/1.jpg"
          title="من در پیدا کردن یک معامله منصفانه دچار مشکل بودم. سپس تصمیم گرفتم از وولک استفاده کنم و واقعاً جواب داد!"
          content="بیمه‌های ایزابللا که از طریق پلتفرم ما پیدا شدند، زندگی او را به‌طور کامل تغییر دادند و تمام دغدغه‌ها را از بین بردند."
          link-label="داستان ایزابل را بخوانید"
          link="/about"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="نگران نباشید، ما حواسمون هست"
          subtitle="مزایای قابل توجه"
        />

        <FeatureBlockA
          :features="featureMatrix"
          :columns="3"
          :limit="8"
          size="small"
        />
      </Container>
    </Section>

    <Section wave="wave-2">
      <Container>
        <CenteredMedia
          title="ابزاری ساخته شده برای افرادی مثل شما"
          cta-text="نسخه آزمایشی رایگان را امتحان کنید"
          cta-link="/about"
        >
          <p class="paragraph">
            لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این جمله از
            زنون، فیلسوف رواقی است. آن فرد گفت: هیچ‌کدام از این‌ها. بلکه به نوعی
            دیگر؛ برای من کافی است، اما برای خودشان کافی نیست. سپس پیسو به من
            گفت: پس چه؟ چرا؟
          </p>
          <p class="paragraph">
            لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این جمله از
            زنون، فیلسوف رواقی است. آن فرد گفت: هیچ‌کدام از این‌ها. بلکه به نوعی
            دیگر؛ برای من کافی است، اما برای خودشان کافی نیست. سپس پیسو به من
            گفت: پس چه؟ چرا؟
          </p>
          <p class="paragraph">
            لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این جمله از
            زنون، فیلسوف رواقی است. آن فرد گفت: هیچ‌کدام از این‌ها. بلکه به نوعی
            دیگر؛ برای من کافی است، اما برای خودشان کافی نیست. سپس پیسو به من
            گفت: پس چه؟ چرا؟
          </p>
        </CenteredMedia>
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="آنها عاشق کاری هستند که ما انجام می‌دهیم."
          subtitle="چرا باید امتحان کنید"
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
          title="بهترین قیمت‌های بیمه‌ها"
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
