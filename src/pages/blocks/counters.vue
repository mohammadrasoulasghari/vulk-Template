<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import CounterBase from '/@src/documentation/base/counter/CounterBase.vue'
import CounterBoxed from '/@src/documentation/base/counter/CounterBoxed.vue'
import CounterBold from '/@src/documentation/base/counter/CounterBold.vue'
import CounterContent from '/@src/documentation/base/counter/CounterContent.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'شمارنده',
    target: 'counter-base-demo',
  },
  {
    label: 'ضخیم',
    target: 'counter-bold-demo',
  },
  {
    label: 'جعبه‌دار',
    target: 'counter-boxed-demo',
  },
  {
    label: 'محتوایی',
    target: 'counter-content-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه شمارنده"
      subtitle="کانترها بسیار مفید هستند هنگام نمایش آمار یا هر عددی که تأثیر مثبتی بر روی هدف ایجاد می‌کند. کانترهای Vulk را بررسی کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="400px"
    />

    <!--Counter base demo-->
    <CounterBase />

    <!--Counter bold demo-->
    <CounterBold />

    <!--Counter boxed demo-->
    <CounterBoxed />

    <!--Counter content demo-->
    <CounterContent />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
