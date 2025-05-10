<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import AdvancedClientsBlockADoc from '/@src/documentation/advanced/clients/AdvancedClientsBlockADoc.vue'
import AdvancedClientsBlockBDoc from '/@src/documentation/advanced/clients/AdvancedClientsBlockBDoc.vue'
import AdvancedClientsBlockCDoc from '/@src/documentation/advanced/clients/AdvancedClientsBlockCDoc.vue'

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
]
</script>

<template>
  <div>
    <HeroSub
      title="مشتری های پیشرفته"
      subtitle="بلوک‌های پیشرفته Vulk را کشف کنید و یاد بگیرید چگونه می‌توانید آن‌ها را سفارشی کنید تا پروژه‌های شگفت‌انگیز و به‌یادماندنی بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="360px"
    />

    <!--Clients block A demo-->
    <AdvancedClientsBlockADoc />

    <!--Clients block B demo-->
    <AdvancedClientsBlockBDoc />

    <!--Clients block C demo-->
    <AdvancedClientsBlockCDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
