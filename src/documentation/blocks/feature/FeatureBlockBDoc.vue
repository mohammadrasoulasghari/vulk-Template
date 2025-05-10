<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
import {
  featureBlockB,
  featureBlockBProps,
  featureBlockBSample,
} from '/@src/data/docs/blocks/feature/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک ویژگی طرح B سبک 1"
        link="block-b-props"
      />

      <FeatureBlockB
        alignment="centered"
        :features="features2"
        :columns="4"
        :limit="6"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک ویژگی طرح B سبک 2"
        link="block-b-props"
        inverted
      />

      <FeatureBlockB
        alignment="centered"
        :features="features2"
        :columns="4"
        :limit="6"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک ویژگی طرح B سبک 3"
        link="block-b-props"
      />

      <FeatureBlockB
        alignment="centered"
        :features="features2"
        :columns="4"
        :limit="6"
        size="small"
        links
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک ویژگی طرح B سبک 4"
        link="block-b-props"
      />

      <FeatureBlockB
        size="small"
        :features="features2"
        :columns="3"
        :limit="8"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک ویژگی طرح B سبک 5"
        link="block-b-props"
        inverted
      />

      <FeatureBlockB
        size="small"
        :features="features2"
        :columns="3"
        :limit="8"
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
            :code="featureBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockBSample"
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
