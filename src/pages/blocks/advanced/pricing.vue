<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedPricingBlockADoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockADoc.vue'
import AdvancedPricingBlockBDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockBDoc.vue'
import AdvancedPricingBlockCDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockCDoc.vue'
import AdvancedPricingBlockDDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockDDoc.vue'
import AdvancedPricingBlockEDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockEDoc.vue'
import AdvancedPricingBlockFDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockFDoc.vue'
import AdvancedPricingBlockGDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockGDoc.vue'
import AdvancedPricingBlockHDoc from '/@src/documentation/advanced/pricing/AdvancedPricingBlockHDoc.vue'

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
      title="Advanced Pricing"
      subtitle="بلوک‌های پیشرفته Vulk را کشف کنید و یاد بگیرید چگونه می‌توانید آن‌ها را سفارشی کنید تا پروژه‌های شگفت‌انگیز و به‌یادماندنی بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="780px"
    />

    <!--Pricing block A demo-->
    <AdvancedPricingBlockADoc />

    <!--Pricing block B demo-->
    <AdvancedPricingBlockBDoc />

    <!--Pricing block C demo-->
    <AdvancedPricingBlockCDoc />

    <!--Pricing block D demo-->
    <AdvancedPricingBlockDDoc />

    <!--Pricing block E demo-->
    <AdvancedPricingBlockEDoc />

    <!--Pricing block F demo-->
    <AdvancedPricingBlockFDoc />

    <!--Pricing block G demo-->
    <AdvancedPricingBlockGDoc />

    <!--Pricing block H demo-->
    <AdvancedPricingBlockHDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
