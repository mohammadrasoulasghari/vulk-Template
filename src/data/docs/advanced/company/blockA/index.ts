export const companyBlockAProps = {
  props: [
    {
      name: 'numbers',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
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
      name: 'content',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const companyBlockA = `
<script setup lang="ts">
import { stats } from '/@src/data/pages/stats'
</script>

<template>
  <NumbersSection
    inverted
    subtitle="تکنولوژی هوش مصنوعی"
    title="مقیاس داده‌های ما موفقیت شما را پشتیبانی می‌کند"
    content="Our immense data scale feeds our machine learning and
            algorithms, so you can rest assured that every decision our AI
            makes is a smart one."
    :numbers="stats"
    animated
  />
</template>
`

export const companyBlockASample = `
export const stats = [
  {
    id: 0,
    prefix: '',
    suffix: 'ترابایت',
    value: 40,
    text: 'از داده های سالانه پردازش شده است',
  },
  {
    id: 1,
    prefix: '$',
    suffix: 'B',
    value: 7,
    text: 'فروش آمازون و والمارت سالانه بهینه می‌شود',
  },
  {
    id: 2,
    prefix: '',
    suffix: 'M',
    value: 750,
    text: 'Monthly bid changes executed',
  },
  {
    id: 3,
    prefix: '$',
    suffix: 'M',
    value: 450,
    text: 'هزینه تبلیغات مدیریت شده سالانه در کمپین های خودکار',
  },
]
`
