<script setup lang="ts">
import { baseTestimonials } from '/@src/data/blocks/testimonials'
import {
  testimonialsBlockA,
  testimonialsBlockAProps,
  testimonialsBlockASample,
} from '/@src/data/docs/blocks/testimonials/blockA'
</script>

<template>
  <Section
    id="block-a-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 1"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        :limit="6"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 2"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 3"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        :limit="8"
        :columns="3"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 4"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        boxed
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 4"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        boxed
        :columns="3"
        :limit="8"
      />
    </Container>
  </Section>

  <Section
    id="block-a-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح A"
        subtitle="پراپ‌های در دسترس برای بلوک طرح A"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockASample"
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
