export const testimonialsBlockDProps = {
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

export const testimonialsBlockD = `
<script setup lang="ts">
import { socialTestimonials } from '/@src/data/blocks/testimonials'
</script>

<template>
  <TestimonialBlockD :testimonials="socialTestimonials" squared />
</template>
`

export const testimonialsBlockDSample = `
export const socialTestimonials = [
  {
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    avatar: '/assets/demo/img/avatars/32.jpg',
    name: 'ینلا پالوپاکیاس',
    position: 'معمار راه حل',
    logo: '/assets/brands/infinite.svg',
    socialLinks: [
      {
        name: 'لینکدین',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'ایکس',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'گیت هاب',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    avatar: '/assets/demo/img/avatars/57.jpg',
    name: "کنث اوهارا",
    position: 'مدیر پروژه',
    logo: '/assets/brands/proactive.svg',
    socialLinks: [
      {
        name: 'لینکدین',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'ایکس',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'گیت هاب',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    avatar: '/assets/demo/img/avatars/15.jpg',
    name: 'ملیندا کالاوی',
    position: 'پشتیبانی مشتری',
    logo: '/assets/brands/tribe.svg',
    socialLinks: [
      {
        name: 'لینکدین',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'ایکس',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'گیت هاب',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
  {
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    avatar: '/assets/demo/img/avatars/33.jpg',
    name: 'ادی فینچ',
    position: 'تحلیلگر کسب و کار',
    logo: '/assets/brands/kromo.svg',
    socialLinks: [
      {
        name: 'لینکدین',
        icon: 'feather:linkedin',
        url: 'https://linkedin.com',
      },
      {
        name: 'ایکس',
        icon: 'feather:twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'گیت هاب',
        icon: 'feather:github',
        url: 'https://github.com',
      },
    ],
  },
]
`
