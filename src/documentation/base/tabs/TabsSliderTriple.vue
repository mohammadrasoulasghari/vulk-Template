<script setup lang="ts">
import { tabsProps, tabsSliderTriple } from '/@src/data/docs/base/tabs'
</script>

<template>
  <Section
    id="tabs-slider-triple-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="تب‌های اسلایدری سه‌تایی"
            subtitle="سبک‌های مختلف تب‌های اسلایدری"
          />
          <div class="pt-4">
            <Tabs
              slider
              selected="team"
              :tabs="[
                { label: 'تیم', value: 'team' },
                { label: 'پروژه‌ها', value: 'projects' },
                { label: 'تسک‌ها', value: 'tasks' },
              ]"
            >
              <template #tab="{ activeValue }">
                <p
                  v-if="activeValue === 'team'"
                  class="paragraph"
                >
                  لورم ایپسوم دولور سیت آمِت، کانسکتتور آدپیسیسینگ الیت. کید
                  یودیکانت سنسوس؟ پریموم کید تو دیکیس بریوه؟ اتیام بیتیسیموم؟ نه
                  دیسکیپولوم ابدوکام، تیمس. کوا دلیگنتیسیما کانترا آریستونم
                  دیکنتور آ کوریپپو. دو رگس: کنتراستیو اینترتی.
                </p>
                <p
                  v-else-if="activeValue === 'projects'"
                  class="paragraph"
                >
                  لورم ایپسوم دولور سیت آمِت، کانسکتتور آدپیسیسینگ الیت. کید
                  یودیکانت سنسوس؟ پریموم کید تو دیکیس بریوه؟ اتیام بیتیسیموم؟ نه
                  دیسکیپولوم ابدوکام، تیمس. کوا دلیگنتیسیما کانترا آریستونم
                  دیکنتور آ کوریپپو. دو رگس: کنتراستیو اینترتی.
                </p>
                <p
                  v-else-if="activeValue === 'tasks'"
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

          <div class="pt-6">
            <Tabs
              slider
              type="rounded"
              selected="team"
              :tabs="[
                { label: 'تیم', value: 'team' },
                { label: 'پروژه‌ها', value: 'projects' },
                { label: 'تسک‌ها', value: 'tasks' },
              ]"
            >
              <template #tab="{ activeValue }">
                <p
                  v-if="activeValue === 'team'"
                  class="paragraph"
                >
                  لورم ایپسوم دولور سیت آمِت، کانسکتتور آدپیسیسینگ الیت. کید
                  یودیکانت سنسوس؟ پریموم کید تو دیکیس بریوه؟ اتیام بیتیسیموم؟ نه
                  دیسکیپولوم ابدوکام، تیمس. کوا دلیگنتیسیما کانترا آریستونم
                  دیکنتور آ کوریپپو. دو رگس: کنتراستیو اینترتی.
                </p>
                <p
                  v-else-if="activeValue === 'projects'"
                  class="paragraph"
                >
                  لورم ایپسوم دولور سیت آمِت، کانسکتتور آدپیسیسینگ الیت. کید
                  یودیکانت سنسوس؟ پریموم کید تو دیکیس بریوه؟ اتیام بیتیسیموم؟ نه
                  دیسکیپولوم ابدوکام، تیمس. کوا دلیگنتیسیما کانترا آریستونم
                  دیکنتور آ کوریپپو. دو رگس: کنتراستیو اینترتی.
                </p>
                <p
                  v-else-if="activeValue === 'tasks'"
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
              :code="tabsSliderTriple"
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
              برای تنظیم محتوای تب‌ها استفاده کنید. می‌توانید با استفاده از پراپ
              <code>slider</code>
              تب‌ها را به نوع چینش اسلایدری تغییر دهید. همچنین می‌توانید با
              استفاده از
              <code>type="rounded"</code>
              پراپ، شکل نوار تب را تغییر دهید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
