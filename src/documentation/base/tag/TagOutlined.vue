<script setup lang="ts">
import { tagProps, tagOutlined } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section
    id="tag-outlined-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="برچسب‌های خط دار"
            subtitle="برچسب‌های خط دار رنگین"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag
                color="solid"
                label="سالید"
                outlined
              />
              <Tag
                color="primary"
                label="اولیه"
                outlined
              />
              <Tag
                color="success"
                label="گام‌های موفقیت"
                outlined
              />
              <Tag
                color="info"
                label="اینفو"
                outlined
              />
              <Tag
                color="warning"
                label="هشدار"
                outlined
              />
              <Tag
                color="danger"
                label="خطر"
                outlined
              />
              <Tag
                color="orange"
                label="نارنجی"
                outlined
              />
              <Tag
                color="blue"
                label="آبی"
                outlined
              />
              <Tag
                color="green"
                label="سبز"
                outlined
              />
              <Tag
                color="purple"
                label="بنفش"
                outlined
              />
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="tagOutlined"
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
              Vulk در انواع مختلفی عرضه می‌شوند. شما می‌توانید برچسب‌ها را با
              استفاده از ویژگی
              <code>outlined</code>
              حاشیه‌دار کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
