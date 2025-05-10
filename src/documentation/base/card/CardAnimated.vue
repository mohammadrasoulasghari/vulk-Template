<script setup lang="ts">
import { cardProps, cardAnimation } from '/@src/data/docs/base/card'
</script>

<template>
  <Section
    id="card-animated-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="انیمیشن کارت"
            subtitle="انواع کارت با انیمیشن"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <Card
                shape="straight"
                animated
              >
                <Title
                  tag="h2"
                  weight="semi"
                  :size="6"
                  leading
                >
                  کارت ساده
                </Title>
                <p class="paragraph leading-tight rem-90">
                  این یک کارت ساده و نرمال می‌باشد
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card
                shape="squared"
                animated
              >
                <Title
                  tag="h2"
                  weight="semi"
                  :size="6"
                  leading
                >
                  کارت مربع
                </Title>
                <p class="paragraph leading-tight rem-90">
                  این یک کارت نرمال مربع می‌باشد
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card
                shape="curved"
                animated
              >
                <Title
                  tag="h2"
                  weight="semi"
                  :size="6"
                  leading
                >
                  کارت گرد
                </Title>
                <p class="paragraph leading-tight rem-90">
                  این یک کارت با گوشه‌های گرد است
                </p>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="cardAnimation"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="cardProps"
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
              کارت‌ها بخش مرکزی تمامی برنامه‌های وب و موبایل هستند. کارت‌های
              Vulk در طعم‌های مختلف ارائه می‌شوند. شما می‌توانید کارت‌های متحرک
              را با استفاده از ویژگی
              <code>animated</code>
              ایجاد کنید. این ویژگی از نوع
              <code>boolean</code>
              است و نیازی به مقدار ندارد. این ویژگی یک انیمیشن کوچک را هنگام
              قرار گرفتن ماوس روی کارت فعال می‌کند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
