<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedTestimonialsBlockADoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockADoc.vue'
import AdvancedTestimonialsBlockBDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockBDoc.vue'
import AdvancedTestimonialsBlockCDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockCDoc.vue'
import AdvancedTestimonialsBlockDDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockDDoc.vue'
import AdvancedTestimonialsBlockEDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockEDoc.vue'
import AdvancedTestimonialsBlockFDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockFDoc.vue'
import AdvancedTestimonialsBlockGDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockGDoc.vue'
import AdvancedTestimonialsBlockHDoc from '/@src/documentation/advanced/testimonials/AdvancedTestimonialsBlockHDoc.vue'

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
  {
    label: 'بلوک طرح E',
    target: 'block-e-demo',
  },
  {
    label: 'بلوک طرح F',
    target: 'block-f-demo',
  },
  {
    label: 'بلوک طرح G',
    target: 'block-g-demo',
  },
  {
    label: 'بلوک طرح H',
    target: 'block-h-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="بلاک های گواهی"
      subtitle="بیش از ۸ بلوک نوار جستجو قابل تنظیم منتظر شما هستند تا لایه‌ها، صفحات و محتواهای خود را بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="750px"
    />

    <!--Testimonials block A demo-->
    <AdvancedTestimonialsBlockADoc />

    <!--Testimonials block B demo-->
    <AdvancedTestimonialsBlockBDoc />

    <!--Testimonials block C demo-->
    <AdvancedTestimonialsBlockCDoc />

    <!--Testimonials block D demo-->
    <AdvancedTestimonialsBlockDDoc />

    <!--Testimonials block E demo-->
    <AdvancedTestimonialsBlockEDoc />

    <!--Testimonials block F demo-->
    <AdvancedTestimonialsBlockFDoc />

    <!--Testimonials block G demo-->
    <AdvancedTestimonialsBlockGDoc />

    <!--Testimonials block H demo-->
    <AdvancedTestimonialsBlockHDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
