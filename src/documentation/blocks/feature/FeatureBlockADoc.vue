<script setup lang="ts">
import { features } from '/@src/data/blocks/features'
import {
  featureBlockA,
  featureBlockAProps,
  featureBlockASample,
} from '/@src/data/docs/blocks/feature/blockA'
</script>

<template>
  <Section
    id="block-a-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک ویژگی طرح A سبک 1"
        link="block-a-props"
      />

      <FeatureBlockA
        alignment="centered"
        :features="features"
        :columns="4"
        :limit="6"
        size="medium"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک ویژگی طرح A سبک 2"
        link="block-a-props"
      />

      <FeatureBlockA
        alignment="centered"
        :features="features"
        :columns="4"
        :limit="6"
        size="medium"
        rounded
        links
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک ویژگی طرح A سبک 3"
        link="block-a-props"
        inverted
      />

      <FeatureBlockA
        alignment="centered"
        :features="features"
        :columns="4"
        :limit="6"
        size="medium"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک ویژگی طرح A سبک 4"
        link="block-a-props"
      />

      <FeatureBlockA
        :features="features"
        :columns="3"
        :limit="8"
        size="small"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک ویژگی طرح A سبک 5"
        link="block-a-props"
        inverted
      />

      <FeatureBlockA
        :features="features"
        :columns="3"
        :limit="8"
        size="small"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک ویژگی طرح A سبک 6"
        link="block-a-props"
      />

      <FeatureBlockA
        :features="features"
        :columns="3"
        :limit="8"
        size="small"
        rounded
        links
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک ویژگی طرح A سبک 7"
        link="block-a-props"
      />

      <FeatureBlockA
        :features="features"
        :columns="6"
        :limit="4"
        size="medium"
      />
    </Container>
  </Section>

  <Section
    id="block-a-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح A"
        subtitle="پراپ‌های در دسترس برای بلوک طرح A"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="featureBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockASample"
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
