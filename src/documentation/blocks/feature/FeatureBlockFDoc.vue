<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
import {
  featureBlockF,
  featureBlockFProps,
  featureBlockFSample,
} from '/@src/data/docs/blocks/feature/blockF'
</script>

<template>
  <Section
    id="block-f-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک ویژگی طرح F سبک 1"
        link="block-f-props"
      />

      <FeatureBlockF
        title="تحویل دقیق."
        :features="features4"
        image="/assets/illustrations/features/bike.svg"
        dark-image="/assets/illustrations/features/bike-dark.svg"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک ویژگی طرح F سبک 2"
        link="block-f-props"
        inverted
      />

      <FeatureBlockF
        title="تحویل دقیق."
        :features="features4"
        image="/assets/illustrations/features/flying-dark.svg"
        dark-image="/assets/illustrations/features/flying-dark.svg"
        links
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک ویژگی طرح F سبک 3"
        link="block-f-props"
      />

      <FeatureBlockF
        title="تحویل دقیق."
        :features="features4"
        image="/assets/illustrations/features/flying.svg"
        dark-image="/assets/illustrations/features/flying-dark.svg"
        links
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
            :code="featureBlockF"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockFSample"
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
