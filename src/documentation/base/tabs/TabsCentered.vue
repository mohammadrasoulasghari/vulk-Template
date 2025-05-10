<script setup lang="ts">
import { tabsProps, tabsCentered } from '/@src/data/docs/base/tabs'
</script>

<template>
  <Section
    id="tabs-centered-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="تب‌های وسط‌چین"
            subtitle="سبک‌های مختلف تب‌های وسط‌چین"
          />
          <div class="pt-4">
            <Tabs
              alignment="centered"
              selected="overview"
              :tabs="[
                { label: 'بررسی اجمالی', value: 'overview' },
                { label: 'تیم', value: 'team' },
                { label: 'بودجه', value: 'budget' },
              ]"
            >
              <template #tab="{ activeValue }">
                <p
                  v-if="activeValue === 'overview'"
                  class="paragraph"
                >
                  لورم ایپسوم دولور سیت آمِت، کانسکتتور آدپیسیسینگ الیت. کید
                  یودیکانت سنسوس؟ پریموم کید تو دیکیس بریوه؟ اتیام بیتیسیموم؟ نه
                  دیسکیپولوم ابدوکام، تیمس. کوا دلیگنتیسیما کانترا آریستونم
                  دیکنتور آ کوریپپو. دو رگس: کنتراستیو اینترتی.
                </p>
                <p
                  v-else-if="activeValue === 'team'"
                  class="paragraph"
                >
                  لورم ایپسوم دولور سیت آمِت، کانسکتتور آدپیسیسینگ الیت. کید
                  یودیکانت سنسوس؟ پریموم کید تو دیکیس بریوه؟ اتیام بیتیسیموم؟ نه
                  دیسکیپولوم ابدوکام، تیمس. کوا دلیگنتیسیما کانترا آریستونم
                  دیکنتور آ کوریپپو. دو رگس: کنتراستیو اینترتی.
                </p>
                <p
                  v-else-if="activeValue === 'budget'"
                  class="paragraph"
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می‌باشد.
                </p>
              </template>
            </Tabs>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="tabsCentered"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="tabsProps"
            />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                نمونه داده‌ای برای این مؤلفه موجود نیست
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              تب‌ها یکی از عناصر رابط کاربری بسیار رایج در وب‌سایت‌ها و
              برنامه‌های مدرن هستند. تب‌های وولک بسیار ساده در استفاده و به
              راحتی قابل سفارشی‌سازی هستند. از پراپ
              <code>:tabs</code>
              برای تعریف تب‌های خود و از اسلات
              <code>#tab</code>
              برای تنظیم محتوای تب‌ها استفاده کنید. از پراپ
              <code>alignment</code>
              برای کنترل تراز تب‌ها استفاده کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
