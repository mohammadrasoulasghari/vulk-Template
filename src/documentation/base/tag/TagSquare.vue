<script setup lang="ts">
import { tagProps, tagSquare } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section
    id="tag-square-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="برچسب‌های مربع"
            subtitle="سبک‌های مختلف برچسب‌های مربع"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag
                label="پیشفرض"
                shape="squared"
              />
              <Tag
                color="solid"
                label="سالید"
                shape="squared"
              />
              <Tag
                color="primary"
                label="اولیه"
                shape="squared"
              />
              <Tag
                color="success"
                label="گام‌های موفقیت"
                shape="squared"
              />
              <Tag
                color="info"
                label="اینفو"
                shape="squared"
              />
              <Tag
                color="warning"
                label="هشدار"
                shape="squared"
              />
              <Tag
                color="danger"
                label="خطر"
                shape="squared"
              />
              <Tag
                color="orange"
                label="نارنجی"
                shape="squared"
              />
              <Tag
                color="blue"
                label="آبی"
                shape="squared"
              />
              <Tag
                color="green"
                label="سبز"
                shape="squared"
              />
              <Tag
                color="purple"
                label="بنفش"
                shape="squared"
              />
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="tagSquare"
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
              برچسب‌ها بخش مرکزی همه برنامه‌های وب و موبایل هستند. برچسب‌های
              Vulk در انواع مختلفی عرضه می‌شوند. شما می‌توانید با استفاده از
              ویژگی
              <code>shape</code>
              برچسب‌های مربعی ایجاد کنید. مقادیر مجاز شامل
              <code>squared</code>
              ،
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
