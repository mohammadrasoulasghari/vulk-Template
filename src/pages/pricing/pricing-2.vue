<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { pricingIconFeatures } from '/@src/data/blocks/advanced/features'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="پلن ساده ما را مشاهده نمائید"
          subtitle="ساده و رقابتی"
          text="روش کار خود را بهبود بخشید، یک ابزار کاملاً جدید را کشف کنید و یک بار برای همیشه دردسر را کنار بگذارید."
        />

        <PricingSolo
          title="قیمت گذاری موثر"
          subtitle="همه ویژگی‌های لارم برای ران کردن پروژه"
          :features="[
            'بی نهایت پروژه',
            'اپ موبایل و دسکتاپ',
            'بی نهایت تسک',
            'پشتیبانی از ایمیل',
            'بی نهایت رکورد زمان',
            'مدیریت کلاینت',
            'ملزومات تسک',
            'نرک بودجه',
            'تسک‌های بازگشتی',
            'گزارشات پیشرفته',
          ]"
          :monthly-price="7"
          :yearly-price="79"
          link-label="شروع دسترسی آزمایشی"
          link="/"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <PricingSoloExtension
          title="باندل قیمتی را دریافت کنید"
          subtitle="با ویژگی‌های برتر و ممتاز پلن خود را ارتقا دهید"
          :features="[
            'بی نهایت پروژه',
            'اپ موبایل و دسکتاپ',
            'بی نهایت تسک',
            'پشتیبانی از ایمیل',
            'بی نهایت رکورد زمان',
            'مدیریت کلاینت',
            'ملزومات تسک',
            'نرک بودجه',
          ]"
          :price="4"
        />

        <IconSection
          :features="pricingIconFeatures"
          centered
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <CtaBlockJ
          small-text="آزمایشی ۱۴ روزه"
          title="جهان واقعی را شاد کنید"
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
                  raised
                >
                  شروع کنید
                </Button>
              </Control>
            </Field>
          </form>
          <div class="mt-4">
            <RouterLink
              to="/"
              class="paragraph text-primary"
            >
              یا با گوگل ثبت نام کنید
            </RouterLink>
          </div>
        </CtaBlockJ>

        <TestimonialBlockE
          image="/assets/demo/img/people/13.jpg"
          name="باسیل اولمبه"
          position="معمار راه حل"
          content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز."
          logo="/assets/brands/tribe.svg"
          curved
          reversed
        />
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <SectionTitle
          title="خواندن سوالات پرتکرار"
          subtitle="سوالی دارید؟"
        />

        <FaqListBoxed :items="genericFaq" />

        <CtaBlockB
          title-primary="الان شروع کنید!"
          content-primary="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-primary="دسترسی آزمایشی"
          cta-primary-link="/"
          title-secondary="اطلاعات بیشتر"
          content-secondary="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-secondary="تماس با ما"
          cta-secondary-link="/"
          boxed
          shapes
          animated
        />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
