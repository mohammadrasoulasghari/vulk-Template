<script setup lang="ts">
import { stats } from '/@src/data/blocks/advanced/stats'
import {
  companyBlockA,
  companyBlockAProps,
  companyBlockASample,
} from '/@src/data/docs/advanced/company/blockA'
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

      <NumbersSection
        subtitle="تکنولوژی هوش مصنوعی"
        title="مقیاس داده ما به موفقیت شما کمک می‌کند"
        content="مقیاس داده عظیم ما، یادگیری ماشینی و الگوریتم‌های ما را تغذیه می‌کند، بنابراین می‌توانید مطمئن باشید که هر تصمیمی که هوش مصنوعی ما می‌گیرد، هوشمندانه است."
        :numbers="stats"
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

      <NumbersSection
        inverted
        subtitle="تکنولوژی هوش مصنوعی"
        title="مقیاس داده ما به موفقیت شما کمک می‌کند"
        content="مقیاس داده عظیم ما، یادگیری ماشینی و الگوریتم‌های ما را تغذیه می‌کند، بنابراین می‌توانید مطمئن باشید که هر تصمیمی که هوش مصنوعی ما می‌گیرد، هوشمندانه است."
        :numbers="stats"
        animated
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
            :code="companyBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="companyBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="companyBlockASample"
          />
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
