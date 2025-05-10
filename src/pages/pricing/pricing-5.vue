<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { pricingBlockPlans } from '/@src/data/blocks/advanced/pricing'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="قیمت گذاری رو سخت نگیریم"
          subtitle="ساده نگاه کنیم"
          text="روش کار خود را بهبود بخشید، یک ابزار کاملاً جدید را کشف کنید و یک بار برای همیشه دردسر را کنار بگذارید."
        />

        <PricingBlock :plans="pricingBlockPlans" />

        <ValuesSection
          :values="plantValues"
          image-height="150px"
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
          image="/assets/demo/img/people/11.jpg"
          name="مایکل والاس"
          position="مدیر پروژه"
          content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز."
          logo="/assets/brands/vonmo.svg"
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
