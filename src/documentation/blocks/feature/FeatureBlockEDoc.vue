<script setup lang="ts">
import { features3 } from '/@src/data/blocks/features'
import {
  featureBlockE,
  featureBlockEProps,
  featureBlockESample,
} from '/@src/data/docs/blocks/feature/blockE'
</script>

<template>
  <Section
    id="block-e-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک ویژگی طرح E سبک 1"
        link="block-e-props"
      />

      <FeatureBlockE
        title="سریعتر رشد کنید."
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی اینیم
          اینتر سه دیسنتیونت. اکپکتوکوی کید آد اید، کواد کوایره‌با،
          ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو. دو رجس:
          کانستروکسیو اینتررته. دیسرندی آرتِم نوللام هابوی. ویدسنه کوم
          سیت ماگنا دیسنسو؟ اکچه الیود سیمیل دیسیمیله."
        :features="features3"
        image="/assets/illustrations/features/thinking.svg"
        dark-image="/assets/illustrations/features/thinking.svg"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک ویژگی طرح E سبک 2"
        link="block-e-props"
        inverted
      />

      <FeatureBlockE
        title="سریعتر رشد کنید."
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی اینیم
          اینتر سه دیسنتیونت. اکپکتوکوی کید آد اید، کواد کوایره‌با،
          ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو. دو رجس:
          کانستروکسیو اینتررته. دیسرندی آرتِم نوللام هابوی. ویدسنه کوم
          سیت ماگنا دیسنسو؟ اکچه الیود سیمیل دیسیمیله."
        :features="features3"
        image="/assets/illustrations/features/bike-dark.svg"
        dark-image="/assets/illustrations/features/bike-dark.svg"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک ویژگی طرح E سبک 3"
        link="block-e-props"
      />

      <FeatureBlockE
        title="واقعیت افزوده و کسب و کارها."
        content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی اینیم
          اینتر سه دیسنتیونت. اکپکتوکوی کید آد اید، کواد کوایره‌با،
          ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو. دو رجس:
          کانستروکسیو اینتررته. دیسرندی آرتِم نوللام هابوی. ویدسنه کوم
          سیت ماگنا دیسنسو؟ اکچه الیود سیمیل دیسیمیله."
        :features="features3"
        image="/assets/illustrations/features/vr.svg"
        dark-image="/assets/illustrations/features/vr-dark.svg"
        links
      />
    </Container>
  </Section>

  <Section
    id="block-e-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح E"
        subtitle="پراپ‌های در دسترس برای بلوک طرح E"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="featureBlockE"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockESample"
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
