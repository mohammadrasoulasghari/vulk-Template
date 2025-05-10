<script setup lang="ts">
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import {
  faqBlockD,
  faqBlockDProps,
  faqBlockDSample,
} from '/@src/data/docs/advanced/faq/blockD'
</script>

<template>
  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-10">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="بلوک طرح D"
            subtitle="سوالات پر تکرار سبک 4"
          />
          <div class="pt-4">
            <FaqListBoxed :items="genericFaq" />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="faqBlockD"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="faqBlockDProps"
            />
          </template>
          <template #sample>
            <PrismCode
              language="javascript"
              :code="faqBlockDSample"
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
