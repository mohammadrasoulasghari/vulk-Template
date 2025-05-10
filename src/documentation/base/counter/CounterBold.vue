<script setup lang="ts">
import { counterProps, counterBold } from '/@src/data/docs/base/counter'
</script>

<template>
  <Section
    id="counter-bold-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="شمارنده"
            subtitle="شمارنده با ارقام ضخیم"
          />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center pt-4"
          >
            <div class="px-6">
              <Title
                tag="h3"
                :size="4"
                weight="bold"
                narrow
              >
                <Counter :number="194" />
              </Title>
            </div>
            <div class="px-6">
              <Title
                tag="h3"
                :size="4"
                weight="bold"
                narrow
              >
                <Counter :number="79" />
              </Title>
            </div>
            <div class="px-6">
              <Title
                tag="h3"
                :size="4"
                weight="bold"
                narrow
              >
                <Counter :number="217" />
              </Title>
            </div>
            <div class="px-6">
              <Title
                tag="h3"
                :size="4"
                weight="bold"
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
              :code="counterBold"
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
              می‌تواند در هر مکانی قرار گیرد. این کامپوننت استایل‌های خود را از
              والدینش به ارث می‌برد، مانند ویژگی‌های
              <code>font-size</code>
              یا
              <code>font-weight</code>
              .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
