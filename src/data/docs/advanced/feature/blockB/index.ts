export const featureBlockBProps = {
  props: [
    {
      name: 'steps',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
  ],
  slots: [],
}

export const featureBlockB = `
<script setup lang="ts">
import { process } from '/@src/data/pages/marketing'
</script>

<template>
  <ProcessSection :steps="process.steps" />
</template>
`

export const featureBlockBSample = `
export const marketingProcess = {
  steps: [
    {
      id: 0,
      icon: '/assets/icons/abstract/1.svg',
      title: 'ایجاد کمپین مبتنی بر هدف',
      content:
        'پایه ای برای موفقیت بلندمدت بسازید. اتوماسیون ما از اهداف فردی شما در سطح محصول برای ایجاد کمپین های تبلیغاتی بهینه در چهار مرحله ساده استفاده می‌کند.',
      image: '/assets/illustrations/workflow/workflow-1.png',
      imageDark: '/assets/illustrations/workflow/workflow-1-dark.png',
    },
    {
      id: 1,
      icon: '/assets/icons/abstract/2.svg',
      title: 'مناقصه کلمه کلیدی الگوریتمی',
      content:
        'هرگز دوباره پیشنهاد قیمت کلمه کلیدی را تنظیم نکنید. بهینه‌سازی مبتنی بر هوش مصنوعی ما از اهداف شما برای یافتن ارزش پیشنهادی ایده‌آل خود استفاده می‌کند، بنابراین همیشه فروش را با قیمتی که برای شما مناسب است به دست می‌آورید.',
      image: '/assets/illustrations/workflow/workflow-2.png',
      imageDark: '/assets/illustrations/workflow/workflow-2-dark.png',
    },
    {
      id: 2,
      icon: '/assets/icons/abstract/3.svg',
      title: 'هدف گذاری خودکار کلمات کلیدی',
      content:
        'کلمات کلیدی خود را برای رشد فروش و سودآوری بهینه کنید. به طور خودکار کلیدواژه های تبدیل کننده جدید را ضبط کنید و در عین حال کلمات کلیدی را که به عملکرد آسیب می‌زند نفی کنید.',
      image: '/assets/illustrations/workflow/workflow-3.png',
      imageDark: '/assets/illustrations/workflow/workflow-3-dark.png',
    },
    {
      id: 3,
      icon: '/assets/icons/abstract/4.svg',
      title: 'تجزیه و تحلیل سفارشی',
      content:
        'پیشرفت در رسیدن به اهداف خود را دنبال کنید. عملکرد کل کسب و کار خود را با معیارهای محصول، کمپین و سودآوری فردی و ترکیبی درک کنید.',
      image: '/assets/illustrations/workflow/workflow-4.png',
      imageDark: '/assets/illustrations/workflow/workflow-4-dark.png',
    },
  ],
}
`
