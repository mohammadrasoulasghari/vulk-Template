<script setup lang="ts">
import { iconboxProps, iconboxSize } from '/@src/data/docs/base/icons'
</script>

<template>
  <Section
    id="iconbox-size-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="جعبه آیکون"
            subtitle="خلاصه‌ای از اندازه‌های جعبه آیکون‌ها"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <IconBox size="small">
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox>
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium">
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="large">
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="big">
                <i
                  class="iconify"
                  data-icon="ion:gift-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="xl">
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
              :code="iconboxSize"
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
              آیکون‌ها نقش مهمی در هر برنامه وب و موبایل دارند. جعبه‌های آیکون
              Vulk با
              <a
                href="https://icones.netlify.app/"
                target="_blank"
                class="link"
              >
                Iconify
              </a>
              سازگار هستند که هزاران آیکون را فراهم می‌کند. آیکون‌های استفاده
              نشده در زمان ساخت پاک می‌شوند. اندازه جعبه‌های آیکون را می‌توان با
              استفاده از خاصیت
              <code>size</code>
              شخصی‌سازی کرد.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
