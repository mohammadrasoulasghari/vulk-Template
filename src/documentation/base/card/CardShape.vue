<script setup lang="ts">
import { cardProps, cardShapes } from '/@src/data/docs/base/card'
</script>

<template>
  <Section
    id="card-shapes-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="اشکال کارت"
            subtitle="اشکال در دسترس برای کارت"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <Card shape="straight">
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
              <Card shape="squared">
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
              <Card shape="curved">
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
              :code="cardShapes"
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
              Vulk در طعم‌های مختلف ارائه می‌شوند. شما می‌توانید شکل کارت‌ها را
              با استفاده از ویژگی
              <code>shape</code>
              کنترل کنید. مقادیر مجاز شامل
              <code>straight</code>
              ,
              <code>squared</code>
              و
              <code>curved</code>
              هستند. شکل پیش‌فرض
              <code>curved</code>
              است.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
