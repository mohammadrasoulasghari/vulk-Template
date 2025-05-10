<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import SectionBase from '/@src/documentation/layout/section/SectionBase.vue'
import SectionColor from '/@src/documentation/layout/section/SectionColor.vue'
import SectionBorders from '/@src/documentation/layout/section/SectionBorders.vue'
import SectionWave from '/@src/documentation/layout/section/SectionWave.vue'
import SectionTongue from '/@src/documentation/layout/section/SectionTongue.vue'
import SectionBackground from '/@src/documentation/layout/section/SectionBackground.vue'

const demoLinks = [
  {
    label: 'بخشبندی',
    target: 'section-base-demo',
  },
  {
    label: 'رنگبندی',
    target: 'section-color-demo',
  },
  {
    label: 'حاشیه‌دار',
    target: 'section-borders-demo',
  },
  {
    label: 'مواج',
    target: 'section-wave-demo',
  },
  {
    label: 'زبانه‌های آتش',
    target: 'section-tongue-demo',
  },
  {
    label: 'پس‌زمینه‌دار',
    target: 'section-background-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="بلوک‌های بخشبندی"
      subtitle="بخش‌ها بلوک‌های پایه‌ای برای ساختار هر وب‌سایت هستند. بخش‌های Vulk بسیار انعطاف‌پذیر و به‌راحتی قابل تنظیم هستند. بخش‌های Vulk را بررسی کنید."
    />
    <DemoLinks
      :links="demoLinks"
      width="580px"
    />

    <!--Section base demo-->
    <SectionBase />

    <!--Section color demo-->
    <SectionColor />

    <!--Section borders demo-->
    <SectionBorders />

    <!--Section wave demo-->
    <SectionWave />

    <!--Section tongue demo-->
    <SectionTongue />

    <!--Section background demo-->
    <SectionBackground />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
