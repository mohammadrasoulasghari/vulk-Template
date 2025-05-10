<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import TagColor from '/@src/documentation/base/tag/TagColor.vue'
import TagRounded from '/@src/documentation/base/tag/TagRounded.vue'
import TagSquare from '/@src/documentation/base/tag/TagSquare.vue'
import TagOutlined from '/@src/documentation/base/tag/TagOutlined.vue'
import TagElevated from '/@src/documentation/base/tag/TagElevated.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'رنگبندی',
    target: 'tag-colors-demo',
  },
  {
    label: 'گرد',
    target: 'tag-rounded-demo',
  },
  {
    label: 'مربع',
    target: 'tag-square-demo',
  },
  {
    label: 'حاشیه‌دار',
    target: 'tag-outlined-demo',
  },
  {
    label: 'ارتفاع',
    target: 'tag-elevation-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه برچسب"
      subtitle="تگ‌ها بخشی ضروری از تمام برنامه‌های وب و موبایل هستند و کاربردهای متنوعی دارند. تگ‌های Vulk را کاوش کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="480px"
    />

    <!--Tag colors demo-->
    <TagColor />

    <!--Tag rounded demo-->
    <TagRounded />

    <!--Tag square demo-->
    <TagSquare />

    <!--Tag outlined demo-->
    <TagOutlined />

    <!--Tag elevated demo-->
    <TagElevated />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
