<script setup lang="ts">
import { staticFaq } from '/@src/data/blocks/faq'
import {
  faqBlockC,
  faqBlockCProps,
  faqBlockCSample,
} from '/@src/data/docs/advanced/faq/blockC'
</script>

<template>
  <Section
    id="block-c-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-10">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="بلوک طرح C"
            subtitle="سوالات پر تکرار سبک 3"
          />
          <div class="pt-4">
            <FaqStatic :items="staticFaq" />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="faqBlockC"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="faqBlockCProps"
            />
          </template>
          <template #sample>
            <PrismCode
              language="javascript"
              :code="faqBlockCSample"
            />
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              Vulk با بلوک‌های پیشرفته و جذاب FAQ همراه است که می‌توانید در هر
              صفحه‌ای استفاده کنید. هر بلوک دارای استایل‌ها و خصوصیات خاص خود
              است. از این خصوصیات برای ساخت نمونه‌های خود استفاده کنید یا از یکی
              از نمونه‌های از پیش ساخته شده استفاده کنید. هر بلوک به طور بومی از
              حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به
              تب علامت‌گذاری و خصوصیات مراجعه کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
