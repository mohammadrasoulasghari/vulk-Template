<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import CtaBlockADoc from '/@src/documentation/blocks/cta/CtaBlockADoc.vue'
import CtaBlockBDoc from '/@src/documentation/blocks/cta/CtaBlockBDoc.vue'
import CtaBlockCDoc from '/@src/documentation/blocks/cta/CtaBlockCDoc.vue'
import CtaBlockDDoc from '/@src/documentation/blocks/cta/CtaBlockDDoc.vue'
import CtaBlockEDoc from '/@src/documentation/blocks/cta/CtaBlockEDoc.vue'
import CtaBlockFDoc from '/@src/documentation/blocks/cta/CtaBlockFDoc.vue'
import CtaBlockGDoc from '/@src/documentation/blocks/cta/CtaBlockGDoc.vue'
import CtaBlockHDoc from '/@src/documentation/blocks/cta/CtaBlockHDoc.vue'
import CtaBlockIDoc from '/@src/documentation/blocks/cta/CtaBlockIDoc.vue'
import CtaBlockJDoc from '/@src/documentation/blocks/cta/CtaBlockJDoc.vue'
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
  {
    label: 'بلوک طرح I',
    target: 'block-i-demo',
  },
  {
    label: 'بلوک طرح J',
    target: 'block-j-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="بلاک های جذب کننده"
      subtitle="بیش از ۱۰ بلوک جذب کننده قابل تنظیم در انتظار شما هستند تا صفحات، طراحی‌ها و محتوای خود را بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="940px"
    />

    <!--Block A demo-->
    <CtaBlockADoc />

    <!--Block B demo-->
    <CtaBlockBDoc />

    <!--Block C demo-->
    <CtaBlockCDoc />

    <!--Block D demo-->
    <CtaBlockDDoc />

    <!--Block E demo-->
    <CtaBlockEDoc />

    <!--Block F demo-->
    <CtaBlockFDoc />

    <!--Block G demo-->
    <CtaBlockGDoc />

    <!--Block H demo-->
    <CtaBlockHDoc />

    <!--Block I demo-->
    <CtaBlockIDoc />

    <!--Block J demo-->
    <CtaBlockJDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
