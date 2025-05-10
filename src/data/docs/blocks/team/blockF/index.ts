export const teamBlockFProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '32',
      values: ['number'],
    },
    {
      name: 'shapes',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'squared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'animated',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const teamBlockF = `
<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
</script>

<template>
  <TeamBlockF :items="cardTeam" squared animated />
</template>
`

export const teamBlockFSample = `
export const cardTeam = [
  {
    image: '/assets/demo/img/people/2a.jpg',
    name: 'دانیل آبیکزر',
    position: 'سئو',
    bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
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
    image: '/assets/demo/img/people/13a.jpg',
    name: 'باسیل اولمبه',
    position: 'مدیر کل',
    bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
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
    image: '/assets/demo/img/people/3a.jpg',
    name: 'ایرینا اسمیرکوا',
    position: 'مدیر فروش',
    bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
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
    image: '/assets/demo/img/people/6a.jpg',
    name: 'آیمریک بولارد',
    position: 'رهبر فنی',
    bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
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
    image: '/assets/demo/img/people/15a.jpg',
    name: 'رولان فورنیه',
    position: 'مدیر هوش مصنوعی',
    bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
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
    image: '/assets/demo/img/people/11a.jpg',
    name: 'ادوین میلر',
    position: 'دانشمند داده',
    bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
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
    image: '/assets/demo/img/people/8a.jpg',
    name: 'کیم لی سونگ',
    position: 'معمار نرم افزار',
    bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
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
    image: '/assets/demo/img/people/12a.jpg',
    name: 'حکیم البا',
    position: 'توسعه دهنده فول استک',
    bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
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
