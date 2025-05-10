<script setup lang="ts">
import { buttonProps, buttonShapes } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-shape-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="شکل دکمه"
            subtitle="دکمه‌های شکل گرد"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button rounded>
                نرمال
              </Button>
              <Button
                size="medium"
                rounded
              >
                متوسط
              </Button>
              <Button
                size="large"
                rounded
              >
                بزرگ
              </Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="buttonShapes"
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
              Buttons are a central part in all web and mobile application. Vulk
              buttons come in different flavors. You can control the button
              shape using the
              <code>rounded</code>
              prop. This prop is a
              <code>boolean</code>
              and does not need a value.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
