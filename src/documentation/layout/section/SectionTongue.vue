<script setup lang="ts">
import { sectionTongue, sectionProps } from '/@src/data/docs/blocks/section'
</script>

<template>
  <Section
    id="section-tongue-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="بخشبندی طرح‌دار"
            subtitle="بخشبندی با طرح زبانه‌های آتش"
          />
          <div class="section-holder mt-4">
            <Section
              tongue="tongue-1"
              shape-color="grey"
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
            <Section
              tongue="tongue-2"
              shape-color="grey"
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
              :code="sectionTongue"
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
              بخش‌ها بلوک‌های اصلی ساختار برای هر وب‌سایت هستند. بخش‌های Vulk
              می‌توانند زبان‌های SVG داشته باشند با استفاده از ویژگی‌های
              <code>tongue</code>
              و اختیاری
              <code>shape-color</code>
              . ویژگی
              <code>shape-color</code>
              باید به رنگ بخش بعدی تنظیم شود.
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
