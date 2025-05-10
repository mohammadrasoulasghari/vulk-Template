<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  jobs,
  jobTopics,
  jobCategories,
  candidates,
  testimonials,
} from '/@src/data/pages/jobs'
import { socialLinks } from '/@src/data/blocks/advanced/social'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div>
    <HeroX />

    <LogoMarquee
      :logos="customerLogos"
      compact
    />

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="عنوان‌های شغلی برگزیده"
          subtitle="برگزیده‌ها"
        />

        <JobGrid :jobs="jobs" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="دسته‌بندی‌های محبوب"
          subtitle="محبوب‌ها"
        />

        <FeatureBlockA
          alignment="centered"
          :features="jobCategories"
          :columns="3"
          :limit="8"
          size="medium"
          links
        />

        <div class="my-4">
          <Buttons alignment="centered">
            <Button
              color="primary"
              :long="3"
              raised
              bold
            >
              همه‌ی دسته‌بندی‌ها
            </Button>
          </Buttons>
        </div>

        <LogoMarquee
          :logos="customerLogos"
          compact
        />
      </Container>
    </Section>

    <Section
      v-background="{
        src: `/assets/demo/img/bg/5${rtl && '-r'}.jpeg`,
        placeholder: 'https://dummyimage.com/1920x1080/',
      }"
      overlay
    >
      <Container>
        <div class="py-6">
          <div class="columns">
            <div class="column is-5 is-offset-7">
              <CtaBlockA
                title="لیست مهارت‌های شما"
                subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                cta-primary="شروع کنید"
                cta-primary-link="/about"
                cta-secondary="بیشتر بدانید"
                cta-secondary-link="/about"
                boxed
                shapes
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="تایپک‌های داغ"
          subtitle="ترند شده"
        />

        <JobTopics
          :topics="jobTopics"
          :limit="12"
        />
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-2"
      shape-color="footer-dark"
    >
      <Container>
        <SectionTitle
          title="اعضای تازه وارد"
          subtitle="تازه نفس‌ها"
        />

        <TeamBlockB
          :items="candidates"
          bubbles
        />

        <TestimonialsCarouselSingle :slides="testimonials" />

        <CompanyGrid
          class="-mt-6"
          title="ما با پیشروها کار می‌کنیم"
          subtitle="همکاری با شرکت‌های موفق و آشنا"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
