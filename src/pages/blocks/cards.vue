<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import CardShape from '/@src/documentation/base/card/CardShape.vue'
import CardPadding from '/@src/documentation/base/card/CardPadding.vue'
import CardShadow from '/@src/documentation/base/card/CardShadow.vue'
import CardAnimated from '/@src/documentation/base/card/CardAnimated.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'شکل',
    target: 'card-shapes-demo',
  },
  {
    label: 'فاصله‌دار',
    target: 'card-padding-demo',
  },
  {
    label: 'سایه‌بندی',
    target: 'card-shadow-demo',
  },
  {
    label: 'انیمیشن‌دار',
    target: 'card-animated-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه کارت"
      subtitle="کارت‌ها بخش ضروری تمامی برنامه‌های وب و موبایل هستند و استفاده‌های متنوعی دارند. کارت‌های Vulk را بررسی کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="400px"
    />

    <!--Card shape demo-->
    <CardShape />

    <!--Card padding demo-->
    <CardPadding />

    <!--Card shadows demo-->
    <CardShadow />

    <!--Card animation demo-->
    <CardAnimated />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
