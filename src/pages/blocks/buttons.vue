<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import ButtonSize from '/@src/documentation/base/button/ButtonSize.vue'
import ButtonType from '/@src/documentation/base/button/ButtonType.vue'
import ButtonShape from '/@src/documentation/base/button/ButtonShape.vue'
import ButtonColor from '/@src/documentation/base/button/ButtonColor.vue'
import ButtonIcon from '/@src/documentation/base/button/ButtonIcon.vue'
import ButtonOutlined from '/@src/documentation/base/button/ButtonOutlined.vue'
import ButtonElevation from '/@src/documentation/base/button/ButtonElevation.vue'
import ButtonLoading from '/@src/documentation/base/button/ButtonLoading.vue'
import ButtonDisabled from '/@src/documentation/base/button/ButtonDisabled.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'اندازه‌ها',
    target: 'button-size-demo',
  },
  {
    label: 'شکل',
    target: 'button-shape-demo',
  },
  {
    label: 'نوع دکمه',
    target: 'button-types-demo',
  },
  {
    label: 'رنگبندی',
    target: 'button-colors-demo',
  },
  {
    label: 'حاشیه‌دار',
    target: 'button-outlined-demo',
  },
  {
    label: 'آیکون‌ها',
    target: 'button-icons-demo',
  },
  {
    label: 'ارتفاع',
    target: 'button-elevation-demo',
  },
  {
    label: 'بارگذاری',
    target: 'button-loading-demo',
  },
  {
    label: 'غیرفعال',
    target: 'button-disabled-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه دکمه"
      subtitle="دکمه‌ها بخش مرکزی تمامی برنامه‌های وب و موبایل هستند و کاربردهای متنوعی دارند. دکمه‌های Vulk را کاوش کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="800px"
    />

    <!--Button sizes demo-->
    <ButtonSize />

    <!--Button shape demo-->
    <ButtonShape />

    <!--Button types demo-->
    <ButtonType />

    <!--Button colors demo-->
    <ButtonColor />

    <!--Button outlined demo-->
    <ButtonOutlined />

    <!--Button icons demo-->
    <ButtonIcon />

    <!--Button elevation demo-->
    <ButtonElevation />

    <!--Button loading demo-->
    <ButtonLoading />

    <!--Button disabled demo-->
    <ButtonDisabled />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
