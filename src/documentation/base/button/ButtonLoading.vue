<script setup lang="ts">
import { buttonProps, buttonLoading } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-loading-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="وضعیت بارگذاری"
            subtitle="دکمه در حالت بارگذاری"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button
                :long="1"
                loading
              >
                پیشفرض
              </Button>
              <Button
                color="primary"
                :long="1"
                loading
              >
                اولیه
              </Button>
              <Button
                color="success"
                :long="1"
                loading
              >
                گام‌های موفقیت
              </Button>
              <Button
                color="info"
                :long="1"
                loading
              >
                اینفو
              </Button>
              <Button
                color="warning"
                :long="1"
                loading
              >
                هشدار
              </Button>
              <Button
                color="danger"
                :long="1"
                loading
              >
                خطر
              </Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="buttonLoading"
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
              Vulk در طعم‌های مختلف ارائه می‌شوند. دکمه‌ها می‌توانند حالت
              بارگذاری داشته باشند. برای نمایش دکمه در حال بارگذاری، از ویژگی
              <code>loading</code>
              استفاده کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
