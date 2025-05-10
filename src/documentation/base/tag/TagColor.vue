<script setup lang="ts">
import { tagProps, tagColors } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section
    id="tag-colors-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="رنگبندی برچسب‌ها"
            subtitle="رنگبندی‌های موجود برای برچسب‌ها"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag label="پیشفرض" />
              <Tag
                color="solid"
                label="سالید"
              />
              <Tag
                color="primary"
                label="اولیه"
              />
              <Tag
                color="success"
                label="گام‌های موفقیت"
              />
              <Tag
                color="info"
                label="اینفو"
              />
              <Tag
                color="warning"
                label="هشدار"
              />
              <Tag
                color="danger"
                label="خطر"
              />
              <Tag
                color="orange"
                label="نارنجی"
              />
              <Tag
                color="blue"
                label="آبی"
              />
              <Tag
                color="green"
                label="سبز"
              />
              <Tag
                color="purple"
                label="بنفش"
              />
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="tagColors"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="tagProps"
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
              تگ‌ها بخشی ضروری از تمام برنامه‌های وب و موبایل هستند. تگ‌های Vulk
              در طعم‌های مختلفی ارائه می‌شوند. شما می‌توانید رنگ تگ‌ها را با
              استفاده از ویژگی
              <code>color</code>
              کنترل کنید. مقادیر مجاز شامل
              <code>solid</code>
              ,
              <code>primary</code>
              ,
              <code>success</code>
              ,
              <code>info</code>
              ,
              <code>purple</code>
              ,
              <code>orange</code>
              ,
              <code>green</code>
              ,
              <code>warning</code>
              و
              <code>danger</code>
              هستند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
