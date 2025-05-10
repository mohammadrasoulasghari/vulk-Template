<script setup lang="ts">
import { longPlans } from '/@src/data/blocks/advanced/pricing'
import {
  pricingBlockG,
  pricingBlockGProps,
  pricingBlockGSample,
} from '/@src/data/docs/advanced/pricing/blockG'
</script>

<template>
  <Section
    id="block-g-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک پیشرفته طرح G سبک 1"
        link="block-e-props"
      />

      <div class="py-6">
        <PricingLong
          :plans="longPlans"
          :columns="4"
          :limit="3"
          rounded
          shadow
          polka-dots
        />
      </div>

      <!--Content-->
    </Container>
  </Section>

  <Section
    id="block-g-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح G"
        subtitle="پراپ‌های در دسترس برای بلوک طرح G"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="pricingBlockG"
          />
        </template>
        <template #props>
          <DemoProps :props="pricingBlockGProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="pricingBlockGSample"
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
