<script setup lang="ts">
import { checkboxProps, checkboxBase } from '/@src/data/docs/base/form'

const options = ref(['Option 2'])
</script>

<template>
  <Section
    id="checkbox-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="چک‌باکس"
            subtitle="طرح‌بندی المان چک‌باکس"
          />
          <div class="columns">
            <div class="column pt-4">
              <Checkbox
                v-model="options"
                name="checkbox-default-1"
                label="گزینه 0"
                color="default"
                value="Option 0"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-1"
                label="گزینه 1"
                value="Option 1"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-2"
                label="گزینه 2"
                color="success"
                value="Option 2"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-3"
                label="گزینه 3"
                color="info"
                value="Option 3"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-4"
                label="گزینه 4"
                color="warning"
                value="Option 4"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-5"
                label="گزینه 5"
                color="danger"
                value="Option 5"
              />
            </div>
            <div class="column pt-4">
              <Checkbox
                v-model="options"
                name="checkbox-default-2"
                label="گزینه 6"
                color="default"
                rounded
                value="Option 6"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-6"
                label="گزینه 7"
                rounded
                value="Option 7"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-7"
                label="گزینه 8"
                color="success"
                rounded
                value="Option 8"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-8"
                label="گزینه 9"
                color="info"
                rounded
                value="Option 9"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-9"
                label="گزینه 10"
                color="warning"
                rounded
                value="Option 10"
              />
              <div class="py-2" />
              <Checkbox
                v-model="options"
                name="checkbox-10"
                label="گزینه 11"
                color="danger"
                rounded
                value="Option 11"
              />
            </div>
            <div class="column is-5 pt-4">
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
                    <span>چک‌باکس‌ها</span>
                  </Title>
                  <p class="paragraph rem-90">
                    انتخاب شده: {{ options }}
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
              :code="checkboxBase"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="checkboxProps"
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
              چک‌باکس‌های Vulk با ظاهری تمیز و مدرن عرضه می‌شوند. می‌توانید رنگ
              چک‌باکس‌ها را با استفاده از پراپ
              <code>color</code>
              کنترل کنید. با استفاده از پراپ
              <code>rounded</code>
              می‌توانید یک چک‌باکس گرد ایجاد کنید. پراپ
              <code>name</code>
              ضروری است.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
