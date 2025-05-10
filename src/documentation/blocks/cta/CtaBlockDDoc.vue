<script setup lang="ts">
import { ctaBlockD, ctaBlockDProps } from '/@src/data/docs/blocks/cta/blockD'
</script>

<template>
  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 1"
        link="block-d-props"
      />

      <CtaBlockD
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      >
        <Buttons>
          <Button
            color="primary"
            :long="2"
            bold
            raised
          >
            شروع کنید
          </Button>
          <Button
            :long="2"
            bold
            raised
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockD>
    </Container>
  </Section>

  <Section
    color="darker"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 2"
        link="block-d-props"
        inverted
      />

      <CtaBlockD
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        inverted
      >
        <Buttons>
          <Button
            color="primary"
            :long="2"
            bold
            raised
          >
            شروع کنید
          </Button>
          <Button
            :long="2"
            bold
            raised
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockD>
    </Container>
  </Section>

  <Section
    id="block-d-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح D"
        subtitle="پراپ‌های در دسترس برای بلوک طرح D"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="ctaBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockDProps.props" />
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
