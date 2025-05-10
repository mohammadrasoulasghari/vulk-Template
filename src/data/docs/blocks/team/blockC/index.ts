export const teamBlockCProps = {
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
      values: ['3', '4'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '32',
      values: ['number'],
    },
    {
      name: 'bubbles',
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
  ],
  slots: [],
}

export const teamBlockC = `
<script setup lang="ts">
import { longTeam2 } from '/@src/data/blocks/team'
</script>

<template>
  <TeamBlockC :items="longTeam2" squared bubbles />
</template>
`

export const teamBlockCSample = `
export const longTeam2 = [
  {
    image: '/assets/demo/img/people/15b.jpg',
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
    image: '/assets/demo/img/people/11b.jpg',
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
    image: '/assets/demo/img/people/3b.jpg',
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
    image: '/assets/demo/img/people/12b.jpg',
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
