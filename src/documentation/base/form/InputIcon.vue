<script setup lang="ts">
import { inputProps, inputIcon } from '/@src/data/docs/base/form'

const inputOneValue = ref()
const inputTwoValue = ref()
</script>

<template>
  <Section
    id="input-icon-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="ورودی‌ها"
            subtitle="طرح‌بندی با آیکون"
          />
          <div class="is-flex d-column-mobile pt-4">
            <div class="w-full max-w-1/2 max-w-mobile">
              <Field>
                <FieldLabel label="آدرس ایمیل" />
                <Control icon="feather:mail">
                  <VInput
                    v-model="inputOneValue"
                    placeholder="johndoe@gmail.com"
                    @update:model-value="inputOneValue = $event"
                  />
                </Control>
              </Field>

              <Field>
                <FieldLabel label="آدرس ایمیل" />
                <Control icon="feather:mail">
                  <VInput
                    v-model="inputTwoValue"
                    placeholder="johndoe@gmail.com"
                    rounded
                    @update:model-value="inputTwoValue = $event"
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
                    <span>اولی</span>
                  </Title>
                  <p class="paragraph rem-90">
                    مقدار: {{ inputOneValue }}
                  </p>
                </div>

                <div>
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    narrow
                  >
                    <span>دومی</span>
                  </Title>
                  <p class="paragraph rem-90">
                    مقدار: {{ inputTwoValue }}
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
              :code="inputIcon"
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
