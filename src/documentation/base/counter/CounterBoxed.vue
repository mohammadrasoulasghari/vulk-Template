<script setup lang="ts">
import { counterProps, counterBox } from '/@src/data/docs/base/counter'
</script>

<template>
  <Section
    id="counter-boxed-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="شمارنده در جعبه"
            subtitle="یکی از انواع شمارنده"
          />
          <div
            class="is-flex is-align-items-flex-end pt-4 is-justify-content-center has-text-centered"
          >
            <div class="px-2">
              <Card
                padding="2rem"
                class="counter-card"
              >
                <Title
                  tag="h3"
                  :size="4"
                  weight="bold"
                  narrow
                >
                  <Counter :number="194" />
                </Title>
              </Card>
            </div>
            <div class="px-2">
              <Card
                padding="2rem"
                class="counter-card"
              >
                <Title
                  tag="h3"
                  :size="4"
                  weight="bold"
                  narrow
                >
                  <Counter :number="79" />
                </Title>
              </Card>
            </div>
            <div class="px-2">
              <Card
                padding="2rem"
                class="counter-card"
              >
                <Title
                  tag="h3"
                  :size="4"
                  weight="bold"
                  narrow
                >
                  <Counter :number="217" />
                </Title>
              </Card>
            </div>
            <div class="px-2">
              <Card
                padding="2rem"
                class="counter-card"
              >
                <Title
                  tag="h3"
                  :size="4"
                  weight="bold"
                  narrow
                >
                  <Counter :number="42" />
                </Title>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="counterBox"
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
              برای مثال. شما می‌توانید کانترها را درون کامپوننت‌های دیگری مانند
              <code>&#x3C;Card /&#x3E;</code>
              قرار دهید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>

<style lang="scss" scoped>
.counter-card {
  min-width: 110px;
}
</style>
