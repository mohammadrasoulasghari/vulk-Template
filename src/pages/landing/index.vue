<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
useHead({
  title: 'صفحات لندینگ',
})
</script>

<template>
  <div>
    <Section color="grey">
      <Container class="mt-6">
        <SectionTitle
          title="صفحات پیش‌ساخته به منظور دمو"
          subtitle="صفحات لندینگ"
        />

        <DemoList :categories="['landing']" />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
