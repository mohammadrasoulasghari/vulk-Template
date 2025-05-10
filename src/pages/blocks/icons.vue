<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import IconBoxSize from '/@src/documentation/base/icon/IconBoxSize.vue'
import IconBoxRounded from '/@src/documentation/base/icon/IconBoxRounded.vue'
import IconBoxColors from '/@src/documentation/base/icon/IconBoxColors.vue'
import IconBoxBorder from '/@src/documentation/base/icon/IconBoxBorder.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'اندازه',
    target: 'iconbox-size-demo',
  },
  {
    label: 'گرد',
    target: 'iconbox-rounded-demo',
  },
  {
    label: 'رنگبندی',
    target: 'iconbox-colors-demo',
  },
  {
    label: 'حاشیه‌دار',
    target: 'iconbox-border-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="کامپوننت آیکون"
      subtitle="آیکون‌ها بخش مهمی از هر اپلیکیشن وب و موبایل هستند. آن‌ها به کاربران کمک می‌کنند تا ویژگی‌های شما را به سرعت درک کنند. آیکون‌های Vulk را کاوش کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="360px"
    />

    <!--Iconbox sizes demo-->
    <IconBoxSize />

    <!--Iconbox rounded demo-->
    <IconBoxRounded />

    <!--Iconbox colors demo-->
    <IconBoxColors />

    <!--Iconbox border demo-->
    <IconBoxBorder />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
