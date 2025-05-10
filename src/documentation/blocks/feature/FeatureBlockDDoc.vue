<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
import {
  featureBlockD,
  featureBlockDProps,
  featureBlockDSample,
} from '/@src/data/docs/blocks/feature/blockD'
</script>

<template>
  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک ویژگی طرح D سبک 1"
        link="block-d-props"
      />

      <FeatureBlockD
        :features="features2"
        :limit="6"
        size="medium"
        links
        animated
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک ویژگی طرح D سبک 2"
        link="block-d-props"
      />

      <FeatureBlockD
        :features="features2"
        :limit="6"
        size="small"
        horizontal
        animated
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک ویژگی طرح D سبک 3"
        link="block-d-props"
      />

      <FeatureBlockD
        :features="features2"
        :limit="6"
        links
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
            :code="featureBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockDSample"
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
