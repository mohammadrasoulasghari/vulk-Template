<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  marketingProcess,
  marketingStats,
  testimonialsMarquee,
} from '/@src/data/pages/marketing'
import { features } from '/@src/data/blocks/features'
</script>

<template>
  <div>
    <HeroA />

    <!--Hero Marquee-->
    <LogoMarquee :logos="customerLogos" />

    <Section>
      <Container>
        <BoxedSection
          minititle="به دسترسی زودهنگام بپیوندید!"
          title="کل کسب و کار تجارت الکترونیک شما، متصل و با هوش مصنوعی"
          subtitle="معرفی وولک"
          content="اولین پلتفرم بهینه سازی بازار که برای بهینه سازی تجارت الکترونیک شما برای رشد هوشمند و استراتژیک طراحی شده است."
          image="/assets/illustrations/chart/circular-people-chart.png"
          dark-image="/assets/illustrations/chart/circular-people-chart-dark.png"
          image-width="800"
          image-height="625"
          cta="درباره محصول ما بیشتر بدانید"
          to="index"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="ایجاد کمپین مبتنی بر هدف آسان شد"
          subtitle="راه حلی برای دسترسی فوری به مشتریان شما"
        />

        <ProcessSection
          :steps="marketingProcess.steps"
          image-width="800"
          image-height="800"
        />

        <FeatureBlockA
          :features="features"
          :columns="3"
          :limit="8"
        />

        <SimpleCta />
      </Container>
    </Section>

    <Section color="darker">
      <template #background>
        <SectionMap />
      </template>
      <Container>
        <SideSection
          inverted
          bordered
          subtitle="خدمات مدیریت تبلیغات اختیاری"
          title="نتایج مبتنی بر مدیریت تبلیغات مقرون به صرفه"
          content="برای صرفه جویی در زمان، افزایش عملکرد و رسیدن به نقاط عطف خود در مسیر رشد خود، با کارشناسان تبلیغات ما شریک شوید."
          cta="درباره خدمات اختیاری ما بیاموزید"
          :to="{ name: 'index' }"
          legend="نمودار اهداف تعریف شده در مقابل اهداف محقق شده"
          image="/assets/illustrations/chart/gap-before.png"
          image-width="524"
          image-height="365"
        />

        <NumbersSection
          inverted
          subtitle="تکنولوژی هوش مصنوعی"
          title="مقیاس داده ما به موفقیت شما کمک می‌کند"
          content="مقیاس داده عظیم ما، یادگیری ماشینی و الگوریتم‌های ما را تغذیه می‌کند، بنابراین می‌توانید مطمئن باشید که هر تصمیمی که هوش مصنوعی ما می‌گیرد، هوشمندانه است."
          :numbers="marketingStats"
          animated
        />
      </Container>
    </Section>

    <Section color="gradient">
      <Container>
        <SectionTitle
          inverted
          title="چرا وولک، مستقیماً از مشتریان ما"
          subtitle="نگاهی گذرا به آنچه می‌گویند"
        />
      </Container>
    </Section>

    <TestimonialsMarquee
      :testimonials="testimonialsMarquee"
      color="gradient"
    />

    <Section bottom-spaced>
      <Container>
        <!--Side Section-->
        <SideSection
          subtitle="رشد کامل"
          title="رشد کامل و آزادانه با هوش مصنوعی"
          content="برای رشد کسب و کار خود در بازارهای پویا امروزی، به یک مزیت نیاز دارید. این همان جایی است که علم داده وولک وارد می‌شود. با هوش مصنوعی ما که به طور مداوم در پشت صحنه کار می‌کند، می‌توانید فرصت‌های رشد را باز کنید و در بالاترین سطح ۷/۲۴ رقابت کنید."
          cta="درباره فناوری ما بیاموزید"
          to="index"
          image="/assets/illustrations/people/services.png"
          dark-image="/assets/illustrations/people/services-dark.png"
          image-width="524"
          image-height="365"
        />
      </Container>
    </Section>
  </div>
</template>
