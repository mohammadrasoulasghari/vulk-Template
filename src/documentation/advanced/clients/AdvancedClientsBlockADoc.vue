<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  clientsBlockA,
  clientsBlockAProps,
  clientsBlockASample,
} from '/@src/data/docs/advanced/clients/blockA'
</script>

<template>
  <Section
    id="block-a-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک پیشرفته طرح A سبک 1"
        link="block-a-props"
      />

      <div class="py-4" />

      <LogoSection
        title="ما نتیجه را برای کارآفرینان به دارایی ۵۰۰ سوق می‌دهیم"
        :logos="customerLogos"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک پیشرفته طرح A سبک 2"
        link="block-a-props"
        inverted
      />

      <LogoSection
        title="ما نتیجه را برای کارآفرینان به دارایی ۵۰۰ سوق می‌دهیم"
        :logos="customerLogos"
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-a-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح A"
        subtitle="پراپ‌های در دسترس برای بلوک طرح A"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="clientsBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="clientsBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="clientsBlockASample"
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
