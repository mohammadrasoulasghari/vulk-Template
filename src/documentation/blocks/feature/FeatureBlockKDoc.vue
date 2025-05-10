<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
import {
  featureBlockK,
  featureBlockKProps,
  featureBlockKSample,
} from '/@src/data/docs/blocks/feature/blockK'
</script>

<template>
  <Section
    id="block-k-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح K"
        subtitle="بلوک ویژگی طرح K سبک 1"
        link="block-k-props"
      />

      <FeatureBlockK
        title="سبزیجات تازه"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
          اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
          کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
          دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
          هابوی. ویدیسنه کوام سیت ماگنا دیسنسیو؟ اکِ آلیود سیمیل
          دیسیمیل."
        :features="features4"
        links
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح K"
        subtitle="بلوک ویژگی طرح K سبک 1"
        link="block-k-props"
        inverted
      />

      <FeatureBlockK
        title="سبزیجات تازه"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
          اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
          کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
          دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
          هابوی. ویدیسنه کوام سیت ماگنا دیسنسیو؟ اکِ آلیود سیمیل
          دیسیمیل."
        :features="features4"
        links
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-k-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح K"
        subtitle="پراپ‌های در دسترس برای بلوک طرح K"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="featureBlockK"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockKProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockKSample"
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
