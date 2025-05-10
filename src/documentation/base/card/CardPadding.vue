<script setup lang="ts">
import { cardProps, cardPadding } from '/@src/data/docs/base/card'
</script>

<template>
  <Section
    id="card-padding-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="فاصله داخلی کارت"
            subtitle="فاصله‌های متفاوت داخلی برای کارت"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <Card shape="straight">
                <p class="paragraph leading-tight rem-90">
                  کارت با فاصله داخلی نرمال
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card
                shape="squared"
                padding="2rem"
              >
                <p class="paragraph leading-tight rem-90">
                  کارت با فاصله داخلی دلخواه
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card
                shape="curved"
                padding="3rem"
              >
                <p class="paragraph leading-tight rem-90">
                  کارت با فاصله داخلی دلخواه
                </p>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="cardPadding"
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
              Vulk در طعم‌های مختلف ارائه می‌شوند. شما می‌توانید حاشیه داخلی
              کارت‌ها را با استفاده از ویژگی
              <code>padding</code>
              کنترل کنید. این ویژگی از نوع
              <code>string</code>
              است، بنابراین به شما انعطاف‌پذیری بیشتری در تنظیم مقدار می‌دهد.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
