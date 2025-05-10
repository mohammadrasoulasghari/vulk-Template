<script setup lang="ts">
import {
  boxedTestimonials,
  boxedTestimonials2,
} from '/@src/data/blocks/testimonials'
import {
  testimonialsBlockB,
  testimonialsBlockBProps,
  testimonialsBlockBSample,
} from '/@src/data/docs/blocks/testimonials/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 1"
        link="block-b-props"
      />

      <TestimonialBlockB :testimonials="boxedTestimonials" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 2"
        link="block-b-props"
      />

      <TestimonialBlockB
        :testimonials="boxedTestimonials2"
        squared
      />
    </Container>
  </Section>

  <Section
    id="block-b-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح B"
        subtitle="پراپ‌های در دسترس برای بلوک طرح B"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockBSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های نظرات مشتریان بسیار قابل سفارشی‌سازی و انعطاف‌پذیر
            عرضه می‌شود که می‌توانید در هر صفحه‌ای از آن‌ها استفاده کنید. هر
            بلوک دارای سبک‌ها و ویژگی‌های خود است. از ویژگی‌ها برای ساخت
            نمونه‌های خود استفاده کنید یا از یکی از نمونه‌های از پیش ساخته‌شده
            استفاده کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
