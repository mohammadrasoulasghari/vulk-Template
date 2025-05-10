<script setup lang="ts">
import { buttonProps, buttonColor } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-colors-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="رنگ دکمه"
            subtitle="رنگ‌های موجود برای دکمه‌ها"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button :long="1">
                پیشفرض
              </Button>
              <Button
                color="primary"
                :long="1"
              >
                اولیه
              </Button>
              <Button
                color="success"
                :long="1"
              >
                گام‌های موفقیت
              </Button>
              <Button
                color="info"
                :long="1"
              >
                اینفو
              </Button>
              <Button
                color="warning"
                :long="1"
              >
                هشدار
              </Button>
              <Button
                color="danger"
                :long="1"
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
              :code="buttonColor"
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
              Vulk در طعم‌های مختلف ارائه می‌شوند. شما می‌توانید رنگ دکمه‌ها را
              با استفاده از ویژگی
              <code>color</code>
              کنترل کنید. مقادیر مجاز شامل
              <code>primary</code>
              ,
              <code>success</code>
              ,
              <code>info</code>
              ,
              <code>warning</code>
              و
              <code>danger</code>
              هستند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
