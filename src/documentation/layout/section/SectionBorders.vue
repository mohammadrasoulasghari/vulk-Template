<script setup lang="ts">
import { sectionBorder, sectionProps } from '/@src/data/docs/blocks/section'
</script>

<template>
  <Section
    id="section-borders-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="بخش‌های حاشیه‌دار"
            subtitle="پیکربندی حاشیه‌ها برای بخش‌ها"
          />
          <div class="section-holder mt-4">
            <Section
              bordered-top
              bordered-bottom
            >
              <Container>
                <div class="content py-6">
                  <Title
                    tag="h3"
                    :size="4"
                    weight="semi"
                    narrow
                  >
                    <span>من یک بخش هستم</span>
                  </Title>
                  <p class="paragraph">
                    می‌توانم هر نوع محتوایی داشته باشم
                  </p>
                </div>
              </Container>
            </Section>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="sectionBorder"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="sectionProps"
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
              بخش‌ها بلوک‌های پایه‌ای برای ساختار هر وب‌سایت هستند. مرزهای
              بالایی و پایینی بخش‌های Vulk را می‌توان با استفاده از ویژگی‌های
              <code>bordered-bottom</code>
              و
              <code>bordered-top</code>
              افزود. بخش‌ها باید تا حد امکان در کنار کامپوننت
              <code>&#x3C;Container /&#x3E;</code>
              استفاده شوند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
