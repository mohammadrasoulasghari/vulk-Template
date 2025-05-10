<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedContentBlockADoc from '/@src/documentation/advanced/content/AdvancedContentBlockADoc.vue'
import AdvancedContentBlockBDoc from '/@src/documentation/advanced/content/AdvancedContentBlockBDoc.vue'
import AdvancedContentBlockCDoc from '/@src/documentation/advanced/content/AdvancedContentBlockCDoc.vue'
import AdvancedContentBlockDDoc from '/@src/documentation/advanced/content/AdvancedContentBlockDDoc.vue'

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
      title="محتوای پیشرفته"
      subtitle="بلوک‌های پیشرفته Vulk را کشف کنید و یاد بگیرید چگونه می‌توانید آن‌ها را سفارشی کنید تا پروژه‌های شگفت‌انگیز و به‌یادماندنی بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="400px"
    />

    <!--Content block A demo-->
    <AdvancedContentBlockADoc />

    <!--Content block B demo-->
    <AdvancedContentBlockBDoc />

    <!--Content block C demo-->
    <AdvancedContentBlockCDoc />

    <!--Content block D demo-->
    <AdvancedContentBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
