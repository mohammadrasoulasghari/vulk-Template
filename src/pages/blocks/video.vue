<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import VideoBlockADoc from '/@src/documentation/blocks/video/VideoBlockADoc.vue'
import VideoBlockBDoc from '/@src/documentation/blocks/video/VideoBlockBDoc.vue'
import VideoBlockCDoc from '/@src/documentation/blocks/video/VideoBlockCDoc.vue'

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
      title="بلوک‌های ویدیو"
      subtitle="Vulk با ۳ نوع بلوک بخش ویدیو آماده برای استفاده عرضه می‌شود. البته شما می‌توانید به راحتی بلوک‌های خود را از بلوک‌های موجود بسازید."
    />
    <DemoLinks
      :links="demoLinks"
      width="320px"
    />

    <!--Video block A docs-->
    <VideoBlockADoc />

    <!--Video block B docs-->
    <VideoBlockBDoc />

    <!--Video block C docs-->
    <VideoBlockCDoc />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
