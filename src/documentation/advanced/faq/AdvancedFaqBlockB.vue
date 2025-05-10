<script setup lang="ts">
import { mentorsFaq } from '/@src/data/pages/mentors'
import {
  faqBlockB,
  faqBlockBProps,
  faqBlockBSample,
} from '/@src/data/docs/advanced/faq/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-10">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="بلوک طرح B"
            subtitle="سوالات پر تکرار سبک 2"
          />
          <div class="pt-4">
            <FaqList :items="mentorsFaq" />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="faqBlockB"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="faqBlockBProps"
            />
          </template>
          <template #sample>
            <PrismCode
              language="javascript"
              :code="faqBlockBSample"
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
