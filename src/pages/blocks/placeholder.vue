<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import PlaceholderDemo from '/@src/documentation/base/placeholder/PlaceholderDemo.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
</script>

<template>
  <div>
    <HeroSub
      title="مکان نگه‌دار"
      subtitle="فضاهای نگهداری محتوا به عنوان یکی از اجزای اصلی در برنامه‌های وب مدرن در حال رشد هستند. با فضاهای نگهداری محتوا در ولک آشنا شوید."
    />

    <!--Placeholder demo-->
    <PlaceholderDemo />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
