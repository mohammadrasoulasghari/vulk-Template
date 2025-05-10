<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
useHead({
  title: 'صفحات درباره ما',
})
</script>

<template>
  <div>
    <Section color="grey">
      <Container class="mt-6">
        <SectionTitle
          title="با تیم رهبری ما آشنا شوید"
          subtitle="یک تیم با استعداد"
        />

        <DemoList :categories="['about']" />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
