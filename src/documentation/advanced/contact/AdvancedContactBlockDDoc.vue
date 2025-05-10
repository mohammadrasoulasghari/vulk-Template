<script setup lang="ts">
import { contactInfo } from '/@src/data/pages/contact'
import {
  contactBlockD,
  contactBlockDProps,
  contactBlockDSample,
} from '/@src/data/docs/advanced/contact/blockD'
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

      <div class="py-4">
        <ContactInfo :infos="contactInfo" />
      </div>
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
            :code="contactBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="contactBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="html"
            :code="contactBlockDSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های پیشرفته و جذاب تماس همراه است که می‌توانید در هر
            صفحه‌ای استفاده کنید. هر بلوک دارای استایل‌ها و خصوصیات خاص خود است.
            از این خصوصیات برای ساخت نمونه‌های خود استفاده کنید یا از یکی از
            نمونه‌های از پیش ساخته شده استفاده کنید. هر بلوک به طور بومی از حالت
            تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            علامت‌گذاری و خصوصیات مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
