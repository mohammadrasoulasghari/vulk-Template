<script setup lang="ts">
import { features5 } from '/@src/data/blocks/features'
import {
  featureBlockG,
  featureBlockGProps,
  featureBlockGSample,
} from '/@src/data/docs/blocks/feature/blockG'
</script>

<template>
  <Section
    id="block-g-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک ویژگی طرح G سبک 1"
        link="block-g-props"
      />

      <FeatureBlockG
        :features="features5"
        image="/assets/illustrations/features/feature-image-meditation.svg"
        dark-image="/assets/illustrations/features/feature-image-meditation.svg"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک ویژگی طرح G سبک 2"
        link="block-g-props"
        inverted
      />

      <FeatureBlockG
        :features="features5"
        image="/assets/demo/img/content/800x400/1.jpg"
        dark-image="/assets/demo/img/content/800x400/1.jpg"
        links
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک ویژگی طرح G سبک 3"
        link="block-g-props"
      />

      <FeatureBlockG
        :features="features5"
        image="/assets/illustrations/features/feature-image-tablet.svg"
        dark-image="/assets/illustrations/features/feature-image-tablet.svg"
        links
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
            :code="featureBlockG"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockGProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockGSample"
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
