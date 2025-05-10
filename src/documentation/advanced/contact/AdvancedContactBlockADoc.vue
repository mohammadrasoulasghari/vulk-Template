<script setup lang="ts">
import { contactBlockA } from '/@src/data/docs/advanced/contact/blockA'
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

      <div class="mx-auto max-w-3 py-4">
        <ContactForm />
      </div>
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
            :code="contactBlockA"
          />
        </template>
        <template #props>
          <div class="empty-text">
            <p class="paragraph rem-95">
              No props available for this component
            </p>
          </div>
        </template>
        <template #sample>
          <div class="empty-text">
            <p class="paragraph rem-95">
              نمونه داده‌ای برای این مؤلفه موجود نیست
            </p>
          </div>
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
