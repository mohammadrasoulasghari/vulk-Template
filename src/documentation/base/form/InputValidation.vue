<script setup lang="ts">
import { inputProps, inputValidation } from '/@src/data/docs/base/form'
</script>

<template>
  <Section
    id="input-validation-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="اعتبارسنجی"
            subtitle="طرح‌بندی ورودی با اعتبارسنجی"
          />
          <div class="max-w-1/2 max-w-mobile pt-4">
            <Field>
              <FieldLabel label="آدرس ایمیل" />
              <Control
                icon="feather:mail"
                validation
                is-valid
              >
                <VInput
                  placeholder="johndoe@gmail.com"
                  value="mymail@gmail.com"
                />
              </Control>
            </Field>
            <Field>
              <FieldLabel label="گذرواژه" />
              <Control
                icon="feather:lock"
                validation
                is-invalid
              >
                <VInput
                  type="password"
                  value="deaefeafeqfqf"
                />
              </Control>
            </Field>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="inputValidation"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="inputProps"
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
              بسیار متنوع هستند و از انواع مختلف استفاده پشتیبانی می‌کنند.
              ورودی‌های Vulk از ۴ کامپوننت مختلف تشکیل شده‌اند:
              <code>&#x3C;Field /&#x3E;</code>
              ،
              <code>&#x3C;FieldLabel /&#x3E;</code>
              ،
              <code>&#x3C;Control /&#x3E;</code>
              و
              <code>&#x3C;VInput /&#x3E;</code>
              . شما می‌توانید با استفاده از prop
              <code>icon</code>
              روی کامپوننت
              <code>&#x3C;Control /&#x3E;</code>
              به یک المان ورودی آیکون اضافه کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
