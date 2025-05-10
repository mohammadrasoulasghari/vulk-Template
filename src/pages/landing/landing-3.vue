<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { marketingIconFeatures } from '/@src/data/pages/marketing'
import { features } from '/@src/data/blocks/features'
</script>

<template>
  <div>
    <HeroC />

    <Section>
      <Container>
        <FeatureBlockA
          :features="features"
          :columns="3"
          :limit="8"
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="خدمات مدیریت شده"
          title="خدمات مدیریت شده DSP مبتنی بر بازار"
          content="اگر به دنبال به حداکثر رساندن دسترسی، افزایش سود افزایشی، یا بهینه سازی نسبت به معیارهای سفارشی باشید، تیم کارشناسان ما اینجا هستند تا اطمینان حاصل کنند که موفقیت برای شاخص کلیدی عملکرد های شما هدف قرار می‌گیرد."
          image="/assets/illustrations/features/feature-1.png"
          dark-image="/assets/illustrations/features/feature-1-dark.png"
          image-width="800"
          image-height="625"
          blob
          to="index"
        >
          <template #content>
            <QuickFeatures
              class="mt-4"
              :features="['کارایی بودجه', 'تمرکز بر کار خود']"
            />
          </template>
        </SideSection>
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          reverse
          subtitle="ایجاد کمپین مبتنی بر هدف"
          title="در عرض چند دقیقه کمپین هایی مطابق با اهداف خود بسازید"
          content="با اهداف کسب و کار خود در سطح محصول شروع کنید و به ما اجازه دهید به طور خودکار گروه های تبلیغاتی و کمپین هایی را برای مخاطبان مناسب ایجاد کنیم. همه اینها را در مقیاس تنها در چند دقیقه با چهار مرحله ساده انجام دهید."
          image="/assets/illustrations/features/feature-2.png"
          dark-image="/assets/illustrations/features/feature-2-dark.png"
          image-width="967"
          image-height="800"
          blob
          to="/"
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

    <Section>
      <Container>
        <SideSection
          subtitle="اقدامات خودکار کلمات کلیدی"
          title="ما بهترین کلمات کلیدی را بر اساس پارامترهای شما پیدا می کنیم"
          content="انتخاب کلمه کلیدی خود را با تعیین آستانه برای تبدیل، هزینه هر تبدیل و نرخ کلیک، خودکار و سفارشی کنید و زمان ارزشمندی را که می‌توانید برای سایر کارهای مهم تجاری استفاده کنید، آزاد کنید."
          image="/assets/illustrations/features/feature-3.png"
          dark-image="/assets/illustrations/features/feature-3-dark.png"
          image-width="967"
          image-height="800"
          blob
          to="/"
        >
          <template #content>
            <QuickFeatures
              class="mt-4"
              :benefits="['Add / remove keywords', 'Automatic refine']"
            />
          </template>
        </SideSection>
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          reverse
          subtitle="تجزیه و تحلیل سفارشی"
          title="معیارهای کسب و کار خود را به روش خود درک کنید"
          content="داده‌های عملکرد تبلیغات خود را با معیارهای مختلف، نام‌های تجاری، کمپین‌ها، انواع هدف‌گذاری و موارد دیگر بررسی کنید."
          image="/assets/illustrations/features/feature-4.png"
          dark-image="/assets/illustrations/features/feature-4-dark.png"
          image-width="967"
          image-height="800"
          blob
          to="/"
        >
          <template #content>
            <QuickFeatures
              class="mt-4"
              :benefits="['Assess profitability', 'Export bulk data']"
            />
          </template>
        </SideSection>
      </Container>
    </Section>

    <Section>
      <Container>
        <CaseStudy background="/assets/demo/img/bg/1.jpeg">
          <SideSection
            subtitle="داستان های موفقیت"
            title="یاد بگیرید که چگونه یک کسب و کار موفق ایجاد کردند"
            content="ببینید چگونه برخی از مشتریان ما از فناوری وولک برای افزایش سود و بازپس گیری کنترل از فروشندگان استفاده می‌کنند"
            image="/assets/illustrations/features/feature-3.png"
            dark-image="/assets/illustrations/features/feature-3-dark.png"
            image-width="967"
            image-height="800"
            cta="داستان های موفقیت را بخوانید"
            inverted
            to="/"
          />
        </CaseStudy>
      </Container>
    </Section>

    <Section>
      <Container>
        <LogoSection
          title="ما نتیجه را برای کارآفرینان به دارایی ۵۰۰ سوق می‌دهیم"
          :logos="customerLogos"
        />
      </Container>
    </Section>

    <Section bottom-spaced>
      <Container>
        <SectionTitle
          title="سه دلیل که راه حل ما را دوست خواهید داشت"
          subtitle="چرا باید راه حل بهینه سازی ما را امتحان کنید"
        />

        <IconSection :features="marketingIconFeatures" />
      </Container>
    </Section>
  </div>
</template>
