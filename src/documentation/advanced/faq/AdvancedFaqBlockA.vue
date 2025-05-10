<script setup lang="ts">
import { faq } from '/@src/data/pages/commerce'
import {
  faqBlockA,
  faqBlockAProps,
  faqBlockASample,
} from '/@src/data/docs/advanced/faq/blockA'
</script>

<template>
  <Section
    id="block-a-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-10">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="بلوک طرح A"
            subtitle="سوالات پر تکرار سبک 1"
          />
          <div class="pt-4">
            <DoubleFaqCollapse
              :left="faq.left"
              :right="faq.right"
              chevrons
            />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="faqBlockA"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="faqBlockAProps"
            />
          </template>
          <template #sample>
            <PrismCode
              language="javascript"
              :code="faqBlockASample"
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
