export const testimonialsBlockBProps = {
  props: [
    {
      name: 'testimonials',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['number'],
    },
    {
      name: 'squared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const testimonialsBlockB = `
<script setup lang="ts">
import { boxedTestimonials2 } from '/@src/data/blocks/testimonials'
</script>

<template>
  <TestimonialBlockB :testimonials="boxedTestimonials2" squared />
</template>
`

export const testimonialsBlockBSample = `
export const baseTestimonials = [
  {
    content:
      'این یک شبکه واقعا جالب است. مثلاً زمانی با ریچارد دعوا کردیم و فکر می‌کنم آنها برخی از داده‌های من را حذف کردند، اما سپس آن‌ها را بازگرداندند.',
    avatar: '/assets/demo/img/avatars/25.jpg',
    name: 'هنری استاترمن',
    position: 'مدیر فروش',
  },
  {
    content:
      'این یک شبکه واقعا جالب است. مثلاً زمانی با ریچارد دعوا کردیم و فکر می‌کنم آنها برخی از داده‌های من را حذف کردند، اما سپس آن‌ها را بازگرداندند.',
    avatar: '/assets/demo/img/avatars/19.jpg',
    name: 'جوی باگارا',
    position: 'مدیر پروژه',
  },
  {
    content:
      'این یک شبکه واقعا جالب است. مثلاً زمانی با ریچارد دعوا کردیم و فکر می‌کنم آنها برخی از داده‌های من را حذف کردند، اما سپس آن‌ها را بازگرداندند.',
    avatar: '/assets/demo/img/avatars/21.jpg',
    name: 'لیندا استینسون',
    position: 'کارگردان هنری',
  },
  {
    content:
      'این یک شبکه واقعا جالب است. مثلاً زمانی با ریچارد دعوا کردیم و فکر می‌کنم آنها برخی از داده‌های من را حذف کردند، اما سپس آن‌ها را بازگرداندند.',
    avatar: '/assets/demo/img/avatars/17.jpg',
    name: 'آنیکا گلر',
    position: 'تحلیلگر کسب و کار',
  },
  {
    content:
      'این یک شبکه واقعا جالب است. مثلاً زمانی با ریچارد دعوا کردیم و فکر می‌کنم آنها برخی از داده‌های من را حذف کردند، اما سپس آن‌ها را بازگرداندند.',
    avatar: '/assets/demo/img/avatars/35.jpg',
    name: 'راس مارتین',
    position: 'مدیر تولید',
  },
  {
    content:
      'این یک شبکه واقعا جالب است. مثلاً زمانی با ریچارد دعوا کردیم و فکر می‌کنم آنها برخی از داده‌های من را حذف کردند، اما سپس آن‌ها را بازگرداندند.',
    avatar: '/assets/demo/img/avatars/30.jpg',
    name: 'میراندا والاس',
    position: 'طراح UX',
  },
  {
    content:
      'این یک شبکه واقعا جالب است. مثلاً زمانی با ریچارد دعوا کردیم و فکر می‌کنم آنها برخی از داده‌های من را حذف کردند، اما سپس آن‌ها را بازگرداندند.',
    avatar: '/assets/demo/img/avatars/42.jpg',
    name: 'آنا کلچنسکی',
    position: 'مدیر پروژه',
  },
  {
    content:
      'این یک شبکه واقعا جالب است. مثلاً زمانی با ریچارد دعوا کردیم و فکر می‌کنم آنها برخی از داده‌های من را حذف کردند، اما سپس آن‌ها را بازگرداندند.',
    avatar: '/assets/demo/img/avatars/43.jpg',
    name: 'طاها المالکی',
    position: 'توسعه کسب و کار',
  },
]
`
