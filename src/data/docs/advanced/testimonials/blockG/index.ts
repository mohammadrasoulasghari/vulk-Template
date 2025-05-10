export const testimonialsBlockGProps = {
  props: [
    {
      name: 'slides',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده نمونه ساختار داده، به تب نمونه مراجعه کنید.'],
    },
  ],
  slots: [],
}

export const testimonialsBlockG = `
<script setup lang="ts">
import { workoutTestimonials } from '/@src/data/pages/workout'
</script>

<template>
  <TestimonialsCarouselColor :slides="workoutTestimonials" />
</template>
`

export const testimonialsBlockGSample = `
export const workoutTestimonials = [
  {
    id: 0,
    name: 'گرگ نورتون',
    picture: '/assets/demo/img/bg/greg-avatar.png',
    cover: '/assets/demo/img/bg/greg-cover-night.png',
    quote: 'این اپ زندگی مرا تغییر داد',
    subquote: 'گرگ با استفاده روزانه از اپلیکیشن ما 16 کیلوگرم وزن کم کرد.',
  },
  {
    id: 1,
    name: 'جین اسمیث',
    picture: '/assets/demo/img/bg/jane-avatar.png',
    cover: '/assets/demo/img/bg/jane-cover-teal.png',
    quote: 'الان حس بهتری دارم',
    subquote: 'جین با استفاده روزانه از اپلیکیشن ما ۵ کیلوگرم وزن کم کرد.',
  },
  {
    id: 2,
    name: 'اندرس گبزا',
    picture: '/assets/demo/img/bg/andres-avatar.png',
    cover: '/assets/demo/img/bg/andres-cover-yellow.png',
    quote: 'لایف استایل جدیدم رو دوست دارم',
    subquote: 'جین با استفاده روزانه از اپلیکیشن ما ۲ کیلوگرم وزن کم کرد.',
  },
  {
    id: 3,
    name: 'یپکپ میبا',
    picture: '/assets/demo/img/bg/yuko-avatar.png',
    cover: '/assets/demo/img/bg/yuko-cover-orange.png',
    quote: 'استفاده از این سرویس لذت بخشه',
    subquote: 'جین با استفاده روزانه از اپلیکیشن ما ۱ کیلوگرم وزن کم کرد.',
  },
]
`
