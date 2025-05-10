export const featureBlockCProps = {
  props: [
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
  ],
  slots: [],
}

export const featureBlockC = `
<script setup lang="ts">
import { iconFeatures1 } from '/@src/data/blocks/advanced/features'
</script>

<template>
  <IconSection :features="iconFeatures1" />
</template>
`

export const featureBlockCSample = `
export const iconFeatures1 = [
  {
    id: 0,
    icon: '/assets/icons/colored/chat.svg',
    title: 'به مشتریان بیشتری دست پیدا کنید',
    content:
      'جایی باشید که مشتریان شما هستند. با رفتار جستجو، خریداران را هدف قرار دهید، کلمات کلیدی تبدیل کننده جدیدی را کشف کنید، و به طور خودکار قیمت ها را بر اساس اهداف محصول خود تنظیم کنید.',
  },
  {
    id: 1,
    icon: '/assets/icons/colored/clock.svg',
    title: 'ساعت ها در هفته صرفه جویی کنید',
    content:
      'گردش کار تبلیغات خود را با ایجاد کمپین خودکار، اصلاح کلمات کلیدی و پیشنهاد الگوریتمی بهینه کنید. شما کنترل ها را تنظیم می کنید و فناوری هوش مصنوعی ما کارهای سنگین را انجام می‌دهد.',
  },
  {
    id: 2,
    icon: '/assets/icons/colored/certificate.svg',
    title: 'بینش سودآوری را دریافت کنید',
    content:
      'هزینه های PPC خود را به هزینه های هر محصول مرتبط کنید و نمای کلی از سودآوری در سطح محصول خود را مشاهده کنید. با اطمینان خاطر با معیارها و گزارش های ضروری تصمیمات هوشمندانه بگیرید.',
  },
]
`
