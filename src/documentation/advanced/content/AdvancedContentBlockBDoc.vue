<script setup lang="ts">
import {
  contentBlockB,
  contentBlockBProps,
} from '/@src/data/docs/advanced/content/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک پیشرفته طرح B سبک 1"
        link="block-b-props"
      />

      <div class="py-4" />

      <BoxedSection
        minititle="به دسترسی زودهنگام بپیوندید!"
        title="کل کسب و کار تجارت الکترونیک شما، متصل و با هوش مصنوعی"
        subtitle="معرفی وولک"
        content="اولین پلتفرم بهینه سازی بازار که برای بهینه سازی تجارت الکترونیک شما برای رشد هوشمند و استراتژیک طراحی شده است."
        image="/assets/illustrations/chart/circular-people-chart.png"
        dark-image="/assets/illustrations/chart/circular-people-chart-dark.png"
        cta="درباره محصول ما بیشتر بدانید"
        to="index"
      />
    </Container>
  </Section>

  <Section
    id="block-b-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح B"
        subtitle="پراپ‌های در دسترس برای بلوک طرح B"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockBProps.props" />
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
