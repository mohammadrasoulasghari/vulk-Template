export const testimonialsBlockEProps = {
  props: [
    {
      name: 'trainees',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'مربیان',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
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

export const testimonialsBlockE = `
<script setup lang="ts">
import { mentorTestimonials } from '/@src/data/pages/mentors'
</script>

<template>
  <TestimonialsTabbed
    :trainees="mentorTestimonials.trainees"
    :mentors="mentorTestimonials.mentors"
  />
</template>
`

export const testimonialsBlockESample = `
export const mentorTestimonials = {
  trainees: [
    {
      title:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      member: {
        name: 'عثمان عابدی',
        role: 'صاحب فروشگاه',
        picture: '/assets/demo/img/avatars/51.jpg',
        logo: '/assets/brands/asuna.svg',
      },
    },
    {
      title:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      member: {
        name: 'دنی بولزچاک',
        role: 'مالک استارت آپ',
        picture: '/assets/demo/img/avatars/55.jpg',
        logo: '/assets/brands/vonmo.svg',
      },
    },
    {
      title:
        'من بسیار شگفت زده شدم از اینکه دیدم تمام معیارهای من تنها پس از یک ماه استفاده از مربیان وولک افزایش می‌یابد. عجیب!',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      member: {
        name: 'کریستینا چو',
        role: 'صاحب کسب و کار',
        picture: '/assets/demo/img/avatars/29.jpg',
        logo: '/assets/brands/bobcot.svg',
      },
    },
    {
      title:
        'تجزیه و تحلیل من پس از چهار جلسه با هنری میلر، یک متخصص بازاریابی که در اینجا ملاقات کردم، شروع به بیهودگی کرد!',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      member: {
        name: 'هلنا فرنالتز',
        role: 'صاحب مغازه',
        picture: '/assets/demo/img/avatars/21.jpg',
        logo: '/assets/brands/tetra.svg',
      },
    },
  ],
  mentors: [
    {
      title:
        'من هر روز از مشارکت خود با مربیان وولک لذت می برم. من دوست دارم با افراد جدید ملاقات کنم و درباره فرصت‌های جدید صحبت کنم',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      member: {
        name: 'داریل کپلر',
        role: 'متخصص بازاریابی',
        picture: '/assets/demo/img/people/7a.jpg',
        logo: '/assets/brands/kromo.svg',
      },
    },
    {
      title:
        'به‌عنوان یک صاحب کسب‌وکار، من کاملاً متوجه مشکلاتی هستم که ممکن است هنگام راه‌اندازی یک محصول یا یک سرویس جدید با آن مواجه شوید. به همین دلیل یان اینجاست',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      member: {
        name: 'آرمین آزادیان',
        role: 'سئو',
        picture: '/assets/demo/img/avatars/43.jpg',
        logo: '/assets/brands/livetalk.svg',
      },
    },
    {
      title:
        "من قبلاً سعی می کنم در کارهای روزمره به مردم کمک کنم. بیایید بگوییم که مربیان وولک فقط این خواسته من را تقویت کردند",
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      member: {
        name: 'جردن دنیلز',
        role: 'توسعه کسب و کار',
        picture: '/assets/demo/img/avatars/57.jpg',
        logo: '/assets/brands/tribe.svg',
      },
    },
    {
      title:
        'من همیشه علاقه مند به کمک به افراد دیگر در کسب و کارشان هستم. ثابت شده است که حتی برای شرکت خودم مفید است',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      member: {
        name: 'بیانکا سورلی',
        role: 'رئیس بازاریابی',
        picture: '/assets/demo/img/avatars/17.jpg',
        logo: '/assets/brands/grubspot.svg',
      },
    },
  ],
}
`
