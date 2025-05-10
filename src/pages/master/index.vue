<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
useHead({
  title: 'طرح‌بندی‌های اولیه',
})
</script>

<template>
  <div>
    <Section color="grey">
      <Container class="mt-6">
        <SectionTitle
          title="طرح‌بندی‌های از پیش‌ساخته شده"
          subtitle="طرح‌بندی‌های اولیه"
        />

        <DemoList :categories="['layouts']" />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
