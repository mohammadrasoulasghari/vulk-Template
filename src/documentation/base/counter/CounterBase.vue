<script setup lang="ts">
import { counterProps, counterThin } from '/@src/data/docs/base/counter'
</script>

<template>
  <Section
    id="counter-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="شمارنده"
            subtitle="شمارنده نرمال"
          />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center pt-4"
          >
            <div class="px-6">
              <Title
                tag="h3"
                :size="4"
                weight="thin"
                narrow
              >
                <Counter :number="194" />
              </Title>
            </div>
            <div class="px-6">
              <Title
                tag="h3"
                :size="4"
                weight="thin"
                narrow
              >
                <Counter :number="79" />
              </Title>
            </div>
            <div class="px-6">
              <Title
                tag="h3"
                :size="4"
                weight="thin"
                narrow
              >
                <Counter :number="217" />
              </Title>
            </div>
            <div class="px-6">
              <Title
                tag="h3"
                :size="4"
                weight="thin"
                narrow
              >
                <Counter :number="42" />
              </Title>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="counterThin"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="counterProps"
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
              کانتر Vulk یک کامپوننت بسیار انعطاف‌پذیر است که می‌تواند در انواع
              مختلف تنظیمات استفاده شود. خود کانتر یک کامپوننت انتزاعی است که
              می‌تواند در هر جایی قرار گیرد. این کامپوننت از والدین خود، مانند
              ویژگی‌های
              <code>font-size</code>
              یا
              <code>font-weight</code>
              ، استایل‌های خود را به ارث می‌برد.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
