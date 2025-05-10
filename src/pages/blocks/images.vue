<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import DarkImageBase from '/@src/documentation/base/image/DarkImageBase.vue'
import ImageRatioBase from '/@src/documentation/base/image/ImageRatioBase.vue'
import ImageRatioRounded from '/@src/documentation/base/image/ImageRatioRounded.vue'
import ImageRatioSquare from '/@src/documentation/base/image/ImageRatioSquare.vue'

const demoLinks = [
  {
    label: 'حالت تیره',
    target: 'image-dark-demo',
  },
  {
    label: 'نسبت تصویر',
    target: 'image-ratio-demo',
  },
  {
    label: 'گرد',
    target: 'image-rounded-demo',
  },
  {
    label: 'مربع',
    target: 'image-square-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="کامپوننت تصویر"
      subtitle="تصاویر در وب‌سایت‌های امروزی بسیار مهم هستند. آنها به انتقال پیام شما به کاربران بدون نیاز به نوشتن کمک می‌کنند. تصاویر ولک را بررسی کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="360px"
    />

    <!--Dark image demo-->
    <DarkImageBase />

    <!--Image ratio demo-->
    <ImageRatioBase />

    <!--Image ratio rounded demo-->
    <ImageRatioRounded />

    <!--Image ratio square demo-->
    <ImageRatioSquare />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
