export const pricingBlockAProps = {
  props: [
    {
      name: 'plans',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
  ],
  slots: [],
}

export const pricingBlockA = `
<script setup lang="ts">
import { plans } from '/@src/data/blocks/advanced/pricing'
</script>

<template>
  <PricingSection :plans="plans" />
</template>
`

export const pricingBlockASample = `
export const plans = [
  {
    id: 0,
    icon: '/assets/icons/pricing/pricing-1.svg',
    title: 'رشد',
    subtitle: 'کمتر از ۳۰۰ میلیون تومان هزینه تبلیغات ماهانه',
    price: {
      monthly: 7500000,
      yearly: 52500000,
    },
    benefits: [
      {
        id: 0,
        content: 'دسترسی به جامعه اسلک',
      },
      {
        id: 1,
        content: 'دسترسی به تیم پشتیبانی',
      },
      {
        id: 2,
        content: 'مناقصه الگوریتمی',
      },
      {
        id: 3,
        content: 'کلیدواژه و برداشت شماره شناسایی استاندارد آمازون',
      },
    ],
    features: [
      {
        id: 0,
        content: 'جستجوی عبارت جداسازی',
      },
      {
        id: 1,
        content: 'آنالیز محصول',
      },
      {
        id: 2,
        content: 'بهترین رتبه فروشنده',
      },
      {
        id: 3,
        content: 'بهینه سازی مکان',
      },
    ],
  },
  {
    id: 1,
    icon: '/assets/icons/pricing/pricing-2.svg',
    title: 'کسب و کار',
    subtitle: 'بیش از ۳۰۰ میلیون تومان هزینه تبلیغات ماهانه',
    price: {
      monthly: 15000000,
      yearly: 105000000,
    },
    benefits: [
      {
        id: 0,
        content: 'همه ویژگی های موجود در رشد',
      },
      {
        id: 1,
        content: 'برنامه تماس های هفتگی',
      },
      {
        id: 2,
        content: 'برنامه ۶ تماس هفتگی',
      },
      {
        id: 3,
        content: 'ارزیابی حساب سه ماهه',
      },
    ],
    features: [
      {
        id: 0,
        content: 'ادغام تبلیغات گوگل',
      },
      {
        id: 1,
        content: 'قوانین و استراتژی های خودکار',
      },
      {
        id: 2,
        content: 'آنالیز برند',
      },
      {
        id: 3,
        content: 'هوش رقیب',
      },
    ],
  },
  {
    id: 2,
    icon: '/assets/icons/pricing/pricing-3.svg',
    title: 'شرکت',
    subtitle: 'بیش از ۹ میلیارد هزینه تبلیغات ماهانه',
    price: {
      monthly: 37500000,
      yearly: 450000000,
    },
    benefits: [
      {
        id: 0,
        content: 'همه ویژگی های موجود در کسب و کار',
      },
      {
        id: 1,
        content: 'مدیر شریک استراتژیک',
      },
      {
        id: 2,
        content: 'بررسی فصلی کسب و کار',
      },
      {
        id: 3,
        content: 'برنامه ریزی حساب سالانه',
      },
    ],
    features: [
      {
        id: 0,
        content: 'نمونه پردازشگر سیگنال دیجیتال آمازون',
      },
      {
        id: 1,
        content: 'ابر بازاریابی آمازون',
      },
      {
        id: 2,
        content: 'ادغام رخنه اطلاعات ',
      },
      {
        id: 3,
        content: 'داشبورد سفارشی',
      },
    ],
  },
]
`
