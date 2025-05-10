<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import FooterBlockADoc from '/@src/documentation/blocks/footer/FooterBlockADoc.vue'
import FooterBlockBDoc from '/@src/documentation/blocks/footer/FooterBlockBDoc.vue'
import FooterBlockCDoc from '/@src/documentation/blocks/footer/FooterBlockCDoc.vue'
import FooterBlockDDoc from '/@src/documentation/blocks/footer/FooterBlockDDoc.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'فوتر A',
    target: 'block-a-demo',
  },
  {
    label: 'فوتر B',
    target: 'block-b-demo',
  },
  {
    label: 'فوتر C',
    target: 'block-c-demo',
  },
  {
    label: 'فوتر D',
    target: 'block-d-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="بلاک های پاورقی"
      subtitle="بیش از ۴ بلوک قابل تنظیم فوتر در انتظار شما هستند تا بتوانید طرح‌بندی‌ها، صفحات و محتواهای خود را بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="440px"
    />

    <!--Footer A demo-->
    <FooterBlockADoc />

    <!--Footer B demo-->
    <FooterBlockBDoc />

    <!--Footer C demo-->
    <FooterBlockCDoc />

    <!--Footer D demo-->
    <FooterBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
