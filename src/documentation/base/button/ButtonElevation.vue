<script setup lang="ts">
import { buttonProps, buttonElevation } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-elevation-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="ارتفاع"
            subtitle="تنوعات ارتفاع دکمه"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button
                color="primary"
                :long="1"
                elevated
              >
                اولیه
              </Button>
              <Button
                color="success"
                :long="1"
                elevated
              >
                گام‌های موفقیت
              </Button>
              <Button
                color="info"
                :long="1"
                elevated
              >
                اینفو
              </Button>
              <Button
                color="warning"
                :long="1"
                elevated
              >
                هشدار
              </Button>
              <Button
                color="danger"
                :long="1"
                elevated
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
              :code="buttonElevation"
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
              Vulk در طعم‌های مختلف ارائه می‌شوند. دکمه‌ها می‌توانند با ارتفاع
              متفاوت نمایش داده شوند، به‌طوری‌که یک سایه رنگی را به‌طور پیش‌فرض
              یا در حالت هاور نشان می‌دهند. برای ایجاد ارتفاع پیش‌فرض برای دکمه،
              از ویژگی
              <code>elevated</code>
              استفاده کنید. برای ایجاد ارتفاع دکمه در حالت هاور، از ویژگی
              <code>raised</code>
              استفاده کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
