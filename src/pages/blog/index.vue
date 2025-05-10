<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
useHead({
  title: 'صفحات وبلاگ',
})
</script>

<template>
  <div>
    <Section color="grey">
      <Container class="mt-6">
        <SectionTitle
          title="پیش‌نمایش‌های پیش‌ساخته برای وبلاگ"
          subtitle="صفحات وبلاگ"
        />

        <DemoList :categories="['blog']" />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
