<script setup lang="ts">
import { iconboxProps, iconboxRounded } from '/@src/data/docs/base/icons'
</script>

<template>
  <Section
    id="iconbox-rounded-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="جعبه گرد"
            subtitle="مروری بر اندازه‌های مختلف جعبه گرد"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <IconBox
                size="small"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox rounded>
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="large"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="big"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="xl"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="iconboxRounded"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="iconboxProps"
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
              آیکون‌ها نقش مرکزی در هر برنامه وب و موبایل دارند. جعبه‌های آیکون
              Vulk با
              <a
                href="https://icones.netlify.app/"
                target="_blank"
                class="link"
              >
                Iconify
              </a>
              سازگار هستند که هزاران آیکون را ارائه می‌دهد. آیکون‌های استفاده
              نشده در زمان ساخت پاک می‌شوند. شکل جعبه‌های آیکون را می‌توان با
              استفاده از خاصیت
              <code>rounded</code>
              شخصی‌سازی کرد.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
