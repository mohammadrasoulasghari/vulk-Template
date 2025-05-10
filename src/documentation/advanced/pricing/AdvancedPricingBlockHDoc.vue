<script setup lang="ts">
import { pricingCompactPlans } from '/@src/data/blocks/advanced/pricing'
import {
  pricingBlockH,
  pricingBlockHProps,
  pricingBlockHSample,
} from '/@src/data/docs/advanced/pricing/blockH'
</script>

<template>
  <Section
    id="block-h-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک پیشرفته طرح H سبک 1"
        link="block-h-props"
      />

      <div class="py-6">
        <PricingCompact :plans="pricingCompactPlans" />
      </div>

      <!--Content-->
    </Container>
  </Section>

  <Section
    id="block-h-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح H"
        subtitle="پراپ‌های در دسترس برای بلوک طرح H"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="pricingBlockH"
          />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockHProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="pricingBlockHSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های پیشرفته و جذاب قیمت‌گذاری همراه است که می‌توانید در
            هر صفحه‌ای استفاده کنید. هر بلوک دارای استایل‌ها و خصوصیات خاص خود
            است. از این خصوصیات برای ساخت نمونه‌های خود استفاده کنید یا از یکی
            از نمونه‌های از پیش ساخته شده استفاده کنید. هر بلوک به طور بومی از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            علامت‌گذاری و خصوصیات مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
