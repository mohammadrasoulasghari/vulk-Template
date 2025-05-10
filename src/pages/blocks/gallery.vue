<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import GalleryBlockADoc from '/@src/documentation/blocks/gallery/GalleryBlockADoc.vue'
import GalleryBlockBDoc from '/@src/documentation/blocks/gallery/GalleryBlockBDoc.vue'
import GalleryBlockCDoc from '/@src/documentation/blocks/gallery/GalleryBlockCDoc.vue'
import GalleryBlockDDoc from '/@src/documentation/blocks/gallery/GalleryBlockDDoc.vue'
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
]
</script>

<template>
  <div>
    <HeroSub
      title="بلاک های گالری"
      subtitle="بیش از ۴ بلوک گالری قابل تنظیم منتظر شما هستند تا طرح‌ها، صفحات و محتوای خود را بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="420px"
    />

    <!--Block A demo-->
    <GalleryBlockADoc />

    <!--Block B demo-->
    <GalleryBlockBDoc />

    <!--Block C demo-->
    <GalleryBlockCDoc />

    <!--Block D demo-->
    <GalleryBlockDDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
