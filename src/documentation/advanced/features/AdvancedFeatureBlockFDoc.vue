<script setup lang="ts">
import { stackedFeatures } from '/@src/data/blocks/advanced/features'
import {
  featureBlockF,
  featureBlockFProps,
  featureBlockFSample,
} from '/@src/data/docs/advanced/feature/blockF'
</script>

<template>
  <Section
    id="block-f-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک پیشرفته طرح F سبک 1"
        link="block-f-props"
      />

      <StackedSection
        :features="stackedFeatures"
        image="/assets/illustrations/features/calling.svg"
        dark-image="/assets/illustrations/features/calling.svg"
        rounded
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک پیشرفته طرح F سبک 2"
        link="block-f-props"
        inverted
      />

      <StackedSection
        :features="stackedFeatures"
        image="/assets/illustrations/features/calling.svg"
        dark-image="/assets/illustrations/features/calling.svg"
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-f-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح F"
        subtitle="پراپ‌های در دسترس برای بلوک طرح F"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="featureBlockF"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockFSample"
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
