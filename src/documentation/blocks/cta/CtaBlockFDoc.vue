<script setup lang="ts">
import { ctaBlockF, ctaBlockFProps } from '/@src/data/docs/blocks/cta/blockF'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <Section
    id="block-f-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 2"
        link="block-f-props"
      />

      <CtaBlockF
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        background="/assets/demo/img/color/1.jpg"
        cta="شروع کنید"
        cta-link="index"
        :alignment="rtl ? 'right' : 'left'"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 3"
        link="block-f-props"
      />

      <CtaBlockF
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        background="/assets/demo/img/color/2.jpg"
        cta="شروع کنید"
        cta-link="index"
        :alignment="rtl ? 'right' : 'left'"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 4"
        link="block-f-props"
      />

      <CtaBlockF
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        background="/assets/demo/img/color/6.jpg"
        overlay
        cta="شروع کنید"
        cta-link="index"
        :alignment="rtl ? 'right' : 'left'"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 5"
        link="block-f-props"
      />

      <CtaBlockF
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        background="/assets/demo/img/color/5.jpg"
        alignment="centered"
        cta="شروع کنید"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 6"
        link="block-f-props"
      />

      <CtaBlockF
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        background="/assets/demo/img/color/3.jpg"
        overlay
        alignment="centered"
        cta="شروع کنید"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 7"
        link="block-f-props"
      />

      <CtaBlockF
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        background="/assets/demo/img/color/4.jpg"
        :alignment="!rtl ? 'right' : 'left'"
        cta="شروع کنید"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 8"
        link="block-f-props"
      />

      <CtaBlockF
        title="آماده شروع هستید؟"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        background="/assets/demo/img/color/7.jpg"
        overlay
        :alignment="!rtl ? 'right' : 'left'"
        cta="شروع کنید"
        cta-link="index"
      />
    </Container>
  </Section>

  <Section
    id="block-f-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح F"
        subtitle="پراپ‌های در دسترس برای بلوک طرح F"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="ctaBlockF"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockFProps.props" />
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
