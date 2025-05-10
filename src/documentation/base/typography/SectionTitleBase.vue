<script setup lang="ts">
import {
  sectionTitleProps,
  sectionTitle,
} from '/@src/data/docs/base/typography'
</script>

<template>
  <Section
    id="section-title-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="عنوان ثانوی"
            subtitle="سبک‌های مختلف کامپوننت عنوان بخش"
          />
          <div class="pt-4">
            <SectionTitle
              title="دوباره حساب کن"
              subtitle="شروع کنید"
            />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="sectionTitle"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="sectionTitleProps"
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
              Vulk یک کامپوننت عنوان بخش ارائه می‌دهد که می‌توانید به طور ایمن
              در تمام بخش‌های برنامه‌تان از آن استفاده کنید. این کامپوننت چندین
              پراپ را فراهم می‌کند تا بتوانید محتوا را کنترل کنید، با استفاده از
              پراپ‌های
              <code>title</code>
              و
              <code>subtitle</code>
              .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
