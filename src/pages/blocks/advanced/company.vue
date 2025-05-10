<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedCompanyBlockADoc from '/@src/documentation/advanced/company/AdvancedCompanyBlockADoc.vue'
import AdvancedCompanyBlockBDoc from '/@src/documentation/advanced/company/AdvancedCompanyBlockBDoc.vue'
import AdvancedCompanyBlockDDoc from '/@src/documentation/advanced/company/AdvancedCompanyBlockDDoc.vue'
import AdvancedCompanyBlockCDoc from '/@src/documentation/advanced/company/AdvancedCompanyBlockCDoc.vue'

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
      title="شرکت پیشرفته"
      subtitle="بلوک‌های پیشرفته Vulk را کشف کنید و یاد بگیرید چگونه می‌توانید آن‌ها را سفارشی کنید تا پروژه‌های شگفت‌انگیز و به‌یادماندنی بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="400px"
    />

    <!--Company block A demo-->
    <AdvancedCompanyBlockADoc />

    <!--Company block B demo-->
    <AdvancedCompanyBlockBDoc />

    <!--Company block C demo-->
    <AdvancedCompanyBlockCDoc />

    <!--Company block D demo-->
    <AdvancedCompanyBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
