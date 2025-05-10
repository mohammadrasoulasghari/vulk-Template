<script setup lang="ts">
import { buttonProps, buttonIcons } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-icons-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="آیکون برای دکمه"
            subtitle="انواع دکمه با آیکون"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button
                :long="1"
                icon-left="feather:github"
              >
                گیتهاب
              </Button>
              <Button
                color="primary"
                :long="1"
                icon-right="feather:arrow-right"
              >
                حرکت به راست
              </Button>
              <Button
                :long="1"
                icon-left="feather:github"
              >
                گیتهاب
              </Button>
              <Button
                size="medium"
                :long="1"
                icon-left="feather:github"
              >
                گیت هاب
              </Button>
              <Button
                size="large"
                :long="1"
                icon-left="feather:github"
              >
                گیت هاب
              </Button>
              <Button
                color="danger"
                outlined
                :long="1"
                icon-left="feather:heart"
              >
                دوستش دارم
              </Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="buttonIcons"
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
              Vulk در طعم‌های مختلف ارائه می‌شوند. دکمه‌ها می‌توانند آیکن‌هایی
              در سمت چپ یا سمت راست داشته باشند. برای وارد کردن آیکن سمت چپ، از
              ویژگی
              <code>icon-left</code>
              استفاده کنید. برای وارد کردن آیکن سمت راست، از ویژگی
              <code>icon-right</code>
              استفاده کنید. تمام مجموعه‌های آیکن‌های Iconify در دسترس هستند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
