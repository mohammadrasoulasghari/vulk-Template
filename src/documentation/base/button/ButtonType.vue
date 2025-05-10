<script setup lang="ts">
import { buttonProps, buttonTypes } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-types-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="نوع دکمه"
            subtitle="انواع دکمه‌های موجود"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button>یک دکمه معمولی</Button>
              <Button href="https://google.com">
                یک لینک
              </Button>
              <Button to="index">
                یک دکمه از نوع RouterLink
              </Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="buttonTypes"
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
              Vulk در طعم‌های مختلف ارائه می‌شوند. شما می‌توانید نوع عنصر رندر
              شده را با استفاده از ویژگی
              <code>to</code>
              کنترل کنید. اگر یک لینک خارجی به عنوان مقدار وارد کنید، یک تگ HTML
              <code>&#x3C;a&#x3E;&#x3C;/a&#x3E;</code>
              تولید می‌شود. اگر یک مسیر وارد کنید، یک عنصر
              <code>&#x3C;RouterLink /&#x3E;</code>
              تولید می‌شود. حذف این ویژگی، یک عنصر استاندارد HTML
              <code>&#x3C;button&#x3E;&#x3C;/button&#x3E;</code>
              ایجاد می‌کند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
