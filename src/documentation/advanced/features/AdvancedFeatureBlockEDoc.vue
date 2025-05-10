<script setup lang="ts">
import {
  featureBlockE,
  featureBlockEProps,
} from '/@src/data/docs/advanced/feature/blockE'
</script>

<template>
  <Section
    id="block-e-demo"
    color="darker"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک پیشرفته طرح E سبک 1"
        link="block-e-props"
        inverted
      />

      <SpinnerSection
        inverted
        subtitle="خدمات طراحی وب"
        title="نتایج مبتنی بر مدیریت تبلیغات مقرون به صرفه"
        content="برای صرفه جویی در زمان، افزایش عملکرد و رسیدن به نقاط عطف خود در مسیر رشد خود، با کارشناسان تبلیغات ما شریک شوید."
        cta="درباره خدمات اختیاری ما بیاموزید"
        to="index"
        image="/assets/illustrations/chart/tech-chart.png"
        layer-base="/assets/illustrations/chart/tech-chart"
        layer-extension="svg"
      />
    </Container>
  </Section>

  <Section
    id="block-e-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح E"
        subtitle="پراپ‌های در دسترس برای بلوک طرح E"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="featureBlockE"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockEProps.props" />
        </template>
        <template #sample>
          <div class="empty-text">
            <p class="paragraph rem-95">
              نمونه داده‌ای برای این مؤلفه موجود نیست
            </p>
          </div>
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های ویژگی پیشرفته و شگفت‌انگیز عرضه می‌شود که می‌توانید
            از آن‌ها در هر صفحه‌ای استفاده کنید. هر بلوک با استایل‌ها و پروپ‌های
            خاص خود عرضه می‌شود. از پروپ‌ها برای ساخت نمونه‌های خود استفاده کنید
            یا یکی از نمونه‌های آماده را به کار ببرید. هر بلوک به‌طور پیش‌فرض از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            مارک‌آپ و پروپ‌ها مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
