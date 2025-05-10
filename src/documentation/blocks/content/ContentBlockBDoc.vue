<script setup lang="ts">
import { content3, content4 } from '/@src/data/blocks/content'
import {
  contentBlockB,
  contentBlockBProps,
  contentBlockBSample,
} from '/@src/data/docs/blocks/content/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 1"
        link="block-b-props"
      />

      <ContentBlockB
        :title="content3.title"
        :subtitle="content3.subtitle"
        :text="content3.text"
        :images="content3.images"
        link="index"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 2"
        link="block-b-props"
        inverted
      />

      <ContentBlockB
        :title="content3.title"
        :subtitle="content3.subtitle"
        :text="content3.text"
        :images="content3.images"
        link="index"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 3"
        link="block-b-props"
      />

      <ContentBlockB
        :title="content4.title"
        :subtitle="content4.subtitle"
        :text="content4.text"
        :images="content4.images"
        link="index"
        squared
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
            :code="contentBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockBSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های محتوای بسیار قابل تنظیم و چندمنظوره عرضه می‌شود که
            می‌توانید در هر صفحه‌ای از آن‌ها استفاده کنید. هر بلوک با استایل‌ها
            و ویژگی‌های خاص خود همراه است. از ویژگی‌ها برای ساخت نمونه‌های خود
            استفاده کنید یا یکی از نمونه‌های پیش‌ساخته را به کار ببرید. هر بلوک
            به طور بومی از حالت تاریک پشتیبانی می‌کند. با این حال، در برخی موارد
            حتی در حالت روشن، پس‌زمینه بخش ممکن است تیره یا رنگی باشد. در این
            صورت، می‌توانید از ویژگی
            <code>inverted</code>
            برای معکوس کردن کامپوننت در حالت روشن استفاده کنید. برای جزئیات
            بیشتر درباره استفاده، به تب مارکاپ و ویژگی‌ها مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
