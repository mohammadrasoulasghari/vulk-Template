<script setup lang="ts">
import { content16 } from '/@src/data/blocks/content'
import {
  contentBlockJ,
  contentBlockJProps,
  contentBlockJSample,
} from '/@src/data/docs/blocks/content/blockJ'
</script>

<template>
  <Section
    id="block-j-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک طرح J سبک 1"
        link="block-j-props"
      />

      <ContentBlockJ
        :title="content16.title"
        :text="content16.text"
        :image="content16.image"
        :counters="content16.counters"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک طرح J سبک 1"
        link="block-j-props"
        inverted
      />

      <ContentBlockJ
        :title="content16.title"
        :text="content16.text"
        :image="content16.image"
        :counters="content16.counters"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک طرح J سبک 2"
        link="block-j-props"
      />

      <ContentBlockJ
        :title="content16.title"
        :text="content16.text"
        :image="content16.image"
        :counters="content16.counters"
        link="index"
        image-squared
      />
    </Container>
  </Section>

  <Section
    id="block-j-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح J"
        subtitle="پراپ‌های در دسترس برای بلوک طرح J"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockJ"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockJProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockJSample"
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
