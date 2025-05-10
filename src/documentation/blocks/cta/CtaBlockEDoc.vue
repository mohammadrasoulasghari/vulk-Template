<script setup lang="ts">
import { ctaBlockE, ctaBlockEProps } from '/@src/data/docs/blocks/cta/blockE'
</script>

<template>
  <Section
    id="block-e-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 1"
        link="block-e-props"
      />

      <CtaBlockE
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta="شروع کنید"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section
    color="darker"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 1"
        link="block-e-props"
        inverted
      />

      <CtaBlockE
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta="شروع کنید"
        cta-link="index"
        inverted
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
            :code="ctaBlockE"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockEProps.props" />
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
