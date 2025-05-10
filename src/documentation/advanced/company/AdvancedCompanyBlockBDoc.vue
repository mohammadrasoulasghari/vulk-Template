<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  companyBlockB,
  companyBlockBProps,
  companyBlockBSample,
} from '/@src/data/docs/advanced/company/blockB'
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

      <LogoStats
        title="بیش از ۳۰۰۰۰ میلیارد تومان"
        subtitle="معاملات مشتریان ما در سال ۱۴۰۰"
        heading="به ما بپیوندید و رشد کنید"
        content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
        :logos="customerLogos"
      />
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

      <LogoStats
        title="بیش از ۳۰۰۰۰ میلیارد تومان"
        subtitle="معاملات مشتریان ما در سال ۱۴۰۰"
        heading="به ما بپیوندید و رشد کنید"
        content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
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
            :code="companyBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="companyBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="companyBlockBSample"
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
