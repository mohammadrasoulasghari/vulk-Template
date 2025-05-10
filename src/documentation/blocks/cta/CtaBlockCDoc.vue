<script setup lang="ts">
import { ctaBlockC, ctaBlockCProps } from '/@src/data/docs/blocks/cta/blockC'
</script>

<template>
  <Section
    id="block-c-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 1"
        link="block-c-props"
      />

      <CtaBlockC
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم دولور سیت آمت، کونستکتور آدیسپیسینگ الیت. کیست است تام
          دیسیمیل هومینی. کوئه کوم دیسسیست پاولومکه؟"
      >
        <Field grouped>
          <Control
            icon="feather:mail"
            expanded
          >
            <VInput placeholder="آدرس ایمیل..." />
          </Control>
          <Control>
            <Button
              color="primary"
              size="form"
              :long="2"
              raised
              bold
            >
              اشتراک
            </Button>
          </Control>
        </Field>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 2"
        link="block-c-props"
      />

      <CtaBlockC
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم دولور سیت آمت، کونستکتور آدیسپیسینگ الیت. کیست است تام
          دیسیمیل هومینی. کوئه کوم دیسسیست پاولومکه؟"
        minimal
      >
        <Field grouped>
          <Control
            icon="feather:mail"
            expanded
          >
            <VInput placeholder="آدرس ایمیل..." />
          </Control>
          <Control>
            <Button
              color="primary"
              size="form"
              :long="2"
              raised
              bold
            >
              اشتراک
            </Button>
          </Control>
        </Field>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 3"
        link="block-c-props"
      />

      <CtaBlockC
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم دولور سیت آمت، کونستکتور آدیسپیسینگ الیت. کیست است تام
          دیسیمیل هومینی. کوئه کوم دیسسیست پاولومکه؟"
        shapes
      >
        <Buttons stacked>
          <Button
            color="primary"
            :long="2"
            raised
            bold
          >
            دریافت اشتراک
          </Button>
          <Button
            :long="2"
            raised
            bold
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 4"
        link="block-c-props"
      />

      <CtaBlockC
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم دولور سیت آمت، کونستکتور آدیسپیسینگ الیت. کیست است تام
          دیسیمیل هومینی. کوئه کوم دیسسیست پاولومکه؟"
        shapes
        minimal
      >
        <Buttons stacked>
          <Button
            color="primary"
            :long="2"
            raised
            bold
          >
            دریافت اشتراک
          </Button>
          <Button
            :long="2"
            raised
            bold
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 5"
        link="block-c-props"
      />

      <CtaBlockC
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم دولور سیت آمت، کونستکتور آدیسپیسینگ الیت. کیست است تام
          دیسیمیل هومینی. کوئه کوم دیسسیست پاولومکه؟"
        shapes
        animated
      >
        <Buttons stacked>
          <Button
            color="primary"
            :long="2"
            raised
            bold
          >
            دریافت اشتراک
          </Button>
          <Button
            :long="2"
            raised
            bold
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 6"
        link="block-c-props"
      />

      <CtaBlockC
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم دولور سیت آمت، کونستکتور آدیسپیسینگ الیت. کیست است تام
          دیسیمیل هومینی. کوئه کوم دیسسیست پاولومکه؟"
        shapes
        minimal
        animated
      >
        <Buttons stacked>
          <Button
            color="primary"
            :long="2"
            raised
            bold
          >
            دریافت اشتراک
          </Button>
          <Button
            :long="2"
            raised
            bold
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section
    bordered-bottom
    color="darker"
  >
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 6"
        link="block-c-props"
        inverted
      />

      <CtaBlockC
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم دولور سیت آمت، کونستکتور آدیسپیسینگ الیت. کیست است تام
          دیسیمیل هومینی. کوئه کوم دیسسیست پاولومکه؟"
        shapes
        animated
        inverted
      >
        <Buttons stacked>
          <Button
            color="primary"
            :long="2"
            raised
            bold
          >
            دریافت اشتراک
          </Button>
          <Button
            :long="2"
            raised
            bold
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section
    id="block-c-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح C Props"
        subtitle="پراپ‌های در دسترس برای بلوک طرح C"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="ctaBlockC"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockCProps.props" />
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
            Vulk با بلوک‌های CTA بسیار قابل تنظیم و متنوعی ارائه می‌شود که
            می‌توانید در هر صفحه‌ای از آن‌ها استفاده کنید. هر بلوک با استایل‌ها
            و پراپ‌های خود همراه است. از پراپ‌ها برای ساخت نمونه‌های خود استفاده
            کنید یا از یکی از نمونه‌های پیش‌ساخته استفاده نمایید. هر بلوک به‌طور
            پیش‌فرض از حالت تاریک پشتیبانی می‌کند. با این حال، در برخی موارد حتی
            در حالت روشن، پس‌زمینه بخش ممکن است تاریک یا رنگی باشد. در این حالت،
            می‌توانید از پراپ
            <code>inverted</code>
            برای معکوس کردن کامپوننت در حالت روشن استفاده کنید. برای جزئیات
            بیشتر در مورد استفاده، به برگه مارکاپ و پراپ‌ها مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
