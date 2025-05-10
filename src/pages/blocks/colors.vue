<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import ColorsDoc from '/@src/documentation/blocks/setup/ColorsDoc.vue'
</script>

<template>
  <div>
    <HeroSub
      title="رنگ‌های وولک"
      subtitle="اگرچه بر اساس بولما و Sass ساخته شده است، اما وولک از متغیرهای بومی CSS برای رنگ ها استفاده می‌کند. رنگ‌های وولک را کاوش کنید."
    />

    <Section>
      <Container>
        <!--Colors-->
        <ColorsDoc />
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
