<script setup lang="ts">
import { tagProps, tagElevated } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section
    id="tag-elevated-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="برچسب‌های ارتفاع‌دار"
            subtitle="سبک‌های مختلف برچسب‌های ارتفاع دار"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag
                label="پیشفرض"
                shape="rounded"
                elevated
              />
              <Tag
                color="solid"
                label="سالید"
                shape="rounded"
                elevated
              />
              <Tag
                color="primary"
                label="اولیه"
                shape="rounded"
                elevated
              />
              <Tag
                color="success"
                label="گام‌های موفقیت"
                shape="rounded"
                elevated
              />
              <Tag
                color="info"
                label="اینفو"
                shape="rounded"
                elevated
              />
              <Tag
                color="warning"
                label="هشدار"
                shape="rounded"
                elevated
              />
              <Tag
                color="danger"
                label="خطر"
                shape="rounded"
                elevated
              />
              <Tag
                color="orange"
                label="نارنجی"
                shape="rounded"
                elevated
              />
              <Tag
                color="blue"
                label="آبی"
                shape="rounded"
                elevated
              />
              <Tag
                color="green"
                label="سبز"
                shape="rounded"
                elevated
              />
              <Tag
                color="purple"
                label="بنفش"
                shape="rounded"
                elevated
              />
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="tagElevated"
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
              Vulk در انواع مختلفی عرضه می‌شوند. شما می‌توانید ارتفاع برچسب‌ها
              را با استفاده از ویژگی
              <code>elevated</code>
              کنترل کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
