<script setup lang="ts">
import { workoutTestimonials } from '/@src/data/pages/workout'

import {
  testimonialsBlockG,
  testimonialsBlockGProps,
  testimonialsBlockGSample,
} from '/@src/data/docs/advanced/testimonials/blockG'
</script>

<template>
  <Section
    id="block-g-demo-title"
    class="pb-0"
  >
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک پیشرفته طرح G سبک 1"
        link="block-g-props"
      />
    </Container>
  </Section>

  <Section
    id="block-g-demo"
    bordered-bottom
    class="px-0"
  >
    <Container max-width>
      <TestimonialsCarouselColor :slides="workoutTestimonials" />
    </Container>
  </Section>

  <Section
    id="block-g-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح G"
        subtitle="پراپ‌های در دسترس برای بلوک طرح G"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockG"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockGProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockGSample"
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
