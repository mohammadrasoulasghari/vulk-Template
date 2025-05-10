<script setup lang="ts">
import { baseFeatures } from '/@src/data/blocks/advanced/features'
import {
  contentBlockA,
  contentBlockAProps,
  contentBlockASample,
} from '/@src/data/docs/advanced/content/blockA'
</script>

<template>
  <Section
    id="block-a-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک پیشرفته طرح A سبک 1"
        link="block-a-props"
      />

      <AppSection
        :features="baseFeatures"
        image="/assets/illustrations/apps/hero-app-screen.png"
        dark-image="/assets/illustrations/apps/hero-app-screen-dark.png"
        blob
      />
    </Container>
  </Section>

  <Section
    id="block-a-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح A"
        subtitle="پراپ‌های در دسترس برای بلوک طرح A"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockASample"
          />
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
