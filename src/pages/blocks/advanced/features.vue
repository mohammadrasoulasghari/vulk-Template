<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedFeatureBlockADoc from '/@src/documentation/advanced/features/AdvancedFeatureBlockADoc.vue'
import AdvancedFeatureBlockBDoc from '/@src/documentation/advanced/features/AdvancedFeatureBlockBDoc.vue'
import AdvancedFeatureBlockCDoc from '/@src/documentation/advanced/features/AdvancedFeatureBlockCDoc.vue'
import AdvancedFeatureBlockDDoc from '/@src/documentation/advanced/features/AdvancedFeatureBlockDDoc.vue'
import AdvancedFeatureBlockEDoc from '/@src/documentation/advanced/features/AdvancedFeatureBlockEDoc.vue'
import AdvancedFeatureBlockFDoc from '/@src/documentation/advanced/features/AdvancedFeatureBlockFDoc.vue'

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
]
</script>

<template>
  <div>
    <HeroSub
      title="ویژگی های پیشرفته"
      subtitle="بلوک‌های پیشرفته Vulk را کشف کنید و یاد بگیرید چگونه می‌توانید آن‌ها را سفارشی کنید تا پروژه‌های شگفت‌انگیز و به‌یادماندنی بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="580px"
    />

    <!--Feature block A demo-->
    <AdvancedFeatureBlockADoc />

    <!--Feature block B demo-->
    <AdvancedFeatureBlockBDoc />

    <!--Feature block C demo-->
    <AdvancedFeatureBlockCDoc />

    <!--Feature block D demo-->
    <AdvancedFeatureBlockDDoc />

    <!--Feature block E demo-->
    <AdvancedFeatureBlockEDoc />

    <!--Feature block F demo-->
    <AdvancedFeatureBlockFDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
