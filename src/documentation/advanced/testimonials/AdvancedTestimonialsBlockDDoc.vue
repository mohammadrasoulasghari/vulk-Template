<script setup lang="ts">
import {
  testimonialsBlockD,
  testimonialsBlockDProps,
} from '/@src/data/docs/advanced/testimonials/blockD'
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

      <div class="py-4" />

      <TestimonialBlock
        image="/assets/demo/img/content/500x500/1.jpg"
        title="من در پیدا کردن یک معامله منصفانه دچار مشکل بودم. سپس تصمیم گرفتم از وولک استفاده کنم و واقعاً جواب داد!"
        content="بیمه‌های ایزابللا که از طریق پلتفرم ما پیدا شدند، زندگی او را به‌طور کامل تغییر دادند و تمام دغدغه‌ها را از بین بردند."
        link-label="داستان ایزابل را بخوانید"
        link="/about"
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
            :code="testimonialsBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockDProps.props" />
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
            Vulk با بلوک‌های پیشرفته و جذاب تستیمونال همراه است که می‌توانید در
            هر صفحه‌ای استفاده کنید. هر بلوک دارای استایل‌ها و خصوصیات خاص خود
            است. از این خصوصیات برای ساخت نمونه‌های خود استفاده کنید یا از یکی
            از نمونه‌های از پیش ساخته شده استفاده کنید. هر بلوک به طور بومی از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            علامت‌گذاری و خصوصیات مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
