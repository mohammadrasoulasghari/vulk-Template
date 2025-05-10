<script setup lang="ts">
import { content7 } from '/@src/data/blocks/content'
import {
  contentBlockD,
  contentBlockDProps,
  contentBlockDSample,
} from '/@src/data/docs/blocks/content/blockD'
</script>

<template>
  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 1"
        link="block-d-props"
      />

      <ContentBlockD
        :title="content7.title"
        :subtitle="content7.subtitle"
        :text="content7.text"
        :images="content7.images"
        link="index"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 2"
        link="block-d-props"
        inverted
      />

      <ContentBlockD
        :title="content7.title"
        :subtitle="content7.subtitle"
        :text="content7.text"
        :images="content7.images"
        link="index"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 3"
        link="block-d-props"
      />

      <ContentBlockD
        :title="content7.title"
        :subtitle="content7.subtitle"
        :text="content7.text"
        :images="content7.images"
        :limit="3"
        image-squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 4"
        link="block-d-props"
      />

      <ContentBlockD
        :title="content7.title"
        :subtitle="content7.subtitle"
        :text="content7.text"
        :images="content7.images"
        :limit="4"
        link="index"
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
            :code="contentBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockDSample"
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
