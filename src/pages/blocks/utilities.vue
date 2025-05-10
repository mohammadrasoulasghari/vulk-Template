<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import UtilitiesDoc from '/@src/documentation/blocks/setup/UtilitiesDoc.vue'
</script>

<template>
  <div>
    <HeroSub
      title="ابزارهای وولک"
      subtitle="Vulk با مجموعه‌ای از ابزارهای CSS همراه است که توسعه شما را بسیار آسان‌تر خواهد کرد. ابزارهای Vulk را بررسی کنید."
    />

    <Section>
      <Container>
        <!--Theme Utilities-->
        <UtilitiesDoc />
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
