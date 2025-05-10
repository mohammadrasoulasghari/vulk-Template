<script setup lang="ts">
import { content12 } from '/@src/data/blocks/content'
import {
  contentBlockG,
  contentBlockGProps,
  contentBlockGSample,
} from '/@src/data/docs/blocks/content/blockG'
</script>

<template>
  <Section
    id="block-g-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک طرح G سبک 1"
        link="block-g-props"
      />

      <ContentBlockG
        :title="content12.title"
        :text="content12.text"
        :images="content12.images"
        :logos="content12.logos"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک طرح G سبک 1"
        link="block-g-props"
        inverted
      />

      <ContentBlockG
        :title="content12.title"
        :text="content12.text"
        :images="content12.images"
        :logos="content12.logos"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک طرح G سبک 2"
        link="block-g-props"
      />

      <ContentBlockG
        :title="content12.title"
        :text="content12.text"
        :images="content12.images"
        :logos="content12.logos"
        image-squared
      />
    </Container>
  </Section>

  <Section
    id="block-g-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح G"
        subtitle="پراپ‌های در دسترس برای بلوک طرح G"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockG"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockGProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockGSample"
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
