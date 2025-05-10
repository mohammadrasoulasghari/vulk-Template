<script setup lang="ts">
import { testimonials } from '/@src/data/pages/commerce'

import {
  testimonialsBlockF,
  testimonialsBlockFProps,
  testimonialsBlockFSample,
} from '/@src/data/docs/advanced/testimonials/blockF'
</script>

<template>
  <Section
    id="block-f-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک پیشرفته طرح F سبک 1"
        link="block-f-props"
      />

      <div class="py-4" />

      <TestimonialsCarousel :slides="testimonials" />
    </Container>
  </Section>

  <Section
    color="darker"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک پیشرفته طرح F سبک 2"
        link="block-f-props"
        inverted
      />

      <div class="py-4" />

      <TestimonialsCarousel
        :slides="testimonials"
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-f-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح F"
        subtitle="پراپ‌های در دسترس برای بلوک طرح F"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockF"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockFSample"
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
