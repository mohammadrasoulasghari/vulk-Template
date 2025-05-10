<script setup lang="ts">
import { features6, features7 } from '/@src/data/blocks/features'
import {
  featureBlockI,
  featureBlockIProps,
  featureBlockISample,
} from '/@src/data/docs/blocks/feature/blockI'
</script>

<template>
  <Section
    id="block-i-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک ویژگی طرح I سبک 1"
        link="block-i-props"
      />

      <FeatureBlockI
        title="ویژگی های شگفت انگیز"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
        اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
        کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
        دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
        هابوی."
        :features="features6"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک ویژگی طرح I سبک 2"
        link="block-i-props"
        inverted
      />

      <FeatureBlockI
        title="ویژگی های شگفت انگیز"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
        اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
        کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
        دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
        هابوی."
        :features="features6"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک ویژگی طرح I سبک 3"
        link="block-i-props"
      />

      <FeatureBlockI
        title="ویژگی های شگفت انگیز"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
        اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
        کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
        دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
        هابوی."
        :features="features7"
        links
        rounded
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک ویژگی طرح I سبک 4"
        link="block-i-props"
        inverted
      />

      <FeatureBlockI
        title="ویژگی های شگفت انگیز"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
        اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
        کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
        دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
        هابوی."
        :features="features7"
        links
        rounded
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک ویژگی طرح I سبک 5"
        link="block-i-props"
      />

      <FeatureBlockI
        title="ویژگی های شگفت انگیز"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
        اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
        کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
        دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
        هابوی."
        :features="features7"
        :columns="3"
        :limit="4"
        rounded
      />
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
            :code="featureBlockI"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockIProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockISample"
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
