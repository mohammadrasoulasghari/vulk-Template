<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import PluginsDoc from '/@src/documentation/blocks/setup/PluginsDoc.vue'
</script>

<template>
  <div>
    <HeroSub
      title="پلاگین‌های وولک"
      subtitle="Vulk با چندین پلاگین ویو مفید که به شما در مسیر توسعه کمک می‌کند، ارائه می‌شود. پلاگین‌های Vulk را بررسی کنید."
    />

    <Section>
      <Container>
        <!--Plugins-->
        <PluginsDoc />
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
