<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { plans } from '/@src/data/blocks/advanced/pricing'

onMounted(() => {
  document.body.classList.add('pricing-container')
})

onUnmounted(() => {
  document.body.classList.remove('pricing-container')
})
</script>

<template>
  <div>
    <Section overflown>
      <Container>
        <PageTitle
          title="قیمت‌گذاری پایه و رقابتی"
          subtitle="با یکی از پلن‌های ما شروع کنید"
          text="روش کار خود را بهبود ببخشید، یک ابزار کاملاً جدید را کشف کنید و دیگر هیچ‌گاه با دغدغه‌ها مواجه نشوید."
        />

        <PricingSection :plans="plans" />
      </Container>
    </Section>
    <Section>
      <Container>
        <CaseStudy background="/assets/demo/img/bg/1.jpeg">
          <SideSection
            subtitle="فروشگاه‌های موفق"
            title="ببینید که آنها چگونه یک بیزینس موفق ساختن"
            content="ببینید چگونه برخی از مشتریان ما از فناوری وولک برای افزایش سود و بازپس‌گیری کنترل از واسطه‌ها بهره‌برداری می‌کنند."
            image="/assets/illustrations/features/feature-3.png"
            cta="داستان‌های موفقیت را بخوانید"
            inverted
            to="index"
          />
        </CaseStudy>
      </Container>
    </Section>
    <Section class="pb-12">
      <Container>
        <LogoSection
          title="کارآفرینان و شرکت‌ها را تا دستیابی به نتایج مطلوب همراهی می‌کنیم و تنها نمی‌گذاریم"
          :logos="customerLogos"
        />
        <div class="mb-12" />
      </Container>
    </Section>
  </div>
</template>

<style lang="scss" scoped>
:global(body) {
  overflow: initial;
}
</style>
