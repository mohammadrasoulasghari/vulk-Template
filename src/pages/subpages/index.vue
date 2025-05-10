<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
useHead({
  title: 'زیر صفحات',
})
</script>

<template>
  <div>
    <Section color="grey">
      <Container class="mt-6">
        <SectionTitle
          title="زیرصفحات پیش‌ساخته"
          subtitle="زیر صفحات"
        />

        <DemoList :categories="['subpages']" />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
