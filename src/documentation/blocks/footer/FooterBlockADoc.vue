<script setup lang="ts">
import {
  footerA,
  footerAProps,
  footerASample,
} from '/@src/data/docs/blocks/footer/blockA'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <Section id="block-a-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر A"
          subtitle="فوتر طرح A سبک 1"
          link="block-a-props"
        />
      </div>
    </Container>
  </Section>

  <FooterA
    color="dark"
    :social-links="socialLinks"
  >
    <template #left-links>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        محصول
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        امکانات
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        مستندات
      </RouterLink>
    </template>
    <template #right-links>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        شرکت
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        در مورد
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        پشتیبانی
      </RouterLink>
    </template>
  </FooterA>

  <Section color="grey">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر A"
          subtitle="فوتر طرح A سبک 2"
          link="block-a-props"
        />
      </div>
    </Container>
  </Section>

  <FooterA
    color="light"
    bubbles
    :social-links="socialLinks"
  >
    <template #left-links>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        محصول
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        امکانات
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        مستندات
      </RouterLink>
    </template>
    <template #right-links>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        شرکت
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        در مورد
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        پشتیبانی
      </RouterLink>
    </template>
  </FooterA>

  <Section bordered-top>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر A"
          subtitle="فوتر طرح A سبک 3"
          link="block-a-props"
        />
      </div>
    </Container>
  </Section>

  <FooterA
    curved
    :social-links="socialLinks"
  >
    <template #left-links>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        محصول
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        امکانات
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        مستندات
      </RouterLink>
    </template>
    <template #right-links>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        شرکت
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        در مورد
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        پشتیبانی
      </RouterLink>
    </template>
  </FooterA>

  <Section>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="فوتر A"
          subtitle="فوتر طرح A سبک 4"
          link="block-a-props"
        />
      </div>
    </Container>
  </Section>

  <FooterA
    v-background="{
      src: '/assets/shapes/lowpoly-pattern.png',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    color="dark"
    curved
    :social-links="socialLinks"
  >
    <template #left-links>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        محصول
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        امکانات
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        مستندات
      </RouterLink>
    </template>
    <template #right-links>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        شرکت
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        در مورد
      </RouterLink>
      <RouterLink
        :to="{ name: 'index' }"
        class="level-item footer-link"
      >
        پشتیبانی
      </RouterLink>
    </template>
  </FooterA>

  <Section
    id="block-a-props"
    bordered-bottom
  >
    <Container>
      <div class="py-4">
        <DemoTitle
          title="پراپ‌ها"
          subtitle="پراپ‌های در دسترس برای فوتر A"
        />
      </div>

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="footerA"
          />
        </template>
        <template #props>
          <PrismCode
            language="javascript"
            :code="footerAProps"
          />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="footerASample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            فوترها بخش مهمی از هر وب‌سایت هستند. آن‌ها به عنوان خلاصه‌ای از
            مهم‌ترین لینک‌های ناوبری و همچنین ارائه‌دهنده اطلاعات یا اقدام‌های
            اضافی مانند اشتراک در خبرنامه یا لینک‌های اجتماعی عمل می‌کنند.
            می‌توانید رنگ فوتر را با استفاده از پراپ
            <code>color</code>
            کنترل کنید. همچنین می‌توانید با فعال‌سازی پراپ
            <code>bubbles</code>
            برخی حباب‌های متحرک را نمایش دهید. می‌توانید با استفاده از پراپ
            <code>curved</code>
            شکل منحنی به فوتر خود بدهید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
