export const teamBlockAProps = {
  props: [
    {
      name: 'items',
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
      values: ['3', '4', '6'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '32',
      values: ['number'],
    },
    {
      name: 'grayscale',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'scale',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'plain',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'curved',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const teamBlockA = `
<script setup lang="ts">
import { boxTeam } from '/@src/data/blocks/team'
</script>

<template>
  <TeamBlockA :items="boxTeam" :columns="4" :limit="6" scale />
</template>
`

export const teamBlockASample = `
export const boxTeam = [
  {
    image: '/assets/demo/img/people/2.jpg',
    name: 'دانیل آبیکزر',
    position: 'سئو',
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
    image: '/assets/demo/img/people/13.jpg',
    name: 'باسیل اولمبه',
    position: 'مدیر کل',
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
    image: '/assets/demo/img/people/3.jpg',
    name: 'ایرینا اسمیرکوا',
    position: 'مدیر فروش',
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
        name: 'فیسبوک',
        icon: 'feather:facebook',
        url: 'https://facebook.com',
      },
    ],
  },
  {
    image: '/assets/demo/img/people/6.jpg',
    name: 'آیمریک بولارد',
    position: 'رهبر فنی',
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
    image: '/assets/demo/img/people/7.jpg',
    name: 'مت هنریکز',
    position: 'طراح ارشد UX',
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
    image: '/assets/demo/img/people/8.jpg',
    name: 'کیم لی سونگ',
    position: 'معمار نرم افزار',
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
    image: '/assets/demo/img/people/1.jpg',
    name: 'جیانی کولارو',
    position: 'توسعه دهنده فول استک',
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
    image: '/assets/demo/img/people/12.jpg',
    name: 'حکیم البا',
    position: 'توسعه دهنده فول استک',
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
