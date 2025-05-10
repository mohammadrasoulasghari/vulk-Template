<script setup lang="ts">
import { sectionBackground, sectionProps } from '/@src/data/docs/blocks/section'
</script>

<template>
  <Section
    id="section-background-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="پس‌زمینه"
            subtitle="تصویر پس‌زمینه برای بخش"
          />
          <div class="section-holder mt-4">
            <Section
              v-background="{
                src: '/assets/demo/img/bg/3.jpeg',
                placeholder: 'https://dummyimage.com/1920x1080/',
              }"
              overlay
            >
              <Container>
                <div class="has-text-centered content py-6">
                  <Title
                    tag="h3"
                    :size="4"
                    weight="semi"
                    narrow
                    inverted
                  >
                    <span>من یک بخش هستم</span>
                  </Title>
                  <p class="paragraph is-inverted-light">
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
              :code="sectionBackground"
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
              بخش‌ها بلوک‌های اصلی طراحی برای هر وب‌سایت هستند. بخش‌های Vulk
              می‌توانند یک تصویر پس‌زمینه داشته باشند با استفاده از
              <code>v-background</code>
              پراپ. بخش‌ها باید تا حد امکان در کنار کامپوننت
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
