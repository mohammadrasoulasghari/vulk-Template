<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import SimpleTableBase from '/@src/documentation/base/table/SimpleTableBase.vue'
import SimpleTableStriped from '/@src/documentation/base/table/SimpleTableStriped.vue'
import SimpleTableBordered from '/@src/documentation/base/table/SimpleTableBordered.vue'
import SimpleTableBoth from '/@src/documentation/base/table/SimpleTableBoth.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'جدول',
    target: 'table-base-demo',
  },
  {
    label: 'راه راه',
    target: 'table-striped-demo',
  },
  {
    label: 'حاشیه‌دار',
    target: 'table-bordered-demo',
  },
  {
    label: 'راه راه حاشیه‌دار',
    target: 'table-both-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه جدول"
      subtitle="جدول‌ها جزء بسیار رایج و معمولی هستند که اغلب به عنوان موثرترین روش برای نمایش داده‌های پیچیده باقی می‌مانند. با جدول‌های Vulk آشنا شوید."
    />

    <DemoLinks
      :links="demoLinks"
      width="360px"
    />

    <!--Simple table demo-->
    <SimpleTableBase />

    <!--Simple table striped demo-->
    <SimpleTableStriped />

    <!--Simple table bordered demo-->
    <SimpleTableBordered />

    <!--Simple table both demo-->
    <SimpleTableBoth />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
