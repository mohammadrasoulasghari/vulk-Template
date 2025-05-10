<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  meetingFeatures,
  statistics,
  testimonials,
  posts,
} from '/@src/data/pages/meetings'
import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div>
    <HeroG />

    <Section>
      <Container>
        <SectionTitle
          title="به جلسات سازنده سلام کنید"
          subtitle="سلام برنامه کاربردی"
        />

        <AppSection
          :features="meetingFeatures"
          image="/assets/illustrations/apps/meeting-app.png"
          dark-image="/assets/illustrations/apps/meeting-app-dark.png"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="جلسات"
          title="جلسات موثر برگزار کنید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/meeting-feature-1.png"
          dark-image="/assets/illustrations/features/meeting-feature-1-dark.png"
          image-width="1119"
          image-height="792"
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="آیتم های عملیات"
          title="مسئولیت پذیری را تقویت کنید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/meeting-feature-2.png"
          dark-image="/assets/illustrations/features/meeting-feature-2-dark.png"
          image-width="1119"
          image-height="792"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="بازخورد"
          title="تشویق به بهبود مستمر"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/meeting-feature-3.png"
          dark-image="/assets/illustrations/features/meeting-feature-3-dark.png"
          image-width="1119"
          image-height="792"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="ادغام ها"
          title="گردش کار خود را یکپارچه کنید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/meeting-feature-7.png"
          dark-image="/assets/illustrations/features/meeting-feature-7-dark.png"
          image-width="1119"
          image-height="792"
          reverse
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SideSection
          subtitle="یک به یک"
          title="یک تجربه کاری جدید"
          content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."
          cta="بیشتر بدانید"
          to="index"
          image="/assets/illustrations/features/meeting-feature-5.png"
          dark-image="/assets/illustrations/features/meeting-feature-5-dark.png"
          image-width="1119"
          image-height="792"
          blob
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="آمار ما برای خود صحبت می‌کند"
          subtitle="نتایج برجسته"
        />

        <ContentBlockI :counters="statistics" />

        <TestimonialBlockC
          :testimonials="testimonials"
          squared
        />

        <LogoMarquee
          class="mt-10"
          title="ما نتیجه را برای کارآفرینان به دارایی ۵۰۰ سوق می‌دهیم"
          :logos="customerLogos"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="مهارت‌های جلسه خود را ارتقا دهید"
          subtitle="منابع رایگان"
        />

        <ResourceGrid
          :posts="posts"
          :limit="3"
          class="my-6"
        />

        <CtaBlockF
          title="آماده شروع هستید؟"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          background="/assets/demo/img/color/1.jpg"
          cta="شروع کنید"
          cta-link="index"
          :alignment="rtl ? 'right' : 'left'"
        />
      </Container>
    </Section>

    <FooterC
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      :social-links="socialLinks"
      image="/assets/illustrations/footer/footer-cityscape.png"
    >
      <template #column-1>
        <Title
          tag="h3"
          :size="6"
          weight="thin"
        >
          <span>كشف كردن</span>
        </Title>
        <ul>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              شروع کنید
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              محصول
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              امکانات
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              ثبت نام
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              ورود
            </RouterLink>
          </li>
        </ul>
      </template>
      <template #column-2>
        <Title
          tag="h3"
          :size="6"
          weight="thin"
        >
          <span>شرکت</span>
        </Title>
        <ul>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              شرکت
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              در مورد
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              آموزش
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              سوالات پر تکرار
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              مخاطب
            </RouterLink>
          </li>
        </ul>
      </template>
      <template #column-3>
        <Title
          tag="h3"
          :size="6"
          weight="thin"
        >
          <span>پشتیبانی</span>
        </Title>
        <ul>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              مرکز راهنمایی
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              راهنماها
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              مستند رابط برنامه نویسی کاربردی
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              مقررات
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'index' }"
              class="level-item footer-link"
            >
              حریم خصوصی
            </RouterLink>
          </li>
        </ul>
      </template>
    </FooterC>
  </div>
</template>
