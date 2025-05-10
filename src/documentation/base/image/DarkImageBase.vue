<script setup lang="ts">
import { darkImageProps, darkImage } from '/@src/data/docs/base/images'
</script>

<template>
  <Section
    id="image-dark-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="تصویر تیره"
            subtitle="ویژگی تصویر حالت تیره"
          />
          <div class="is-flex is-justify-content-center mx-auto max-w-4 pt-4">
            <DarkImage
              src="/assets/illustrations/features/vr.svg"
              src-dark="/assets/illustrations/features/vr-dark.svg"
              alt=""
              width="800"
              height="600"
            />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="darkImage"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="darkImageProps"
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
              تصاویر نقش مرکزی در هر برنامه وب و موبایل دارند. ویرایشگر تصویر
              تاریک ولک به شما این امکان را می‌دهد که تصاویر را برای هر دو حالت
              روشن و تاریک تنظیم کنید، بدون دردسر. کامپوننت تصویر تاریک دو منبع
              تصویر با استفاده از پروپ‌های
              <code>src</code>
              و
              <code>dark-src</code>
              دریافت می‌کند. همچنین پروپ‌های
              <code>width</code>
              و
              <code>height</code>
              را ارائه می‌دهد و راهی برای تنظیم نمایش تصویر به حالت
              <code>inline</code>
              را نیز فراهم می‌آورد.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
