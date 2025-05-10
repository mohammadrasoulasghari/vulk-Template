<script setup lang="ts">
import { tagProps, tagRounded } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section
    id="tag-rounded-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="برچسب‌های گرد"
            subtitle="سبک‌های مختلف برچسب‌های گرد"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag
                label="پیشفرض"
                shape="rounded"
              />
              <Tag
                color="solid"
                label="سالید"
                shape="rounded"
              />
              <Tag
                color="primary"
                label="اولیه"
                shape="rounded"
              />
              <Tag
                color="success"
                label="گام‌های موفقیت"
                shape="rounded"
              />
              <Tag
                color="info"
                label="اینفو"
                shape="rounded"
              />
              <Tag
                color="warning"
                label="هشدار"
                shape="rounded"
              />
              <Tag
                color="danger"
                label="خطر"
                shape="rounded"
              />
              <Tag
                color="orange"
                label="نارنجی"
                shape="rounded"
              />
              <Tag
                color="blue"
                label="آبی"
                shape="rounded"
              />
              <Tag
                color="green"
                label="سبز"
                shape="rounded"
              />
              <Tag
                color="purple"
                label="بنفش"
                shape="rounded"
              />
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="tagRounded"
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
              تگ‌ها بخشی مرکزی از تمام برنامه‌های وب و موبایل هستند. تگ‌های Vulk
              در طعم‌های مختلفی ارائه می‌شوند. شما می‌توانید تگ‌های گرد ایجاد
              کنید با استفاده از ویژگی
              <code>shape</code>
              . مقادیر مجاز شامل
              <code>squared</code>
              ,
              <code>curved</code>
              و
              <code>rounded</code>
              هستند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
