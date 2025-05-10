<script setup lang="ts">
import {
  testimonialsBlockE,
  testimonialsBlockEProps,
} from '/@src/data/docs/blocks/testimonials/blockE'
</script>

<template>
  <Section
    id="block-e-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 1"
        link="block-e-props"
      />

      <TestimonialBlockE
        image="/assets/demo/img/people/3.jpg"
        name="ایرینا اسمیرکوا"
        position="مدیر فروش"
        content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز."
        logo="/assets/brands/tribe.svg"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 2"
        link="block-e-props"
      />

      <TestimonialBlockE
        image="/assets/demo/img/people/13.jpg"
        name="باسیل اولمبه"
        position="مدیر کل"
        content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز."
        logo="/assets/brands/infinite.svg"
        curved
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 3"
        link="block-e-props"
      />

      <TestimonialBlockE
        image="/assets/demo/img/people/7.jpg"
        name="مت هنریکز"
        position="ارشد طراحی UX"
        content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز."
        logo="/assets/brands/proactive.svg"
        reversed
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 4"
        link="block-e-props"
      />

      <TestimonialBlockE
        image="/assets/demo/img/people/8.jpg"
        name="کیم لی سونگ"
        position="معمار راه حل"
        content=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز."
        logo="/assets/brands/kromo.svg"
        curved
        reversed
      />
    </Container>
  </Section>

  <Section
    id="block-e-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح E"
        subtitle="پراپ‌های در دسترس برای بلوک طرح E"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockE"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockEProps.props" />
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
            Vulk با بلوک‌های نظرات مشتریان بسیار قابل سفارشی‌سازی و انعطاف‌پذیر
            عرضه می‌شود که می‌توانید در هر صفحه‌ای از آن‌ها استفاده کنید. هر
            بلوک دارای سبک‌ها و ویژگی‌های خود است. از ویژگی‌ها برای ساخت
            نمونه‌های خود استفاده کنید یا از یکی از نمونه‌های از پیش ساخته‌شده
            استفاده کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
