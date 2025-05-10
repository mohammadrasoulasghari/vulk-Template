<script setup lang="ts">
import { ctaBlockJ, ctaBlockJProps } from '/@src/data/docs/blocks/cta/blockJ'
</script>

<template>
  <Section
    id="block-j-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک طرح J سبک 1"
        link="block-j-props"
      />

      <CtaBlockJ
        small-text="آزمایشی ۱۴ روزه"
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      >
        <form>
          <Field grouped>
            <Control
              icon="feather:user"
              expanded
            >
              <VInput placeholder="نام کامل" />
            </Control>
            <Control
              icon="feather:mail"
              expanded
            >
              <VInput placeholder="ایمیل" />
            </Control>
            <Control>
              <Button
                size="form"
                color="primary"
                :long="2"
              >
                شروع کنید
              </Button>
            </Control>
          </Field>
        </form>
      </CtaBlockJ>
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک طرح J سبک 1"
        link="block-j-props"
        inverted
      />

      <CtaBlockJ
        small-text="آزمایشی ۱۴ روزه"
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        inverted
      >
        <form>
          <Field grouped>
            <Control
              icon="feather:user"
              expanded
            >
              <VInput
                placeholder="نام کامل"
                inverted
              />
            </Control>
            <Control
              icon="feather:mail"
              expanded
            >
              <VInput
                placeholder="ایمیل"
                inverted
              />
            </Control>
            <Control>
              <Button
                size="form"
                color="primary"
                :long="2"
              >
                شروع کنید
              </Button>
            </Control>
          </Field>
        </form>
      </CtaBlockJ>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک طرح J سبک 1"
        link="block-j-props"
      />

      <CtaBlockJ
        small-text="آزمایشی ۱۴ روزه"
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      >
        <Buttons alignment="centered">
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
      </CtaBlockJ>
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح J"
        subtitle="بلوک طرح J سبک 1"
        link="block-j-props"
        inverted
      />

      <CtaBlockJ
        small-text="آزمایشی ۱۴ روزه"
        title="شروع به ساختن کنید"
        subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        inverted
      >
        <Buttons alignment="centered">
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
      </CtaBlockJ>
    </Container>
  </Section>

  <Section
    id="block-j-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح J"
        subtitle="پراپ‌های در دسترس برای بلوک طرح J"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="ctaBlockJ"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockJProps.props" />
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
