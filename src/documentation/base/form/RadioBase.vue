<script setup lang="ts">
import { radioProps, radioBase } from '/@src/data/docs/base/form'

const selectedFirst = ref('value_2')
const selectedSecond = ref('value_3')
const selectedThird = ref('value_1')
</script>

<template>
  <Section
    id="radio-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="دکمه رادیویی"
            subtitle="طرح‌بندی المان دکمه رادیویی"
          />
          <div class="columns">
            <div class="column is-8 pt-4">
              <div class="is-flex pt-4">
                <div class="me-4">
                  <Radio
                    v-model="selectedFirst"
                    value="value_1"
                    name="radio_first"
                    label="انتخاب 1"
                    group="radio-group-1"
                    color="default"
                  />
                </div>
                <div class="me-4">
                  <Radio
                    v-model="selectedFirst"
                    value="value_2"
                    name="radio_first"
                    label="انتخاب 2"
                    group="radio-group-2"
                    color="default"
                  />
                </div>
                <div class="me-4">
                  <Radio
                    v-model="selectedFirst"
                    value="value_3"
                    name="radio_first"
                    label="انتخاب 3"
                    group="radio-group-3"
                    color="default"
                  />
                </div>
              </div>
              <div class="is-flex pt-4">
                <div class="me-4">
                  <Radio
                    v-model="selectedSecond"
                    value="value_1"
                    name="radio_second"
                    label="انتخاب 1"
                    group="radio-group-4"
                    color="primary"
                  />
                </div>
                <div class="me-4">
                  <Radio
                    v-model="selectedSecond"
                    value="value_2"
                    name="radio_second"
                    label="انتخاب 2"
                    group="radio-group-5"
                    color="primary"
                  />
                </div>
                <div class="me-4">
                  <Radio
                    v-model="selectedSecond"
                    value="value_3"
                    name="radio_second"
                    label="انتخاب 3"
                    group="radio-group-6"
                    color="primary"
                  />
                </div>
              </div>
              <div class="is-flex pt-4">
                <div class="me-4">
                  <Radio
                    v-model="selectedThird"
                    value="value_1"
                    name="radio_third"
                    label="انتخاب 1"
                    group="radio-group-7"
                    color="success"
                  />
                </div>
                <div class="me-4">
                  <Radio
                    v-model="selectedThird"
                    value="value_2"
                    name="radio_third"
                    label="انتخاب 2"
                    group="radio-group-8"
                    color="info"
                  />
                </div>
                <div class="me-4">
                  <Radio
                    v-model="selectedThird"
                    value="value_3"
                    name="radio_third"
                    label="انتخاب 3"
                    group="radio-group-9"
                    color="warning"
                  />
                </div>
                <div class="me-4">
                  <Radio
                    v-model="selectedThird"
                    value="value_4"
                    name="radio_third"
                    label="انتخاب 4"
                    group="radio-group-10"
                    color="danger"
                  />
                </div>
              </div>
            </div>
            <div class="column pt-4">
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
                    <span>رادیوهای 1</span>
                  </Title>
                  <p class="paragraph rem-90">
                    انتخاب شده: {{ selectedFirst }}
                  </p>
                </div>
                <div class="mb-4">
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    narrow
                  >
                    <span>رادیوهای 2</span>
                  </Title>
                  <p class="paragraph rem-90">
                    انتخاب شده: {{ selectedSecond }}
                  </p>
                </div>
                <div class="mb-4">
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    narrow
                  >
                    <span>رادیوهای 3</span>
                  </Title>
                  <p class="paragraph rem-90">
                    انتخاب شده: {{ selectedThird }}
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
              :code="radioBase"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="radioProps"
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
              دکمه‌های رادیویی Vulk با ظاهری تمیز و مدرن عرضه می‌شوند. می‌توانید
              رنگ دکمه‌های رادیویی را با استفاده از پراپ
              <code>color</code>
              کنترل کنید. پراپ‌های
              <code>name</code>
              و
              <code>group</code>
              ضروری هستند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
