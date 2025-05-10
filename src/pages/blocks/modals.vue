<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import ModalBase from '/@src/documentation/base/modal/ModalBase.vue'
import ModalSmall from '/@src/documentation/base/modal/ModalSmall.vue'
import ModalMedium from '/@src/documentation/base/modal/ModalMedium.vue'
import ModalLarge from '/@src/documentation/base/modal/ModalLarge.vue'
import ModalBig from '/@src/documentation/base/modal/ModalBig.vue'

const demoLinks = [
  {
    label: 'مودال',
    target: 'modal-base-demo',
  },
  {
    label: 'کوچک',
    target: 'modal-small-demo',
  },
  {
    label: 'متوسط',
    target: 'modal-medium-demo',
  },
  {
    label: 'بزرگ',
    target: 'modal-large-demo',
  },
  {
    label: 'خیلی بزرگ',
    target: 'modal-big-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه مودال"
      subtitle="مدال‌ها بخش بسیار مهمی از برنامه‌های مدرن و پویا هستند. آن‌ها می‌توانند به نمایش اطلاعات اضافی کمک کنند. بررسی کنید مدال‌های Vulk را."
    />

    <DemoLinks
      :links="demoLinks"
      width="400px"
    />

    <!--Modal base demo-->
    <ModalBase />

    <!--Modal small demo-->
    <ModalSmall />

    <!--Modal medium demo-->
    <ModalMedium />

    <!--Modal large demo-->
    <ModalLarge />

    <!--Modal big demo-->
    <ModalBig />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
