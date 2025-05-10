<script setup lang="ts">
import { customerLogos2 } from '/@src/data/pages/logos'
import {
  ctaBlockA,
  ctaBlockAProps,
  ctaBlockASample,
} from '/@src/data/docs/blocks/cta/blockA'
</script>

<template>
  <Section
    id="block-a-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 1"
        link="block-a-props"
      />

      <CtaBlockA
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta-primary="شروع کنید"
        cta-primary-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 2"
        link="block-a-props"
      />

      <CtaBlockA
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta-primary="شروع کنید"
        cta-primary-link="index"
        cta-secondary="بیشتر بدانید"
        cta-secondary-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 3"
        link="block-a-props"
      />

      <CtaBlockA
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta-primary="شروع کنید"
        cta-primary-link="index"
        cta-secondary="بیشتر بدانید"
        cta-secondary-link="index"
        :logos="customerLogos2"
      />
    </Container>
  </Section>

  <Section
    color="darker"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 4"
        link="block-a-props"
        inverted
      />

      <CtaBlockA
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta-primary="شروع کنید"
        cta-primary-link="index"
        cta-secondary="بیشتر بدانید"
        cta-secondary-link="index"
        :logos="customerLogos2"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 5"
        link="block-a-props"
      />

      <CtaBlockA
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta-primary="شروع کنید"
        cta-primary-link="index"
        cta-secondary="بیشتر بدانید"
        cta-secondary-link="index"
        :logos="customerLogos2"
        boxed
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 6"
        link="block-a-props"
      />

      <CtaBlockA
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta-primary="شروع کنید"
        cta-primary-link="index"
        cta-secondary="بیشتر بدانید"
        cta-secondary-link="index"
        :logos="customerLogos2"
        boxed
        shapes
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 7"
        link="block-a-props"
      />

      <CtaBlockA
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta-primary="شروع کنید"
        cta-primary-link="index"
        cta-secondary="بیشتر بدانید"
        cta-secondary-link="index"
        :logos="customerLogos2"
        boxed
        shapes
        animated
        color="primary"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 8"
        link="block-a-props"
      />

      <CtaBlockA
        title="آماده‌ی رفتن هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        cta-primary="شروع کنید"
        cta-primary-link="index"
        cta-secondary="بیشتر بدانید"
        cta-secondary-link="index"
        :logos="customerLogos2"
        boxed
        shapes
        animated
        color="darker"
      />
    </Container>
  </Section>

  <Section
    id="block-a-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح A"
        subtitle="پراپ‌های در دسترس برای بلوک طرح A"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="ctaBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="ctaBlockASample"
          />
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
