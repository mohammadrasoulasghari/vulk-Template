<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import FeatureBlockADoc from '/@src/documentation/blocks/feature/FeatureBlockADoc.vue'
import FeatureBlockBDoc from '/@src/documentation/blocks/feature/FeatureBlockBDoc.vue'
import FeatureBlockCDoc from '/@src/documentation/blocks/feature/FeatureBlockCDoc.vue'
import FeatureBlockDDoc from '/@src/documentation/blocks/feature/FeatureBlockDDoc.vue'
import FeatureBlockEDoc from '/@src/documentation/blocks/feature/FeatureBlockEDoc.vue'
import FeatureBlockFDoc from '/@src/documentation/blocks/feature/FeatureBlockFDoc.vue'
import FeatureBlockGDoc from '/@src/documentation/blocks/feature/FeatureBlockGDoc.vue'
import FeatureBlockHDoc from '/@src/documentation/blocks/feature/FeatureBlockHDoc.vue'
import FeatureBlockIDoc from '/@src/documentation/blocks/feature/FeatureBlockIDoc.vue'
import FeatureBlockJDoc from '/@src/documentation/blocks/feature/FeatureBlockJDoc.vue'
import FeatureBlockKDoc from '/@src/documentation/blocks/feature/FeatureBlockKDoc.vue'
import FeatureBlockLDoc from '/@src/documentation/blocks/feature/FeatureBlockLDoc.vue'

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
  {
    label: 'بلوک طرح K',
    target: 'block-k-demo',
  },
  {
    label: 'بلوک طرح L',
    target: 'block-l-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="بلاک های ویژگی"
      subtitle="بیش از ۱۲ بلوک ویژگی قابل تنظیم در اختیار شماست تا به ساخت چیدمان‌ها، صفحات و محتوای خود بپردازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="1080px"
    />

    <!--Feature block A demo-->
    <FeatureBlockADoc />

    <!--Feature block B demo-->
    <FeatureBlockBDoc />

    <!--Feature block C demo-->
    <FeatureBlockCDoc />

    <!--Feature block D demo-->
    <FeatureBlockDDoc />

    <!--Feature block E demo-->
    <FeatureBlockEDoc />

    <!--Feature block F demo-->
    <FeatureBlockFDoc />

    <!--Feature block G demo-->
    <FeatureBlockGDoc />

    <!--Feature block H demo-->
    <FeatureBlockHDoc />

    <!--Feature block I demo-->
    <FeatureBlockIDoc />

    <!--Feature block J demo-->
    <FeatureBlockJDoc />

    <!--Feature block K demo-->
    <FeatureBlockKDoc />

    <!--Feature block L demo-->
    <FeatureBlockLDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
