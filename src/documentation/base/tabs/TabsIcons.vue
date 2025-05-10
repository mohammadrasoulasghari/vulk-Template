<script setup lang="ts">
import { tabsProps, tabsIcons } from '/@src/data/docs/base/tabs'
</script>

<template>
  <Section
    id="tabs-icons-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="آیکون‌ها"
            subtitle="سبک‌های مختلف تب‌های آیکون‌دار"
          />
          <div class="pt-4">
            <Tabs
              selected="overview"
              :tabs="[
                {
                  label: 'بررسی اجمالی',
                  value: 'overview',
                  icon: 'ion:apps-outline',
                },
                { label: 'تیم', value: 'team', icon: 'ion:people-outline' },
                {
                  label: 'بودجه',
                  value: 'budget',
                  icon: 'ion:podium-outline',
                },
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
              :code="tabsIcons"
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
              برای تنظیم محتوای تب‌ها استفاده کنید. برای ایجاد تب‌های دارای
              آیکون، ویژگی
              <code>icon</code>
              را به آرایه‌ای که به
              <code>:tabs</code>
              ارسال می‌کنید، اضافه کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
