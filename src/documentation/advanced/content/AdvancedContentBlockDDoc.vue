<script setup lang="ts">
import {
  contentBlockD,
  contentBlockDProps,
} from '/@src/data/docs/advanced/content/blockD'
</script>

<template>
  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک پیشرفته طرح D سبک 1"
        link="block-d-props"
      />

      <SideBenefits
        subtitle="داده محور"
        title="کل کسب و کار شما، متصل و مجهز به هوش مصنوعی است"
        content="برای رشد کسب و کار خود در بازارهای پویا امروزی، به یک مزیت نیاز دارید. با هوش مصنوعی ما که به طور مداوم در پشت صحنه کار می‌کند، می‌توانید فرصت‌های رشد را باز کنید و در بالاترین سطح ۷/۲۴ رقابت کنید."
        image="/assets/illustrations/features/banking-cards-feature.png"
        dark-image="/assets/illustrations/features/banking-cards-feature-dark.png"
        :benefits="[
          'تجربه‌ی کاربری مشتریان خود را بهبود ببخشید',
          'رضایت بیشتری از مشتریان خود دریافت کنید',
          'ابتدا حساب کاربری مشتری را بهبود دهید',
          'نتایج را بصورت آنی و زمان واقعی دریافت و بررسی کنید',
        ]"
        reverse
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک پیشرفته طرح D سبک 2"
        link="block-d-props"
        inverted
      />

      <SideBenefits
        subtitle="داده محور"
        title="کل کسب و کار شما، متصل و مجهز به هوش مصنوعی است"
        content="برای رشد کسب و کار خود در بازارهای پویا امروزی، به یک مزیت نیاز دارید. با هوش مصنوعی ما که به طور مداوم در پشت صحنه کار می‌کند، می‌توانید فرصت‌های رشد را باز کنید و در بالاترین سطح ۷/۲۴ رقابت کنید."
        image="/assets/illustrations/features/banking-cards-feature.png"
        dark-image="/assets/illustrations/features/banking-cards-feature-dark.png"
        :benefits="[
          'تجربه‌ی کاربری مشتریان خود را بهبود ببخشید',
          'رضایت بیشتری از مشتریان خود دریافت کنید',
          'ابتدا حساب کاربری مشتری را بهبود دهید',
          'نتایج را بصورت آنی و زمان واقعی دریافت و بررسی کنید',
        ]"
        reverse
        inverted
      />
    </Container>
  </Section>

  <Section
    id="block-d-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح D"
        subtitle="پراپ‌های در دسترس برای بلوک طرح D"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="contentBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="contentBlockDProps.props" />
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
            Vulk با بلوک‌های ویژگی پیشرفته و شگفت‌انگیز عرضه می‌شود که می‌توانید
            از آن‌ها در هر صفحه‌ای استفاده کنید. هر بلوک با استایل‌ها و پروپ‌های
            خاص خود عرضه می‌شود. از پروپ‌ها برای ساخت نمونه‌های خود استفاده کنید
            یا یکی از نمونه‌های آماده را به کار ببرید. هر بلوک به‌طور پیش‌فرض از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            مارک‌آپ و پروپ‌ها مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
