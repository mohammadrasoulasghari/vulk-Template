<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
import {
  featureBlockH,
  featureBlockHProps,
  featureBlockHSample,
} from '/@src/data/docs/blocks/feature/blockH'
</script>

<template>
  <Section
    id="block-h-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک ویژگی طرح H سبک 1"
        link="block-h-props"
      />

      <FeatureBlockH :features="features" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک ویژگی طرح H سبک 2"
        link="block-h-props"
      />

      <FeatureBlockH
        :features="features"
        rounded
        links
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک ویژگی طرح H سبک 3"
        link="block-h-props"
        inverted
      />

      <FeatureBlockH
        :features="features"
        rounded
        links
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک ویژگی طرح H سبک 4"
        link="block-h-props"
      />

      <FeatureBlockH
        :features="features"
        :columns="3"
        :limit="8"
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
            :code="featureBlockH"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockHProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockHSample"
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
