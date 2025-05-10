<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  businessSolutions,
  videoFeatures,
  testimonials,
} from '/@src/data/pages/banking'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroM />

    <Section color="grey">
      <Container>
        <LogoStats
          title="بیش از ۳۰۰۰۰ میلیارد تومان"
          subtitle="معاملات مشتریان ما در سال ۱۴۰۰"
          heading="به ما بپیوندید و رشد کنید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          :logos="customerLogos"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SideBenefits
          subtitle="داده محور"
          title="کل کسب و کار شما، متصل و مجهز به هوش مصنوعی است"
          content="برای رشد کسب و کار خود در بازارهای پویا امروزی، به یک مزیت نیاز دارید. با هوش مصنوعی ما که به طور مداوم در پشت صحنه کار می‌کند، می‌توانید فرصت‌های رشد را باز کنید و در بالاترین سطح ۷/۲۴ رقابت کنید."
          image="/assets/illustrations/features/banking-cards-feature.png"
          dark-image="/assets/illustrations/features/banking-cards-feature-dark.png"
          image-width="500"
          image-height="500"
          :benefits="[
            'تجربه مشتری خود را فورا ارتقا دهید',
            'حفظ مشتریان بیشتر و راضی تر',
            'شروع با تنظیم حساب انجام شده برای شم',
            'پیگیری نتایج در زمان واقعی',
          ]"
          reverse
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="شروع کنید &#8212; رایگان است"
          subtitle="این فرصت را از دست ندهید"
        />

        <VideoBlockB
          title="محصول ما"
          :features="videoFeatures"
          source="/assets/video/meeting.mp4"
          poster="/assets/demo/img/posters/poster-2c.jpg"
        />

        <hr>
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="راه حلی برای هر مورد استفاده"
          subtitle="راه حل تجاری"
        />

        <PulseCards
          :features="businessSolutions"
          links
          animated
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="آنها در مورد ما صحبت می‌کنند"
          subtitle="بازخورد از مشتریان ما"
        />

        <TestimonialBlockA
          :testimonials="testimonials"
          boxed
          :columns="3"
          :limit="4"
        />

        <hr>

        <CtaBlockH
          small-text="شروع کنید"
          title="شروع بانکداری"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          image="/assets/illustrations/apps/app-widgets-slant.png"
          dark-image="/assets/illustrations/apps/app-widgets-slant.png"
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

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
