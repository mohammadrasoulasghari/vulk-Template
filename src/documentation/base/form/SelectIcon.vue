<script setup lang="ts">
import { selectProps, selectIcon } from '/@src/data/docs/base/form'

const options = [
  {
    value: 'United States',
    label: 'ایالات متحده',
  },
  {
    value: 'Canada',
    label: 'کانادا',
  },
  {
    value: 'France',
    label: 'فرانسه',
  },
]

const selectOneValue = ref()
const selectTwoValue = ref()
</script>

<template>
  <Section
    id="select-icon-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="آیکون"
            subtitle="طرح‌بندی ورودی با آیکون"
          />
          <div class="is-flex d-column-mobile pt-4">
            <div class="w-full max-w-1/2 max-w-mobile">
              <Field>
                <FieldLabel label="گزینه‌ای را انتخاب کنید" />
                <Control icon="feather:globe">
                  <VSelect
                    v-model="selectOneValue"
                    :options="options"
                  />
                </Control>
              </Field>

              <Field>
                <FieldLabel label="گزینه‌ای را انتخاب کنید" />
                <Control icon="feather:globe">
                  <VSelect
                    v-model="selectTwoValue"
                    :options="options"
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
                    مقدار: {{ selectOneValue }}
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
                    مقدار: {{ selectTwoValue }}
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
              :code="selectIcon"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="selectProps"
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
              سلکت‌های Vulk از ۴ کامپوننت مختلف تشکیل شده‌اند:
              <code>&#x3C;Field /&#x3E;</code>
              ،
              <code>&#x3C;FieldLabel /&#x3E;</code>
              ،
              <code>&#x3C;Control /&#x3E;</code>
              و
              <code>&#x3C;VSelect /&#x3E;</code>
              .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
