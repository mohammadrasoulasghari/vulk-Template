export const featureBlockAProps = {
  props: [
    {
      name: 'steps',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'images',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
  ],
  slots: [],
}

export const featureBlockA = `
<script setup lang="ts">
import { tabbedProcess } from '/@src/data/pages/marketing'
</script>

<template>
  <TabbedSection
    :steps="tabbedProcess.steps"
    :images="tabbedProcess.images"
  />
</template>
`

export const featureBlockASample = `
export const tabbedProcess = {
  steps: [
    {
      id: 0,
      icon: '/assets/icons/abstract/1.svg',
      title: 'ایجاد کمپین مبتنی بر هدف',
      content:
        'پایه ای برای موفقیت بلندمدت بسازید. اتوماسیون ما از اهداف فردی شما در سطح محصول برای ایجاد کمپین های تبلیغاتی بهینه در چهار مرحله ساده استفاده می‌کند.',
    },
    {
      id: 1,
      icon: '/assets/icons/abstract/2.svg',
      title: 'مناقصه کلمه کلیدی الگوریتمی',
      content:
        'هرگز دوباره پیشنهاد قیمت کلمه کلیدی را تنظیم نکنید. بهینه‌سازی مبتنی بر هوش مصنوعی ما از اهداف شما برای یافتن ارزش پیشنهادی ایده‌آل خود استفاده می‌کند، بنابراین همیشه فروش را با قیمتی که برای شما مناسب است به دست می‌آورید.',
    },
    {
      id: 2,
      icon: '/assets/icons/abstract/3.svg',
      title: 'هدف گذاری خودکار کلمات کلیدی',
      content:
        'کلمات کلیدی خود را برای رشد فروش و سودآوری بهینه کنید. به طور خودکار کلیدواژه های تبدیل کننده جدید را ضبط کنید و در عین حال کلمات کلیدی را که به عملکرد آسیب می‌زند نفی کنید.',
    },
    {
      id: 3,
      icon: '/assets/icons/abstract/4.svg',
      title: 'تجزیه و تحلیل سفارشی',
      content:
        'پیشرفت در رسیدن به اهداف خود را دنبال کنید. عملکرد کل کسب و کار خود را با معیارهای محصول، کمپین و سودآوری فردی و ترکیبی درک کنید.',
    },
  ],
  images: [
    {
      id: 0,
      url: '/assets/illustrations/placeholder/placeholder-process-1.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-1-dark.png',
    },
    {
      id: 2,
      url: '/assets/illustrations/placeholder/placeholder-process-2.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-2-dark.png',
    },
    {
      id: 3,
      url: '/assets/illustrations/placeholder/placeholder-process-3.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-3-dark.png',
    },
    {
      id: 4,
      url: '/assets/illustrations/placeholder/placeholder-process-4.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-4-dark.png',
    },
  ],
}
`
