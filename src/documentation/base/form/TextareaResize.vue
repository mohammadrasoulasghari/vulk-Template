<script setup lang="ts">
import { textareaProps, textareaResize } from '/@src/data/docs/base/form'

const textareaValue = ref('')
</script>

<template>
  <Section
    id="textarea-resize-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="بدون تغییر اندازه"
            subtitle="ورودی چند خطی بدون تغییر اندازه"
          />
          <div class="is-flex d-column-mobile pt-4">
            <div class="w-full max-w-1/2 max-w-mobile">
              <Field>
                <FieldLabel label="پیغام" />
                <Control>
                  <VTextarea
                    v-model="textareaValue"
                    :rows="3"
                    :resize="false"
                    placeholder="چیزی بنویسید..."
                  />
                </Control>
              </Field>
            </div>
            <div class="w-full max-w-1/2 max-w-mobile p-4">
              <Card
                shape="squared"
                muted
              >
                <div class="mb-4">
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    narrow
                  >
                    <span>دریافت متن</span>
                  </Title>
                  <p class="paragraph rem-90">
                    مقدار: {{ textareaValue }}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="textareaResize"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="textareaProps"
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
              اجزای فرم در مرکز هر اپلیکیشن وبی قرار دارند. کنترل‌های فرم Vulk
              بسیار متنوع هستند و از انواع مختلف استفاده پشتیبانی می‌کنند. تکست
              اریاهای Vulk از ۴ کامپوننت مختلف تشکیل شده‌اند:
              <code>&#x3C;Field /&#x3E;</code>
              ،
              <code>&#x3C;FieldLabel /&#x3E;</code>
              ،
              <code>&#x3C;Control /&#x3E;</code>
              و
              <code>&#x3C;VTextarea /&#x3E;</code>
              . می‌توانید با استفاده از پراپ
              <code>no-resize</code>
              از تغییر اندازه تکست اریا جلوگیری کنید. همچنین می‌توانید تعداد
              ردیف‌ها را با استفاده از پراپ
              <code>:rows</code>
              تغییر دهید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
