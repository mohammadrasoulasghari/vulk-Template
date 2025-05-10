<script setup lang="ts">
import {
  featureBlockD,
  featureBlockDProps,
} from '/@src/data/docs/advanced/feature/blockD'
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

      <SideSection
        subtitle="خدمات مدیریت شده"
        title="خدمات مدیریت شده DSP مبتنی بر بازار"
        content="اگر به دنبال به حداکثر رساندن دسترسی، افزایش سود افزایشی، یا بهینه سازی نسبت به معیارهای سفارشی باشید، تیم کارشناسان ما اینجا هستند تا اطمینان حاصل کنند که موفقیت برای شاخص کلیدی عملکرد های شما هدف قرار می‌گیرد."
        image="/assets/illustrations/features/feature-1.png"
        dark-image="/assets/illustrations/features/feature-1-dark.png"
        blob
        to="index"
      >
        <template #content>
          <!--Hero Benefits-->
          <QuickFeatures
            class="mt-4"
            :features="['کارایی بودجه', 'تمرکز بر کار خود']"
          />
        </template>
      </SideSection>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک پیشرفته طرح D سبک 2"
        link="block-d-props"
      />

      <SideSection
        reverse
        subtitle="ایجاد کمپین مبتنی بر هدف"
        title="در عرض چند دقیقه کمپین هایی مطابق با اهداف خود بسازید"
        content="با اهداف کسب و کار خود در سطح محصول شروع کنید و به ما اجازه دهید به طور خودکار گروه های تبلیغاتی و کمپین هایی را برای مخاطبان مناسب ایجاد کنیم. همه اینها را در مقیاس تنها در چند دقیقه با چهار مرحله ساده انجام دهید."
        image="/assets/illustrations/features/feature-2.png"
        dark-image="/assets/illustrations/features/feature-2-dark.png"
        blob
        to="index"
      >
        <template #content>
          <QuickFeatures
            class="mt-4"
            :benefits="['By product campaigns', 'Buyer targeting']"
          />
        </template>
      </SideSection>
    </Container>
  </Section>

  <Section
    color="darker"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک پیشرفته طرح D سبک 3"
        link="block-d-props"
        inverted
      />

      <SideSection
        subtitle="خدمات مدیریت شده"
        title="خدمات مدیریت شده DSP مبتنی بر بازار"
        content="اگر به دنبال به حداکثر رساندن دسترسی، افزایش سود افزایشی، یا بهینه سازی نسبت به معیارهای سفارشی باشید، تیم کارشناسان ما اینجا هستند تا اطمینان حاصل کنند که موفقیت برای شاخص کلیدی عملکرد های شما هدف قرار می‌گیرد."
        image="/assets/illustrations/features/feature-1.png"
        dark-image="/assets/illustrations/features/feature-1-dark.png"
        blob
        to="index"
        inverted
      >
        <template #content>
          <!--Hero Benefits-->
          <QuickFeatures
            class="mt-4"
            :features="['کارایی بودجه', 'تمرکز بر کار خود']"
            inverted
          />
        </template>
      </SideSection>
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
            :code="featureBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockDProps.props" />
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
