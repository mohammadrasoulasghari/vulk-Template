<script setup lang="ts">
import { toggleProps, toggleBase } from '/@src/data/docs/base/form'

const options = ref(['Option 2', 'Option 9'])
</script>

<template>
  <Section
    id="toggle-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="سوئیچ دلخواه"
            subtitle="انواع مختلف سوئیچ‌ها"
          />
          <div class="columns">
            <div class="column pt-4">
              <div class="is-block">
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-1"
                    value="Option 0"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-2"
                    icon
                    value="Option 1"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-3"
                    icon
                    color="success"
                    value="Option 2"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-4"
                    icon
                    color="info"
                    value="Option 3"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-5"
                    icon
                    color="warning"
                    value="Option 4"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-6"
                    icon
                    color="danger"
                    value="Option 5"
                  />
                </div>
              </div>
            </div>
            <div class="column pt-4">
              <div class="is-block">
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-7"
                    flavor="switch"
                    value="Option 6"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-8"
                    icon
                    flavor="switch"
                    value="Option 7"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-9"
                    icon
                    flavor="switch"
                    color="success"
                    value="Option 8"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-10"
                    icon
                    flavor="switch"
                    color="info"
                    value="Option 9"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-11"
                    icon
                    flavor="switch"
                    color="warning"
                    value="Option 10"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-12"
                    icon
                    flavor="switch"
                    color="danger"
                    value="Option 11"
                  />
                </div>
              </div>
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
                    <span>سوئیچ‌ها</span>
                  </Title>
                  <p class="paragraph rem-90">
                    فعال: {{ options }}
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
              :code="toggleBase"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="toggleProps"
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
              بسیار متنوع هستند و از انواع مختلف استفاده پشتیبانی می‌کنند. Vulk
              با یک کامپوننت تغییر وضعیت سفارشی عرضه می‌شود که می‌تواند دو نوع
              مختلف داشته باشد. از پراپ
              <code>flavor</code>
              برای جابه‌جایی بین حالت‌های
              <code>thin</code>
              و
              <code>switch</code>
              استفاده کنید. از پراپ
              <code>color</code>
              برای تغییر رنگ استفاده کنید. همچنین می‌توانید با استفاده از پراپ
              <code>icon</code>
              آیکون‌هایی را نمایش دهید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
