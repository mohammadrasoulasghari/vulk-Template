<script setup lang="ts">
import { eventPlans } from '/@src/data/pages/conference'

import {
  pricingBlockB,
  pricingBlockBProps,
  pricingBlockBSample,
} from '/@src/data/docs/advanced/pricing/blockB'
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
        link="block-a-props"
      />

      <div class="py-4" />

      <PricingCardsA
        :plans="eventPlans"
        :columns="3"
        label="خرید بلیط"
        rounded
        pulled
        polka-dots
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
            :code="pricingBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="pricingBlockBSample"
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
