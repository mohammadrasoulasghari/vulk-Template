<script setup lang="ts">
import { sectionBase, sectionProps } from '/@src/data/docs/blocks/section'
</script>

<template>
  <Section
    id="section-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="بخشبندی"
            subtitle="طرح‌بندی پایه برای بخشبندی"
          />
          <div class="section-holder mt-4">
            <Section>
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
              :code="sectionBase"
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
              بخش‌ها بلوک‌های پایه‌ای برای ساختار هر وب‌سایت هستند. اندازه‌های
              بخش‌های Vulk را می‌توان با استفاده از ویژگی
              <code>size</code>
              سفارشی کرد. بخش‌ها باید تا حد امکان در کنار کامپوننت
              <code>&#x3C;Container /&#x3E;</code>
              استفاده شوند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>

<style lang="scss" scoped>
.section-holder {
  border: 1px solid var(--border);
}
</style>
