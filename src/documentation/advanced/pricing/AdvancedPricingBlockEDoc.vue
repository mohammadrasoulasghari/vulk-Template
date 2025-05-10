<script setup lang="ts">
import {
  pricingBlockE,
  pricingBlockEProps,
  pricingBlockESample,
} from '/@src/data/docs/advanced/pricing/blockE'
</script>

<template>
  <Section
    id="block-e-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک پیشرفته طرح E سبک 1"
        link="block-e-props"
      />

      <div class="py-6">
        <PricingSolo
          title="قیمت گذاری موثر"
          subtitle="همه ویژگی‌های لارم برای ران کردن پروژه"
          :features="[
            'بی نهایت پروژه',
            'اپ موبایل و دسکتاپ',
            'بی نهایت تسک',
            'پشتیبانی از ایمیل',
            'بی نهایت رکورد زمان',
            'مدیریت کلاینت',
            'ملزومات تسک',
            'نرک بودجه',
            'تسک‌های بازگشتی',
            'گزارشات پیشرفته',
          ]"
          :monthly-price="7"
          :yearly-price="79"
          link-label="شروع دسترسی آزمایشی"
          link="/"
        />
      </div>

      <!--Content-->
    </Container>
  </Section>

  <Section
    id="block-e-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح E"
        subtitle="پراپ‌های در دسترس برای بلوک طرح E"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="pricingBlockE"
          />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="pricingBlockESample"
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
