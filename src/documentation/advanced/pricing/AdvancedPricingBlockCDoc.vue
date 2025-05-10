<script setup lang="ts">
import { workoutPricingPlans } from '/@src/data/pages/workout'

import {
  pricingBlockC,
  pricingBlockCProps,
  pricingBlockCSample,
} from '/@src/data/docs/advanced/pricing/blockC'
</script>

<template>
  <Section
    id="block-c-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک پیشرفته طرح C سبک 1"
        link="block-c-props"
      />

      <div class="py-4" />

      <PricingDuo
        title="پلن‌های ما"
        subtitle="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من می‌بینم تو به‌ندرت دلسرد شده‌ای."
        :plans="workoutPricingPlans"
        rounded
        polka-dots
      />
    </Container>
  </Section>

  <Section
    id="block-c-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح C"
        subtitle="پراپ‌های در دسترس برای بلوک طرح C"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="pricingBlockC"
          />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="pricingBlockCSample"
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
