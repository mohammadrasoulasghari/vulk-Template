<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  clientsBlockC,
  clientsBlockCProps,
  clientsBlockCSample,
} from '/@src/data/docs/advanced/clients/blockC'
</script>

<template>
  <Section
    id="block-c-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک پیشرفته طرح C سبک 1"
        link="block-b-props"
      />

      <div class="py-4" />

      <CompanyGrid
        title="شرکای ما چه کسانی هستند؟"
        subtitle="همکاری با شرکت‌های موفق و آشنا"
        :logos="customerLogos"
        :limit="20"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک پیشرفته طرح C سبک 2"
        link="block-b-props"
        inverted
      />

      <CompanyGrid
        title="شرکای ما چه کسانی هستند؟"
        subtitle="همکاری با شرکت‌های موفق و آشنا"
        :logos="customerLogos"
        :limit="20"
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-c-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح C"
        subtitle="پراپ‌های در دسترس برای بلوک طرح C"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="clientsBlockC"
          />
        </template>
        <template #props>
          <DemoProps :props="clientsBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="clientsBlockCSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های لوگوی پیشرفته و جذابی همراه است که می‌توانید در هر
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
