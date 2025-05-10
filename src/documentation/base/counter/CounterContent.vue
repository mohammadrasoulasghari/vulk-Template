<script setup lang="ts">
import { counterProps, counterContent } from '/@src/data/docs/base/counter'
</script>

<template>
  <Section
    id="counter-content-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="شمارنده"
            subtitle="شمارنده دارای محتوا"
          />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center pt-6"
          >
            <div class="px-4 has-text-centered">
              <Icon
                icon="la:pizza-slice"
                :size="200"
                color="primary"
              />
              <Title
                tag="h3"
                :size="4"
                weight="bold"
                narrow
              >
                <Counter :number="194" />
              </Title>
              <p class="paragraph rem-95">
                پیتزا خورده شده
              </p>
            </div>
            <div class="px-4 has-text-centered">
              <Icon
                icon="la:ice-cream"
                :size="200"
                color="primary"
              />
              <Title
                tag="h3"
                :size="4"
                weight="bold"
                narrow
              >
                <Counter :number="79" />
              </Title>
              <p class="paragraph rem-95">
                بستنی قیفی خورده شده
              </p>
            </div>
            <div class="px-4 has-text-centered">
              <Icon
                icon="la:hotdog"
                :size="200"
                color="primary"
              />
              <Title
                tag="h3"
                :size="4"
                weight="bold"
                narrow
              >
                <Counter :number="217" />
              </Title>
              <p class="paragraph rem-95">
                هات داگ خورده شده
              </p>
            </div>
            <div class="px-4 has-text-centered">
              <Icon
                icon="la:apple-alt"
                :size="200"
                color="primary"
              />
              <Title
                tag="h3"
                :size="4"
                weight="bold"
                narrow
              >
                <Counter :number="42" />
              </Title>
              <p class="paragraph rem-95">
                سیب خورده شده
              </p>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="counterContent"
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
              برای مثال. شما می‌توانید به راحتی ترکیب‌های کانتر خود را ایجاد
              کنید و کامپوننت‌های مشتق‌شده را بسازید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
