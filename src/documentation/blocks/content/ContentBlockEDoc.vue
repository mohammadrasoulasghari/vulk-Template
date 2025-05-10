<script setup lang="ts">
import { content8, content9 } from '/@src/data/blocks/content'
import {
  contentBlockE,
  contentBlockEProps,
  contentBlockESample,
} from '/@src/data/docs/blocks/content/blockE'
</script>

<template>
  <Section
    id="block-e-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 1"
        link="block-e-props"
      />

      <ContentBlockE
        :title="content8.title"
        :text="content8.text"
        :icons="content8.icons"
        :image="content8.image"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 2"
        link="block-e-props"
        inverted
      />

      <ContentBlockE
        :title="content8.title"
        :text="content8.text"
        :icons="content8.icons"
        :image="content8.image"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 3"
        link="block-e-props"
      />

      <ContentBlockE
        :title="content9.title"
        :text="content9.text"
        :icons="content9.icons"
        :image="content9.image"
        icon-squared
        image-squared
      />
    </Container>
  </Section>

  <Section
    id="block-e-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح E"
        subtitle="پراپ‌های در دسترس برای بلوک طرح E"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockE"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockESample"
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
