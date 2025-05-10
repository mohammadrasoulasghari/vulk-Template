<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  appFeatures,
  tabbedProcess,
  testimonials,
} from '/@src/data/pages/marketing'
import { features } from '/@src/data/blocks/features'
import { inject } from 'vue'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div>
    <HeroB />

    <Section>
      <Container>
        <LogoSection
          title="کارآفرینان و شرکت‌ها را تا دستیابی به نتایج مطلوب همراهی می‌کنیم و در این مسیر توان‌فرسا تنها نمی‌گذاریم"
          :logos="customerLogos"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="مبتنی بر داده‌های دنیای واقعی"
          title="بنیان و اساس کسب و کار شما تحت نظارت و در ارتباط با هوش مصنوعی خواهد بود"
          content="برای رشد کسب‌وکارتان در بازارهای پویای امروزی، نیاز به یک مزیت دارید.
          با هوش مصنوعی ما که به طور مداوم در پس‌زمینه فعال است،
          می‌توانید فرصت‌های رشد را شناسایی کرده و در بالاترین سطح به طور ۲۴ ساعته و ۷ روز هفته در رقابت برای کسب عنوان «بهترین» بمانید."
          cta="لیست ویژگی‌های وولک"
          to="/"
          image="/assets/illustrations/features/thinking.svg"
          image-width="192"
          image-height="150"
          :image-mirror="rtl"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="تبلیغات موثر را ایجاد کنید، بصورت هوشمند بهینه بسازید و بصورت حرفه‌ای آنالیز کنید"
          subtitle="پیشرو در صنعت با راه‌حل‌های هوشمند مبتنی بر بهینه‌سازی و موثرسازی تبلیغات"
        />

        <AppSection
          :features="appFeatures"
          image="/assets/illustrations/apps/hero-app-screen.png"
          dark-image="/assets/illustrations/apps/hero-app-screen-dark.png"
          image-width="1519"
          image-height="949"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <!--Section Title-->
        <SectionTitle
          title="کمپین‌های هدفمند بسازید و برای دستیابی به اهداف خود انتظار طولانی نکشید"
          subtitle="یافتن مشتریان بالقوه و معرفی شما به آنها در کمترین زمان ممکن"
        />

        <!--Process Title-->
        <TabbedSection
          :steps="tabbedProcess.steps"
          :images="tabbedProcess.images"
          image-width="800"
          image-height="1011"
        />
      </Container>
    </Section>

    <Section color="darker">
      <Container>
        <SpinnerSection
          inverted
          subtitle="سیستم اختیاری مدیریت تبلیغات"
          title="مدیریت تبلیغات مؤثر و مقرون به صرفه"
          content="با کارشناسان تبلیغات ما همکاری کنید تا وقت خود را صرفه‌جویی کنید، عملکردتان را افزایش دهید و به راحتی به هدف‌های خود در مسیر رشد برسید."
          cta="با خدمات ویژه ما آشنا شوید"
          to="index"
          image="/assets/illustrations/chart/vulk-chart.png"
          layer-base="/assets/illustrations/chart/vulk-chart"
          layer-extension="svg"
          image-width="150"
          image-height="150"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <FeatureBlockA
          :features="features"
          :columns="3"
          :limit="8"
        />
        <!--Section Title-->
        <SectionTitle
          class="pt-6"
          title="از زبان مشتریان بخوانیم که چرا وولک را انتخاب کرده‌اند"
          subtitle="نگاهی به نظرات و دیدگاه‌های دریافتی"
        />
        <TestimonialsGrid
          :testimonials="testimonials"
          blobs
        />
      </Container>
    </Section>

    <Section bottom-spaced>
      <Container>
        <SideSection
          subtitle="چرا هوش مصنوعی"
          title="هوش مصنوعی فرصت‌هایی را که ما نمی‌توانیم ببینیم بخوبی شناسایی می‌کند"
          content="با ایجاد، اجرای و بهینه‌سازی خودکار کمپین‌ها، زمان و هزینه خود را صرفه‌جویی کنید. اهداف استراتژیک خود مانند رشد، سودآوری، دفاع از برند و افزایش آگاهی را وارد کنید و بگذارید موتور تبلیغاتی وولک به صورت هوشمندانه آن‌ها را به اجرا درآورد."
          cta="اطلاعات بیشتر در مورد محصول ما"
          to="index"
          image="/assets/illustrations/features/earning.svg"
          dark-image="/assets/illustrations/features/earning-dark.svg"
          blob
          image-width="192"
          image-height="150"
          :image-mirror="rtl"
        />
      </Container>
    </Section>
  </div>
</template>
