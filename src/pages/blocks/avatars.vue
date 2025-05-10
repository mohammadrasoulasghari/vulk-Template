<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import AvatarSimpleSizes from '/@src/documentation/base/avatar/AvatarSimpleSizes.vue'
import AvatarSimpleShapes from '/@src/documentation/base/avatar/AvatarSimpleShapes.vue'
import AvatarSimpleBadge from '/@src/documentation/base/avatar/AvatarSimpleBadge.vue'
import AvatarGroupBlock from '/@src/documentation/base/avatar/AvatarGroupBlock.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'اندازه‌ها',
    target: 'avatar-size-demo',
  },
  {
    label: 'مربع',
    target: 'avatar-square-demo',
  },
  {
    label: 'نشان',
    target: 'avatar-badge-demo',
  },
  {
    label: 'گروه',
    target: 'avatar-group-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه آواتار"
      subtitle="آواتارها به یکی از اجزای اصلی تقریباً تمام برنامه‌های وب و موبایل تبدیل شده‌اند. آواتارهای Vulk را کاوش کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="340px"
    />

    <!--Avatar sizes demo-->
    <AvatarSimpleSizes />

    <!--Avatar squared demo-->
    <AvatarSimpleShapes />

    <!--Avatar badge-->
    <AvatarSimpleBadge />

    <!--Avatar groups-->
    <AvatarGroupBlock />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
