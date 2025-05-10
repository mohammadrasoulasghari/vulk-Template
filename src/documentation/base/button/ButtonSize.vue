<script setup lang="ts">
import { buttonProps, buttonSizes } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-size-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="اندازه‌های دکمه"
            subtitle="اندازه‌های دردسترس برای دکمه"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button>نرمال</Button>
              <Button size="medium">
                متوسط
              </Button>
              <Button size="large">
                بزرگ
              </Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="buttonSizes"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="buttonProps"
            />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                نمونه داده‌ای برای این مؤلفه موجود نیست
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              دکمه‌ها بخش مرکزی تمامی برنامه‌های وب و موبایل هستند. دکمه‌های
              Vulk در طعم‌های مختلف ارائه می‌شوند. شما می‌توانید اندازه دکمه را
              با استفاده از ویژگی
              <code>size</code>
              کنترل کنید. مقادیر پذیرفته شده
              <code>medium</code>
              و
              <code>large</code>
              هستند. همچنین می‌توانید متن دکمه را با افزودن ویژگی
              <code>bold</code>
              ضخیم‌تر کنید یا با استفاده از ویژگی
              <code>long</code>
              دکمه را پهن‌تر کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
