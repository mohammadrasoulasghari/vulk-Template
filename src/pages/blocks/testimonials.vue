<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import TestimonialBlockADoc from '/@src/documentation/blocks/testimonials/TestimonialBlockADoc.vue'
import TestimonialBlockBDoc from '/@src/documentation/blocks/testimonials/TestimonialBlockBDoc.vue'
import TestimonialBlockCDoc from '/@src/documentation/blocks/testimonials/TestimonialBlockCDoc.vue'
import TestimonialBlockDDoc from '/@src/documentation/blocks/testimonials/TestimonialBlockDDoc.vue'
import TestimonialBlockEDoc from '/@src/documentation/blocks/testimonials/TestimonialBlockEDoc.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

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
]
</script>

<template>
  <div>
    <HeroSub
      title="بلاک های گواهی"
      subtitle="بیش از ۳ بلوک سفارشی‌شده‌ی نظرات مشتریان در انتظار شماست تا طرح‌بندی‌ها، صفحات و محتوای خود را بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="480px"
    />

    <!--Block A demo-->
    <TestimonialBlockADoc />

    <!--Block B demo-->
    <TestimonialBlockBDoc />

    <!--Block C demo-->
    <TestimonialBlockCDoc />

    <!--Block D demo-->
    <TestimonialBlockDDoc />

    <!--Block E demo-->
    <TestimonialBlockEDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
