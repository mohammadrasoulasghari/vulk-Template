<script setup lang="ts">
import { content13 } from '/@src/data/blocks/content'
import {
  contentBlockH,
  contentBlockHProps,
  contentBlockHSample,
} from '/@src/data/docs/blocks/content/blockH'
</script>

<template>
  <Section
    id="block-h-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک طرح H سبک 1"
        link="block-h-props"
      />

      <ContentBlockH
        :title="content13.title"
        :text="content13.text"
        :images="content13.images"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک طرح H سبک 1"
        link="block-h-props"
        inverted
      />

      <ContentBlockH
        :title="content13.title"
        :text="content13.text"
        :images="content13.images"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک طرح H سبک 2"
        link="block-h-props"
      />

      <ContentBlockH
        :title="content13.title"
        :text="content13.text"
        :images="content13.images"
        :limit="2"
        links
        image-squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک طرح H سبک 3"
        link="block-h-props"
      />

      <ContentBlockH
        :title="content13.title"
        :text="content13.text"
        :images="content13.images"
        :limit="4"
        links
        image-squared
      />
    </Container>
  </Section>

  <Section
    id="block-h-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح H"
        subtitle="پراپ‌های در دسترس برای بلوک طرح H"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockH"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockHProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockHSample"
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
