<script setup lang="ts">
import { pageTitleProps, pageTitle } from '/@src/data/docs/base/typography'
</script>

<template>
  <Section
    id="page-title-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="عنوان صفحه"
            subtitle="سبک‌های مختلف کامپوننت عنوان صفحه"
          />
          <div class="pt-4">
            <PageTitle
              title="دوباره حساب کن"
              subtitle="شروع کنید"
              text="لورم ایپسوم دولور سیت آمِت، کونسِکتِتُر آدیپیسینگ الیت. کوی ایتا اففکتوس، بیاتوم ا پروبابیس"
            >
              <template #content>
                <Buttons
                  alignment="centered"
                  class="mt-4"
                >
                  <Button
                    color="primary"
                    :long="3"
                    bold
                    raised
                  >
                    شروع کنید
                  </Button>
                  <Button
                    :long="3"
                    bold
                  >
                    اطلاعات بیشتر
                  </Button>
                  <Button
                    :long="3"
                    bold
                  >
                    بیشتد بدانید
                  </Button>
                </Buttons>
              </template>
            </PageTitle>
          </div>
        </div>

        <div class="pt-4 pb-6">
          <div class="pt-4">
            <PageTitle
              title="دوباره حساب کن"
              subtitle="شروع کنید"
              text="لورم ایپسوم دولور سیت آمِت، کونسِکتِتُر آدیپیسینگ الیت. کوی ایتا اففکتوس، بیاتوم ا پروبابیس"
              aligned
            >
              <template #content>
                <Buttons class="mt-4">
                  <Button
                    color="primary"
                    :long="3"
                    bold
                    raised
                  >
                    شروع کنید
                  </Button>
                  <Button
                    :long="3"
                    bold
                  >
                    اطلاعات بیشتر
                  </Button>
                  <Button
                    :long="3"
                    bold
                  >
                    بیشتد بدانید
                  </Button>
                </Buttons>
              </template>
            </PageTitle>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="pageTitle"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="pageTitleProps"
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
              Vulk یک کامپوننت عنوان صفحه ارائه می‌دهد که می‌توانید به طور ایمن
              در تمام بخش‌های برنامه‌تان از آن استفاده کنید. این کامپوننت چندین
              پراپ را فراهم می‌کند تا بتوانید هر جنبه‌ای از آن را کنترل کنید، از
              جمله محتوا که با پراپ‌های
              <code>title</code>
              ،
              <code>subtitle</code>
              ، و
              <code>text</code>
              (اختیاری) مدیریت می‌شود. همچنین یک
              <code>#content</code>
              اسلات فراهم می‌آورد که می‌توانید از آن برای درج عناصر اضافی
              استفاده کنید. همچنین می‌توانید عنوان صفحه خود را با استفاده از
              پراپ
              <code>aligned</code>
              به سمت چپ تراز کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
