<script setup lang="ts">
import { ctaBlockI, ctaBlockIProps } from '/@src/data/docs/blocks/cta/blockI'
</script>

<template>
  <Section
    id="block-i-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک طرح I سبک 1"
        link="block-i-props"
      />

      <CtaBlockI
        title="شروع کنید"
        subtitle="فرم زیر را پر کنید تا شروع به کار با برنامه ما کنید."
      >
        <template #content>
          <p class="paragraph rem-125 max-w-5 b-centered-tablet-p">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </template>
        <template #form>
          <form class="pb-4">
            <Field>
              <FieldLabel label="نام کامل">
                نام کامل
              </FieldLabel>
              <Control icon="feather:user">
                <VInput />
              </Control>
            </Field>
            <Field>
              <FieldLabel label="آدرس ایمیل">
                آدرس ایمیل
              </FieldLabel>
              <Control icon="feather:mail">
                <VInput />
              </Control>
            </Field>
            <Field>
              <FieldLabel label="گذرواژه">
                گذرواژه
              </FieldLabel>
              <Control icon="feather:lock">
                <VInput type="password" />
              </Control>
            </Field>
            <Field class="pt-4">
              <Control>
                <Buttons alignment="centered">
                  <Button
                    :to="'index'"
                    color="primary"
                    fullwidth
                    bold
                    raised
                  >
                    شروع کنید
                  </Button>
                </Buttons>
              </Control>
            </Field>
          </form>
        </template>
      </CtaBlockI>
    </Container>
  </Section>

  <Section
    id="block-i-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح I"
        subtitle="بلوک طرح I سبک 1"
        link="block-i-props"
      />

      <CtaBlockI
        title="شروع کنید"
        subtitle="فرم زیر را پر کنید تا شروع به کار با برنامه ما کنید."
      >
        <template #content>
          <p class="paragraph rem-125 max-w-5 b-centered-tablet-p">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </template>
        <template #form>
          <form class="py-4">
            <div class="columns is-multiline">
              <div class="column is-6">
                <Field>
                  <FieldLabel label="نام">
                    نام
                  </FieldLabel>
                  <Control icon="feather:user">
                    <VInput />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="نام خانوادگی">
                    نام خانوادگی
                  </FieldLabel>
                  <Control icon="feather:user">
                    <VInput />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field>
                  <FieldLabel label="آدرس ایمیل">
                    آدرس ایمیل
                  </FieldLabel>
                  <Control icon="feather:mail">
                    <VInput />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="گذرواژه">
                    گذرواژه
                  </FieldLabel>
                  <Control icon="feather:lock">
                    <VInput type="password" />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="گذرواژه">
                    تکرار گذرواژه
                  </FieldLabel>
                  <Control icon="feather:lock">
                    <VInput type="password" />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field class="pt-4">
                  <Control>
                    <Buttons alignment="centered">
                      <Button
                        :to="'index'"
                        color="primary"
                        fullwidth
                        bold
                        raised
                      >
                        شروع کنید
                      </Button>
                    </Buttons>
                  </Control>
                </Field>
              </div>
            </div>
          </form>
        </template>
      </CtaBlockI>
    </Container>
  </Section>

  <Section
    id="block-i-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح I"
        subtitle="پراپ‌های در دسترس برای بلوک طرح I"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="ctaBlockI"
          />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockIProps.props" />
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
