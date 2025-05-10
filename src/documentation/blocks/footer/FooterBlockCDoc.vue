<script setup lang="ts">
import {
  footerC,
  footerCProps,
  footerCSample,
} from '/@src/data/docs/blocks/footer/blockC'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <Section id="block-c-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر C"
          subtitle="فوتر طرح C سبک 1"
          link="block-c-props"
        />
      </div>
    </Container>
  </Section>

  <FooterC
    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    color="dark"
    :social-links="socialLinks"
    image="/assets/illustrations/footer/footer-cityscape.png"
  >
    <template #column-1>
      <Title
        tag="h3"
        :size="6"
        weight="thin"
        inverted
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
        inverted
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
        inverted
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

  <Section color="grey">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر C"
          subtitle="فوتر طرح C سبک 2"
          link="block-c-props"
        />
      </div>
    </Container>
  </Section>

  <FooterC
    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    color="light"
    bubbles
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

  <Section bordered-top>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر C"
          subtitle="فوتر طرح C سبک 3"
          link="block-c-props"
        />
      </div>
    </Container>
  </Section>

  <FooterC
    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    :social-links="socialLinks"
    curved
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

  <Section>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر C"
          subtitle="فوتر طرح C سبک 4"
          link="block-c-props"
        />
      </div>
    </Container>
  </Section>

  <FooterC
    v-background="{
      src: '/assets/shapes/lowpoly-pattern.png',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    color="dark"
    :social-links="socialLinks"
    image="/assets/illustrations/footer/footer-cityscape.png"
  >
    <template #column-1>
      <Title
        tag="h3"
        :size="6"
        weight="thin"
        inverted
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
        inverted
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
        inverted
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

  <Section
    id="block-c-props"
    bordered-bottom
  >
    <Container>
      <div class="py-4">
        <DemoTitle
          title="پراپ‌ها"
          subtitle="پراپ‌های در دسترس برای فوتر C"
        />
      </div>

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="footerC"
          />
        </template>
        <template #props>
          <PrismCode
            language="javascript"
            :code="footerCProps"
          />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="footerCSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            فوترها بخش مهمی از هر وب‌سایت هستند. آن‌ها به عنوان خلاصه‌ای از
            مهم‌ترین لینک‌های ناوبری و همچنین ارائه‌دهنده اطلاعات یا اقدام‌های
            اضافی، مانند اشتراک خبرنامه یا لینک‌های اجتماعی عمل می‌کنند. شما
            می‌توانید رنگ فوتر را با استفاده از ویژگی
            <code>color</code>
            کنترل کنید. همچنین می‌توانید با فعال کردن ویژگی
            <code>bubbles</code>
            برخی از حباب‌های انیمیشن‌دار را نمایش دهید. علاوه بر این، می‌توانید
            با استفاده از ویژگی
            <code>curved</code>
            شکل منحنی به فوتر خود بدهید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
