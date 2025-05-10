<script setup lang="ts">
import { mentorTestimonials } from '/@src/data/pages/mentors'

import {
  testimonialsBlockE,
  testimonialsBlockEProps,
  testimonialsBlockESample,
} from '/@src/data/docs/advanced/testimonials/blockE'
</script>

<template>
  <Section
    id="block-e-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک پیشرفته طرح E سبک 1"
        link="block-c-props"
      />

      <div class="py-4" />

      <TestimonialsTabbed
        :trainees="mentorTestimonials.trainees"
        :mentors="mentorTestimonials.mentors"
      />
    </Container>
  </Section>

  <Section
    id="block-e-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح E"
        subtitle="پراپ‌های در دسترس برای بلوک طرح E"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockE"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockESample"
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
