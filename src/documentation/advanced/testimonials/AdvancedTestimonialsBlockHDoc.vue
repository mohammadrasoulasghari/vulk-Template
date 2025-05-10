<script setup lang="ts">
import { testimonials } from '/@src/data/pages/jobs'

import {
  testimonialsBlockH,
  testimonialsBlockHProps,
  testimonialsBlockHSample,
} from '/@src/data/docs/advanced/testimonials/blockH'
</script>

<template>
  <Section
    id="block-h-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک پیشرفته طرح H سبک 1"
        link="block-h-props"
      />

      <div class="py-4" />

      <TestimonialsCarouselSingle :slides="testimonials" />
    </Container>
  </Section>

  <Section
    id="block-h-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح H"
        subtitle="پراپ‌های در دسترس برای بلوک طرح H"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockH"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockHProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockHSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های پیشرفته و جذاب تستیمونال همراه است که می‌توانید در
            هر صفحه‌ای استفاده کنید. هر بلوک دارای استایل‌ها و خصوصیات خاص خود
            است. از این خصوصیات برای ساخت نمونه‌های خود استفاده کنید یا از یکی
            از نمونه‌های از پیش ساخته شده استفاده کنید. هر بلوک به طور بومی از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            علامت‌گذاری و خصوصیات مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
