<script setup lang="ts">
import { ctaBlockH, ctaBlockHProps } from '/@src/data/docs/blocks/cta/blockH'
</script>

<template>
  <Section
    id="block-h-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک طرح H سبک 1"
        link="block-h-props"
      />

      <CtaBlockH
        small-text="فریم‌ورک رابط کاربری"
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        image="/assets/illustrations/apps/apps-slant.png"
        dark-image="/assets/illustrations/apps/apps-slant.png"
      >
        <Buttons>
          <Button
            :to="'index'"
            color="primary"
            :long="2"
            bold
            raised
          >
            شروع کنید
          </Button>
          <Button
            :to="'index'"
            :long="2"
            bold
            raised
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockH>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح H"
        subtitle="بلوک طرح H سبک 2"
        link="block-h-props"
      />

      <CtaBlockH
        small-text="فریم‌ورک رابط کاربری"
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        background="/assets/demo/img/color/12.jpeg"
      >
        <Buttons>
          <Button
            :to="'index'"
            color="primary"
            :long="2"
            bold
            raised
          >
            شروع کنید
          </Button>
          <Button
            :to="'index'"
            :long="2"
            bold
            raised
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockH>
    </Container>
  </Section>

  <Section
    id="block-h-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح H"
        subtitle="پراپ‌های در دسترس برای بلوک طرح H"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="ctaBlockH"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockHProps.props" />
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
