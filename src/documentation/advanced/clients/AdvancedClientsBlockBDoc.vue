<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  clientsBlockB,
  clientsBlockBProps,
  clientsBlockBSample,
} from '/@src/data/docs/advanced/clients/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک پیشرفته طرح B سبک 1"
        link="block-b-props"
      />

      <div class="py-4" />

      <LogoMarquee :logos="customerLogos" />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک پیشرفته طرح B سبک 2"
        link="block-b-props"
        inverted
      />

      <LogoMarquee
        :logos="customerLogos"
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-b-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح B"
        subtitle="پراپ‌های در دسترس برای بلوک طرح B"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="clientsBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="clientsBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="clientsBlockBSample"
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
