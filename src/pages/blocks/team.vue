<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import TeamBlockADoc from '/@src/documentation/blocks/team/TeamBlockADoc.vue'
import TeamBlockBDoc from '/@src/documentation/blocks/team/TeamBlockBDoc.vue'
import TeamBlockCDoc from '/@src/documentation/blocks/team/TeamBlockCDoc.vue'
import TeamBlockDDoc from '/@src/documentation/blocks/team/TeamBlockDDoc.vue'
import TeamBlockEDoc from '/@src/documentation/blocks/team/TeamBlockEDoc.vue'
import TeamBlockFDoc from '/@src/documentation/blocks/team/TeamBlockFDoc.vue'
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
]
</script>

<template>
  <div>
    <HeroSub
      title="بلاک های تیم"
      subtitle="بیش از ۶ بلوک تیم قابل تنظیم منتظر شما هستند تا طرح‌ها، صفحات و محتوای خود را بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="600px"
    />

    <!--Block A demo-->
    <TeamBlockADoc />

    <!--Block B demo-->
    <TeamBlockBDoc />

    <!--Block C demo-->
    <TeamBlockCDoc />

    <!--Block D demo-->
    <TeamBlockDDoc />

    <!--Block E demo-->
    <TeamBlockEDoc />

    <!--Block F demo-->
    <TeamBlockFDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
