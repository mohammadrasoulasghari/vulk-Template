<script setup lang="ts">
import {
  contentBlockC,
  contentBlockCProps,
} from '/@src/data/docs/advanced/content/blockC'
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
        link="block-c-props"
      />

      <div class="py-4" />

      <CaseStudy background="/assets/demo/img/bg/1.jpeg">
        <SideSection
          subtitle="داستان های موفقیت"
          title="یاد بگیرید که چگونه یک کسب و کار موفق ایجاد کردند"
          content="ببینید چگونه برخی از مشتریان ما از فناوری وولک برای افزایش سود و بازپس گیری کنترل از فروشندگان استفاده می‌کنند"
          image="/assets/illustrations/features/feature-3.png"
          dark-image="/assets/illustrations/features/feature-3-dark.png"
          cta="داستان های موفقیت را بخوانید"
          inverted
          to="index"
        />
      </CaseStudy>
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
            :code="contentBlockC"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockCProps.props" />
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
            Vulk با بلوک‌های ویژگی پیشرفته و شگفت‌انگیز عرضه می‌شود که می‌توانید
            از آن‌ها در هر صفحه‌ای استفاده کنید. هر بلوک با استایل‌ها و پروپ‌های
            خاص خود عرضه می‌شود. از پروپ‌ها برای ساخت نمونه‌های خود استفاده کنید
            یا یکی از نمونه‌های آماده را به کار ببرید. هر بلوک به‌طور پیش‌فرض از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            مارک‌آپ و پروپ‌ها مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
