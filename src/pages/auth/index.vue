<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
useHead({
  title: 'صفحات احراز هویت',
})
</script>

<template>
  <div>
    <Section color="grey">
      <Container class="mt-6">
        <SectionTitle
          title="صفحات پیش‌ساخته برای ورود و ثبت نام"
          subtitle="صفحات احراز هویت"
        />

        <DemoList :categories="['auth']" />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
