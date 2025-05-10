<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import ContentBlockADoc from '/@src/documentation/blocks/content/ContentBlockADoc.vue'
import ContentBlockBDoc from '/@src/documentation/blocks/content/ContentBlockBDoc.vue'
import ContentBlockCDoc from '/@src/documentation/blocks/content/ContentBlockCDoc.vue'
import ContentBlockDDoc from '/@src/documentation/blocks/content/ContentBlockDDoc.vue'
import ContentBlockEDoc from '/@src/documentation/blocks/content/ContentBlockEDoc.vue'
import ContentBlockFDoc from '/@src/documentation/blocks/content/ContentBlockFDoc.vue'
import ContentBlockGDoc from '/@src/documentation/blocks/content/ContentBlockGDoc.vue'
import ContentBlockHDoc from '/@src/documentation/blocks/content/ContentBlockHDoc.vue'
import ContentBlockIDoc from '/@src/documentation/blocks/content/ContentBlockIDoc.vue'
import ContentBlockJDoc from '/@src/documentation/blocks/content/ContentBlockJDoc.vue'

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
      title="بلاک های محتوا"
      subtitle="بیش از ۱۰ بلوک محتوای قابل تنظیم در دسترس شماست تا به کمک آن‌ها طرح‌بندی‌ها، صفحات و محتوای خود را بسازید."
    />
    <DemoLinks
      :links="demoLinks"
      width="940px"
    />

    <!--Content Block A demo-->
    <ContentBlockADoc />

    <!--Content Block B demo-->
    <ContentBlockBDoc />

    <!--Content Block C demo-->
    <ContentBlockCDoc />

    <!--Content Block D demo-->
    <ContentBlockDDoc />

    <!--Content Block E demo-->
    <ContentBlockEDoc />

    <!--Content Block F demo-->
    <ContentBlockFDoc />

    <!--Content Block G demo-->
    <ContentBlockGDoc />

    <!--Content Block H demo-->
    <ContentBlockHDoc />

    <!--Content Block I demo-->
    <ContentBlockIDoc />

    <!--Content Block J demo-->
    <ContentBlockJDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
