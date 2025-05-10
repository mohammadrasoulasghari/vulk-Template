<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import InputBase from '/@src/documentation/base/form/InputBase.vue'
import InputIcon from '/@src/documentation/base/form/InputIcon.vue'
import InputValidation from '/@src/documentation/base/form/InputValidation.vue'
import TextareaBase from '/@src/documentation/base/form/TextareaBase.vue'
import TextareaResize from '/@src/documentation/base/form/TextareaResize.vue'
import SelectBase from '/@src/documentation/base/form/SelectBase.vue'
import SelectIcon from '/@src/documentation/base/form/SelectIcon.vue'
import CheckboxBase from '/@src/documentation/base/form/CheckboxBase.vue'
import RadioBase from '/@src/documentation/base/form/RadioBase.vue'
import ToggleBase from '/@src/documentation/base/form/ToggleBase.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'ورودی‌ها',
    target: 'input-base-demo',
  },
  {
    label: 'آیکون‌ها',
    target: 'input-icon-demo',
  },
  {
    label: 'اعتبارسنجی',
    target: 'input-validation-demo',
  },
  {
    label: 'دریافت متن',
    target: 'textarea-base-demo',
  },
  {
    label: 'تغییر اندازه',
    target: 'textarea-resize-demo',
  },
  {
    label: 'انتخاب',
    target: 'select-base-demo',
  },
  {
    label: 'آیکون',
    target: 'select-icon-demo',
  },
  {
    label: 'چک‌باکس',
    target: 'checkbox-base-demo',
  },
  {
    label: 'دکمه رادیویی',
    target: 'radio-base-demo',
  },
  {
    label: 'سوئیچ',
    target: 'toggle-base-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="مولفه فرم"
      subtitle="فرم‌ها بخش اصلی هر وب‌سایت و برنامه موبایلی هستند. آن‌ها به کاربران کمک می‌کنند تا با اپلیکیشن شما تعامل داشته باشند. فرم‌های Vulk را بررسی کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="840px"
    />

    <!--Input base demo-->
    <InputBase />

    <!--Input icons demo-->
    <InputIcon />

    <!--Input validation demo-->
    <InputValidation />

    <!--Textarea base demo-->
    <TextareaBase />

    <!--Textarea resize demo-->
    <TextareaResize />

    <!--Select base demo-->
    <SelectBase />

    <!--Select icon demo-->
    <SelectIcon />

    <!--Checkbox base demo-->
    <CheckboxBase />

    <!--Radio base demo-->
    <RadioBase />

    <!--toggle base demo-->
    <ToggleBase />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
