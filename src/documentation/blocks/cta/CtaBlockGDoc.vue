<script setup lang="ts">
import { ctaBlockG, ctaBlockGProps } from '/@src/data/docs/blocks/cta/blockG'
</script>

<template>
  <Section
    id="block-g-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک طرح G سبک 1"
        link="block-g-props"
      />

      <CtaBlockG
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        image="/assets/demo/img/color/8.jpg"
        dark-image="/assets/demo/img/color/8.jpg"
      >
        <Field grouped>
          <Control
            expanded
            icon="feather:mail"
          >
            <VInput placeholder="آدرس ایمیل" />
          </Control>
          <Control>
            <Button
              size="form"
              color="primary"
              :long="2"
              bold
              raised
            >
              ثبت نام
            </Button>
          </Control>
        </Field>
      </CtaBlockG>
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک طرح G سبک 2"
        link="block-g-props"
        inverted
      />

      <CtaBlockG
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        image="/assets/demo/img/color/9.jpg"
        dark-image="/assets/demo/img/color/9.jpg"
        inverted
      >
        <Field grouped>
          <Control
            expanded
            icon="feather:mail"
          >
            <VInput
              placeholder="آدرس ایمیل"
              inverted
            />
          </Control>
          <Control>
            <Button
              size="form"
              color="primary"
              :long="2"
              bold
              raised
            >
              ثبت نام
            </Button>
          </Control>
        </Field>
      </CtaBlockG>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک طرح G سبک 3"
        link="block-g-props"
      />

      <CtaBlockG
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        image="/assets/demo/img/color/10.jpg"
        dark-image="/assets/demo/img/color/10.jpg"
        rounded
      >
        <Buttons>
          <Button
            color="primary"
            :long="2"
            bold
            raised
          >
            ثبت نام
          </Button>
          <Button
            :long="2"
            bold
            raised
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockG>
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح G"
        subtitle="بلوک طرح G سبک 4"
        link="block-g-props"
        inverted
      />

      <CtaBlockG
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        image="/assets/demo/img/color/11.jpg"
        dark-image="/assets/demo/img/color/11.jpg"
        rounded
        inverted
      >
        <Buttons>
          <Button
            color="primary"
            :long="2"
            bold
            raised
          >
            ثبت نام
          </Button>
          <Button
            :long="2"
            bold
            raised
          >
            اطلاعات بیشتر
          </Button>
        </Buttons>
      </CtaBlockG>
    </Container>
  </Section>

  <Section
    id="block-g-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح G"
        subtitle="پراپ‌های در دسترس برای بلوک طرح G"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="ctaBlockG"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockGProps.props" />
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
