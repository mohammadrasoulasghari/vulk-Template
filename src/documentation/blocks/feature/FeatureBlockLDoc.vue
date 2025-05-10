<script setup lang="ts">
import { features9 } from '/@src/data/blocks/features'
import {
  featureBlockL,
  featureBlockLProps,
  featureBlockLSample,
} from '/@src/data/docs/blocks/feature/blockL'
</script>

<template>
  <Section
    id="block-l-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح L"
        subtitle="بلوک ویژگی طرح L سبک 1"
        link="block-l-props"
      />

      <FeatureBlockL
        :features="features9"
        blob
        dots
        links
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح L"
        subtitle="بلوک ویژگی طرح L سبک 1"
        link="block-l-props"
        inverted
      />

      <FeatureBlockL
        :features="features9"
        blob
        dots
        links
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-l-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح L"
        subtitle="پراپ‌های در دسترس برای بلوک طرح L"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="featureBlockL"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockLProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockLSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های ویژگی بسیار قابل تنظیم و چندمنظوره‌ای ارائه می‌شود
            که می‌توانید از آنها در هر صفحه‌ای استفاده کنید. هر بلوک دارای
            استایل‌ها و props خاص خود است. از props برای ساخت نمونه‌های خود
            استفاده کنید یا یکی از نمونه‌های آماده را انتخاب کنید. هر بلوک به
            طور بومی از حالت تاریک پشتیبانی می‌کند. با این حال، در برخی موارد،
            حتی در حالت روشن، پس‌زمینه بخش ممکن است تاریک یا رنگی باشد. در این
            صورت، می‌توانید از prop
            <code>inverted</code>
            برای معکوس کردن کامپوننت در حالت روشن استفاده کنید. برای جزئیات
            بیشتر درباره استفاده، به تب markup و props مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
