<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  vehicleFeatures,
  carBrands,
  popularCars,
  vehicleVideoFeatures,
  vehicleTestimonials,
} from '/@src/data/pages/vehicle'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroZ />

    <LogoMarquee
      :logos="customerLogos"
      compact
    />

    <Section>
      <Container>
        <SectionTitle
          title="برای گرفتن و اجاره کردن ماشین کلیک کن"
          subtitle="سرویس پرمیوم"
        />

        <FeatureBlockM
          :features="vehicleFeatures"
          :columns="3"
          :limit="8"
          size="medium"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="پرفورمنس"
          title="مسیریابی با AI"
          content="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من می‌بینم تو به‌ندرت دلسرد شده‌ای."
          cta="بیشتر بدانید"
          to="/"
          image="/assets/demo/img/gif/geolocation.gif"
          image-width="800"
          image-height="600"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="شرکتی"
          title="ناوگان شرکتی طرف سوم"
          content="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من می‌بینم تو به‌ندرت دلسرد شده‌ای."
          cta="بیشتر بدانید"
          to="/"
          image="/assets/demo/img/features/man-laptop.png"
          image-width="744"
          image-height="558"
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <JumboBlock
          title="ناوگان در لحظه"
          subtitle="هوش مصنوعی ما به طور خودکار رانندگان را در صورت نیاز یا تشخیص عملکرد بهتر، تخصیص مجدد می کند. چشم های خود را ببندید، ما همه چیز را برای شما مدیریت می کنیم. "
          punchline="قدرت گرفته از AI 🔥"
        >
          <template #left>
            <MediaCard
              icon="feather:map-pin"
              meta-text="خیابان مدیسون"
              meta-subtext="در ۲۸ دقیقه"
              meta-stat="2.3 مایل"
              image="/assets/demo/img/gif/route.gif"
              image-width="800"
              image-height="600"
            />
          </template>
          <template #right>
            <MediaCard
              icon="feather:map"
              icon-color="orange"
              meta-text="خیابان منهتن"
              meta-subtext="در ۱۶ دقیقه"
              meta-stat="1.3 مایل"
              image="/assets/demo/img/gif/geolocation.gif"
              image-width="800"
              image-height="600"
            />
          </template>
        </JumboBlock>

        <ContentBlockA
          :title="carBrands.title"
          :text="carBrands.text"
          link="/"
          :images="carBrands.images"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="ماشین‌های محبوب ما"
          subtitle="ماشین‌های ویژه"
        />

        <VehicleSlider :slides="popularCars" />
      </Container>
    </Section>

    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="یک سفر خودرویی شروع کنید"
          subtitle="آزاد باشید"
        />

        <VideoBlockB
          title="محصول ما"
          :features="vehicleVideoFeatures"
          source="/assets/video/meeting.mp4"
          poster="/assets/demo/img/posters/poster-2h.jpg"
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
          title="خدمات ما را دوست دارند"
          subtitle="محبت خود را نشانمان دهید"
        />

        <TestimonialCards :items="vehicleTestimonials" />

        <CompanyGrid
          class="-mt-6"
          title="ما با بهترین‌ها کار می‌کنیم"
          subtitle="همکاری با شرکت‌های موفق و آشنا"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="کجا می‌روید؟"
          subtitle="جستجو ماشین"
        />

        <MapCta
          title="کجا می‌روید؟"
          subtitle="شروع به جستجوی مسیر خود کنید"
          :lng="12.550343"
          :lat="55.665957"
          :zoom="16"
          pulled
          narrow
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
