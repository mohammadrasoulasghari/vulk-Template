<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedContactBlockADoc from '/@src/documentation/advanced/contact/AdvancedContactBlockADoc.vue'
import AdvancedContactBlockBDoc from '/@src/documentation/advanced/contact/AdvancedContactBlockBDoc.vue'
import AdvancedContactBlockCDoc from '/@src/documentation/advanced/contact/AdvancedContactBlockCDoc.vue'
import AdvancedContactBlockDDoc from '/@src/documentation/advanced/contact/AdvancedContactBlockDDoc.vue'

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
      title="تماس پیشرفته"
      subtitle="بلوک‌های پیشرفته Vulk را کشف کنید و یاد بگیرید چگونه می‌توانید آن‌ها را سفارشی کنید تا پروژه‌های شگفت‌انگیز و به‌یادماندنی بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="400px"
    />

    <!--Contact block A demo-->
    <AdvancedContactBlockADoc />

    <!--Contact block B demo-->
    <AdvancedContactBlockBDoc />

    <!--Contact block C demo-->
    <AdvancedContactBlockCDoc />

    <!--Contact block D demo-->
    <AdvancedContactBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
