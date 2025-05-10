export const pricingBlockFProps = {
  props: [
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'price',
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

export const pricingBlockF = `
<template>
  <PricingSoloCentered
    :features="[
      'بی نهایت پروژه',
      'اپ موبایل و دسکتاپ',
      'بی نهایت تسک',
      'پشتیبانی از ایمیل',
      'بی نهایت رکورد زمان',
    ]"
    :price="0"
    link-label="همین حالا شروع کنید"
    link="/"
  />
</template>
`

export const pricingBlockFSample = `
export const pricingFeatures = [
  'بی نهایت پروژه',
  'اپ موبایل و دسکتاپ',
  'بی نهایت تسک',
  'پشتیبانی از ایمیل',
  'بی نهایت رکورد زمان',
]
`
