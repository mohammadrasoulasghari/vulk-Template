<script setup lang="ts">
import { values } from '/@src/data/blocks/advanced/values'
import {
  companyBlockD,
  companyBlockDProps,
  companyBlockDSample,
} from '/@src/data/docs/advanced/company/blockD'
</script>

<template>
  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک پیشرفته طرح D سبک 1"
        link="block-d-props"
      />

      <ValuesSection
        :values="values"
        image-height="120px"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک پیشرفته طرح D سبک 2"
        link="block-d-props"
        inverted
      />

      <ValuesSection
        :values="values"
        image-height="120px"
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-d-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح D"
        subtitle="پراپ‌های در دسترس برای بلوک طرح D"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="companyBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="companyBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="companyBlockDSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های ویژگی پیشرفته و شگفت‌انگیز عرضه می‌شود که می‌توانید
            از آن‌ها در هر صفحه‌ای استفاده کنید. هر بلوک با استایل‌ها و پروپ‌های
            خاص خود عرضه می‌شود. از پروپ‌ها برای ساخت نمونه‌های خود استفاده کنید
            یا یکی از نمونه‌های آماده را به کار ببرید. هر بلوک به‌طور پیش‌فرض از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            مارک‌آپ و پروپ‌ها مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
