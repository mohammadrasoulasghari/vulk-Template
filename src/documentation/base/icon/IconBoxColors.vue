<script setup lang="ts">
import { iconboxProps, iconboxColors } from '/@src/data/docs/base/icons'
</script>

<template>
  <Section
    id="iconbox-colors-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="رنگبندی‌های جعبه"
            subtitle="مروری بر رنگبندی‌های جعبه‌ها"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <IconBox
                size="medium"
                color="primary"
              >
                <i
                  class="iconify"
                  data-icon="ion:paw-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="success"
              >
                <i
                  class="iconify"
                  data-icon="ion:skull-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="info"
              >
                <i
                  class="iconify"
                  data-icon="ion:layers-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="warning"
              >
                <i
                  class="iconify"
                  data-icon="ion:diamond-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="danger"
              >
                <i
                  class="iconify"
                  data-icon="ion:flash-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="purple"
              >
                <i
                  class="iconify"
                  data-icon="ion:shirt-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="blue"
              >
                <i
                  class="iconify"
                  data-icon="ion:person-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="green"
              >
                <i
                  class="iconify"
                  data-icon="ion:storefront-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="orange"
              >
                <i
                  class="iconify"
                  data-icon="ion:briefcase-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="yellow"
              >
                <i
                  class="iconify"
                  data-icon="ion:speedometer-outline"
                />
              </IconBox>
            </div>
          </div>
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <IconBox
                size="medium"
                color="primary"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:help-buoy-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="success"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:newspaper-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="info"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:game-controller-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="warning"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:mail-unread-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="danger"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:lock-closed-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="purple"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:earth-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="blue"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:server-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="green"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:business-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="orange"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:ice-cream-outline"
                />
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox
                size="medium"
                color="yellow"
                rounded
              >
                <i
                  class="iconify"
                  data-icon="ion:terminal-outline"
                />
              </IconBox>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="iconboxColors"
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
              نشده در زمان ساخت پاک می‌شوند. رنگ جعبه‌های آیکون را می‌توان با
              استفاده از خاصیت
              <code>color</code>
              شخصی‌سازی کرد.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
