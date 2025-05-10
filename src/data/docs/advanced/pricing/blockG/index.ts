export const pricingBlockGProps = {
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

export const pricingBlockG = `
<script setup lang="ts">
import { longPlans } from '/@src/data/blocks/advanced/pricing'
</script>

<template>
  <PricingLong
    :plans="longPlans"
    :columns="4"
    :limit="3"
    rounded
    shadow
    polka-dots
  />
</template>
`

export const pricingBlockGSample = `
import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-long/PricingLong.vue'

export const longPlans: PricingPlan[] = [
  {
    name: 'پایه',
    logo: '/assets/brands/tribe.svg',
    price: 15,
    color: 'primary',
    featured: true,
    popular: false,
    features: [
      {
        value: 'رایگان یا ۱۲ تومان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
      {
        value: '3 تومان در ماه',
        label: 'استوک‌ها و اشتراکات',
      },
      {
        value: '5 تومان در ماه',
        label: 'داده‌های لایو',
      },
      {
        value: 'نرخ لحظه ای + 0.65%',
        label: 'نرخ مالیات',
      },
      {
        value: '0.75 تومان',
        label: 'انتقال بانکی',
      },
      {
        value: '5 تومان',
        label: 'انتقال بانکی (سریع)',
      },
    ],
  },
  {
    name: 'کسب و کار',
    logo: '/assets/brands/tribe.svg',
    price: 25,
    color: 'secondary',
    featured: false,
    popular: true,
    features: [
      {
        value: 'رایگان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
      {
        value: '10 تومان در ماه',
        label: 'استوک‌ها و اشتراکات',
      },
      {
        value: '2 تومان در ماه',
        label: 'داده‌های لایو',
      },
      {
        value: 'نرخ لحظه ای + 0.55%',
        label: 'نرخ مالیات',
      },
      {
        value: '0.5 تومان',
        label: 'انتقال بانکی',
      },
      {
        value: '3 تومان',
        label: 'انتقال بانکی (سریع)',
      },
    ],
  },
  {
    name: 'شرکتی',
    logo: '/assets/brands/tribe.svg',
    price: 45,
    color: 'yellow',
    featured: false,
    popular: false,
    features: [
      {
        value: 'رایگان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
      {
        value: '15 تومان در ماه',
        label: 'استوک‌ها و اشتراکات',
      },
      {
        value: 'رایگان',
        label: 'داده‌های لایو',
      },
      {
        value: 'نرخ لحظه ای + 0.25%',
        label: 'نرخ مالیات',
      },
      {
        value: 'رایگان',
        label: 'انتقال بانکی',
      },
      {
        value: '2 تومان',
        label: 'انتقال بانکی (سریع)',
      },
    ],
  },
  {
    name: 'شخصی',
    logo: '/assets/brands/tribe.svg',
    price: 24,
    color: 'info',
    featured: false,
    popular: false,
    features: [
      {
        value: '8 تومان',
        label: 'تریدها',
      },
      {
        value: '25 تومان در ماه',
        label: 'اکانت پایه',
      },
      {
        value: '4.95 تومان',
        label: 'پرداخت ماهانه',
      },
      {
        value: 'رایگان یا ۱۲ تومان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
    ],
  },
]
`
