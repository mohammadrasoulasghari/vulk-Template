export const pricingBlockEProps = {
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

export const pricingBlockE = `
<template>
  <PricingSolo
    title="قیمت گذاری موثر"
    subtitle="همه ویژگی‌های لارم برای ران کردن پروژه"
    :features="[
      'بی نهایت پروژه',
      'اپ موبایل و دسکتاپ',
      'بی نهایت تسک',
      'پشتیبانی از ایمیل',
      'بی نهایت رکورد زمان',
      'مدیریت کلاینت',
      'ملزومات تسک',
      'نرک بودجه',
      'تسک‌های بازگشتی',
      'گزارشات پیشرفته',
    ]"
    :monthly-price="7"
    :yearly-price="79"
    link-label="شروع دسترسی آزمایشی"
    link="/"
  />
</template>
`

export const pricingBlockESample = `
export const pricingFeatures = [
  'بی نهایت پروژه',
  'اپ موبایل و دسکتاپ',
  'بی نهایت تسک',
  'پشتیبانی از ایمیل',
  'بی نهایت رکورد زمان',
  'مدیریت کلاینت',
  'ملزومات تسک',
  'نرک بودجه',
  'تسک‌های بازگشتی',
  'گزارشات پیشرفته',
]
`
