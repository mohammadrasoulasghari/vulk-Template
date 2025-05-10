export const pricingBlockHProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'monthlyPrice',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'yearlyPrice',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'link',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linkLabel',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}

export const pricingBlockH = `
<script setup lang="ts">
import { pricingCompactPlans } from '/@src/data/blocks/advanced/pricing'
</script>

<template>
  <PricingCompact :plans="pricingCompactPlans" />
</template>
`

export const pricingBlockHSample = `
export const pricingCompactPlans = [
  {
    name: 'پایه',
    description:
      'برای افرادی که فقط نیاز به شروع با ویژگی‌های پایه دارند',
    monthlyPrice: 0,
    yearlyPrice: 0,
    actionLabel: 'رایگان شروع کنید',
    popular: false,
  },
  {
    name: 'تیم',
    description: 'برای تیم‌هایی که فقط نیاز به شروع با ویژگی‌های پایه دارند',
    monthlyPrice: 5,
    yearlyPrice: 49,
    actionLabel: 'شروع دسترسی آزمایشی',
    popular: true,
  },
  {
    name: 'پرو',
    description:
      'برای کسب‌وکارهای متوسطی که به ویژگی‌های پیشرفته برای فعالیت خود نیاز دارند',
    monthlyPrice: 15,
    yearlyPrice: 149,
    actionLabel: 'شروع دسترسی آزمایشی',
    popular: false,
  },
  {
    name: 'شرکتی',
    description:
      'برای کسب‌وکارهای بزرگ که به ویژگی‌های پیشرفته برای فعالیت خود نیاز دارند',
    monthlyPrice: 99,
    yearlyPrice: 899,
    actionLabel: 'تماس با ما',
    popular: false,
  },
]
`
