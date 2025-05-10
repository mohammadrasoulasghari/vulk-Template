export const contactBlockDProps = {
  props: [
    {
      name: 'infos',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['2', '3', '4'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'polkaDots',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const contactBlockD = `
<script setup lang="ts">
import { contactInfo } from '/@src/data/pages/contact'
</script>

<template>
  <ContactInfo :infos="contactInfo" />
</template>
`

export const contactBlockDSample = `
export const contactInfo = [
  {
    icon: 'ph:envelope-duotone',
    title: 'ایمیل',
    info: 'contact@vulk.io',
    text: 'لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس.',
    color: 'primary',
  },
  {
    icon: 'ph:phone-duotone',
    title: 'شماره تماس',
    info: '+1 44 598-5598',
    text: 'لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس.',
    color: 'success',
  },
  {
    icon: 'ph:map-pin-duotone',
    title: 'موقعیت',
    info: 'کانادا خیابان بیکر پلاک ۲۸',
    text: 'لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس.',
    color: 'yellow',
  },
  {
    icon: 'ph:chat-circle-text-duotone',
    title: 'چت زنده',
    info: 'https://support.vulk.io',
    text: 'لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس.',
    color: 'orange',
  },
]
`
