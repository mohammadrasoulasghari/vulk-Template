<script setup lang="ts">
import { features8 } from '/@src/data/blocks/features'
import {
  featureBlockJ,
  featureBlockJProps,
  featureBlockJSample,
} from '/@src/data/docs/blocks/feature/blockJ'
</script>

<template>
  <Section
    id="block-j-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک ویژگی طرح J سبک 1"
        link="block-j-props"
      />

      <FeatureBlockJ
        title="سبزیجات تازه"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
          اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
          کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
          دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
          هابوی. ویدیسنه کوام سیت ماگنا دیسنسیو؟ اکِ آلیود سیمیل
          دیسیمیل."
        image="/assets/illustrations/features/carrying-vegetables.svg"
        dark-image="/assets/illustrations/features/carrying-vegetables.svg"
        :features="features8"
        links
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک ویژگی طرح J سبک 2"
        link="block-j-props"
        inverted
      />

      <FeatureBlockJ
        title="سبزیجات تازه"
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
          اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
          کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
          دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
          هابوی. ویدیسنه کوام سیت ماگنا دیسنسیو؟ اکِ آلیود سیمیل
          دیسیمیل."
        image="/assets/illustrations/features/carrying-vegetables.svg"
        dark-image="/assets/illustrations/features/carrying-vegetables.svg"
        :features="features8"
        links
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-j-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح J"
        subtitle="پراپ‌های در دسترس برای بلوک طرح J"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="featureBlockJ"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockJProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockJSample"
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
