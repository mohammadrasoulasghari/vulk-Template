export const testimonialsBlockHProps = {
  props: [
    {
      name: 'slides',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
  ],
  slots: [],
}

export const testimonialsBlockH = `
<script setup lang="ts">
import { testimonials } from '/@src/data/pages/jobs'
</script>

<template>
  <TestimonialsCarouselSingle :slides="testimonials" />
</template>
`

export const testimonialsBlockHSample = `
export const testimonials = [
  {
    logo: '/assets/brands/vonmo.svg',
    text: 'لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه: ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای متفاوت از فیلسوفان صحبت کنند؟',
    sales: 90,
    conversions: 45,
    testifier: {
      name: 'دنی استوکس',
      picture: '/assets/demo/img/avatars/45.jpg',
      role: 'مؤسس @Vonmo',
    },
  },
  {
    logo: '/assets/brands/infinite.svg',
    text: 'لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه: ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای متفاوت از فیلسوفان صحبت کنند؟',
    sales: 75,
    conversions: 52,
    testifier: {
      name: 'بلا ولید',
      picture: '/assets/demo/img/avatars/30.jpg',
      role: 'مؤسس @Infinite',
    },
  },
  {
    logo: '/assets/brands/tribe.svg',
    text: 'لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه: ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای متفاوت از فیلسوفان صحبت کنند؟',
    sales: 84,
    conversions: 65,
    testifier: {
      name: 'جوانا میلر',
      picture: '/assets/demo/img/avatars/42.jpg',
      role: 'مؤسس @Tribe',
    },
  },
]
`
