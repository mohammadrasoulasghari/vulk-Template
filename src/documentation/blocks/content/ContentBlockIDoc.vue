<script setup lang="ts">
import { content14, content15 } from '/@src/data/blocks/content'
import {
  contentBlockI,
  contentBlockIProps,
  contentBlockISample,
} from '/@src/data/docs/blocks/content/blockI'
</script>

<template>
  <Section
    id="block-i-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک طرح I سبک 1"
        link="block-i-props"
      />

      <ContentBlockI :counters="content14" />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک طرح I سبک 1"
        link="block-i-props"
        inverted
      />

      <ContentBlockI
        :counters="content14"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک طرح I سبک 1"
        link="block-i-props"
      />

      <ContentBlockI :counters="content15" />
    </Container>
  </Section>

  <Section
    id="block-i-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح I"
        subtitle="پراپ‌های در دسترس برای بلوک طرح I"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockI"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockIProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="contentBlockISample"
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
