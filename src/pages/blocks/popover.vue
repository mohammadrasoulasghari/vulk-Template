<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import PopoverBase from '/@src/documentation/base/popover/PopoverBase.vue'
import PopoverTrigger from '/@src/documentation/base/popover/PopoverTrigger.vue'
import PopoverColors from '/@src/documentation/base/popover/PopoverColors.vue'
import PopoverCustomIcons from '/@src/documentation/base/popover/PopoverCustomIcons.vue'
import PopoverCustomAvatars from '/@src/documentation/base/popover/PopoverCustomAvatars.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'جایگیری',
    target: 'popover-placement-demo',
  },
  {
    label: 'راه‌انداز',
    target: 'popover-trigger-demo',
  },
  {
    label: 'رنگبندی',
    target: 'popover-colors-demo',
  },
  {
    label: 'آیکون‌ها',
    target: 'custom-icons-demo',
  },
  {
    label: 'آواتارها',
    target: 'custom-avatars-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه پاپ آور"
      subtitle="پاپاورها یک بخش مرکزی در تمام برنامه های وب و موبایل با کاربردهای متنوع هستند. پاپاورهای Vulk را کاوش کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="500px"
    />

    <!--Popover base demo-->
    <PopoverBase />

    <!--Popover trigger demo-->
    <PopoverTrigger />

    <!--Popover colors demo-->
    <PopoverColors />

    <!--Popover icons demo-->
    <PopoverCustomIcons />

    <!--Popover avatars demo-->
    <PopoverCustomAvatars />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
