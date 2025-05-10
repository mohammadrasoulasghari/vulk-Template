<script setup lang="ts">
import { inputProps, inputBase } from '/@src/data/docs/base/form'

const inputOneValue = ref()
const inputTwoValue = ref()
</script>

<template>
  <Section
    id="input-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="ورودی‌ها"
            subtitle="طرح‌بندی بر پایه ورودی‌ها"
          />
          <div class="is-flex d-column-mobile pt-4">
            <div class="w-full max-w-1/2 max-w-mobile">
              <Field>
                <FieldLabel label="نام کاربری" />
                <Control>
                  <VInput
                    v-model="inputOneValue"
                    placeholder="جان دو"
                  />
                </Control>
              </Field>

              <Field>
                <FieldLabel label="نام کاربری" />
                <Control>
                  <VInput
                    v-model="inputTwoValue"
                    placeholder="جان دو"
                    rounded
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
              :code="inputBase"
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
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
