<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedFaqBlockA from '/@src/documentation/advanced/faq/AdvancedFaqBlockA.vue'
import AdvancedFaqBlockB from '/@src/documentation/advanced/faq/AdvancedFaqBlockB.vue'
import AdvancedFaqBlockC from '/@src/documentation/advanced/faq/AdvancedFaqBlockC.vue'
import AdvancedFaqBlockD from '/@src/documentation/advanced/faq/AdvancedFaqBlockD.vue'

const demoLinks = [
  {
    label: 'بلوک طرح A',
    target: 'block-a-demo',
  },
  {
    label: 'بلوک طرح B',
    target: 'block-b-demo',
  },
  {
    label: 'بلوک طرح C',
    target: 'block-c-demo',
  },
  {
    label: 'بلوک طرح D',
    target: 'block-d-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="سوالات پر تکرار پیشرفته"
      subtitle="بلوک‌های پیشرفته Vulk را کشف کنید و یاد بگیرید چگونه می‌توانید آن‌ها را سفارشی کنید تا پروژه‌های شگفت‌انگیز و به‌یادماندنی بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="420px"
    />

    <!--FAQ block A demo-->
    <AdvancedFaqBlockA />

    <!--FAQ block B demo-->
    <AdvancedFaqBlockB />

    <!--FAQ block C demo-->
    <AdvancedFaqBlockC />

    <!--FAQ block D demo-->
    <AdvancedFaqBlockD />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
