<script setup lang="ts">
import { content10, content11 } from '/@src/data/blocks/content'
import {
  contentBlockF,
  contentBlockFProps,
  contentBlockFSample,
} from '/@src/data/docs/blocks/content/blockF'
</script>

<template>
  <Section
    id="block-f-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 1"
        link="block-f-props"
      />

      <ContentBlockF
        :title="content10.title"
        :text="content10.text"
        :image="content10.image"
        :logos="content10.logos"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 2"
        link="block-f-props"
        inverted
      />

      <ContentBlockF
        :title="content10.title"
        :text="content10.text"
        :image="content10.image"
        :logos="content10.logos"
        image-squared
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 3"
        link="block-f-props"
      />

      <ContentBlockF
        :title="content11.title"
        :text="content11.text"
        :image="content11.image"
        :logos="content11.logos"
        image-squared
      />
    </Container>
  </Section>

  <Section
    id="block-f-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح F"
        subtitle="پراپ‌های در دسترس برای بلوک طرح F"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockF"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockFSample"
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
