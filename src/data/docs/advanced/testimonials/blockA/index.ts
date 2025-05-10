export const testimonialsBlockAProps = {
  props: [
    {
      name: 'testimonials',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'blobs',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const testimonialsBlockA = `
<script setup lang="ts">
import { testimonials2 } from '/@src/data/blocks/advanced/testimonials'
</script>

<template>
  <TestimonialsGrid :testimonials="testimonials2" blobs />
</template>
`

export const testimonialsBlockASample = `
export const testimonials2 = [
  {
    id: 0,
    customer: {
      name: 'مایک ویلیامز',
      photo: '/assets/demo/img/avatars/1.jpg',
      position: 'مؤسس @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'نرم افزار وولک به طور قابل توجهی قوی است و تحلیلگران آنها به ما کمک کرده اند تا سودآوری خود را به حداکثر برسانیم و واقعاً ارزش افزایشی تبلیغات وب خود را درک کنیم.',
  },
  {
    id: 1,
    customer: {
      name: 'تارا رید',
      photo: '/assets/demo/img/avatars/2.jpg',
      position: 'مدیر مالی @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'نه تنها معیارها و عملکرد ما بالاتر و فراتر از انتظارات است، بلکه من واقعاً تحت تأثیر روشی که آنها کسب و کار ما را مدیریت می‌کنند، شده ام.',
  },
  {
    id: 2,
    customer: {
      name: 'نلی اولسن',
      photo: '/assets/demo/img/avatars/21.jpg',
      position: 'مؤسس @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'وولک قطعا مدیریت تبلیغات اینترنتی ما را بهتر کرده است. با ترکیب راحتی مدیریت کلمات کلیدی و پیشنهادات، همراه با توانایی.',
  },
  {
    id: 3,
    customer: {
      name: 'آدریان فلکس',
      photo: '/assets/demo/img/avatars/19.jpg',
      position: 'مؤسس @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'آوردن وولک یک دارایی فوق العاده برای تجارت وب ما بوده است. سرعت فروش NatureWise به طور قابل توجهی افزایش یافته است و ما هیجان زده هستیم.',
  },
  {
    id: 4,
    customer: {
      name: 'بری ویلکز',
      photo: '/assets/demo/img/avatars/24.jpg',
      position: 'مدیر عامل @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      "در عرض سه ماه از شروع کار با وولک، ما بهترین ماه خود را از نظر سود و فروش داشتیم. ما قطعاً ابزارها را تغییر نمی‌دهیم زیرا این معامله واقعی است!",
  },
  {
    id: 5,
    customer: {
      name: 'اما اسپنسر',
      photo: '/assets/demo/img/avatars/17.jpg',
      position: 'همکار بازاریابی @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'نه تنها معیارها و عملکرد ما بالاتر و فراتر از انتظارات است، بلکه من واقعاً تحت تأثیر روشی که آنها کسب و کار ما را مدیریت می‌کنند، شده ام.',
  },
  {
    id: 6,
    customer: {
      name: 'آلن اسمیت',
      photo: '/assets/demo/img/avatars/23.jpg',
      position: 'مدیریت @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      "هنگامی که الگوریتم را در عمل مشاهده کردید، متوجه خواهید شد که وولک و فناوری آنها واقعاً چقدر عالی هستند! من نمی‌توانم صبر کنم تا دوباره روی پروژه ام کار کنم!",
  },
  {
    id: 7,
    customer: {
      name: 'لانا هنریکس',
      photo: '/assets/demo/img/avatars/14.jpg',
      position: 'مؤسس @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'وولک قطعا مدیریت تبلیغات اینترنتی ما را بهتر کرده است. با ترکیب راحتی مدیریت کلمات کلیدی و پیشنهادات، همراه با توانایی.',
  },
  {
    id: 8,
    customer: {
      name: 'هلن واتس',
      photo: '/assets/demo/img/avatars/12.jpg',
      position: 'مؤسس @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'وولک با دیدگاه بسیار روشنی در مورد چگونگی هدایت رشد برند در وب، سیستم‌های هوش مصنوعی قدرتمند و تیم خدمات مدیریت شده قوی وارد بازار شد.',
  },
]
`
