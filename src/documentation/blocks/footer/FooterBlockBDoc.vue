<script setup lang="ts">
import { footerB, footerBProps } from '/@src/data/docs/blocks/footer/blockB'
</script>

<template>
  <Section id="block-b-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر B"
          subtitle="فوتر طرح B سبک 1"
          link="block-b-props"
        />
      </div>
    </Container>
  </Section>

  <FooterB color="dark">
    <template #links>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          دموها
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          اجزاء
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          مستندات
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          پشتیبانی
        </RouterLink>
      </li>
    </template>
  </FooterB>

  <Section color="grey">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر B"
          subtitle="فوتر طرح B سبک 2"
          link="block-b-props"
        />
      </div>
    </Container>
  </Section>

  <FooterB
    color="light"
    bubbles
  >
    <template #links>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          دموها
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          اجزاء
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          مستندات
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          پشتیبانی
        </RouterLink>
      </li>
    </template>
  </FooterB>

  <Section bordered-top>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر B"
          subtitle="فوتر طرح B سبک 3"
          link="block-b-props"
        />
      </div>
    </Container>
  </Section>

  <FooterB>
    <template #links>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          دموها
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          اجزاء
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          مستندات
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          پشتیبانی
        </RouterLink>
      </li>
    </template>
  </FooterB>

  <Section id="block-b-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر B"
          subtitle="فوتر طرح B سبک 4"
          link="block-b-props"
        />
      </div>
    </Container>
  </Section>

  <FooterB
    v-background="{
      src: '/assets/shapes/lowpoly-pattern.png',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    color="dark"
  >
    <template #links>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          دموها
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          اجزاء
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          مستندات
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          :to="{ name: 'index' }"
          class="footer-link"
        >
          پشتیبانی
        </RouterLink>
      </li>
    </template>
  </FooterB>

  <Section
    id="block-b-props"
    bordered-bottom
  >
    <Container>
      <div class="py-4">
        <DemoTitle
          title="پراپ‌ها"
          subtitle="پراپ‌های در دسترس برای فوتر B"
        />
      </div>

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="footerB"
          />
        </template>
        <template #props>
          <PrismCode
            language="javascript"
            :code="footerBProps"
          />
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
            فوترها بخش مهمی از هر وب‌سایت هستند. آن‌ها به عنوان خلاصه‌ای از
            مهم‌ترین لینک‌های ناوبری و همچنین ارائه‌دهنده اطلاعات یا اقدام‌های
            اضافی، مانند اشتراک خبرنامه یا لینک‌های اجتماعی عمل می‌کنند. شما
            می‌توانید رنگ فوتر را با استفاده از ویژگی
            <code>color</code>
            کنترل کنید. همچنین می‌توانید با فعال کردن ویژگی
            <code>bubbles</code>
            برخی از حباب‌های انیمیشن‌دار را نمایش دهید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
