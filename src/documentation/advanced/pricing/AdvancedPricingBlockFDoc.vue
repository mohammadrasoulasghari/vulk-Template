<script setup lang="ts">
import {
  pricingBlockF,
  pricingBlockFProps,
  pricingBlockFSample,
} from '/@src/data/docs/advanced/pricing/blockF'
</script>

<template>
  <Section
    id="block-f-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک پیشرفته طرح F سبک 1"
        link="block-e-props"
      />

      <div class="pt-6">
        <PricingSoloCentered
          :features="[
            'بی نهایت پروژه',
            'اپ موبایل و دسکتاپ',
            'بی نهایت تسک',
            'پشتیبانی از ایمیل',
            'بی نهایت رکورد زمان',
          ]"
          :price="0"
          link-label="همین حالا شروع کنید"
          link="/"
        />
      </div>

      <!--Content-->
    </Container>
  </Section>

  <Section
    id="block-f-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح F"
        subtitle="پراپ‌های در دسترس برای بلوک طرح F"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="pricingBlockF"
          />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="pricingBlockFSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های پیشرفته و جذاب قیمت‌گذاری همراه است که می‌توانید در
            هر صفحه‌ای استفاده کنید. هر بلوک دارای استایل‌ها و خصوصیات خاص خود
            است. از این خصوصیات برای ساخت نمونه‌های خود استفاده کنید یا از یکی
            از نمونه‌های از پیش ساخته شده استفاده کنید. هر بلوک به طور بومی از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            علامت‌گذاری و خصوصیات مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
