<script setup lang="ts">
const demoLinks = [
  {
    label: 'بلوک طرح A',
    target: 'block-a-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Table Blocks"
      subtitle="بیش از ۸ بلوک نوار جستجو قابل تنظیم منتظر شما هستند تا لایه‌ها، صفحات و محتواهای خود را بسازید."
    />

    <DemoLinks
      :links="demoLinks"
      width="240px"
    />

    <Section id="block-a-demo">
      <Container>
        <DemoTitle
          title="بلوک طرح A"
          subtitle="بلوک طرح A سبک 1"
          link="block-a-props"
        />

        <TableBlockA />
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
