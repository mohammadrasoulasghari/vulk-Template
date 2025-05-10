<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import TabsBase from '/@src/documentation/base/tabs/TabsBase.vue'
import TabsCentered from '/@src/documentation/base/tabs/TabsCentered.vue'
import TabsRight from '/@src/documentation/base/tabs/TabsRight.vue'
import TabsIcons from '/@src/documentation/base/tabs/TabsIcons.vue'
import TabsBoxed from '/@src/documentation/base/tabs/TabsBoxed.vue'
import TabsSliderDual from '/@src/documentation/base/tabs/TabsSliderDual.vue'
import TabsSliderTriple from '/@src/documentation/base/tabs/TabsSliderTriple.vue'

const demoLinks = [
  {
    label: 'تب‌ها',
    target: 'tabs-base-demo',
  },
  {
    label: 'وسط‌چین',
    target: 'tabs-centered-demo',
  },
  {
    label: 'راست‌چین',
    target: 'tabs-right-demo',
  },
  {
    label: 'آیکون‌ها',
    target: 'tabs-icons-demo',
  },
  {
    label: 'جعبه‌دار',
    target: 'tabs-boxed-demo',
  },
  {
    label: 'اسلایدری دوتایی',
    target: 'tabs-slider-dual-demo',
  },
  {
    label: 'اسلایدری سه‌تایی',
    target: 'tabs-slider-triple-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="کامپوننت تب‌ها"
      subtitle="تب‌ها یک عنصر رابط کاربری بسیار رایج هستند که در هر وبسایت و برنامه مدرن ضروری به نظر می‌رسند. Vulk تب‌ها را ارائه می‌دهد."
    />

    <DemoLinks
      :links="demoLinks"
      width="620px"
    />

    <!--tabs base demo-->
    <TabsBase />

    <!--tabs centered demo-->
    <TabsCentered />

    <!--tabs right demo-->
    <TabsRight />

    <!--tabs icons demo-->
    <TabsIcons />

    <!--tabs boxed demo-->
    <TabsBoxed />

    <!--tabs slider 2x demo-->
    <TabsSliderDual />

    <!--tabs slider 3x demo-->
    <TabsSliderTriple />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
