<script setup lang="ts">
import {
  boxedTestimonials,
  boxedTestimonials2,
} from '/@src/data/blocks/testimonials'
import {
  testimonialsBlockC,
  testimonialsBlockCProps,
  testimonialsBlockCSample,
} from '/@src/data/docs/blocks/testimonials/blockC'
</script>

<template>
  <Section
    id="block-c-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 1"
        link="block-c-props"
      />

      <TestimonialBlockC :testimonials="boxedTestimonials2" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 2"
        link="block-c-props"
      />

      <TestimonialBlockC
        :testimonials="boxedTestimonials"
        squared
      />
    </Container>
  </Section>

  <Section
    id="block-c-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح C"
        subtitle="پراپ‌های در دسترس برای بلوک طرح C"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockC"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockCSample"
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
