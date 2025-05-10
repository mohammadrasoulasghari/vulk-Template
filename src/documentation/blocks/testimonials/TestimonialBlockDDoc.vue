<script setup lang="ts">
import { socialTestimonials } from '/@src/data/blocks/testimonials'
import {
  testimonialsBlockD,
  testimonialsBlockDProps,
  testimonialsBlockDSample,
} from '/@src/data/docs/blocks/testimonials/blockD'
</script>

<template>
  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 1"
        link="block-d-props"
      />

      <TestimonialBlockD :testimonials="socialTestimonials" />
    </Container>
  </Section>

  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 2"
        link="block-d-props"
      />

      <TestimonialBlockD
        :testimonials="socialTestimonials"
        squared
      />
    </Container>
  </Section>

  <Section
    id="block-d-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح D"
        subtitle="پراپ‌های در دسترس برای بلوک طرح D"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockDSample"
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
