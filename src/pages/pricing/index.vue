<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
useHead({
  title: 'صفحات قیمت‌گذاری',
})
</script>

<template>
  <div>
    <Section color="grey">
      <Container class="mt-6">
        <SectionTitle
          title="صفحات پیش‌ساخته قیمت‌گذاری به منظور دمو"
          subtitle="صفحات قیمت‌گذاری"
        />

        <DemoList :categories="['pricing']" />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
