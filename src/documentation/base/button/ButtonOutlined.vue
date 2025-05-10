<script setup lang="ts">
import { buttonProps, buttonOutlined } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-outlined-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="حاشیه‌دار"
            subtitle="انواع دکمه‌های حاشیه‌دار"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button
                color="primary"
                :long="1"
                outlined
              >
                اولیه
              </Button>
              <Button
                color="success"
                :long="1"
                outlined
              >
                گام‌های موفقیت
              </Button>
              <Button
                color="info"
                :long="1"
                outlined
              >
                اینفو
              </Button>
              <Button
                color="warning"
                :long="1"
                outlined
              >
                هشدار
              </Button>
              <Button
                color="danger"
                :long="1"
                outlined
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
              :code="buttonOutlined"
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
              Vulk در طعم‌های مختلف ارائه می‌شوند. شما می‌توانید دکمه‌های برجسته
              را با استفاده از ویژگی
              <code>outlined</code>
              بسازید. ویژگی
              <code>outlined</code>
              از نوع بولین است و نیازی به مقدار ندارد. این ویژگی فقط بر روی
              دکمه‌های رنگی کار می‌کند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
